<script setup lang="ts">
  import type { FormRules } from "naive-ui";

  const submiting = ref(false);

  // -0-0-0-0-0-0--0-0-0---0--00-0-0-0-0-0-0-0-0-0
  // 账号登录处理
  const accountFormRef = ref();
  const accountFields = reactive({
    account: "",
    password: "",
    code: null,
  });
  const accountRules: FormRules = {
    account: [{ required: true, message: "请输入账号", trigger: "blur" }],
    password: [
      { required: true, message: "请输入密码", trigger: "blur" },
      { min: 6, max: 18, message: "密码长度不符合规则", trigger: "blur" },
    ],
  };
  function handleAccountSubmit() {
    if (submiting.value) return;
    accountFormRef.value?.validate(async (errors: any) => {
      if (!errors) {
        submiting.value = true;

        setTimeout(() => (submiting.value = false), 2000);
      }
    });
  }

  // -0-0-0-0-0-0--0-0-0---0--00-0-0-0-0-0-0-0-0-0
  // 短信登录处理
  const messageFormRef = ref();
</script>

<template>
  <section class="h-[calc(100vh-164px)] container mx-auto py-40 space-x-20">
    <div class="w-64 mx-auto">
      <NTabs type="segment">
        <NTabPane
          name="default"
          tab="账号登录"
        >
          <NForm
            ref="accountFormRef"
            :model="accountFields"
            :rules="accountRules"
            label-placement="left"
            class="pt-2"
          >
            <NFormItem path="account">
              <NInput
                v-model:value="accountFields.account"
                placeholder="工号/邮箱"
              ></NInput>
            </NFormItem>
            <NFormItem path="password">
              <NInput
                v-model:value="accountFields.password"
                placeholder="密码"
                type="password"
                show-password-toggle
              ></NInput>
            </NFormItem>
            <NFormItem>
              <div class="flex-grow">
                <NButton
                  type="primary"
                  block
                  round
                  :loading="submiting"
                  @click="handleAccountSubmit"
                >
                  登录
                </NButton>
                <div class="flex-grow flex items-center justify-between mt-2">
                  <NButton quaternary>注册账号</NButton>
                  <NButton quaternary>忘记密码</NButton>
                </div>
              </div>
            </NFormItem>
          </NForm>
        </NTabPane>
        <NTabPane
          name="sms"
          tab="短信登录"
        >
          <NForm
            label-placement="left"
            class="pt-2"
          >
            <NFormItem>
              <NInput placeholder="请输入手机号"></NInput>
            </NFormItem>
            <NFormItem>
              <NInputGroup>
                <NInput placeholder="短信验证码"></NInput>
                <NInputGroupLabel>获取验证码</NInputGroupLabel>
              </NInputGroup>
            </NFormItem>
            <NFormItem>
              <NButton
                type="primary"
                block
                round
                >登录</NButton
              >
            </NFormItem>
          </NForm>
        </NTabPane>
      </NTabs>
    </div>
  </section>
</template>
