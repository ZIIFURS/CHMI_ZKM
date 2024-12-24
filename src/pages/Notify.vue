<template>
  <div class="flex-start-column pa-10" style="height: 100%">
    <div class="flex-start-row">
      <span class="title-page mr-10" style="max-width: 288px">Предупреждения и уведомления</span>
      <v-btn class="text-for-btn" variant="text" @click="openGeneral">Дашборды</v-btn>
      <v-btn class="text-for-btn" variant="text" @click="openServ">Оборудование</v-btn>
      <v-btn class="text-for-btn" variant="text" @click="openPrice">Стоимость продукта</v-btn>
      <v-btn class="text-for-btn" variant="text" @click="openCrRep">Отчеты</v-btn>
      <v-btn class="text-for-btn" variant="text" @click="openEl">Использование электричества</v-btn>
    </div>
    <div class="flex-start-row pa-3">
      <v-btn class="text-for-btn mr-2" style="border-radius: 12px" color="#3D404A">
        Все (12)
      </v-btn>
      <v-btn class="text-for-btn mr-2" style="border-radius: 12px" color="#3D404A">
        Перегрузка (5)
      </v-btn>
      <v-btn class="text-for-btn mr-2" style="border-radius: 12px" color="#3D404A">
        Неудачи (3)
      </v-btn>
      <v-btn class="text-for-btn mr-2" style="border-radius: 12px" color="#3D404A">
        Обычные (4)
      </v-btn>
    </div>
    <div class="flex-start-row pa-3">
      <div class="flex-center-row" style="background-color: #3D404A; border-radius: 8px; width: 48px; height: 48px">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0.25C4.61522 0.25 0.25 4.61522 0.25 10C0.25 15.3848 4.61522 19.75 10 19.75C15.3848 19.75 19.75 15.3848 19.75 10C19.7443 4.61758 15.3824 0.255684 10 0.25ZM10 18.25C5.44365 18.25 1.75 14.5563 1.75 10C1.75 5.44365 5.44365 1.75 10 1.75C14.5563 1.75 18.25 5.44365 18.25 10C18.2448 14.5542 14.5542 18.2448 10 18.25ZM9.25 10.75V5.5C9.25 5.08579 9.58579 4.75 10 4.75C10.4142 4.75 10.75 5.08579 10.75 5.5V10.75C10.75 11.1642 10.4142 11.5 10 11.5C9.58579 11.5 9.25 11.1642 9.25 10.75ZM11.125 14.125C11.125 14.7463 10.6213 15.25 10 15.25C9.37868 15.25 8.875 14.7463 8.875 14.125C8.875 13.5037 9.37868 13 10 13C10.6213 13 11.125 13.5037 11.125 14.125Z" fill="#FAFAFA"/>
        </svg>
      </div>
      <div class="flex-start-column ml-4">
        <span class="subtitle-page">
          Перегрузка!
        </span>
        <span class="subtext">
          Обнаружана перегрузка
        </span>
      </div>
      <v-spacer />
      <v-btn variant="text" icon="">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2806 14.2194C15.5737 14.5124 15.5737 14.9876 15.2806 15.2806C14.9876 15.5737 14.5124 15.5737 14.2194 15.2806L8 9.06031L1.78062 15.2806C1.48757 15.5737 1.01243 15.5737 0.719375 15.2806C0.426319 14.9876 0.426319 14.5124 0.719375 14.2194L6.93969 8L0.719375 1.78062C0.426319 1.48757 0.426319 1.01243 0.719375 0.719375C1.01243 0.426319 1.48757 0.426319 1.78062 0.719375L8 6.93969L14.2194 0.719375C14.5124 0.426319 14.9876 0.426319 15.2806 0.719375C15.5737 1.01243 15.5737 1.48757 15.2806 1.78062L9.06031 8L15.2806 14.2194Z" fill="#FAFAFA"/>
        </svg>
      </v-btn>
    </div>
    <div class="flex-start-row pa-3">
      <div class="flex-center-row" style="background-color: #3D404A; border-radius: 8px; width: 48px; height: 48px">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0.25C4.61522 0.25 0.25 4.61522 0.25 10C0.25 15.3848 4.61522 19.75 10 19.75C15.3848 19.75 19.75 15.3848 19.75 10C19.7443 4.61758 15.3824 0.255684 10 0.25ZM10 18.25C5.44365 18.25 1.75 14.5563 1.75 10C1.75 5.44365 5.44365 1.75 10 1.75C14.5563 1.75 18.25 5.44365 18.25 10C18.2448 14.5542 14.5542 18.2448 10 18.25ZM9.25 10.75V5.5C9.25 5.08579 9.58579 4.75 10 4.75C10.4142 4.75 10.75 5.08579 10.75 5.5V10.75C10.75 11.1642 10.4142 11.5 10 11.5C9.58579 11.5 9.25 11.1642 9.25 10.75ZM11.125 14.125C11.125 14.7463 10.6213 15.25 10 15.25C9.37868 15.25 8.875 14.7463 8.875 14.125C8.875 13.5037 9.37868 13 10 13C10.6213 13 11.125 13.5037 11.125 14.125Z" fill="#FAFAFA"/>
        </svg>
      </div>
      <div class="flex-start-column ml-4">
        <span class="subtitle-page">
          Перегрузка!
        </span>
        <span class="subtext">
          Обнаружана перегрузка
        </span>
      </div>
      <v-spacer />
      <v-btn variant="text" icon="">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2806 14.2194C15.5737 14.5124 15.5737 14.9876 15.2806 15.2806C14.9876 15.5737 14.5124 15.5737 14.2194 15.2806L8 9.06031L1.78062 15.2806C1.48757 15.5737 1.01243 15.5737 0.719375 15.2806C0.426319 14.9876 0.426319 14.5124 0.719375 14.2194L6.93969 8L0.719375 1.78062C0.426319 1.48757 0.426319 1.01243 0.719375 0.719375C1.01243 0.426319 1.48757 0.426319 1.78062 0.719375L8 6.93969L14.2194 0.719375C14.5124 0.426319 14.9876 0.426319 15.2806 0.719375C15.5737 1.01243 15.5737 1.48757 15.2806 1.78062L9.06031 8L15.2806 14.2194Z" fill="#FAFAFA"/>
        </svg>
      </v-btn>
    </div>
    <div class="flex-start-row pa-3">
      <div class="flex-center-row" style="background-color: #3D404A; border-radius: 8px; width: 48px; height: 48px">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0.25C4.61522 0.25 0.25 4.61522 0.25 10C0.25 15.3848 4.61522 19.75 10 19.75C15.3848 19.75 19.75 15.3848 19.75 10C19.7443 4.61758 15.3824 0.255684 10 0.25ZM10 18.25C5.44365 18.25 1.75 14.5563 1.75 10C1.75 5.44365 5.44365 1.75 10 1.75C14.5563 1.75 18.25 5.44365 18.25 10C18.2448 14.5542 14.5542 18.2448 10 18.25ZM9.25 10.75V5.5C9.25 5.08579 9.58579 4.75 10 4.75C10.4142 4.75 10.75 5.08579 10.75 5.5V10.75C10.75 11.1642 10.4142 11.5 10 11.5C9.58579 11.5 9.25 11.1642 9.25 10.75ZM11.125 14.125C11.125 14.7463 10.6213 15.25 10 15.25C9.37868 15.25 8.875 14.7463 8.875 14.125C8.875 13.5037 9.37868 13 10 13C10.6213 13 11.125 13.5037 11.125 14.125Z" fill="#FAFAFA"/>
        </svg>
      </div>
      <div class="flex-start-column ml-4">
        <span class="subtitle-page">
          Перегрузка!
        </span>
        <span class="subtext">
          Обнаружана перегрузка
        </span>
      </div>
      <v-spacer />
      <v-btn variant="text" icon="">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2806 14.2194C15.5737 14.5124 15.5737 14.9876 15.2806 15.2806C14.9876 15.5737 14.5124 15.5737 14.2194 15.2806L8 9.06031L1.78062 15.2806C1.48757 15.5737 1.01243 15.5737 0.719375 15.2806C0.426319 14.9876 0.426319 14.5124 0.719375 14.2194L6.93969 8L0.719375 1.78062C0.426319 1.48757 0.426319 1.01243 0.719375 0.719375C1.01243 0.426319 1.48757 0.426319 1.78062 0.719375L8 6.93969L14.2194 0.719375C14.5124 0.426319 14.9876 0.426319 15.2806 0.719375C15.5737 1.01243 15.5737 1.48757 15.2806 1.78062L9.06031 8L15.2806 14.2194Z" fill="#FAFAFA"/>
        </svg>
      </v-btn>
    </div>
    <div class="flex-start-row pa-3">
      <div class="flex-center-row" style="background-color: #3D404A; border-radius: 8px; width: 48px; height: 48px">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0.25C4.61522 0.25 0.25 4.61522 0.25 10C0.25 15.3848 4.61522 19.75 10 19.75C15.3848 19.75 19.75 15.3848 19.75 10C19.7443 4.61758 15.3824 0.255684 10 0.25ZM10 18.25C5.44365 18.25 1.75 14.5563 1.75 10C1.75 5.44365 5.44365 1.75 10 1.75C14.5563 1.75 18.25 5.44365 18.25 10C18.2448 14.5542 14.5542 18.2448 10 18.25ZM9.25 10.75V5.5C9.25 5.08579 9.58579 4.75 10 4.75C10.4142 4.75 10.75 5.08579 10.75 5.5V10.75C10.75 11.1642 10.4142 11.5 10 11.5C9.58579 11.5 9.25 11.1642 9.25 10.75ZM11.125 14.125C11.125 14.7463 10.6213 15.25 10 15.25C9.37868 15.25 8.875 14.7463 8.875 14.125C8.875 13.5037 9.37868 13 10 13C10.6213 13 11.125 13.5037 11.125 14.125Z" fill="#FAFAFA"/>
        </svg>
      </div>
      <div class="flex-start-column ml-4">
        <span class="subtitle-page">
          Перегрузка!
        </span>
        <span class="subtext">
          Обнаружана перегрузка
        </span>
      </div>
      <v-spacer />
      <v-btn variant="text" icon="">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2806 14.2194C15.5737 14.5124 15.5737 14.9876 15.2806 15.2806C14.9876 15.5737 14.5124 15.5737 14.2194 15.2806L8 9.06031L1.78062 15.2806C1.48757 15.5737 1.01243 15.5737 0.719375 15.2806C0.426319 14.9876 0.426319 14.5124 0.719375 14.2194L6.93969 8L0.719375 1.78062C0.426319 1.48757 0.426319 1.01243 0.719375 0.719375C1.01243 0.426319 1.48757 0.426319 1.78062 0.719375L8 6.93969L14.2194 0.719375C14.5124 0.426319 14.9876 0.426319 15.2806 0.719375C15.5737 1.01243 15.5737 1.48757 15.2806 1.78062L9.06031 8L15.2806 14.2194Z" fill="#FAFAFA"/>
        </svg>
      </v-btn>
    </div>
    <div class="flex-start-row pa-3">
      <div class="flex-center-row" style="background-color: #3D404A; border-radius: 8px; width: 48px; height: 48px">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0.25C4.61522 0.25 0.25 4.61522 0.25 10C0.25 15.3848 4.61522 19.75 10 19.75C15.3848 19.75 19.75 15.3848 19.75 10C19.7443 4.61758 15.3824 0.255684 10 0.25ZM10 18.25C5.44365 18.25 1.75 14.5563 1.75 10C1.75 5.44365 5.44365 1.75 10 1.75C14.5563 1.75 18.25 5.44365 18.25 10C18.2448 14.5542 14.5542 18.2448 10 18.25ZM9.25 10.75V5.5C9.25 5.08579 9.58579 4.75 10 4.75C10.4142 4.75 10.75 5.08579 10.75 5.5V10.75C10.75 11.1642 10.4142 11.5 10 11.5C9.58579 11.5 9.25 11.1642 9.25 10.75ZM11.125 14.125C11.125 14.7463 10.6213 15.25 10 15.25C9.37868 15.25 8.875 14.7463 8.875 14.125C8.875 13.5037 9.37868 13 10 13C10.6213 13 11.125 13.5037 11.125 14.125Z" fill="#FAFAFA"/>
        </svg>
      </div>
      <div class="flex-start-column ml-4">
        <span class="subtitle-page">
          Перегрузка!
        </span>
        <span class="subtext">
          Обнаружана перегрузка
        </span>
      </div>
      <v-spacer />
      <v-btn variant="text" icon="">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2806 14.2194C15.5737 14.5124 15.5737 14.9876 15.2806 15.2806C14.9876 15.5737 14.5124 15.5737 14.2194 15.2806L8 9.06031L1.78062 15.2806C1.48757 15.5737 1.01243 15.5737 0.719375 15.2806C0.426319 14.9876 0.426319 14.5124 0.719375 14.2194L6.93969 8L0.719375 1.78062C0.426319 1.48757 0.426319 1.01243 0.719375 0.719375C1.01243 0.426319 1.48757 0.426319 1.78062 0.719375L8 6.93969L14.2194 0.719375C14.5124 0.426319 14.9876 0.426319 15.2806 0.719375C15.5737 1.01243 15.5737 1.48757 15.2806 1.78062L9.06031 8L15.2806 14.2194Z" fill="#FAFAFA"/>
        </svg>
      </v-btn>
    </div>
    <div class="flex-start-row pa-3">
      <div class="flex-center-row" style="background-color: #3D404A; border-radius: 8px; width: 48px; height: 48px">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0.25C4.61522 0.25 0.25 4.61522 0.25 10C0.25 15.3848 4.61522 19.75 10 19.75C15.3848 19.75 19.75 15.3848 19.75 10C19.7443 4.61758 15.3824 0.255684 10 0.25ZM10 18.25C5.44365 18.25 1.75 14.5563 1.75 10C1.75 5.44365 5.44365 1.75 10 1.75C14.5563 1.75 18.25 5.44365 18.25 10C18.2448 14.5542 14.5542 18.2448 10 18.25ZM9.25 10.75V5.5C9.25 5.08579 9.58579 4.75 10 4.75C10.4142 4.75 10.75 5.08579 10.75 5.5V10.75C10.75 11.1642 10.4142 11.5 10 11.5C9.58579 11.5 9.25 11.1642 9.25 10.75ZM11.125 14.125C11.125 14.7463 10.6213 15.25 10 15.25C9.37868 15.25 8.875 14.7463 8.875 14.125C8.875 13.5037 9.37868 13 10 13C10.6213 13 11.125 13.5037 11.125 14.125Z" fill="#FAFAFA"/>
        </svg>
      </div>
      <div class="flex-start-column ml-4">
        <span class="subtitle-page">
          Перегрузка!
        </span>
        <span class="subtext">
          Обнаружана перегрузка
        </span>
      </div>
      <v-spacer />
      <v-btn variant="text" icon="">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2806 14.2194C15.5737 14.5124 15.5737 14.9876 15.2806 15.2806C14.9876 15.5737 14.5124 15.5737 14.2194 15.2806L8 9.06031L1.78062 15.2806C1.48757 15.5737 1.01243 15.5737 0.719375 15.2806C0.426319 14.9876 0.426319 14.5124 0.719375 14.2194L6.93969 8L0.719375 1.78062C0.426319 1.48757 0.426319 1.01243 0.719375 0.719375C1.01243 0.426319 1.48757 0.426319 1.78062 0.719375L8 6.93969L14.2194 0.719375C14.5124 0.426319 14.9876 0.426319 15.2806 0.719375C15.5737 1.01243 15.5737 1.48757 15.2806 1.78062L9.06031 8L15.2806 14.2194Z" fill="#FAFAFA"/>
        </svg>
      </v-btn>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Notify',
  methods: {
    openGeneral() {
      window.location.href = '/dash'
    },
    openEl() {
      window.location.href = '/general'
    },
    openServ() {
      window.location.href = '/serv'
    },
    openPrice() {
      window.location.href = '/price'
    },
    openCrRep() {
      window.location.href = '/cr_rep'
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || 'Уведомления'
      }
    },
  }
}
</script>

<style>
@import "src/assets/main.css";
</style>