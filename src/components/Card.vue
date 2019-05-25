<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <a :href="tool.link" v-if="tool.link">{{ tool.title }}</a>
        <span v-if="!tool.link">{{ tool.title }}</span>
        <a href="#" class="is-pulled-right" @click.prevent="remove">remove</a>
        <p>{{ tool.description }}</p>
        <p class="tags">
          <span class="tag" v-for="tag in tool.tags" :key="tag">#{{ tag }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Card extends Vue {
  @Prop() private tool!: any;

  remove() {
    const text = `Are you sure you want to remove ${this.tool.title}?`;
    this.$store.getters
      .swal({
        title: "Remove tool",
        text,
        showCancelButton: true,
        confirmButtonText: "Yes, remove it!"
      })
      .then((result: any) => {
        if (result.value) {
          this.$store.dispatch("remove", this.tool);
        }
      });
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
