<template>
  <div class="Home"></div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
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
</style>
