<template>
<div class="books">
  <h3 v-if="books.length === 0">Your book list is yet empty</h3>

  <AddBook v-on:add-book="addBook" />

  <ul>
    <transition-group name="list" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <li :key="index" v-for="(book, index) in books">
        <Book :book="book" :index="index" />
      </li>
    </transition-group>
  </ul>
</div>
</template>

<script>
import AddBook from "./AddBook"
import Book from "./Book"

export default {
  name: "Books",
  components: {
    AddBook,
    Book
  },
  data() {
    return {
      books: [
        { "title": "Well Grounded Rubyist", "author": "David A. Black", "pages": 575, "read": false },
        { "title": "Eloquent Ruby", "author": "Russ Olsen", "pages": 447,"read": false },
        { "title": "Metaprogramming Ruby: Program Like the Ruby Pros", "author": "Paolo Perrotta", "pages": 261,"read": false },
        { "title": "Effective Testing with RSpec 3: Build Ruby Apps with Confidence", "author": "Ian Dees and Myron Marston", "pages": 356,"read": false },
        { "title": "The Hobbit", "author": "J. R. R. Tolkien", "pages": 300,"read": true },
        { "title": "Candide", "author": "Voltaire", "pages": 112,"read": true },
        { "title": "The Republic", "author": "Plato", "pages": 182,"read": false }
      ]
    }
  },
  methods: {
    addBook(newBook) {
      this.books.push(newBook)
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
