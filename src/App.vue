<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import "src/assets/scss/fonts";
@import "src/assets/scss/variables";
html {
  //overflow:   scroll;
}
::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
}
body {
  margin: 0;
}
#app {
  font-family: Panton, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black;
}
h2 {
  font-size: var(--vw_42);
}
h3 {
  font-size: var(--vw_34);
  font-weight: bold;
}
h4 {
  font-size: var(--vw_21);
  font-weight: bold;
}
p {
  font-size: var(--vw_26);
  &.opac {
    opacity: 0.62;
  }
}
a {
  color: $blue;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
li {
  margin-left: 0;
}
button {
  border: none;
  border-radius: var(--vw_3);
  background-color: $blue;
  width: var(--vw_110);
  height: var(--vw_34);
  margin-bottom: var(--vw_34);
  cursor: pointer;
  font-family: Panton;
  font-weight: bold;
  /*ToDo remove*/
  color: white;
  font-size: var(--vw_16);
  &:hover {
    background-color: $blue !important;
  }
  &:focus {outline:0;}
  a {
    color: white;
    font-size: var(--vw_16);
    &, &:hover {
      text-decoration: none;
    }
  }
}
.bg{
  &-green{background-color: var(--mc_green)}
  &-black{background-color: var(--mc_black)}
  &-blue{background-color: var(--mc_blue)}
  &-yellow{background-color: var(--mc_yellow)}
  &-hover{
    transition: .3s;
    &:hover{
      background-color: var(--mc_black) !important;
      transition: .3s;
    }
  }
}
.text-wrapper {
  display: grid;
  align-items: center;
  p {
    display: inline-table;
  }
}
label {
  display: block;
  font-size: var(--vw_16);
  font-weight: 600;
  color: $black;
  opacity: 0.38;
  margin-bottom: var(--vw_8);
}
input {
  border: none;
  background-color: $very_light_grey;
  height: var(--vw_55);
  font-size: var(--vw_21);
  font-weight: bold;
  padding-left: var(--vw_21);
  padding-right: var(--vw_21);
  border-radius: var(--vw_3);
  font-family: Panton;
}
.call_to_action {
  text-align: center;
  a {
    color: $black;
    font-size: var(--vw_26);
    font-weight: bold;
    text-decoration: none;
    border: var(--vw_2) solid rgba($black, 0.2);
    height: var(--vw_55);
    border-radius: calc(var(--vw_55) / 2);
    padding-left: calc(var(--vw_55) / 2);
    padding-right: calc(var(--vw_55) / 2);
    display: inline-block;
    line-height: var(--vw_55);
  }
}
* {
  box-sizing: border-box;
}
@media only screen and (max-width: 767px) {
  h2 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: var(--vw_89);
    font-weight: 600;
  }
  h3 {
    font-weight: 600;
  }
  h4 {
    font-weight: bold;
    font-size: var(--vw_68);
  }
  p {
    font-size: var(--vw_55);
    margin-bottom: 0;
    margin-top: var(--vw_89);

    &:last-child {
      margin-top: var(--vw_55);
    }
  }
  a {
    button {
      font-size: var(--vw_42);
      width: calc( var(--vw_288) + var(--vw_34) );
      height: var(--vw_89);
      font-weight: 600;
      border-radius: var(--vw_13);
    }
  }
  .desktop-br {
    display: none;
  }
}
@media only screen and (min-width: 768px) {
  .mobile-br {
    display: none;
  }
}
</style>
