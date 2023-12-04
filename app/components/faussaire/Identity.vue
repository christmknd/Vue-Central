<template>
  <div class="identity">
      <h2>Identité</h2>
      <div class="identityForm">
      <label for="identity">Génerer un fausse identité </label>
      <button  @click="generateid">Créer</button>
      </div>
      <div class="result">
          <p>prénom : {{ prenom }}</p>
          <p>nom : {{ nom }}</p> 
          <p>Téléphone : {{ telephone }}</p>
          <p>email : {{ email }}</p> 
          <p>password : {{ password }}</p>
          <p>adresse : {{ adresse }}</p> 
      </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import {faker} from '@faker-js/faker';

export default {
  name: 'Id', 
  setup () {
      let prenom = ref('');
      let nom = ref('');
      let telephone = ref('');
      let email = ref('');
      let password = ref('')
      let adresse = ref('');

      function generateid () {

          prenom.value = faker.person.firstName()
          nom.value = faker.person.lastName()
          telephone.value = faker.phone.number('+33 06 ## ## ## ##')
          email.value = faker.internet.email()
          password.value = faker.internet.password()
          adresse.value = faker.location.streetAddress() + "," + faker.location.city()
          
      }

      return {
          generateid,
          prenom,
          nom,
          telephone,
          email,
          password,
          adresse
      }
  }
}
</script>

<style>

</style>