<template>
  <div class="flex-center-column" style="height: 100%; justify-content: start">
    <div class="flex-center-row" style="justify-content: start; width: 100%; height: 65px; border-bottom: white 1px solid">
      <v-icon class="ml-8">
        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0.333333H12V4.77777V9.22223H6V13.6667H0V9.22223V4.77777H6V0.333333Z" fill="white"/>
        </svg>
      </v-icon>
      <span class="ml-4" style="font-size: 18px; font-weight: 700;line-height: 23px;">Energy Monitor</span>
      <div class="flex-center-row ml-4" style="width: 958px; justify-content: space-between">
        <v-btn class="text-for-btn" variant="text" @click="openGeneral">Дашборды</v-btn>
        <v-btn class="text-for-btn" variant="text" @click="openServ">Оборудование</v-btn>
        <v-btn class="text-for-btn" variant="text" @click="openForecast">Прогноз</v-btn>
        <v-btn class="text-for-btn" variant="text" @click="openPrice">Стоимость продукта</v-btn>
        <v-btn class="text-for-btn" variant="text" @click="openCrRep">Отчеты</v-btn>
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
    <div class="flex-center-column mt-5" style="width: 960px; height: 2350px; align-items: start; justify-content: start">
      <div class="pa-4">
        <span class="title-page">
          Dashboard
        </span>
      </div>
      <div style="padding: 16px 16px 8px 16px">
        <span class="subtitle-page">
          Общее потребление энергии
        </span>
      </div>
      <div class="pa-4" style="height: 174px; width: 100%">
        <div class="radius-card flex-start-column" style="background-color: #243347; padding: 24px">
          <span style="font-size: 16px; font-weight: 500">Общее потребление энергии</span>
          <span class="mt-1" style="font-weight: 700; font-size: 24px">2.3MWh</span>
          <span class="mt-1" style="color: #0AD95E; font-size: 16px; font-weight: 500">+5%</span>
        </div>
      </div>
      <div style="padding: 16px 16px 8px 16px">
        <span class="subtitle-page">
          Стоимость продукта, включая Энергию
        </span>
      </div>
      <div class="pa-4" style="height: 174px; width: 100%">
        <div class="radius-card flex-start-column" style="background-color: #243347; padding: 24px">
          <span style="font-size: 16px; font-weight: 500">Стоимость продукта, включая Энергию</span>
          <span class="mt-1" style="font-weight: 700; font-size: 24px">$3,200</span>
          <span class="mt-1" style="color: #0AD95E; font-size: 16px; font-weight: 500">+3%</span>
        </div>
      </div>
      <div style="padding: 16px 16px 8px 16px">
        <span class="subtitle-page">
          Тенденции в области энергопотребления
        </span>
      </div>
      <div class="py-6 px-4" style="width: 100%; height: 410px">
        <div class="radius-card flex-start-column pa-6" style="border: 1px solid #334766; height: 362px">
          <span class="normal-text">Ежедневное потребление энергии</span>
          <span class="title-page" style="font-size: 32px">2.3MWh</span>
          <div class="py-4 flex-start-column" style="height: 232px; justify-content: space-between">
            <svg width="868" height="148" viewBox="0 0 868 124" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.51046 89.2844C33.8557 89.2844 33.8557 17.2016 67.2012 17.2016C100.546 17.2016 100.546 33.584 133.892 33.584C167.237 33.584 167.237 76.1784 200.582 76.1784C233.928 76.1784 233.928 27.031 267.274 27.031C300.619 27.031 300.619 82.7314 333.963 82.7314C367.309 82.7314 367.309 49.9665 400.654 49.9665C434 49.9665 434 36.8605 467.346 36.8605C500.691 36.8605 500.691 99.1138 534.037 99.1138C567.381 99.1138 567.381 122.049 600.726 122.049C634.072 122.049 634.072 0.819122 667.418 0.819122C700.763 0.819122 700.763 66.3489 734.109 66.3489C767.453 66.3489 767.453 105.667 800.798 105.667C834.144 105.667 834.144 20.4781 867.49 20.4781" stroke="#91A8C9" stroke-width="3"/>
            </svg>
            <div class="flex-start-row" style="justify-content: space-between; height: 20px">
              <span class="text-diagram">Jan 1</span>
              <span class="text-diagram">Jan 2</span>
              <span class="text-diagram">Jan 3</span>
              <span class="text-diagram">Jan 4</span>
              <span class="text-diagram">Jan 5</span>
            </div>
          </div>
        </div>
      </div>
      <div style="padding: 16px 16px 8px 16px">
        <span class="subtitle-page">
          Потребление энергии в Цехах
        </span>
      </div>
      <div class="py-6 px-4" style="width: 100%; height: 483px">
        <div class="radius-card flex-start-column pa-6" style="border: 1px solid #334766; height: 435px">
          <span class="normal-text">Еженедельное потребление энергии</span>
          <span class="title-page mt-2" style="font-size: 32px">2.3MWh</span>
          <div class="flex-start-column mt-2 py-3" style="width: 100%; height: 305px; justify-content: space-between">
            <div style="width: 100%; display: grid; grid-template-columns: 50px auto">
              <span class="text-diagram">Mon</span>
              <svg width="251" height="20" viewBox="0 0 251 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_22_167" fill="white">
                  <path d="M0.5 0H250.5V19.5714H0.5V0Z"/>
                </mask>
                <path d="M0.5 0H250.5V19.5714H0.5V0Z" fill="#243347"/>
                <path d="M248.5 0V19.5714H252.5V0H248.5Z" fill="#757575" mask="url(#path-1-inside-1_22_167)"/>
              </svg>
            </div>
            <div style="width: 100%; display: grid; grid-template-columns: 50px auto">
              <span class="text-diagram pr-4">Tue</span>
              <svg width="834" height="21" viewBox="0 0 834 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_22_172" fill="white">
                  <path d="M0.5 0.571426H833.5V20.1429H0.5V0.571426Z"/>
                </mask>
                <path d="M0.5 0.571426H833.5V20.1429H0.5V0.571426Z" fill="#243347"/>
                <path d="M831.5 0.571426V20.1429H835.5V0.571426H831.5Z" fill="#757575" mask="url(#path-1-inside-1_22_172)"/>
              </svg>
            </div>
            <div style="width: 100%; display: grid; grid-template-columns: 50px auto">
              <span class="text-diagram pr-4">Wed</span>
              <svg width="668" height="20" viewBox="0 0 668 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_22_177" fill="white">
                  <path d="M0.5 0.142853H667.5V19.7143H0.5V0.142853Z"/>
                </mask>
                <path d="M0.5 0.142853H667.5V19.7143H0.5V0.142853Z" fill="#243347"/>
                <path d="M665.5 0.142853V19.7143H669.5V0.142853H665.5Z" fill="#757575" mask="url(#path-1-inside-1_22_177)"/>
              </svg>
            </div>
            <div style="width: 100%; display: grid; grid-template-columns: 50px auto">
              <span class="text-diagram pr-4">Thu</span>
              <svg width="418" height="21" viewBox="0 0 418 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_22_182" fill="white">
                  <path d="M0.5 0.714279H417.5V20.2857H0.5V0.714279Z"/>
                </mask>
                <path d="M0.5 0.714279H417.5V20.2857H0.5V0.714279Z" fill="#243347"/>
                <path d="M415.5 0.714279V20.2857H419.5V0.714279H415.5Z" fill="#757575" mask="url(#path-1-inside-1_22_182)"/>
              </svg>
            </div>
            <div style="width: 100%; display: grid; grid-template-columns: 50px auto">
              <span class="text-diagram pr-4">Fri</span>
              <svg width="251" height="20" viewBox="0 0 251 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_22_187" fill="white">
                  <path d="M0.5 0.285706H250.5V19.8571H0.5V0.285706Z"/>
                </mask>
                <path d="M0.5 0.285706H250.5V19.8571H0.5V0.285706Z" fill="#243347"/>
                <path d="M248.5 0.285706V19.8571H252.5V0.285706H248.5Z" fill="#757575" mask="url(#path-1-inside-1_22_187)"/>
              </svg>
            </div>
            <div style="width: 100%; display: grid; grid-template-columns: 50px auto">
              <span class="text-diagram pr-4">Sat</span>
              <svg width="501" height="21" viewBox="0 0 501 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_22_192" fill="white">
                  <path d="M0.5 0.857132H500.5V20.4286H0.5V0.857132Z"/>
                </mask>
                <path d="M0.5 0.857132H500.5V20.4286H0.5V0.857132Z" fill="#243347"/>
                <path d="M498.5 0.857132V20.4286H502.5V0.857132H498.5Z" fill="#757575" mask="url(#path-1-inside-1_22_192)"/>
              </svg>
            </div>
            <div style="width: 100%; display: grid; grid-template-columns: 50px auto">
              <span class="text-diagram pr-4">Sun</span>
              <svg width="501" height="20" viewBox="0 0 501 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_22_197" fill="white">
                  <path d="M0.5 0.428558H500.5V20H0.5V0.428558Z"/>
                </mask>
                <path d="M0.5 0.428558H500.5V20H0.5V0.428558Z" fill="#243347"/>
                <path d="M498.5 0.428558V20H502.5V0.428558H498.5Z" fill="#757575" mask="url(#path-1-inside-1_22_197)"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div style="padding: 16px 16px 8px 16px">
        <span class="subtitle-page">
          Потребление энергии Всем Оборудованием
        </span>
      </div>
      <div class="py-6 px-4" style="width: 100%; height: 483px">
        <div class="radius-card flex-start-column pa-6" style="border: 1px solid #334766; height: 435px">
          <span class="normal-text">Еженедельное потребление энергии</span>
          <span class="title-page mt-2" style="font-size: 32px">2.3MWh</span>
          <div class="flex-start-column mt-2 py-3" style="width: 100%; height: 305px; justify-content: space-between">
            <div style="width: 100%; display: grid; grid-template-columns: 50px auto">
              <span class="text-diagram">Mon</span>
              <svg width="84" height="20" viewBox="0 0 84 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_22_211" fill="white">
                  <path d="M0.5 0H83.5V19.5714H0.5V0Z"/>
                </mask>
                <path d="M0.5 0H83.5V19.5714H0.5V0Z" fill="#243347"/>
                <path d="M81.5 0V19.5714H85.5V0H81.5Z" fill="#757575" mask="url(#path-1-inside-1_22_211)"/>
              </svg>
            </div>
            <div style="width: 100%; display: grid; grid-template-columns: 50px auto">
              <span class="text-diagram pr-4">Tue</span>
              <svg width="668" height="21" viewBox="0 0 668 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_22_216" fill="white">
                  <path d="M0.5 0.571411H667.5V20.1428H0.5V0.571411Z"/>
                </mask>
                <path d="M0.5 0.571411H667.5V20.1428H0.5V0.571411Z" fill="#243347"/>
                <path d="M665.5 0.571411V20.1428H669.5V0.571411H665.5Z" fill="#757575" mask="url(#path-1-inside-1_22_216)"/>
              </svg>
            </div>
            <div style="width: 100%; display: grid; grid-template-columns: 50px auto">
              <span class="text-diagram pr-4">Wed</span>
              <svg width="668" height="21" viewBox="0 0 668 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_22_216" fill="white">
                  <path d="M0.5 0.571411H667.5V20.1428H0.5V0.571411Z"/>
                </mask>
                <path d="M0.5 0.571411H667.5V20.1428H0.5V0.571411Z" fill="#243347"/>
                <path d="M665.5 0.571411V20.1428H669.5V0.571411H665.5Z" fill="#757575" mask="url(#path-1-inside-1_22_216)"/>
              </svg>
            </div>
            <div style="width: 100%; display: grid; grid-template-columns: 50px auto">
              <span class="text-diagram pr-4">Thu</span>
              <svg width="418" height="21" viewBox="0 0 418 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_22_226" fill="white">
                  <path d="M0.5 0.714294H417.5V20.2857H0.5V0.714294Z"/>
                </mask>
                <path d="M0.5 0.714294H417.5V20.2857H0.5V0.714294Z" fill="#243347"/>
                <path d="M415.5 0.714294V20.2857H419.5V0.714294H415.5Z" fill="#757575" mask="url(#path-1-inside-1_22_226)"/>
              </svg>
            </div>
            <div style="width: 100%; display: grid; grid-template-columns: 50px auto">
              <span class="text-diagram pr-4">Fri</span>
              <svg width="251" height="20" viewBox="0 0 251 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_22_187" fill="white">
                  <path d="M0.5 0.285706H250.5V19.8571H0.5V0.285706Z"/>
                </mask>
                <path d="M0.5 0.285706H250.5V19.8571H0.5V0.285706Z" fill="#243347"/>
                <path d="M248.5 0.285706V19.8571H252.5V0.285706H248.5Z" fill="#757575" mask="url(#path-1-inside-1_22_187)"/>
              </svg>
            </div>
            <div style="width: 100%; display: grid; grid-template-columns: 50px auto">
              <span class="text-diagram pr-4">Sat</span>
              <svg width="418" height="21" viewBox="0 0 418 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_22_226" fill="white">
                  <path d="M0.5 0.714294H417.5V20.2857H0.5V0.714294Z"/>
                </mask>
                <path d="M0.5 0.714294H417.5V20.2857H0.5V0.714294Z" fill="#243347"/>
                <path d="M415.5 0.714294V20.2857H419.5V0.714294H415.5Z" fill="#757575" mask="url(#path-1-inside-1_22_226)"/>
              </svg>
            </div>
            <div style="width: 100%; display: grid; grid-template-columns: 50px auto">
              <span class="text-diagram pr-4">Sun</span>
              <svg width="501" height="20" viewBox="0 0 501 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_22_197" fill="white">
                  <path d="M0.5 0.428558H500.5V20H0.5V0.428558Z"/>
                </mask>
                <path d="M0.5 0.428558H500.5V20H0.5V0.428558Z" fill="#243347"/>
                <path d="M498.5 0.428558V20H502.5V0.428558H498.5Z" fill="#757575" mask="url(#path-1-inside-1_22_197)"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-center-column" style="width: 100%">
        <div class="flex-center-column" style="padding: 10px 0; height: 89px">
          <v-btn icon="" color="#243347">
            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15 8C15 8.34518 14.7202 8.625 14.375 8.625H8.125V14.875C8.125 15.2202 7.84518 15.5 7.5 15.5C7.15482 15.5 6.875 15.2202 6.875 14.875V8.625H0.625C0.279822 8.625 0 8.34518 0 8C0 7.65482 0.279822 7.375 0.625 7.375H6.875V1.125C6.875 0.779822 7.15482 0.5 7.5 0.5C7.84518 0.5 8.125 0.779822 8.125 1.125V7.375H14.375C14.7202 7.375 15 7.65482 15 8Z" fill="white"/>
            </svg>
          </v-btn>
          <span class="normal-text mt-2">
            Добавление данных
          </span>
        </div>
        <div class="flex-center-column" style="padding: 10px 0; height: 89px">
          <v-btn icon="" color="#243347" @click="openCrRep()">
            <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1922 5.43281L9.81719 1.05781C9.69988 0.940632 9.54081 0.87487 9.375 0.875H1.875C1.18464 0.875 0.625 1.43464 0.625 2.125V15.875C0.625 16.5654 1.18464 17.125 1.875 17.125H13.125C13.8154 17.125 14.375 16.5654 14.375 15.875V5.875C14.3751 5.70919 14.3094 5.55012 14.1922 5.43281ZM10 3.00859L12.2414 5.25H10V3.00859ZM13.125 15.875H1.875V2.125H8.75V5.875C8.75 6.22018 9.02982 6.5 9.375 6.5H13.125V15.875ZM10.625 9.625C10.625 9.97018 10.3452 10.25 10 10.25H5C4.65482 10.25 4.375 9.97018 4.375 9.625C4.375 9.27982 4.65482 9 5 9H10C10.3452 9 10.625 9.27982 10.625 9.625ZM10.625 12.125C10.625 12.4702 10.3452 12.75 10 12.75H5C4.65482 12.75 4.375 12.4702 4.375 12.125C4.375 11.7798 4.65482 11.5 5 11.5H10C10.3452 11.5 10.625 11.7798 10.625 12.125Z" fill="white"/>
            </svg>
          </v-btn>
          <span class="normal-text mt-2">
            Сгенерировать отчет
          </span>
        </div>
        <div class="flex-center-column" style="padding: 10px 0; height: 89px">
          <v-btn icon="" color="#243347">
            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 5.25C6.42893 5.25 4.75 6.92893 4.75 9C4.75 11.0711 6.42893 12.75 8.5 12.75C10.5711 12.75 12.25 11.0711 12.25 9C12.2478 6.92982 10.5702 5.25215 8.5 5.25ZM8.5 11.5C7.11929 11.5 6 10.3807 6 9C6 7.61929 7.11929 6.5 8.5 6.5C9.88071 6.5 11 7.61929 11 9C11 10.3807 9.88071 11.5 8.5 11.5ZM15.375 9.16875C15.3781 9.05625 15.3781 8.94375 15.375 8.83125L16.5406 7.375C16.6646 7.21994 16.7075 7.01522 16.6562 6.82344C16.4652 6.10516 16.1793 5.41551 15.8062 4.77266C15.7072 4.60208 15.5334 4.48827 15.3375 4.46562L13.4844 4.25938C13.4073 4.17812 13.3292 4.1 13.25 4.025L13.0312 2.16719C13.0084 1.97109 12.8943 1.7973 12.7234 1.69844C12.0803 1.32605 11.3907 1.0405 10.6727 0.849219C10.4807 0.798197 10.276 0.841406 10.1211 0.965625L8.66875 2.125C8.55625 2.125 8.44375 2.125 8.33125 2.125L6.875 0.961719C6.71994 0.837772 6.51522 0.794856 6.32344 0.846094C5.60527 1.03752 4.91567 1.32335 4.27266 1.69609C4.10208 1.79514 3.98827 1.9689 3.96562 2.16484L3.75938 4.02109C3.67812 4.0987 3.6 4.17682 3.525 4.25547L1.66719 4.46875C1.47109 4.49156 1.2973 4.60569 1.19844 4.77656C0.826052 5.41966 0.540496 6.10925 0.349219 6.82734C0.298197 7.01925 0.341406 7.22398 0.465625 7.37891L1.625 8.83125C1.625 8.94375 1.625 9.05625 1.625 9.16875L0.461719 10.625C0.337772 10.7801 0.294856 10.9848 0.346094 11.1766C0.537179 11.8948 0.823023 12.5845 1.19609 13.2273C1.29514 13.3979 1.4689 13.5117 1.66484 13.5344L3.51797 13.7406C3.59557 13.8219 3.6737 13.9 3.75234 13.975L3.96875 15.8328C3.99156 16.0289 4.10569 16.2027 4.27656 16.3016C4.91966 16.6739 5.60925 16.9595 6.32734 17.1508C6.51925 17.2018 6.72398 17.1586 6.87891 17.0344L8.33125 15.875C8.44375 15.8781 8.55625 15.8781 8.66875 15.875L10.125 17.0406C10.2801 17.1646 10.4848 17.2075 10.6766 17.1562C11.3948 16.9652 12.0845 16.6793 12.7273 16.3062C12.8979 16.2072 13.0117 16.0334 13.0344 15.8375L13.2406 13.9844C13.3219 13.9073 13.4 13.8292 13.475 13.75L15.3328 13.5312C15.5289 13.5084 15.7027 13.3943 15.8016 13.2234C16.1739 12.5803 16.4595 11.8907 16.6508 11.1727C16.7018 10.9807 16.6586 10.776 16.5344 10.6211L15.375 9.16875ZM14.1172 8.66094C14.1305 8.88678 14.1305 9.11322 14.1172 9.33906C14.1079 9.49369 14.1563 9.64626 14.2531 9.76719L15.3617 11.1523C15.2345 11.5566 15.0716 11.9488 14.875 12.3242L13.1094 12.5242C12.9556 12.5413 12.8136 12.6148 12.7109 12.7305C12.5606 12.8996 12.4004 13.0598 12.2312 13.2102C12.1156 13.3129 12.0421 13.4548 12.025 13.6086L11.8289 15.3727C11.4535 15.5694 11.0613 15.7323 10.657 15.8594L9.27109 14.7508C9.16019 14.6622 9.02242 14.614 8.88047 14.6141H8.84297C8.61712 14.6273 8.39069 14.6273 8.16484 14.6141C8.01022 14.6048 7.85765 14.6532 7.73672 14.75L6.34766 15.8594C5.94339 15.7322 5.55122 15.5693 5.17578 15.3727L4.97578 13.6094C4.95871 13.4556 4.88522 13.3136 4.76953 13.2109C4.6004 13.0606 4.44023 12.9004 4.28984 12.7312C4.18713 12.6156 4.04517 12.5421 3.89141 12.525L2.12734 12.3281C1.93062 11.9527 1.76774 11.5606 1.64062 11.1562L2.74922 9.77031C2.84602 9.64938 2.89446 9.49681 2.88516 9.34219C2.87188 9.11634 2.87188 8.88991 2.88516 8.66406C2.89446 8.50944 2.84602 8.35687 2.74922 8.23594L1.64062 6.84766C1.76783 6.44339 1.93071 6.05122 2.12734 5.67578L3.89062 5.47578C4.04439 5.45871 4.18635 5.38522 4.28906 5.26953C4.43945 5.1004 4.59962 4.94023 4.76875 4.78984C4.8849 4.68707 4.95869 4.54478 4.97578 4.39062L5.17188 2.62734C5.54727 2.43062 5.93944 2.26774 6.34375 2.14062L7.72969 3.24922C7.85062 3.34602 8.00319 3.39446 8.15781 3.38516C8.38366 3.37188 8.61009 3.37188 8.83594 3.38516C8.99056 3.39446 9.14313 3.34602 9.26406 3.24922L10.6523 2.14062C11.0566 2.26783 11.4488 2.43071 11.8242 2.62734L12.0242 4.39062C12.0413 4.54439 12.1148 4.68635 12.2305 4.78906C12.3996 4.93945 12.5598 5.09962 12.7102 5.26875C12.8129 5.38444 12.9548 5.45793 13.1086 5.475L14.8727 5.67109C15.0694 6.04649 15.2323 6.43866 15.3594 6.84297L14.2508 8.22891C14.153 8.35086 14.1045 8.505 14.1148 8.66094H14.1172Z" fill="white"/>
            </svg>
          </v-btn>
          <span class="normal-text mt-2">
            Настройки
          </span>
        </div>
      </div>
    </div>
  </div>
</template>



<script>

export default {
  name: 'Dash',
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
        document.title = to.meta.title || 'Дашборды'
      }
    },
  }
}
</script>

<style>
@import 'src/assets/main.css';

</style>

