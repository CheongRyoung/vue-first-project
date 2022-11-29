import {defineStore} from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
        return {
            piniaNotes: [
                {
                    id: 'id1',
                    content: 'lorem'
                },
                {
                    id: 'id2',
                    content: '메모장을 준비합니다'
                },
                {
                    id: 'id3',
                    content: '메모를 작성해봐요!'
                }
            ]
        }
    },
    actions: {
        addNotes(newNoteContent) {
            let currentDate = new Date().getTime().toString();
            let note = {
                id: currentDate,
                content: newNoteContent
            }
            this.piniaNotes.unshift(note) //unshift 배열 맨 앞에 추가, 길이 반환
        },
        deleteNote(idToDelete) {
            this.piniaNotes = this.piniaNotes.filter(note => {return note.id != idToDelete})
        }
    },

})
