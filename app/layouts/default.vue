<template>
  <div>
    <header>
        <nav>
            <ul>
                <li> <nuxt-link to="/faussaire">Faussaire</nuxt-link> </li>
                <li> <nuxt-link to="/imc">IMC</nuxt-link></li>
                <li><nuxt-link to="/imc">Temperature</nuxt-link></li>
            </ul>
        </nav>
    </header>
    <slot/>
    <footer>
        <p>Site crée par Christ M. - All Rights Reserved - 2023</p>
    </footer>
  </div>
</template>

<script>

</script>

<style>

</style>