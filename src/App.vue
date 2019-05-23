<template>
  <div id="app" class="container">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">VUTTR</h1>
          <h2 class="subtitle">Very Useful Tools to Remember</h2>
        </div>
      </div>
    </section>
    <router-view/>
  </div>
</template>

<style lang="scss">
@charset "utf-8";
// @import "../node_modules/bulma/bulma.sass";

@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600&display=swap");

$family-sans-serif: "Source Sans Pro", sans-serif;
// $body-size: 20px;
$strong-weight: 600;
$radius: 5px;

.button {
  font-weight: $strong-weight;
}

$white: #fff;
$ink: #dedce1;
$blue: #365df0;
$green: #12db89;
$red: #f95e5a;
$yellow: #ffbb43;
$purple: #6554c0;
$teal: #30c3fc;

$primary: $blue;
$link: $blue;
$success: $green;
$warning: $yellow;
$danger: $red;

$modal-card-head-background-color: $white;
$modal-card-head-border-bottom: none;
$modal-card-foot-border-top: none;
$modal-card-title-size: 1.3rem;
$modal-card-head-padding: 30px;
$modal-card-body-padding: 0 30px;

.delete {
  background: none !important;
}
.delete::before,
.modal-close::before,
.delete::after,
.modal-close::after {
  background-color: #8f8a9b !important;
}

@import "../node_modules/bulma/sass/utilities/_all";
@import "../node_modules/bulma/sass/base/_all";
@import "../node_modules/bulma/sass/elements/_all";
@import "../node_modules/bulma/sass/form/_all";
@import "../node_modules/bulma/sass/components/_all";
@import "../node_modules/bulma/sass/grid/_all";
@import "../node_modules/bulma/sass/layout/_all";
</style>
