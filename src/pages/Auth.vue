<template>
  <div style="height: 100%">
    <div class="top-menu">
      <v-icon class="ml-8">
        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.146 14.1667C13.146 14.1667 11.0248 10.8013 12.7231 7.5C14.6208 3.8112 13.0693 0.833333 13.0693
              0.833333H1.33711C1.33711 0.833333 2.8859 3.81067 0.989707 7.49897C-0.707909 10.801 1.42365 14.1667 1.42365
              14.1667H13.146Z
            "
            fill="white"
          />
        </svg>
      </v-icon>
      <span style="font-weight: 700; font-size: 18px; color: white">SecureAuth</span>
    </div>
    <div class="bottom-auth">
      <div class="menu-auth px-4">
        <div class="pt-6" style="display:flex; justify-content: center">
          <span class="auth-text">Вход в систему</span>
        </div>
        <div class="flex-center-column pt-6" style="align-items: start">
          <span class="default-text pt-4">Логин или Email</span>
          <v-text-field
            class="custom-text-field"
            style="width: 448px; border-radius: 10px; height: 56px"
            placeholder="Введите свой логин или почту"
            variant="solo"
          />
        </div>
        <div class="pt-14">
          <span class="default-text pt-4">Пароль</span>
          <v-text-field
            class="custom-text-field"
            style="width: 448px; border-radius: 10px; height: 56px"
            placeholder="Введите  пароль"
            variant="solo"
          />
        </div>
        <div class="pt-14">
          <v-btn
            color="#126EED"
            style="width: 480px; border-radius: 10px"
            @click="jump"
          >
            Вход
          </v-btn>
        </div>
        <span
          class="mt-14"
          style="
            color: #91A8C9;
            cursor: pointer;
            user-select: none;
            width: fit-content;
          "
        >
          Забыли пароль?
        </span>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'Auth',
  components: {},
  methods: {
    jump() {
      window.location.href = '/general'
    },
  }
}
</script>

<style>
.top-menu {
  display: flex;
  align-items: center;
  height: 48px;
  border-bottom: 1px solid white;
}

.bottom-auth {
  display: flex;
  width: 100%;
  justify-content: center;
  height: calc(100% - 48px);
}

.menu-auth {
  display: flex;
  flex-direction: column;
  width: 960px;
  height: 713px;
  padding-top: 20px;
}

.auth-text {
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  color: white;
}

.flex-center-row {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

.flex-center-column {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.default-text {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.custom-text-field .v-input--density-default .v-field--variant-outlined, .v-input--density-default .v-field--single-line, .v-input--density-default .v-field--no-label {
  background: #1A2433;
  border-radius: 15px;
  border: solid 1px #334766;
  color: white;
  font-weight: 400;
  font-size: 16px;
}
</style>