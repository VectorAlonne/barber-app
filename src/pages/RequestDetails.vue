<template>
  <base-layout
    page-title="Lista de Horarios"
    page-default-back-link="/memories"
  >
    <ion-list class="button-days" color="secondary">
      <ion-button class="day-button">D</ion-button>

      <ion-button class="day-button-l">L</ion-button>

      <ion-button class="day-button">M</ion-button>

      <ion-button class="day-button-m">M</ion-button>

      <ion-button class="day-button">J</ion-button>

      <ion-button class="day-button-v">V</ion-button>

      <ion-button class="day-button">S</ion-button>
    </ion-list>
    <ion-list class="time-list">
      <ion-item class="time-item" lines="none" @click="onItemClick">08:00</ion-item>

      <ion-item class="time-item" lines="none" @click="onItemClick">08:30</ion-item>

      <ion-item class="time-item" lines="none" @click="onItemClick">09:00</ion-item>

      <ion-item class="time-item" lines="none" @click="onItemClick">09:30</ion-item>

      <ion-item class="time-item" lines="none" @click="onItemClick">10:00</ion-item>

      <ion-item class="time-item" lines="none" @click="onItemClick">10:30</ion-item>

      <ion-item class="time-item" lines="none" @click="onItemClick">11:00</ion-item>

      <ion-item class="time-item" lines="none" @click="onItemClick">11:30</ion-item>

      <ion-item class="time-item" lines="none" @click="onItemClick">12:00</ion-item>

      <ion-item class="time-item" lines="none" @click="onItemClick">12:30</ion-item>

      <ion-item class="time-item" lines="none" @click="onItemClick">13:00</ion-item>

      <ion-item class="time-item" lines="none" @click="onItemClick">13:30</ion-item>

      <ion-item class="time-item" lines="none" @click="onItemClick">14:00</ion-item>

      <ion-item class="time-item" lines="none" @click="onItemClick">14:30</ion-item>

      <ion-item class="time-item" lines="none" @click="onItemClick">15:00</ion-item>

      <ion-item class="time-item" lines="none" @click="onItemClick">15:30</ion-item>

      <ion-item class="time-item" lines="none" @click="onItemClick">16:00</ion-item>

      <ion-item class="time-item" lines="none" @click="onItemClick">16:30</ion-item>

      <ion-item class="time-item" lines="none" @click="onItemClick">17:00</ion-item>

      <ion-item class="time-item" lines="none" @click="onItemClick">17:30</ion-item>

      <ion-item class="time-item" lines="none" @click="onItemClick">18:00</ion-item>

      <ion-item class="time-item" lines="none" @click="onItemClick">18:30</ion-item>
    </ion-list>
  </base-layout>

  <ion-footer class="footer">
    <ion-list>
      <ion-button class="footer-button-1">Confirmar</ion-button>

      <ion-button class="footer-button-2">Cancelar</ion-button>
    </ion-list>
  </ion-footer>
</template>

<script>
import { IonList, IonItem, IonFooter } from "@ionic/vue";
export default {
  IonList,
  IonItem,
  IonFooter,

  methods: {
    onItemClick() {
      this.$router.push("/confirm");
    },
  },
};
</script>

<style scoped>
.button-days {
  background-color: #f0f5f5;
  text-align: center;
}

.day-button,
.day-button-l,
.day-button-m,
.day-button-v {
  width: 45px;
}

.day-button-l,
.day-button-m,
.day-button-v {
  margin-left: 10px;
  margin-right: 10px;
}

.time-list {
  display: grid;
  align-content: center;
  justify-content: center;
  border: none;
}
.time-item {
  font-size: 40px;
  margin-top: 30px;
  border-bottom: 1px solid black;
}

.footer {
  position: fixed;
  text-align: center;
  bottom: 0;
}

.footer-button-1 {
  background-color: #f0f5f5;
  margin-right: 100px;
}
</style>
