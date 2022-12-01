<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card"  ref="modalCard">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        진짜 삭제할꺼야....?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button class="button" @click="closeModal">Cancel</button>
        <button class="button is-danger" @click="storeNotes.deleteNote(noteId)">Delete</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, ref} from "vue";

  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false
    },
    noteId: {
      type: String,
      required: true
    }
  })
/*
  emits 상위 컴포넌트의 ref 값을 업데이트 하겠어!
 */
  const emit = defineEmits(['update:modelValue'])

/*
  close modal
 */
 const closeModal = () => {
   emit('update:modelValue', false)
 }

  /*
   click outside to close
  */
  import {onClickOutside} from '@vueuse/core'
  const modalCard = ref(null)
  onClickOutside(modalCard, closeModal, {
    ignore: [modalCard]
  })

  /*
  keyboard control 마운트할때마다 이벤트를 등록하는데 계속 존재하니 삭제해야함
   */
  const handleKeyboard = e => {
    if(e.key === 'Escape') closeModal()
  }

  onMounted(() => {
    document.addEventListener('keyup', handleKeyboard)
  })
  onUnmounted(() => {
    document.removeEventListener('keyup', handleKeyboard)
  })

  /*
   store
   */
  import {useStoreNotes} from '@/stores/storeNotes'
  const storeNotes = useStoreNotes()


</script>

<style scoped>

</style>
