<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const router = useRouter()
const store = useStore()
//重置文本框
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
const loginFormdata = ref({
  shopName: '',
  shopPsd: ''
})
const ruleFormRef = ref<FormInstance>()
const login = async(formEl: FormInstance | undefined) => {
  //校验失败
  if(!formEl) return
  await formEl.validate((valid, fields) => {
    //校验成功
    if(valid) {
      store.dispatch('login',loginFormdata.value)
    }
  })
  
}
const show_down = ref(true)
//校验规则
const rules = reactive({
  shopName: [
    {required: true, message: '用户名不能为空！', trigger: 'blur'},
    {min: 2, max: 12, message: '长度在 2 到 12 个字符', trigger: 'blur'}
  ],
  shopPsd: [
    {required: true, message: '密码不能为空！', trigger: 'blur'},
    {min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur'}
  ]
})
const changeArm = (flag: number) =>  {
  if( flag===1 ) {
    show_down.value = false
  }
  else {
    show_down.value = true
  }
}
</script>
<template>
  <div class="Container pt-36">
    <div class="mx-auto w-md p-8 rounded-lg Login">
      <div class="somethingFun">
        <div :class="{eyes: true, eyesAfter: !show_down}"></div>
        <div :class="{ armUpRight: true, armUpRightAfter: !show_down}"></div>
        <div :class="{ armUpLeft: true, armUpLeftAfter: !show_down}"></div>
        <div :class="{armDownRight: true, armDownRightAfter: !show_down}"></div>
        <div :class="{armDownLeft: true, armDownLeftAfter: !show_down}"></div>
      </div>
      <div>
        <el-form
          style="max-width: 460px"
          ref="ruleFormRef"
          :model="loginFormdata"
          :rules="rules"
        >
          <el-form-item prop="shopName">
            <el-input v-model.trim="loginFormdata.shopName" placeholder="用户名" :prefix-icon="User"/>
          </el-form-item>
          <el-form-item prop="shopPsd">
            <el-input @focus="changeArm(1)" @blur="changeArm(0)" v-model.trim="loginFormdata.shopPsd" placeholder="密码" :prefix-icon="Unlock" type="password" show-password />
          </el-form-item>
          <div>
            <el-button type="primary" @click="login(ruleFormRef)">登录</el-button>
            <el-button @click="resetForm(ruleFormRef)">重置</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/bg-img.jpg');
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100%;
}
.Login {
  position: relative;
  background-color: rgba(37,152,179, 0.5);
}
.somethingFun {
  position: absolute;
  background: url('@/assets/images/face.png');
  background-size: 140%;
  background-position: -22px 0;
  width: 116px;
  height: 92px;
  top: -82px;
  left: 50%;
  margin-left: -64px;
}
.armUpRight {
  position: absolute;
  background: url('@/assets/images/arm-up-right.png');
  background-size: 110%;
  background-position: 0 30px;
  width: 52px;
  height: 64px;
  bottom: 5px;
  right: 5px;
  opacity: 0;
  background-repeat: no-repeat;
  transform: translateX(47px) scale(.5);
  transform-origin: 0 40px;
  transition: background-position .3s ease-out,
              transform .3s ease-out,
              opacity 0s linear .3s;
}
.armUpRightAfter {
  opacity: 1;
  transform: scale(1);
  background-position: 0 0;
  transition: background-position .3s ease-out,
              transform .3s ease-out;
}
.armUpLeft {
  position: absolute;
  background: url('@/assets/images/arm-up-left.png');
  background-size: 110%;
  width: 52px;
  height: 64px;
  bottom: 4px;
  left: 15px;
  opacity: 0;
  background-position: 0 10px;
  background-repeat: no-repeat;
  transform: translateX(-27px) translateY(7px) scale(.5);
  transform-origin: 0 40px;
  transition: background-position .3s ease-out,
              transform .3s ease-out,
              opacity 0s linear .3s;
}
.armUpLeftAfter {
  opacity: 1;
  left: 0px;
  transform: scale(1);
  background-position: -5px 0px;
  transition: background-position .3s ease-out,
              transform .3s ease-out;
}
.armDownRight {
  position: absolute;
  background: url(@/assets/images/arm-down-right.png);
  background-size: 100%;
  width: 46px;
  height: 59px;
  bottom: -24px;
  right: -19px;
  transition: transform .3s ease-out;
  opacity: 1;
}
.armDownRightAfter {
  opacity: 0;
  transform: translateX(-32px) scale(0) translateY(-8px);
  transition: transform .3s ease-out;
}
.armDownLeft {
  position: absolute;
  background: url(@/assets/images/arm-down-left.png);
  background-size: 100%;
  width: 46px;
  height: 59px;
  bottom: -26px;
  left: -16px;
  transition: transform .3s ease-out;
  opacity: 1;
}
.armDownLeftAfter {
  opacity: 0;
  transform: translateX(32px) scale(0) translateY(-8px);
  transition: transform .3s ease-out;
}
.eyes {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url(@/assets/images/eyes.png);
  background-size: 140%;
  background-position: -22px 0;
  opacity: 0;
  transition: opacity .3s ease-out;
}
.eyesAfter {
  opacity: 1;
}
</style>