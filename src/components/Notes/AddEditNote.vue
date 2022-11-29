<template>
  <div class="card has-background-success-dark p-4 m-5">
    <div class="field">
      <div class="control">
        <textarea
            v-bind="modelValue"
            @input="$emit('update:modelValue', modelValue)"
            class="textarea"
            placeholder="Add a New Note"
            ref="newNoteRef"/>
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>

</style>
