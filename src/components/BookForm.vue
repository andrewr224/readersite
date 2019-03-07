<template>
<div class="book-form">
  <form @submit.prevent="addBook">
    <p class="alert" v-if="errors.has('title')">
      {{ errors.first("title") }}
    </p>

    <div class="form-input">
      <label for="title">Book Title:</label>
      <input name="title" v-model="title" v-validate="'required|min:5'" type="text" />
    </div>


    <p class="alert" v-if="errors.has('author')">
      {{ errors.first("author") }}
    </p>
    <div class="form-input">
      <label for="author">Author:</label>
      <input name="author" v-model="author" v-validate="'required|min:5'" type="text" />
    </div>


    <p class="alert" v-if="errors.has('pages')">
      {{ errors.first("pages") }}
    </p>
    <div class="form-input">
      <label for="pages">Number of Pages:</label>
      <input name="pages" v-model="pages" v-validate="'min_value:1'" type="number" />
    </div>

    <div class="form-input button-group">
      <button>Add Book</button>
      <button @click.prevent="cancel">Close</button>
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: "BookForm",
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
    },
    cancel() {
      this.$emit("cancel")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.book-form {
  padding: 34px;
}

.form-input {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.button-group {
  margin-bottom: 0;
}

label {
  font-size: 18px;
}

input {
  border: 1px solid #CCE6F4;
  padding: 15px;
  font-size: 1.3em;
}
</style>
