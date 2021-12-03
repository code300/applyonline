<template>
  <div class="Result">
    <img
      v-show="$route.query.success === '1'"
      width="50px"
      :src="deposit_success"
      alt=""
    />
    <div v-show="$route.query.success === '1'" class="message_success">
      系统审核通过
    </div>
    <img
      v-show="!$route.query.success || $route.query.success === '2'"
      width="50px"
      :src="deposit_wrong"
      alt=""
    />
    <div
      v-show="!$route.query.success || $route.query.success === '2'"
      class="message_wrong"
    >
      系统审核未通过
    </div>
    <div class="name">{{ $route.query.clientName }}</div>
    <div class="phone">{{ $route.query.phone }}</div>
    <div v-show="$route.query.success === '1'" class="tips">
      稍后将有审核专员电话回访，请保持电话畅通
    </div>
    <div
      v-show="!$route.query.success || $route.query.success === '2'"
      class="tips"
    >
      请过段时间再尝试申请
    </div>
    <div class="tips">时间：{{ time }}</div>
    <!-- <div class="tips">时间：2021-06-11 10:46:53</div> -->
  </div>
</template>
<script>
// import axios from 'axios'
const deposit_success = require("../assets/deposit_success.png");
const deposit_wrong = require("../assets/deposit_wrong.png");
export default {
  name: "Result",
  components: {},
  data() {
    return {
      deposit_success,
      deposit_wrong,
      time: "",
    };
  },
  mounted() {
    let time = new Date();
    let year = time.getFullYear();
    let month =
      time.getMonth() + 1 > 9
        ? time.getMonth() + 1
        : "0" + (time.getMonth() + 1);
    let day = time.getDate();
    let hour = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    this.time = `${year}-${month}-${day} ${hour}:${m > 9 ? m : "0" + m}:${
      s > 9 ? s : "0" + s
    }`;
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      this.$router.push("/AssetInfo");
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
.Result {
  padding-top: 50px;
}
.message_success {
  font-size: 20px;
  font-weight: 900;
  color: #2bb76e;
}
.message_wrong {
  font-size: 20px;
  font-weight: 900;
  color: #ef3308;
}

.name {
  font-size: 24px;
  /* font-weight: 600; */
  margin: 5px 0;
}
.phone {
  /* font-weight: 900; */
  margin: 5px 0 15px 0;
  font-size: 18px;
}
.tips {
  font-size: 14px;
  color: gray;
  margin: 5px 0;
}
</style>
<style>
/* .van-picker__columns{
  height:220px!important;
} */
.van-picker-column__item {
  line-height: 44px;
}
.van-radio-group {
  display: flex;
}
.van-radio {
  margin-right: 5px;
}
.van-cell--required::before {
  position: absolute;
  left: 0px;
  color: #ee0a24;
  font-size: 14px;
  content: "";
}
.van-field__label {
  position: relative;
}
.van-cell--required .van-field__label::after {
  position: absolute;
  right: 14px;
  color: #ee0a24;
  font-size: 14px;
  content: "*";
}
</style>
