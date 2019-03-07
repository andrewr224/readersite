<template>
<div class="book">
  <h3>{{ book.title }}</h3>
  <p><small> by </small>{{ book.author }}</p>
  <p v-if="book.pages">{{ book.pages }} pages</p>
  <p v-on:click="toggleRead(index)" class="read-status">{{ book.read ? "Read" : "Unread" }}</p>
</div>
</template>

<script>
export default {
  name: "Book",
  props: ["book", "index"],
  methods: {
    toggleRead(index) {
      this.$emit("toggle-read", index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.book {
  background-color: #E0EDF4;
  padding: 4px;
  margin-top: 14px;
  margin-bottom: 14px;
}

h3 {
  color: #BA324F;
}
p.read-status {
  cursor: pointer;
}
p.read-status:hover {
  color: #BA324F;
}
</style>
