<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
    >
      <template #buttons>
        <button @click="addNote" :disabled="!newNote" class="button is-link has-background-success">Add New Note</button>
      </template>
    </AddEditNote>
<!--    <div class="card has-background-success-dark p-4 m-5">-->
<!--      <div class="field">-->
<!--        <div class="control">-->
<!--          <textarea v-model="newNote" class="textarea" placeholder="Add a New Note" ref="newNoteRef"/>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="field is-grouped is-grouped-right">-->
<!--        <div class="control">-->
<!--          <button @click="addNote" :disabled="!newNote" class="button is-link has-background-success">Add New Note</button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <!--하위컴포넌트-->
    <Note
        v-for="note in storeNotes.piniaNotes"
        :key="storeNotes.piniaNotes.id"
        :propNote="note"
    /> <!-- :propNote 키를 통해 하위 컴포넌트에 ref를 보낸다 -->
  </div>
</template>
<script setup>
/*
notes
 */
import {ref} from "vue";
import Note from '@/components/Notes/Note.vue'
import {useStoreNotes} from '@/stores/storeNotes.js'
import AddEditNote from '@/components/Notes/AddEditNote.vue'

const newNoteRef = ref(null) //textArea 노드객체
const newNote =ref('') //textArea model
const storeNotes = useStoreNotes() //pinia state

const addNote = () => {
  storeNotes.addNotes(newNote.value) //pinia action 사용
  newNote.value = ''
  newNoteRef.value.focus() //ref 속성은 getElement와 유사하다
}
</script>
