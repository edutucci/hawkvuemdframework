<template>
 <h-page>

 </h-page>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.styled-input-single {
  position: relative;
  padding: 20px 0 20px 40px;
  text-align: left;
}
.styled-input-single label {
  cursor: pointer;
}
.styled-input-single label:before, .styled-input-single label:after {
  content: "";
  position: absolute;
  top: 50%;
  border-radius: 50%;
}
.styled-input-single label:before {
  left: 0;
  width: 30px;
  height: 30px;
  margin: -15px 0 0;
  background: #f7f7f7;
  box-shadow: 0 0 1px grey;
}
.styled-input-single label:after {
  left: 5px;
  width: 20px;
  height: 20px;
  margin: -10px 0 0;
  opacity: 0;
  background: #37b2b2;
  transform: translate3d(-40px, 0, 0) scale(0.5);
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.styled-input-single input[type=radio],
.styled-input-single input[type=checkbox] {
  position: absolute;
  top: 0;
  left: -9999px;
  visibility: hidden;
}
.styled-input-single input[type=radio]:checked + label:after,
.styled-input-single input[type=checkbox]:checked + label:after {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}

.styled-input--square label:before, .styled-input--square label:after {
  border-radius: 0;
}

.styled-input--rounded label:before {
  border-radius: 10px;
}
.styled-input--rounded label:after {
  border-radius: 6px;
}

.styled-input--diamond .styled-input-single {
  padding-left: 45px;
}
.styled-input--diamond label:before, .styled-input--diamond label:after {
  border-radius: 0;
}
.styled-input--diamond label:before {
  transform: rotate(45deg);
}
.styled-input--diamond input[type=radio]:checked + label:after,
.styled-input--diamond input[type=checkbox]:checked + label:after {
  transform: rotate(45deg);
  opacity: 1;
}

body {
  font-family: sans-serif;
  max-width: 400px;
  margin: 0 auto;
  padding: 30px;
  font-family: "Maven Pro", sans-serif;
  text-align: center;
}

h1 {
  font-size: 2.8rem;
}

h2 {
  font-size: 2rem;
}

h1, h2 {
  font-family: "Yrsa", cursive;
}

p {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

hr {
  margin: 40px auto;
  max-width: 100px;
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  padding: 0;
}

.pen-intro {
  text-align: center;
}

.two-column:after {
  content: "";
  display: table;
  clear: both;
}

.two-column {
  margin: 0 0 40px;
}
@media (min-width: 860px) {
  .two-column {
    display: flex;
  }
}
.two-column .single-col {
  margin: 0 0 40px;
}
@media (min-width: 860px) {
  .two-column .single-col {
    width: 47.5%;
    float: left;
    margin: 0 0 0 5%;
  }
  .two-column .single-col:nth-child(2n+1) {
    clear: both;
    margin: 0;
  }
}
</style>
