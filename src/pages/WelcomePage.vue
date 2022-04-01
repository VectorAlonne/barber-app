<template>
  <base-layout-welcome>
    <ion-text color="secondary">
      <h1 class="welcome-text">Bienvenido a<br />BarberApp</h1>
    </ion-text>

    <ion-content class="welcome-list">
      <ion-button class="list" router-link="/request/haircut"
        >Solicitar Corte</ion-button
      >

      <ion-button class="list" router-link="/request/haircut-bearcut"
        >Solicitar Corte Barba</ion-button
      >

      <ion-button class="list" router-link="/request/beardcut"
        >Solicitar Barba</ion-button
      >
    </ion-content>
  </base-layout-welcome>
</template>

<script>
import { IonButton, IonContent } from "@ionic/vue";
export default {
  components: {
    IonButton,
    IonContent,
  },
};
</script>

<style scoped>
.welcome-list {
  text-align: center;
}

.list {
  width: 70%;
  margin-top: 100px;
  height: 70px;
  font-size: 18px;
}

.welcome-text {
  margin-top: 50px;
  text-align: center;
  font-size: 35px;
}
</style>
