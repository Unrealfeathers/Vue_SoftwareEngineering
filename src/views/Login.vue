<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import { ref } from 'vue'

// 控制注册与登录表单的显示， 默认显示登录
const isLogin = ref(true)

</script>

<template>
    <div class="background">
        <el-container>
            <el-main>
                <el-card class="login-wrapper" v-if="isLogin">
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
                            <el-link class="footer-text-light" type="info" :underline="false" @click="isLogin = false">
                                点击注册
                            </el-link>
                        </div>
                    </template>
                </el-card>
                <el-card class="login-wrapper" v-if="!isLogin">
                    <template #header>
                        <div class="login-header">
                            <el-text class="header-text">
                                注册
                            </el-text>
                        </div>
                    </template>
                    <input v-model="input_username" placeholder="用户名" class="input-item">
                    <input v-model="input_password" placeholder="密码" class="input-item">
                    <input v-model="input_password" placeholder="重复密码" class="input-item">
                    <div class="button">注册</div>
                    <template #footer>
                        <div class="login-footer">
                            <el-link class="footer-text-light" type="info" :underline="false" @click="isLogin = true">
                                ←返回
                            </el-link>
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