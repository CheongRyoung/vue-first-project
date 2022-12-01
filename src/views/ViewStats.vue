<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Characters (of all notes)</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
      v-model="lovNoteballs"
      class="input"
      type="text"
      placeholder="Do you love noteballs?"
      v-autofocus/>
  </div>
</template>

<script setup>
/*
  imports
*/

  import { useStoreNotes } from '@/stores/storeNotes'
  import {vAutofocus} from '@/directives/vAutofocus'
  import {ref} from "vue";

/*
  ref
 */
  const lovNoteballs = ref('');

/*
  store
*/

  const storeNotes = useStoreNotes()
/*
  Watch characters (유효성 검사로 활용하면 댈듯)
 */
import {useWatchCharacters} from '@/use/useWatchCharacters'
useWatchCharacters(lovNoteballs, 50)
</script>
