<template>
  <div class="container">
    <div class="bg"></div> <!-- 单独的背景层 -->
    <div id="register">
      <h2>注册页面</h2>
      <el-form ref="form" :model="form" label-width="20%">
        <el-form-item label="用户名:">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密  码:">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <!-- 可以添加更多的表单项 -->
      </el-form>
      <el-button type="primary" round @click="register" class="btn">注册</el-button>
      <span @click="login" class="login">已有账号？前往登录</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    };
  },

  methods: {
    register() {
      // 注册逻辑
    },
    login() {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.bg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url('../assets/img/white.jpg') no-repeat center center;
  background-size: cover;
  filter: blur(10px); /* 背景模糊 */
  z-index: -1; /* 确保背景在最底层 */
}

#register {
  height: 300px;
  width: 400px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2); /* 更柔和的阴影 */
  background-color: rgba(255, 255, 255, 0.85); /* 设置背景颜色为半透明 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 精确居中 */
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 20px; /* 圆角边框 */
  transition: all 0.3s ease; /* 平滑过渡效果 */
}

#register h2 {
  margin-bottom: 30px;
  color: #333;
  font-size: 24px;
}

.el-form-item {
  margin-bottom: 20px;
}

.el-button.btn {
  width: 100%;
  margin-top: 20px;
}

.login {
  margin-top: 20px;
  cursor: pointer;
  color: #409eff;
  text-decoration: underline;
}

.login:hover {
  color: #66b1ff;
}
</style>