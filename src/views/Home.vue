<template>
  <div>
    <section class="section" style="padding: 0 1.5rem;">
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded has-icons-left">
              <input class="input" type="text" placeholder="search" @keyup.enter="search">
              <span class="icon is-small is-left">
                <i class="fas fa-search"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <label class="checkbox" style="line-height: 2.3;">
                <input type="checkbox" v-model="tagsOnly">
                search in tags only
              </label>
            </p>
          </div>
          <div class="field">
            <p class="control is-expanded">
              <a class="button is-primary is-fullwidth" @click.prevent="addButton">
                <span class="icon">
                  <i class="fas fa-plus"></i>
                </span>
                <span>Add</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <Card
        v-for="tool in $store.getters.tools"
        :title="tool.title"
        :link="tool.link"
        :description="tool.description"
        :tags="tool.tags"
      />
    </section>
    <div class="modal" :class="{ 'is-active': addModal }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head is-radiusless">
          <p class="modal-card-title">Add new tool</p>
          <button class="delete" aria-label="close" @click.prevent="addButton"></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label class="label">Tool name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Tool name">
            </div>
          </div>
          <div class="field">
            <label class="label">Tool link</label>
            <div class="control">
              <input class="input" type="text" placeholder="Tool link">
            </div>
          </div>
          <div class="field">
            <label class="label">Tool description</label>
            <div class="control">
              <textarea class="textarea" placeholder="Tool description"></textarea>
            </div>
          </div>
          <div class="field">
            <label class="label">Tags</label>
            <div class="control">
              <input class="input" type="text" placeholder="Tool description">
            </div>
          </div>
        </section>
        <footer class="modal-card-foot is-radiusless">
          <button class="button is-success">Add tool</button>
          <button class="button" @click.prevent="addButton">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/Card.vue";

@Component({
  components: {
    Card
  }
})
export default class Home extends Vue {
  private addModal = false;

  get tagsOnly() {
    return this.$store.state.tagsOnly;
  }

  set tagsOnly(value) {
    this.$store.dispatch("setTagsOnly", value);
  }

  search(event: any) {
    console.log(event);
    this.$store.dispatch("search", event.target.value);
  }

  setSearchTerm(event: any) {
    this.$store.commit("setSearchTerm", event.target.value);
  }

  addButton() {
    this.addModal = !this.addModal;
  }
}
</script>
