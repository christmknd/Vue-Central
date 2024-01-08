<template>
  <div class="bmi">
    <h2>IMC Calculator</h2>

    <form @submit.prevent="calculateBMI">
      <label for="height">Taille (en cm)</label>
      <input v-model.number="height" type="text" />

      <label for="weight">Poids (en kg)</label>
      <input v-model.number="weight" type="text" />

      <button class="calculate-button" type="submit">Calculer</button>

      <div class="result">
        <span><p v-if="result !== null">{{ result }}</p></span>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const height = ref(0);
const weight = ref(0);
const result = ref(0);

const calculateBMI = () => {
  const parsedHeight = parseInt(String(height.value));
  const parsedWeight = parseInt(String(weight.value));

  if (isNaN(parsedHeight) || parsedHeight <= 0) {
    result.value = 'Entrez une taille valide!';
  } else if (isNaN(parsedWeight) || parsedWeight <= 0) {
    result.value = 'Entrez un poids valide!';
  } else {
    const bmi = (parsedWeight / ((parsedHeight * parsedHeight) / 10000)).toFixed(2);

    if (bmi < 18.6) result.value = `Insuffisance pondérale : ${bmi}`;
    else if (bmi >= 18.6 && bmi < 24.9) result.value = `Corpulence normale : ${bmi}`;
    else result.value = `Surpoids: ${bmi}`;
  }
};
</script>

<style scoped>
/* Add your styling here */
.bmi {
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  align-items: center;
}

.calculate-button {
  padding: 10px;
}

input {
  padding: 2px;
}

label {
  padding: 10px;
}
</style>
