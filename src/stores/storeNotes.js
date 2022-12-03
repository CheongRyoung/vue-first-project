import { defineStore } from 'pinia'
import {db} from '@/js/firebase'
import { collection, onSnapshot
  ,doc, setDoc, deleteDoc, updateDoc, addDoc
  ,query, where, orderBy} from 'firebase/firestore'
import {useStoreAuth} from '@/stores/storeAuth'

let notesCollectionRef
let notesCollectionQuery
let getNotesSnapshot = null
export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [],
      notesLoaded: false
    }
  },
  actions: {
    init() {
      // initialize our database refs
      const storeAuth = useStoreAuth()
      console.info(storeAuth.user)
      notesCollectionRef = collection(db, 'users', storeAuth.user.id, 'notes')
      notesCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"));
      this.getNotes()
    },
    clearNotes() {
      this.notes = []
      if(getNotesSnapshot) getNotesSnapshot()
    },
    async getNotes() {
      this.notesLoaded = false
      if(getNotesSnapshot) getNotesSnapshot() // unsubscribe from any active listener 함수 실행으로 중지
      getNotesSnapshot = onSnapshot(notesCollectionQuery, (querySnapshot) => {
        let notes = []
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
            date:doc.data().date
          }
          notes.push(note)
        });
        this.notes = notes
        this.notesLoaded = true
      });
      // 중지를 시켜줘야됨 이전 사용자가 사용하던 function이 종료되지 않고 계속 실행중..
    },
    async addNote(newNoteContent) {
      let currentDate = new Date().getTime(),
          date = currentDate.toString()
      // this.notes.unshift(note)

      // 사용자 정의 id 값으로 데이터 인서트
      await addDoc(notesCollectionRef, {
        content: newNoteContent,
        date
      });
    },
    async deleteNote(idToDelete) {
      await deleteDoc(doc(notesCollectionRef, idToDelete)); //DB 삭제
      // this.notes = this.notes.filter(note => note.id !== idToDelete )  //로컬삭제
    },
    async updateNote(id, content) {
      // let index = this.notes.findIndex(note => note.id === id)
      // this.notes[index].content = content
      await updateDoc(doc(notesCollectionRef, id), {
        content: content
      });
    }
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter(note => note.id === id )[0].content
      }
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      let count = 0
      state.notes.forEach(note => {
        count += note.content.length
      })
      return count
    }
  }
})
