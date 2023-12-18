<template>
    <div class="faussaire">
    <h1>Le Faussaire</h1>
        <p>
            La préservation et la confidentialité de ses informations personnelles sur Internet est aujourd'hui un véritable sujet <br>
            On ne souhaite pas forcement réveler ses données personnelles lorsque l'on a un formulaire à remplir <br>
            <em> <strong>"Le faussaire"</strong> </em> , notre site , est là pour répondre à ce problème.
            Il vous permet de générer des identités fictives , et bien plus encore
        </p>

      <FaussaireBankAccountVue/>
      <FaussaireCompany/>
      <FaussaireIdentity/>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});

</script>

<style>
  .faussaire {
    min-height: 100vh;
    flex-direction: column;
    display: flex;
    align-items: center;
  }
</style>