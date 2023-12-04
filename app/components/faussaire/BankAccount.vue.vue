<template>
  <div class="bankAccount">
  <h2>Compte bancaire</h2>
  <div class="accountForm">
    <label for="account">Génerer un faux compte bancaire </label>
    <button @click="generateBnkAcc">Créer</button>
  </div>
  <div class="result">
          <p>prénom : {{ prenom }}</p>
          <p>nom : {{ nom }}</p> 
          <p>Téléphone : {{ telephone }}</p>
          <p>email : {{ email }}</p> 
          <p>adresse : {{ adresse }}</p> 
          <p>iban : {{ iban }}</p> 
          <p>rib : {{ rib }}</p> 
  </div>
</div>
</template>

<script>
import { ref } from 'vue';
import { fakerFR as faker } from '@faker-js/faker';
export default {
  name: 'BankAccount',

  setup() {
    let prenom = ref('');
      let nom = ref('');
      let telephone = ref('');
      let email = ref('');
      let adresse = ref('');
      let iban = ref('');
      let rib = ref('');

    function generateBnkAcc () {
      let codeBank = Math.floor(Math.random() * (99999 - 10000)+ 10000) 
      let codeGuichet = Math.floor(Math.random() * (99999 - 10000)+ 10000) 
      let numberAcc = Math.floor(Math.random() * (99999999999-10000000000) + 100000000 )


      prenom.value = faker.person.firstName()
      nom.value = faker.person.lastName()
      telephone.value = faker.phone.number('+33 06 ## ## ## ##')
      email.value = faker.internet.email()
      adresse.value = faker.location.streetAddress() + "," + faker.location.city()
      iban.value = 'FR76' + codeBank + "" + codeGuichet + "" + numberAcc
      rib.value = codeBank + "" + codeGuichet + "" + numberAcc

    }

      return {
          generateBnkAcc,
          prenom,
          nom,
          telephone,
          email,
          adresse,
          iban,
          rib
      }
    
  }

}
</script>

<style>
</style>