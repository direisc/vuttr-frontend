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
      <Card v-for="tool in $store.getters.tools" v-bind:key="tool.id" :tool="tool"/>
    </section>
    <div class="modal" :class="{ 'is-active': addModal }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head is-radiusless">
          <p class="modal-card-title">Add new tool</p>
          <button class="delete is-large" aria-label="close" @click.prevent="addButton"></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label class="label">Tool name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Tool name" v-model="tool.title">
            </div>
          </div>
          <div class="field">
            <label class="label">Tool link</label>
            <div class="control">
              <input class="input" type="text" placeholder="Tool link" v-model="tool.link">
            </div>
          </div>
          <div class="field">
            <label class="label">Tool description</label>
            <div class="control">
              <textarea class="textarea" placeholder="Tool description" v-model="tool.description"></textarea>
            </div>
          </div>
          <div class="field">
            <label class="label">Tags</label>
            <div class="control">
              <input class="input" type="text" placeholder="Tool tags" v-model="tool.tagsInput">
            </div>
          </div>
        </section>
        <footer class="modal-card-foot is-radiusless">
          <button class="button is-primary" @click.prevent="addTool">Add tool</button>
          <button class="button" @click.prevent="addButton">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/Card.vue";

class Tool {
  title?: string;

  link?: string;

  description?: string;

  tags?: string[];

  tagsInput?: string;
}

@Component({
  components: {
    Card
  }
})
export default class Home extends Vue {
  private addModal = false;

  private tool: Tool = {};

  mounted() {
    this.$store.dispatch("tools");
  }

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
    this.tool = {};
    this.addModal = !this.addModal;
  }

  addTool() {
    if (this.tool.tagsInput) {
      this.tool.tags = this.tool.tagsInput.split(" ");
    }
    this.tool.tagsInput = undefined;
    console.log(this.tool);
    this.$store.dispatch("create", this.tool);
    this.addModal = !this.addModal;
  }
}
</script>
