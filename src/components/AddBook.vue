<template>
<div class="add-book">
  <form @submit.prevent="addBook">
    <div class="form-input">
      <label for="title">Book Title:</label>
      <input name="title" v-model="title" v-validate="'required|min:5'" type="text" />

      <p class="alert" v-if="errors.has('title')">
        {{ errors.first("title") }}
      </p>
    </div>

    <div class="form-input">
      <label for="author">Author:</label>
      <input name="author" v-model="author" v-validate="'required|min:5'" type="text" />

      <p class="alert" v-if="errors.has('author')">
        {{ errors.first("author") }}
      </p>
    </div>

    <div class="form-input">
      <label for="pages">Number of Pages:</label>
      <input name="pages" v-model="pages" v-validate="'min_value:1'" type="number" />

      <p class="alert" v-if="errors.has('pages')">
        {{ errors.first("pages") }}
      </p>
    </div>

    <div class="form-input">
      <button>Add Book</button>
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: "AddBook",
  data() {
    return {
      title: "",
      author: "",
      pages: ""
    }
  },
  methods: {
    addBook() {
      this.$validator.validateAll().then((result) => {
        if (!result) return

        const newBook = { title: this.title, author: this.author, pages: this.pages, read: false }

        this.clearForm()

        this.$emit("add-book", newBook)
      })
    },
    clearForm() {
      this.title = ""
      this.author = ""
      this.pages = ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-book {
}

.form-input {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

label {
  font-size: 18px;
}

input {
  border: 0;
  padding: 15px;
  font-size: 1.3em;
}

button {
  padding: 15px;
  color: #FFF;
  background-color: #D62839;
  border: none;
}
</style>
