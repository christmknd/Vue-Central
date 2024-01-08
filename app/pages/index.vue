<template>
  <div class="indexPage">
    <h1>Vue Central</h1>
    
    <p>Vue Central est la plateforme ou sont regroupés tout mes projets de taille modeste réalisé en Vue. Ce projet est réalisé avec Nuxt 3 </p>

    <h2>Projets</h2>

    <ul>
      <li>Faussaire : Compte bancaire , Société et Identité fictives</li>
      <li>Conversion Celsius-Fahrenheit</li>
      <li>IMC Calculateur </li>
    </ul>

  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
</script>

<style>
.indexPage {
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  align-items: center;
}


</style>