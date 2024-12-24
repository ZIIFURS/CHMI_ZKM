<template>
  <div class="flex-center-column" style="height: 100%; justify-content: start">
    <div class="flex-center-row" style="justify-content: start; width: 100%; height: 65px; border-bottom: white 1px solid">
      <v-icon class="ml-8">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.333333 13.146C0.333333 13.146 3.69873 11.0248 7 12.7231C10.6888 14.6208 13.6667 13.0693 13.6667 13.0693V1.33711C13.6667 1.33711 10.6893 2.8859 7.00103 0.98971C3.69903 -0.707909 0.333333 1.42365 0.333333 1.42365V13.146Z" fill="white"/>
        </svg>
      </v-icon>
      <span class="ml-4" style="font-size: 18px; font-weight: 700;line-height: 23px;">Control System</span>
      <div class="flex-center-row ml-4" style="width: 958px; justify-content: space-between">
        <v-btn class="text-for-btn" variant="text" @click="openDash">Дашборды</v-btn>
        <v-btn class="text-for-btn" variant="text" @click="openServ">Оборудование</v-btn>
        <v-btn class="text-for-btn" variant="text" @click="openForecast">Прогноз</v-btn>
        <v-btn class="text-for-btn" variant="text" @click="openPrice">Стоимость продукта</v-btn>
        <v-btn class="text-for-btn" variant="text" @click="openEl">Использование электричества</v-btn>
      </div>
      <v-spacer />
      <div>
        <v-btn class="mx-6" size="small" color="#243347" style="border-radius: 12px; width: 40px; height: 40px" @click="openNotify">
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.3281 12.7453C14.8945 11.9984 14.25 9.88516 14.25 7.125C14.25 3.67322 11.4518 0.875 8
                0.875C4.54822 0.875 1.75 3.67322 1.75 7.125C1.75 9.88594 1.10469 11.9984
                0.671094 12.7453C0.445722 13.1318 0.444082 13.6092 0.666796 13.9973C0.889509
                14.3853 1.30261 14.6247 1.75 14.625H4.93828C5.23556 16.0796 6.51529 17.1243 8 17.1243C9.48471
                17.1243 10.7644 16.0796 11.0617 14.625H14.25C14.6972 14.6244 15.1101 14.3849 15.3326 13.9969C15.5551
                13.609 15.5534 13.1317 15.3281 12.7453ZM8 15.875C7.20562 15.8748 6.49761 15.3739 6.23281 14.625H9.76719C9.50239
                15.3739 8.79438 15.8748 8 15.875ZM1.75 13.375C2.35156 12.3406 3 9.94375 3 7.125C3 4.36358 5.23858 2.125
                8 2.125C10.7614 2.125 13 4.36358 13 7.125C13 9.94141 13.6469 12.3383 14.25 13.375H1.75Z
            "
              fill="white"
            />
          </svg>
        </v-btn>
        <v-avatar class="mr-7" color="info">
          <v-icon icon="mdi-account-circle"></v-icon>
        </v-avatar>
      </div>
    </div>
    <div class="flex-start-column mt-5" style="height: fit-content; width: 960px">
      <div class="flex-start-column pa-4" style="height: 126px">
        <div class="flex-start-row" style="width: 100%;">
          <span class="title-page">Админ панель</span>
          <v-spacer />
          <v-btn class="text-for-btn" color="#0D66F2" style="border-radius: 12px; height: 40px" @click="openRep">
            Для руководителей
          </v-btn>
        </div>
        <v-spacer />
        <span class="subtext" style="max-width: 288px">Настройте свою систему управления по своему вкусу</span>
      </div>
      <div class="subtitle-page px-4 pt-4 pb-2">
        Доступ пользователя
      </div>
      <div class="normal-text pt-1 px-4 pb-3">
        Пригласите членов команды в свою организацию и назначьте им роли и разрешения. У пользователей может быть несколько ролей.
      </div>
      <div class="pa-4">
        <v-btn class="text-for-btn mr-4" color="#21304A" style="border-radius: 12px; height: 40px">
          Приглашать участников
        </v-btn>
        <v-btn class="text-for-btn" color="#0D66F2" style="border-radius: 12px; height: 40px">
          Управление ролями
        </v-btn>
      </div>
      <div class="subtitle-page px-4 pt-4 pb-2">
        Настройки оборудования
      </div>
      <div class="normal-text pt-1 px-4 pb-3">
        Подключайте устройства в своей организации и управляйте ими. Вы можете использовать API системы управления для автоматизации управления устройствами.
      </div>
      <div class="flex-start-row px-4 py-2" style="justify-content: space-between">
        <div class="flex-start-column">
          <span class="normal-text">
            Создание оборудования
          </span>
          <span class="subtext">
            Включение или отключение возможности создания пользователями нового оборудования
          </span>
        </div>
        <v-switch color="#0D66F2"  />
      </div>
      <div class="subtitle-page px-4 pt-4 pb-2">
        Настройки уведомлений
      </div>
      <div class="normal-text pt-1 px-4 pb-3">
        Установите пороговые значения оповещений и управляйте тем, как вы получаете уведомления.
      </div>
      <div class="flex-start-row px-4 py-2" style="justify-content: space-between; align-items: center">
        <div class="flex-start-column">
          <span class="normal-text">
            Оповещение об отключении устройства
          </span>
          <span class="subtext">
            Уведомляет о том, что устройство было отключено в течение указанного количества минут
          </span>
        </div>
        <span style="white-space: nowrap">
          30 min
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "adm",
  methods: {
    openDash() {
      window.location.href = '/dash'
    },
    openEl() {
      window.location.href = '/general'
    },
    openServ() {
      window.location.href = '/serv'
    },
    openRep() {
      window.location.href = '/rep'
    },
    openForecast() {
      window.location.href = '/forecast'
    },
    openPrice() {
      window.location.href = '/price'
    },
    openNotify() {
      window.location.href = '/notify'
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || 'Админ панель';
      }
    },
  }
}
</script>

<style>
@import "src/assets/main.css";

</style>