<template>
  <div class="bg">
    <div class="top"></div>
    <div class="box">
      <div class="title">锦 享 花</div>
      <div class="title-small">有资金需求您就来</div>
      <div class="card">
        <p class="text-a">最高可借额度（元）</p>
        <p class="text-number">100,0000</p>
        <p class="text">月息0.3%起（10000元借1天 利息1元起）</p>
        <div class="text-bottom">正规平台&nbsp;&nbsp;&nbsp;&nbsp;灵活借还&nbsp;&nbsp;&nbsp;&nbsp;快速审批&nbsp;&nbsp;&nbsp;&nbsp;不查征信</div>
      </div>
      <div class="text-flex">
        <p>借款期限</p>
        <p>最长可分36期</p>
      </div>
      <div class="text-flex">
        <p>还款规则</p>
        <p>可提前还款，无违约金</p>
      </div>
      <button class="style-button" type="button" @click="toHome">
        立即申请
      </button>
      <div class="card-bottom">
        <p class="text postion-left">信用贷：社保、打卡、公积金、保单、税票</p>
        <p class="text postion-left">抵押贷：全款房、车、按揭房、车</p>
        <p class="text postion-left">经营贷：个体户、中小微企业经营6个月以上</p>
        <p class="text postion-left">芝麻信用贷：芝麻分550以上</p>
        <p class="text postion-left">担保贷：不看征信、有固定工作或居住地</p>
      </div>
      <div class="bottom">多元化贷款方式，总有适合您得产品</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Start",
  data() {
    return {};
  },
  methods: {
    toHome() {
      let vm = this;
      this.$router.push({
        path: "/BaseInfo",
        //公司和专员订单和线上推广订单
        query: { employeeNumber: vm.$route.query.employeeNumber },
        //线下推广订单
        //query: { employeeNumber: vm.$route.query.number },
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 100%;
  margin: 15px 0 0 0;
  padding-top: 5px;
  background-color: white;
}
.style-button {
  border: navajowhite;
  background-color: #ff5b5b;
  color: #fff;
  margin: 10px 0 10px 0;
  line-height: 39px;
  font-size: 18px;
  width: 90%;
  letter-spacing: 2px;
  font-weight: 600;
  border-radius: 20px;
}
.top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 169px;
  background-color: #2a5a9c;
  z-index: 1;
}
.bg {
  height: 100vh;
  background: #f8fafd;
  overflow: auto;
}
.box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 15px;
  bottom: 0;
  z-index: 1;
}
.title {
  color: #fff;
  margin-top: 18px;
  font-size: 42px;
  font-family: "Microsoft YaHei";
}
.title-small {
  color: #fff;
  margin-top: 10px;
  font-size: 21px;
  letter-spacing: 3px;
}
p {
  font-weight: 500;
  font-size: 14px;
  color: #000;
  margin: 0;
}
.text {
  padding: 5px 0;
}
.text-a{
   padding: 5px 0 0 15px;
}
.card-bottom {
  width: 90%;
  margin: 10px 0 0 0;
  padding: 5px 15px;
  background-color: white;
}
.text-bottom {
  font-weight: 600;
  font-size: 13px;
  background-color: #eee;
  letter-spacing: 1px;
  padding: 5px 0;
}
.text-flex {
  display: flex;
  margin: 15px;
  letter-spacing: 1px;
  justify-content: space-between;
}
.bottom {
  font-size: 14px;
  margin: 15px 0 80px 0;
  color: rgb(43, 167, 189);
  padding-bottom: 40px;
  font-weight: 600;
}
.postion-left {
  text-align: left;
}
.text-number {
  font-size: 36px;
  font-weight: 600;
}
</style>
