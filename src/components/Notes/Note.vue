<template>
  <div class="card m-5">
    <div class="card-content">
      <div class="content">
        {{ propNote.content }}
        <div class="has-text-right has-text-grey-light">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <!-- a 태그를 RouterLink로 사용하면 페이지 이동을 한다 -->
      <RouterLink
          :to="`/editNote/${propNote.id}`"
          href="#"
          class="card-footer-item">Edit</RouterLink>
      <a
          @click.prevent="storeNotes.deleteNote(propNote.id)"
          href="#"
          class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script setup>
/*
props 상위 컴포넌트에서 받은 데이터
 */
const props = defineProps({
  propNote: {
    type: Object,
    required: true
  }
})
/*
computed 컴퓨티드(computed) 속성은 템플릿의 데이터 표현을 더 직관적이고 간결하게 도와주는 속성
 */
import {computed} from "vue"
const characterLength = computed(() => {
  let length = props.propNote.content.length
  let description = length > 1 ?
      'characters' : 'character'
  return `${length} ${description}`
})

/*
emits 이벤트를 상위로 전달하는 것
 */
// const emit = defineEmits(['handleDeleteClick'])
// const handleDeleteClick = () => {
//   emit('deleteClicked', props.propNote.id)  // param(@속성네임, 전달할 데이터)
// }
// 상위 컴포넌트에서 @deleteClicked="deleteNote" 속성 선언
// 상위 스크립트에서 메소드 선언
// const deleteNote = idToDelete => {
//   storeNotes.piniaNotes = storeNotes.piniaNotes.filter(note => {return note.id != idToDelete})
// }

/*
pinia store
 */
import {useStoreNotes} from '@/stores/storeNotes'
const storeNotes = useStoreNotes()
</script>

<style scoped>

</style>
