<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import { ref } from 'vue'


// 控制注册与登录表单的显示， 默认显示注册
const isRegister = ref(false)

</script>

<template>
    <div class="background">
        <el-container>
            <el-main>
                <el-card class="login-wrapper">
                    <template #header>
                        <div class="login-header">
                            <el-text class="header-text">
                                登录
                            </el-text>
                        </div>
                    </template>
                    <input v-model="input_username" placeholder="用户名" class="input-item">
                    <input v-model="input_password" placeholder="密码" class="input-item">
                    <div class="button">登录</div>
                    <template #footer>
                        <div class="login-footer">
                            <el-text class="footer-text">
                                没有账号？
                            </el-text>
                            <el-text class="footer-text-light" @click="isRegister = !isRegister">
                                点击注册
                            </el-text>
                        </div>
                    </template>
                </el-card>
            </el-main>
        </el-container>
    </div>
</template>

<style lang="scss" scoped>
@import url(../assets/style/login.scss);
</style>