<template>
  <div class="temperature">
    <h2>Temperature</h2>
        <form @submit.prevent="celsiusToFahrenheit">
            <label for="celsius">Celsius to Fahrenheit</label>
            <input v-model.number="celsius" type="text">
            <button class="conversion-celsius" type="submit">Convertir</button> 
            <br/><br/>
            <div class="fahr-result">
            <span><p v-if="ctof !== null"> Temperature : {{ ctof }} Farhenheit</p></span>
            </div>
        </form>
       

        <form @submit.prevent="fahrenheitToCelsius">
            <label class="fahreinheit">Fahrenheit to Celsius</label>
            <input v-model.number="fahreinheit">
            <button class="conversion-fahr" type="submit">Convertir</button>
            <br/><br/>
            <div class="celsius-result">
            <span><p v-if="ftoc !== null" >Temperature :  {{ ftoc }} Celsius</p></span>
            </div>
        </form>
       
    </div>
</template>

<script>
import { ref } from 'vue';
export default {

    setup(){

        let fahreinheit = ref(0)
        let ftoc = ref(0)

        let celsius = ref(0)
        let ctof = ref(0)
    
        function celsiusToFahrenheit () {
            if (celsius.value > 0) {
              return ctof.value = (celsius.value * 1.8) + 32
            }
        }

       function fahrenheitToCelsius() {
            return ftoc.value = (fahreinheit.value - 32) / 1.8
        }

      

        return {
            celsius, 
            fahreinheit,
            ctof,
            ftoc,
            fahrenheitToCelsius,
            celsiusToFahrenheit
        }
    }
}
</script>

<style>
  .temperature {

          min-height: 100vh;
          flex-direction: column;
          display: flex;
          align-items: center;
      }
  .conversion {
      padding: 10px;
  } 
  
  input {
      padding: 2px;
  }
  
  label {
      padding: 10px;
  }
</style>