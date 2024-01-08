<template>
  <div>
    <header>
        <nav>
            <ul>
                <li> <nuxt-link to="/">Vue Central</nuxt-link> </li>
                <li> <nuxt-link to="/faussaire">Faussaire</nuxt-link> </li>
                <li> <nuxt-link to="/temperature">Temperature</nuxt-link></li>
                <li> <nuxt-link to="/imc">IMC</nuxt-link></li>
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
nav {
overflow: hidden;
  position: relative;
  margin-bottom: 25px;
  padding-bottom: 25px;}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

nav li a {
  text-decoration: none;
  float: left;
  padding: 5px;
  color: hsla(160, 100%, 37%, 1);
}


nav li a:hover {
  color: whitesmoke;
}

</style>