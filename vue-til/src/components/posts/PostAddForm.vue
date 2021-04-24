<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <h1 class="page-header">Create Post</h1>
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="title" />
        </div>
        <div>
          <label for="contents">Contents:</label>
          <textarea id="contents" rows="5" v-model="contents"></textarea>
          <p class="validation-text warning" v-if="!isContentsValid">
            Text is Too Long. Make Sure Less Than Or Equal To 200
          </p>
        </div>
        <button type="submit" class="btn">Create</button>
      </form>
      <div class="log">{{ logMessage }}</div>
    </div>
  </div>
</template>

<script>
import { createPost } from '@/api/posts';

export default {
  name: 'PostAddForm',
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    },
  },
  methods: {
    async submitForm() {
      const postData = {
        title: this.title,
        contents: this.contents,
      };
      try {
        await createPost(postData);
        this.$router.push('/main');
      } catch (e) {
        this.logMessage = e.response.data.message;
      }
    },
  },
};
</script>

<style scoped></style>
