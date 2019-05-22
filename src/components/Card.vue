<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <a :href="tool.link" v-if="tool.link">{{ tool.title }}</a>
        <span v-if="!tool.link">{{ tool.title }}</span>
        <a href="#" class="is-pulled-right" @click.prevent="callRemove">remove</a>
        <p>{{ tool.description }}</p>
        <p class="tags">
          <span class="tag" v-for="tag in tool.tags">#{{ tag }}</span>
        </p>
      </div>
    </div>

    <div class="modal" :class="{ 'is-active': removeConfirm }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head is-radiusless">
          <p class="modal-card-title">Remove tool</p>
          <button class="delete is-large" aria-label="close" @click.prevent="callRemove"></button>
        </header>
        <section class="modal-card-body">
          <p>Are you sure you want to remove {{ tool.title }}?</p>
        </section>
        <footer class="modal-card-foot is-radiusless">
          <button class="button is-primary" @click.prevent="remove">Yes, remove</button>
          <button class="button" @click.prevent="callRemove">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Card extends Vue {
  @Prop() private tool!: object;

  private removeConfirm: boolean = false;

  callRemove() {
    this.removeConfirm = !this.removeConfirm;
  }

  remove() {
    this.$store.dispatch("remove", this.tool);
  }
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
