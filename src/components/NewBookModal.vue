<template>
<modal name="new-book-modal" class="new-book-modal" width="60%" height="auto">
  <BookForm v-on:add-book="addBook" v-on:cancel="closeModal" />
</modal>
</template>

<script>
import BookForm from "./BookForm"

export default {
  name: "NewBookModal",
  components: {
    BookForm
  },
  methods: {
    addBook(newBook) {
      this.$emit("add-book", newBook)
      this.closeModal()
    },
    closeModal() {
      this.$modal.hide("new-book-modal")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.new-book-modal {
}
</style>
