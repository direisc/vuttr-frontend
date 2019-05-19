<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <a :href="link">{{ title }}</a>
        <a href="#" class="is-pulled-right">remove</a>
        <p>{{ description }}</p>
        <p class="tags">
          <span class="tag" v-for="tag in tags">#{{ tag }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Card extends Vue {
  @Prop() private title!: string;

  @Prop() private link!: string;

  @Prop() private description!: string;

  @Prop() private tags!: [string];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  margin-bottom: 2rem;
}
.card:last-of-type {
  margin-bottom: 0;
}
</style>
