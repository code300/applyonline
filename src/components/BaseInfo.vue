<template>
  <div class="BaseInfo">
    <div class="title">个人基本信息</div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="clientName"
        label-width="50px"
        required
        name="clientName"
        label="姓名"
        placeholder="请输入姓名"
        :rules="[
          { required: true, message: '' },
          { validator: validatorName, message: '姓名只能为汉字' },
        ]"
      />
      <van-field name="sex" required label="性别" label-width="50px">
        <template #input>
          <van-radio-group v-model="sex" direction="horizontal">
            <van-radio name="1">男</van-radio>
            <van-radio name="2">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        v-model="age"
        label-width="50px"
        name="age"
        required
        type="number"
        label="年龄"
        placeholder="请输入年龄"
        :rules="[
          { required: true, message: '' },
          { validator, message: '年龄应大于18岁，小于70岁' },
        ]"
      />
      <van-field
        is-link
        required
        readonly
        @click="show = true"
        v-model="city"
        label-width="50px"
        name="city"
        label="城市"
        placeholder="请输入城市（成都市）"
        :rules="[{ required: true, message: '' }]"
      />
      <van-field
        v-model="phone"
        label-width="83px"
        name="phone"
        required
        type="number"
        label="手机号码"
        placeholder="请输入手机号码"
        :rules="[
          { required: true, message: '' },
          { pattern, message: '请输入正确手机号' },
        ]"
      />
      <!-- <van-field
        v-model="smsCode"
        label-width="80px"
        name="smsCode"
        maxlength="6"
        required
        type="tel"
        label="验证码"
        placeholder="请输入验证码"
        :rules="[{ required: true, message: '' }]"
      >
        <template #button>
          <van-button size="small" type="info" native-type="button" @click="sendMsg">
            发送验证码
          </van-button>
        </template>
      </van-field> -->
      <van-field
        v-model="loanAmount"
        label-width="83px"
        required
        type="number"
        name="loanAmount"
        label="资金需求"
        placeholder="请输入资金需求(元)"
        :rules="[
          { required: true, message: '' },
          { validator: validatorMount, message: '资金应大于5000，小于500万' },
        ]"
      />
      <div style="margin: 26px 16px 16px 16px">
        <van-button round block type="info">下一步</van-button>
      </div>
    </van-form>
    <van-popup v-model="show" position="bottom" :style="{ height: '46%' }">
      <van-area
        @cancel="cancelFn"
        :area-list="areaList"
        @confirm="confirmFn"
        columns-num="2"
        value="510100"
        title="选择所在省市"
      />
    </van-popup>
    <div class="tips">
      <!-- <div>声明：</div> -->
      <div>声明：本平台根据用户提交的信息进行额度审核</div>
      <div>审批通过后，由银行等金融机构放款</div>
      <div>本平台不会涉及到用户隐私和征信查询等，请放心使用。</div>
    </div>
    <div class="footer">
      <div>开发者 成都融信信息服务有限公司</div>
      <div>蜀ICP备2020030967号-3</div>
    </div>
  </div>
</template>
<script>
import { Button, Popup, Area, RadioGroup, Radio, Toast } from "vant";
import axios from "axios";
const areaList = require("../assets/area.json");
export default {
  name: "BaseInfo",
  components: {
    vanButton: Button,
    vanPopup: Popup,
    vanArea: Area,
    vanRadioGroup: RadioGroup,
    vanRadio: Radio,
  },
  data() {
    return {
      clientName: "",
      sex: "1",
      age: "",
      city: "",
      phone: "",
      smsCode: "",
      loanAmount: "",
      show: false,
      areaList: areaList,
      pattern: /^[1][3,4,5,6,7,8，9][0-9]{9}$/,
      // patternName:/^[\u4e00-\u9fa5]+$/ig,
      uid: "",
      sign: "",
      relCity: "",
    };
  },
  mounted() {
    this.getSign();
  },
  methods: {
    validatorName(val) {
      var reg = /^[\u4e00-\u9fa5]+$/gi;
      return reg.test(val);
    },
    validator(val) {
      return val >= 18 && val <= 70;
    },
    validatorMount(val) {
      return val >= 5000 && val <= 5000000;
    },
    onSubmit(values) {
      console.log("submit", values);
      values.city = this.relCity;
      this.$router.push({
        path: "/AssetInfo",
        query: {
          ...this.$route.query,
          ...values,
          sign: this.sign,
        },
      });
    },
    toSelect() {
      this.show = true;
    },
    confirmFn(value) {
      this.show = false;
      let str = "";
      value.forEach((item) => {
        str += item.name + " ";
      });
      this.city = str.slice(0, -1);
      this.relCity = value[1].name;
      console.log(value);
    },
    cancelFn() {
      this.show = false;
    },
    getSign() {
      if (this.uid == "") {
        this.uid = Date.parse(new Date());
      }
      axios
        .get(
          `https://apponline.jinxianghua.com/jxh/getAppSign?code=${this.uid}`
        )
        .then((res) => {
          if (res.data.code === 0) {
            console.log("token", res.data.data);
            this.sign = res.data.data;
          }
        });
    },
    sendMsg() {
      if (this.phone === "") {
        Toast({
          message: "请输入手机号展示",
          position: "top",
        });
        return;
      }
      if (!this.pattern.test(this.phone)) {
        Toast({
          message: "请输入正确手机号",
          position: "top",
        });
        return;
      }
      if (this.uid == "") {
        this.uid = Date.parse(new Date());
      }
      axios
        .get(`https://quota.rongxinvip.com/offline/getAppSign?code=${this.uid}`)
        .then((res) => {
          if (res.data.code === 0) {
            this.sign = res.data.data;
            const instance = axios.create({
              headers: { requestKey: this.sign },
            });
            instance
              .post("https://web.rongxinvip.com/weixin/sms/sendSmsCode", {
                phone: this.phone,
              })
              .then((res) => {
                console.log("postRes", res);
                Toast({
                  message: res.data.msg,
                  position: "top",
                });
              })
              .catch((err) => {
                console.log("postRrr", err);
              });
          }
          console.log("res", res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.BaseInfo {
  text-align: left;
}
.tips {
  /* display: flex; */
  font-size: 12px;
  color: gray;
  padding: 5px 10px;
  margin-top: 110px;
  margin-bottom: 15px;
  text-align: center;
}
.footer {
  font-size: 12px;
  color: gray;
  text-align: center;
  /* position:absolute
  bottom:0px */
}
.title {
  font-size: 18px;
  margin-left: 16px;
  margin-top: 16px;
  font-weight: 900;
}
</style>
<style>
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

.BaseInfo .van-picker-column__item {
  line-height: 44px;
}
.BaseInfo .van-radio-group {
  display: flex;
}
.BaseInfo .van-radio {
  margin-right: 5px;
}
.BaseInfo .van-cell--required::before {
  position: absolute;
  left: 0px;
  color: #ee0a24;
  font-size: 14px;
  content: "";
}
.BaseInfo .van-field__label {
  position: relative;
}
.BaseInfo .van-cell--required .van-field__label::after {
  position: absolute;
  right: 10px;
  color: #ee0a24;
  font-size: 14px;
  content: "*";
}
</style>
