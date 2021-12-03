<template>
  <div>
    <div class="top-type">
      <p class="title1">锦享花</p>
      <p class="title2">有资金需要您就来</p>
      <div class="title3">
        <span>最高</span>
        <span class="title7">500万</span>
        <span>，月息低至3厘3</span>
      </div>
    </div>
    <button class="style-button" type="button" @click="toHome">立即申请</button>
    <p class="title8">在线申请&nbsp;&nbsp;&nbsp;系统审核</p>
    <p class="title5">快速出额度&nbsp;&nbsp;&nbsp;不查征信</p>
    <p class="title9">信用贷：社保，打卡，公积金，保单，税票</p>
    <p class="title6">抵押贷：全款房，车,按揭房，车</p>
    <p class="title6">经营贷：个体户，中小微企业经营6个月以上</p>
    <p class="title6">芝麻信用贷：芝麻分550以上</p>
    <p class="title6">担保贷：不看征信,有固定工作或居住地</p>
    <p class="title4">多元化贷款方式，总有一样产品适合您</p>
  </div>
</template>
npm 
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
        query: { employeeNumber: vm.$route.query.employeeNumber },
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  color: #fff;
  padding: 15px 5px;
  border-radius: 5px;
  background: blue;
  text-align: left;
}
p {
  margin: 0;
}
.title1 {
  font-size: 50px;
  color: #fff;
  font-weight: 500;
  margin-top: 0.5rem;
  text-shadow: 0px 0 8px black;
}
.title2 {
  font-size: 30px;
  color: #fff;
  font-weight: 500;
  margin-top: 12px;
  text-shadow: 0px 0 8px black;
}
.title3 {
  font-size: 25px;
  color: #fff;
  margin-top: 12px;
  font-weight: 500;
  text-shadow: 0px 0 8px black;
}
.title4 {
  font-size: 18px;
  color: #1989fa;
  margin-top: 2rem;
}
.title5 {
  font-size: 22px;
  color: #1989fa;
  margin-top: 9px;
  font-weight: 600;
}
.title9 {
  margin-top: 2rem;
  font-weight: 600;
  font-size: 16px;
  text-align: left;
  letter-spacing: 1px;
  padding-left: 6%;
}
.title6 {
  margin-top: 10px;
  font-weight: 600;
  font-size: 16px;
  text-align: left;
  letter-spacing: 1px;
  padding-left: 6%;
}
.title7 {
  font-size: 40px;
}
.title8 {
  font-size: 22px;
  color: #1989fa;
  margin-top: 2rem;
  font-weight: 600;
}
.top-type {
  background: #1989fa;
  padding: 10px 10px 30px 10px;
  margin: 10px;
  border-radius: 6px;
}
.card .tips {
  font-size: 12px;
}
.card .maintain {
  display: flex;
  justify-content: space-between;
  padding-top: 2px;
}
.card .maintain .number {
  font-size: 20px;
}
.card .maintain .card-btn {
  font-size: 12px;
  color: blue;
  background: #fff;
  padding: 5px 10px;
  border-radius: 13px;
}
.blue {
  font-size: 18px;
  background: #5dcfea;
  color: #fff;
}
.form {
  font-size: 16px;
  border: solid 1px #e4d7d7;
  text-align: left;
  margin: 10px 0;
  padding-left: 10px;
}
.form .input {
  border: none;
}
.banner {
  display: flex;
  justify-content: space-between;
}
.dynamic {
  font-size: 14px;
  text-align: left;
}
.banner .img {
  width: 11rem;
}
.Start {
  position: absolute;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
}
.style-button {
  border: navajowhite;
  background-color: #1989fa;
  color: #fff;
  margin-top: 2rem;
  line-height: 50px;

  font-size: 30px;
  width: 80%;
  border-radius: 10px;
}
</style>
