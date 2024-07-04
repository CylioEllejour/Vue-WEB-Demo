<template>
  <div class="container">
    <div class="bg"></div> <!-- 单独的背景层 -->
    <div id="login">
      <h2>登录页面</h2>
      <el-form ref="form" :model="form" label-width="20%">
        <el-form-item label="用户名:">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密  码:">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" round @click="login" class="btn">登录</el-button>
      <span @click="register" class="reg">前往注册</span>
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
    login() {
      if (this.form.username === '') {
        this.$message.error('用户名不能为空');
      } else if (this.form.password === '') {
        this.$message.error('密码不能为空');
      } else {
        this.axios.get('/login', {
          params: {
            name: this.form.username,
            password: this.form.password
          }
        }).then(res => {
          if (res.data.status === 200) {
            this.$router.push({
              path: '/home',
              query: {
                name: this.form.username
              }
            });
          } else {
            this.$alert('用户名或密码错误', '登录失败', {
              confirmButtonText: '确定',
              callback: action => {
                this.form.username = '';
                this.form.password = '';
              }
            });
          }
        }).catch(err => {
          console.log("登录失败" + err);
        });
      }
    },
    register() {
      this.$router.push('/register');
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
  background: url('../assets/img/《すきなことだけでいいです\ 》.jpg') no-repeat center center;
  background-size: cover;
   /* 背景模糊 */
  filter: blur(10px);
  z-index: -1; /* 确保背景在最底层 */
}

#login {
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

#login h2 {
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

.reg {
  margin-top: 20px;
  cursor: pointer;
  color: #409eff;
  text-decoration: underline;
}

.reg:hover {
  color: #66b1ff;
}
</style>
