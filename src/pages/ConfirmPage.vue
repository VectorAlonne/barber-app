<template>
  <base-layout page-default-back-link="/memories">
    <ion-text color="secondary">
      <h1 class="welcome-text">Confirmar<br />Solicitud</h1>
    </ion-text>

    <ion-item class="form">
      <ion-label class="label-cellphone" position="stacked">Celular</ion-label>
      <ion-input class="input-cellphone"></ion-input>
    </ion-item>

    <ion-item class="box">
      <ion-label class="label-cellphone" position="stacked">Notas</ion-label>
      <ion-textarea class="textarea"></ion-textarea>
    </ion-item>
  </base-layout>

  <ion-footer class="footer">
    <ion-list>
      <ion-button class="footer-button-1">Confirmar</ion-button>

      <ion-button class="footer-button-2">Cancelar</ion-button>
    </ion-list>
  </ion-footer>
</template>

<script>
import {
  IonFooter,
  IonList,
  IonItem,
  IonButton,
  IonLabel,
  IonInput,
  IonTextarea,
} from "@ionic/vue";
export default {
  IonList,
  IonItem,
  IonButton,
  IonLabel,
  IonInput,
  IonTextarea,
  IonFooter,
};
</script>

<style scoped>
.welcome-text {
  text-align: center;
  font-size: 40px;
}

.form {
  margin-top: 50px;
}

.label-cellphone,
.input-cellphone,
.textarea {
  font-size: 30px;
}

.textarea {
  padding-bottom: 150px;
}

.box {
  height: 100%;
  margin-top: 50px;
}

.footer {
  background-color: #f0f5f5;
  position: fixed;
  text-align: center;
  bottom: 0;
}

.footer-button-1 {
    margin-right: 100px;
}
</style>
