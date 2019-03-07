<template>
<div class="books">
  <h3 v-if="books.length === 0">Your book list is yet empty</h3>

  <NewBookModal v-on:add-book="addBook" />

  <button v-on:click="showBookModal">Add Book</button>

  <ul>
    <transition-group name="list" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <li :key="index" v-for="(book, index) in books">
        <Book :book="book" :index="index" v-on:toggle-read="toggleRead" v-on:remove-book="removeBook" />
      </li>
    </transition-group>
  </ul>
</div>
</template>

<script>
import NewBookModal from "./NewBookModal"
import Book from "./Book"

export default {
  name: "Books",
  components: {
    NewBookModal,
    Book
  },
  data() {
    return {
      books: [
        { "title": "Well Grounded Rubyist", "author": "David A. Black", "pages": 575, "read": false },
        { "title": "Metaprogramming Ruby: Program Like the Ruby Pros", "author": "Paolo Perrotta", "pages": 261,"read": false },
        { "title": "The Hobbit", "author": "J. R. R. Tolkien", "pages": 300,"read": true },
        { "title": "Candide", "author": "Voltaire", "pages": 112,"read": true }
      ]
    }
  },
  methods: {
    addBook(newBook) {
      this.books.push(newBook)
    },
    showBookModal() {
      this.$modal.show("new-book-modal")
    },
    toggleRead(index) {
      this.books[index].read = !this.books[index].read
    },
    removeBook(index) {
      this.books.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.books {
  width: 66%;
  margin: 66px auto 0 auto;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

p {
  text-align: center;
  color: gray;
}
</style>
