<template>
  <div class="company">
  <h2>Entreprise</h2>
  <div class="companyForm">
      <label for="company">Génerer un entreprise fictive </label> 
      <button @click="generateCie">Créer</button>
      </div>
      <div class="result">
          <p>Raison sociale : {{ raison_sociale }}</p>
          <p>Adresse : {{ adresse }}</p>
          <p>Téléphone :{{ telephone }}</p>
          <p>Siren : {{ siren }}</p>
          <p>Siret : {{ siret }}</p>
      </div>
</div>
</template>

<script>
import { ref } from 'vue';
import { fakerFR as faker } from '@faker-js/faker';

export default {
  name: 'Company', 

  setup() {
      let raison_sociale = ref('')
      let adresse = ref('')
      let telephone = ref('')
      let siren = ref('')
      let siret = ref('')

      function generateCie (){

          let nine = Math.floor(Math.random() * (999999999-100000000) + 100000000 )
          let five = Math.floor(Math.random() * (99999 - 10000)+ 10000) 

          raison_sociale.value = faker.company.name();
          adresse.value = faker.location.streetAddress() + "," + faker.location.city()
          telephone.value = faker.phone.number('+33 01 ## ## ## ##')
          siren.value = nine
          siret.value = siren.value + "" + five

      }

      return {
          generateCie,
          raison_sociale,
          adresse,
          telephone,
          siren,
          siret
      }
  }
}
</script>
<style>

</style>