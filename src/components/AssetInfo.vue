<template>
  <div>
    <van-loading v-if="loadFlag" class="loading" size="48px"
      >系统审核中，请等待......</van-loading
    >
    <div v-if="!loadFlag" class="AssetInfo">
      <div class="title">个人资产信息</div>
      <van-form @submit="onSubmit">
        <van-field
          v-model="antPoints"
          label-width="85px"
          required
          type="number"
          name="antPoints"
          label="芝麻信用分"
          placeholder="请输入芝麻信用分"
          :rules="[
            { required: true, message: '' },
            { validator, message: '请输入正确的分数' },
          ]"
        />
        <van-field
          v-model="socialSecurity"
          type="number"
          label-width="40px"
          name="socialSecurity"
          label="社保"
          placeholder="请输入社保购买时间（月）"
          :rules="[
            { validator: validatorMonth, message: '社保不可超过120个月' },
          ]"
        />
        <van-field
          v-model="providentFund"
          type="number"
          label-width="50px"
          name="providentFund"
          label="公积金"
          placeholder="请输入公积金买时间（月）"
          :rules="[
            { validator: validatorMonth, message: '公积金不可超过120个月' },
          ]"
        />
        <van-field
          v-model="insurancePolicy"
          type="number"
          label-width="40px"
          name="insurancePolicy"
          label="保单"
          placeholder="请输入保单缴纳时间（年）"
          :rules="[{ validator: validatorYear, message: '保单不可超过30年' }]"
        />
        <van-field
          v-model="estateValue"
          type="number"
          label-width="40px"
          name="estateValue"
          label="房产"
          placeholder="请输入房产价值（万）"
          :rules="[
            { validator: validatorHouse, message: '房产最高1000万，最低20万' },
          ]"
        />
        <van-field
          v-model="carValue"
          type="number"
          label-width="40px"
          name="carValue"
          label="车辆"
          placeholder="请输入车辆价值（万）"
          :rules="[{ validator: validatorCar, message: '车辆最高100万' }]"
        /><van-field
          v-model="annualIncome"
          type="number"
          label-width="70px"
          name="annualIncome"
          label="个人收入"
          placeholder="请输入月收入"
          :rules="[
            { validator: validatorPerson, message: '个人收入2000-1000000之间' },
          ]"
        />
        <van-field name="salaryPayment" label="收入方式" label-width="70px">
          <template #input>
            <van-radio-group v-model="salaryPayment" direction="horizontal">
              <van-radio name="0">现金</van-radio>
              <van-radio name="1">打卡</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field name="creditHistory" label="征信状况" label-width="70px">
          <template #input>
            <van-radio-group v-model="creditHistory">
              <van-radio name="0">没有逾期</van-radio>
              <van-radio name="1">90天内逾期</van-radio>
              <van-radio name="2">90天以上逾期</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field
          name="creditQuery"
          label="近半年内征信查询次数"
          label-width="70px"
        >
          <template #input>
            <van-radio-group v-model="creditQuery" direction="horizontal">
              <van-radio name="0">6次以内</van-radio>
              <van-radio name="1">6-10次</van-radio>
              <van-radio name="2">10-20次</van-radio>
              <van-radio name="3">20次以上</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <div style="margin: 26px 16px 16px 16px">
          <van-button round block type="info" native-type="submit"
            >提 交</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
import { Button, RadioGroup, Radio, Toast, Loading } from "vant";
import axios from "axios";
import { setTimeout } from "timers";

export default {
  name: "AssetInfo",
  components: {
    vanButton: Button,
    vanRadioGroup: RadioGroup,
    vanRadio: Radio,
    vanLoading: Loading,
  },
  data() {
    return {
      loadFlag: false,
      antPoints: "",
      socialSecurity: "",
      providentFund: "",
      insurancePolicy: "",
      estateValue: "",
      carValue: "",
      annualIncome: "",
      salaryPayment: "0",
      creditHistory: "0",
      creditQuery: "0",
      host: "",
      submitApi: "",
    };
  },
  created() {
    this.host = location.host;
    this.getSubmitApi();
  },
  mounted() {},
  methods: {
    getSubmitApi() {
      // https://apponline.jinxianghua.com/jxh/add  //公司员工提交接口
      // https://apponline.jinxianghua.com/501/add  //501推广提交接口
      // https://apponline.jinxianghua.com/502/add  //502推广提交接口
      switch (this.host) {
        case "spa.jinxianghua.com":
          this.submitApi = "https://apponline.jinxianghua.com/501/add"; //501推广提交接口
          break;
        case "spb.jinxianghua.com":
          this.submitApi = "https://apponline.jinxianghua.com/502/add"; //501推广提交接口
          break;
        case "spd.jinxianghua.com":
          this.submitApi = "https://apponline.jinxianghua.com/offline/add"; //501推广提交接口
          break;
        case "apply.jinxianghua.com":
          this.submitApi = "https://apponline.jinxianghua.com/jxh/add"; //公司员工提交接口
          break;
        default:
          this.submitApi = "https://apponline.jinxianghua.com/501/add"; //501推广提交接口
          break;
      }
    },
    validator(val) {
      return val > 350 && val < 950;
    },
    validatorMonth(val) {
      return val <= 120;
    },
    validatorYear(val) {
      return val <= 30;
    },
    validatorHouse(val) {
      return (val >= 20 && val <= 1000) || val === "";
    },
    validatorCar(val) {
      return (val >= 1 && val < 100) || val === "";
    },
    validatorPerson(val) {
      return (val >= 2000 && val < 1000000) || val === "";
    },
    onSubmit(values) {
      let obj = {
        employeeNumber: 0,
        number: 0,
        /***************************修改1***************************/
        // domain: "apply.jinxianghua.com", //公司和专员订单8003测试员工号
        //domain: "spa.jinxianghua.com",//线上推广A渠道
        //domain: "spb.jinxianghua.com", //线上推广B渠道
        //domain: "spd.jinxianghua.com", //线下合作推广
        domain: this.host,
        ...values,
        ...this.$route.query,
      };
      /***************************修改2***************************/
      //其他订单
      delete obj.number;
      obj.employeeNumber = this.$route.query.numberValue - 0;
      if (obj.employeeNumber == 0) {
        delete obj.employeeNumber;
      }
      //线下合作推广
      // delete obj.employeeNumber;
      // obj.number = this.$route.query.numberValue - 0;
      // if (obj.number == 0) {
      //   delete obj.number;
      // }
      delete obj.numberValue;
      obj.antPoints = obj.antPoints - 0;
      if (obj.estateValue == "") {
        delete obj.estateValue;
      } else {
        obj.realEstate = "1";
      }
      if (obj.carValue == "") {
        delete obj.carValue;
      } else {
        obj.car = "1";
      }
      const formData = new FormData();
      for (let key in obj) {
        formData.append(key, obj[key]);
      }
      const instance = axios.create({
        headers: { requestKey: this.$route.query.sign },
      });
      delete obj.smsCode;
      delete obj.sign;
      console.log("requestKey", this.$route.query.sign);
      console.log("submit", obj);
      /***************************修改3***************************/
      //公司和专员订单:
      instance
        .post(this.submitApi, obj)

        //线上推广A渠道：
        //instance.post("https://apponline.jinxianghua.com/501/add", obj)

        //线上推广B渠道：
        //instance.post("https://apponline.jinxianghua.com/502/add", obj)

        //线下合作推广
        //instance.post("https://apponline.jinxianghua.com/offline/add", obj)
        .then((res) => {
          console.log("res", res);
          if (res.data.code === 0 && res.data.data !== 0) {
            //成功有额度
            this.loadFlag = true;
            setTimeout((res) => {
              this.loadFlag = false;
              console.log("res", res);
              this.$router.push({
                path: "/Result",
                query: {
                  ...this.$route.query,
                  success: "1",
                },
              });
            }, 5000);
          } else if (res.data.code === 0 && res.data.data === 0) {
            //成功无额度
            this.loadFlag = true;
            setTimeout((res) => {
              this.loadFlag = false;
              console.log("res", res);
              this.$router.push({
                path: "/Result",
                query: {
                  ...this.$route.query,
                  success: "2",
                },
              });
            }, 5000);
          } else {
            //失败
            Toast({
              message: res.data.msg,
              position: "center",
            });
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
    toSelect() {
      this.show = true;
    },
    confirmFn(value) {
      this.show = false;
      let str = "";
      value.forEach((item) => {
        str += item.name + "/";
      });
      this.city = str.slice(0, -1);
      console.log(value);
    },
    cancelFn() {
      this.show = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.AssetInfo {
  text-align: left;
  font-size: 15px;
}
.title {
  font-size: 18px;
  margin-left: 16px;
  margin-top: 16px;
  font-weight: 900;
}
</style>
<style>
.loading {
  position: fixed;
  left: 50%;
  /* right:0; */
  top: 40%;
  margin-left: -135px;
  margin-top: -18px;
  /* bottom:0; */
  /* display: flex; */
  /* align-items:center; */
  /* justify-content:center; */
  z-index: 1000;
}
.loading .van-loading__text {
  font-size: 20px;
}
/* .van-picker__columns{
  height:220px!important;
} */
.van-button--info {
  font-size: 16px !important;
  font-weight: 900 !important;
}
.van-cell {
  font-size: 16px;
}
.van-radio {
  margin-bottom: 10px !important;
  margin-top: 10px !important;
}
.AssetInfo .van-picker-column__item {
  line-height: 44px;
}
.AssetInfo .van-radio-group {
  display: block;
}
.AssetInfo .van-radio-group--horizontal {
  display: flex;
}
.AssetInfo .van-radio-group .van-radio {
  margin-bottom: 3px;
}
.AssetInfo .van-radio-group--horizontal .van-radio {
  margin-bottom: 0px;
}
.AssetInfo .van-radio {
  margin-right: 5px;
}
.AssetInfo .van-cell--required::before {
  position: absolute;
  left: 0px;
  color: #ee0a24;
  font-size: 14px;
  content: "";
}
.AssetInfo .van-field__label {
  position: relative;
}
.AssetInfo .van-cell--required .van-field__label::after {
  position: absolute;
  right: -2px;
  color: #ee0a24;
  font-size: 14px;
  content: "*";
}
</style>
