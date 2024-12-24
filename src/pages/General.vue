<template>
  <div class="flex-center-column" style="height: 100%">
    <div class="top-menu" style="width: 100%">
      <v-icon class="ml-8">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7 0.333333C7.59393 3.7391 10.2609 6.40607 13.6667 7C10.2609 7.59393 7.59393 10.2609 7 13.6667C6.40607
            10.2609 3.7391 7.59393 0.333333 7C3.7391 6.40607 6.40607 3.7391 7 0.333333Z"
            fill="white"
          />
        </svg>
      </v-icon>
      <span class="ml-4" style="font-size: 18px; font-weight: 700;line-height: 23px;">Energen</span>
      <div class="flex-center-row ml-4" style="width: 958px; justify-content: space-between">
        <v-btn class="text-for-btn" variant="text" @click="openDash">Дашборды</v-btn>
        <v-btn class="text-for-btn" variant="text" @click="openServ">Оборудование</v-btn>
        <v-btn class="text-for-btn" variant="text" @click="openCrRep">Отчеты</v-btn>
        <v-btn class="text-for-btn" variant="text" @click="openAdm">Админ панель</v-btn>
        <v-btn class="text-for-btn" variant="text" @click="openForecast">Прогноз</v-btn>
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
    <div class="bottom-div pt-5">
      <div
        class="flex-center-row pa-4"
        style="
          justify-content: space-between;
          width: 100%;
          height: 72px;
          font-size: 32px;
          font-weight: 700;
          line-height: 40px
        "
      >
        <span>
          Использование электроэнергии
        </span>
        <v-btn class="text-for-btn" style="border-radius: 12px" color="#243347">Добавить данные</v-btn>
      </div>
      <div style="padding: 16px 16px 8px 16px; font-size: 18px; font-weight: 700; line-height: 23px;">
        <span>Фильтры</span>
      </div>
      <div style="padding: 12px 16px; width: 100%; height: 72px">
        <v-text-field class="custom-text-field" placeholder="Поиск" variant="solo">
          <svg class="mr-3" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5306 18.4694L14.8366 13.7762C17.6629 10.383 17.3204 5.36693 14.0591 2.38935C10.7978 -0.588237 5.77134 -0.474001 2.64867 2.64867C-0.474001 5.77134 -0.588237 10.7978 2.38935 14.0591C5.36693 17.3204 10.383 17.6629 13.7762 14.8366L18.4694 19.5306C18.7624 19.8237 19.2376 19.8237 19.5306 19.5306C19.8237 19.2376 19.8237 18.7624 19.5306 18.4694ZM1.75 8.5C1.75 4.77208 4.77208 1.75 8.5 1.75C12.2279 1.75 15.25 4.77208 15.25 8.5C15.25 12.2279 12.2279 15.25 8.5 15.25C4.77379 15.2459 1.75413 12.2262 1.75 8.5Z" fill="#91A8C9"/>
          </svg>
        </v-text-field>
      </div>
      <div class="flex-center-row pa-4" style="justify-content: start;">
        <v-btn class="filter-btn mr-4" variant="text">Все типы оборудования</v-btn>
        <v-btn class="filter-btn mr-4" variant="text">Boiler</v-btn>
        <v-btn class="filter-btn mr-4" variant="text">HVAC</v-btn>
        <v-btn class="filter-btn mr-4" variant="text">Lighting</v-btn>
        <v-btn class="filter-btn mr-4" variant="text">Other</v-btn>
      </div>
      <div class="pa-4">
        <v-btn class="filter-btn mr-4" variant="text">All workshops</v-btn>
        <v-btn class="filter-btn mr-4" variant="text">Assembly</v-btn>
        <v-btn class="filter-btn mr-4" variant="text">CNC</v-btn>
        <v-btn class="filter-btn mr-4" variant="text">Finishing</v-btn>
        <v-btn class="filter-btn mr-4" variant="text">Shipping</v-btn>
        <v-btn class="filter-btn mr-4" variant="text">Other</v-btn>
      </div>
      <div style="padding: 12px 16px; width: 100%; height: 432px">
        <div class="flex-center-column" style="width: 100%; height: 100%; border: 1px solid #334766; border-radius: 12px">
          <div class="columns-table" style="height: 46px; background-color: #1A2433; border-radius: 12px 12px 0 0; color: white">
            <span>
              Дата
            </span>
            <span>
              Расположение
            </span>
            <span>
              Оборудование
            </span>
            <span>
              Кол-во энергии (kWh)
            </span>
          </div>
          <div class="columns-table">
            <span>
              1 Января 2023
            </span>
            <span>
              Assembly
            </span>
            <span>
              Lighting
            </span>
            <span>
              200
            </span>
          </div>
          <div class="columns-table">
            <span>
              2 Января 2023
            </span>
            <span>
              CNC
            </span>
            <span>
              HVAC
            </span>
            <span>
              1500
            </span>
          </div>
          <div class="columns-table">
            <span>
              3 Января 2023
            </span>
            <span>
              Finishing
            </span>
            <span>
              Boiler
            </span>
            <span>
              3000
            </span>
          </div>
          <div class="columns-table">
            <span>
              4 Января 2023
            </span>
            <span>
              Shipping
            </span>
            <span>
              Other
            </span>
            <span>
              500
            </span>
          </div>
          <div class="columns-table" style="border-bottom: none">
            <span>
              5 Января 2023
            </span>
            <span>
              Other
            </span>
            <span>
              Other
            </span>
            <span>
              1000
            </span>
          </div>
        </div>
      </div>
      <div class="flex-center-row pa-4">
        <v-btn
          class="mr-4"
          icon=""
          variant="text"
        >
          <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.64797 12.227C6.86776 12.4468 6.86776 12.8032 6.64797 13.023C6.42818 13.2428 6.07182 13.2428 5.85203 13.023L0.227031 7.39797C0.121407 7.29246 0.0620575 7.14929 0.0620575 7C0.0620575 6.85071 0.121407 6.70754 0.227031 6.60203L5.85203 0.977031C6.07182 0.757239 6.42818 0.757239 6.64797 0.977031C6.86776 1.19682 6.86776 1.55318 6.64797 1.77297L1.42023 7L6.64797 12.227Z" fill="white"/>
          </svg>
        </v-btn>
        <v-btn
          class="mr-4"
          icon=""
          color="#243347"
        >
          1
        </v-btn>
        <v-btn
          class="mr-4"
          icon=""
          variant="text"
        >
          2
        </v-btn>
        <v-btn
          class="mr-4"
          icon=""
          variant="text"
        >
          3
        </v-btn>
        <v-btn
          class="mr-4"
          icon=""
          variant="text"
        >
          4
        </v-btn>
        <v-btn
          class="mr-4"
          icon=""
          variant="text"
        >
          5
        </v-btn>
        <v-btn
          class="mr-4"
          icon=""
          variant="text"
        >
          <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.77297 7.39797L1.14797 13.023C0.928177 13.2428 0.571823 13.2428 0.352031 13.023C0.132239 12.8032 0.132239 12.4468 0.352031 12.227L5.57977 7L0.352031 1.77297C0.132239 1.55318 0.132239 1.19682 0.352031 0.977031C0.571823 0.757239 0.928177 0.757239 1.14797 0.977031L6.77297 6.60203C6.87859 6.70754 6.93794 6.85071 6.93794 7C6.93794 7.14929 6.87859 7.29246 6.77297 7.39797Z" fill="white"/>
          </svg>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'General',
  methods: {
    openDash() {
      window.location.href = '/dash'
    },
    openServ() {
      window.location.href = '/serv'
    },
    openAdm() {
      window.location.href = '/adm'
    },
    openCrRep() {
      window.location.href = '/cr_rep'
    },
    openForecast() {
      window.location.href = '/forecast'
    },
    openNotify() {
      window.location.href = '/notify'
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || 'Электроэнергия'
      }
    },
  }
}
</script>

<style>
.columns-table {
  display: grid;
  align-items: center;
  grid-template-columns: 219px 238px 242px 226px;
  height: 72px;
  border-bottom: white 1px solid;
  width: 100%;
  padding: 12px 16px;
  color: #91A8C9;
}

.filter-btn {
  border-radius: 12px;
  border: 1px solid #334766;
  text-transform: none;
}

.bottom-div {
  display: flex;
  width: 960px;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  height: calc(100% - 65px);
}

.top-menu {
  display: flex;
  align-items: center;
  height: 65px;
  border-bottom: 1px solid white;
}

.flex-center-row {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
}

.flex-center-column {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}

.text-for-btn {
  text-transform: none;
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