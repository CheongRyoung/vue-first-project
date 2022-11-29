<template>
  <div class="edit-note">
    <!-- router의 파라미터를 받을 수 있다 -->
    <h1>Edit Note with an id of: {{$route.params.id}}</h1>
  </div>
</template>

<script>
export default {
  name: "ViewEditNote"
}
</script>

<style scoped>

</style>
