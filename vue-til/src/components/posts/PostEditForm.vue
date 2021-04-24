<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <h1 class="page-header">Edit Post</h1>
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="title" />
        </div>
        <div>
          <label for="contents">Contents:</label>
          <textarea id="contents" rows="5" v-model="contents"></textarea>
          <p class="validation-text">
            <span class="warning">
              Text is Too Long. Make Sure Less Than Or Equal To 200
            </span>
          </p>
        </div>
        <button type="submit">Update</button>
      </form>
      <div class="log">{{ logMessage }}</div>
    </div>
  </div>
</template>

<script>
import { editPost, fetchPost } from '@/api/posts';

export default {
  name: 'PostEditForm',
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
      try {
        const id = this.$route.params.id;
        const editData = {
          title: this.title,
          contents: this.contents,
        };
        await editPost(id, editData);
        this.$router.push('/main');
      } catch (error) {
        console.error(error);
        this.logMessage = error.response.data.message;
      }
    },
  },
  async created() {
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);
    this.title = data.title;
    this.contents = data.contents;
  },
};
</script>

<style scoped></style>
