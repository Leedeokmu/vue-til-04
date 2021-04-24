<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdAt | formatDate }}
      <router-link :to="`/post/${postItem._id}`">
        <i class="icon ion-md-create"></i>
      </router-link>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts';

export default {
  props: {
    postItem: {
      type: Object,
      require: true,
    },
  },
  methods: {
    async deleteItem() {
      if (confirm('Do you want to delete?')) {
        await deletePost(this.postItem._id);
        this.$emit('refresh');
        console.log('deleted');
      }
    },
  },
};
</script>

<style scoped></style>
