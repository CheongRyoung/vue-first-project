import {createRouter, createWebHistory} from "vue-router";
import ViewNotes from '@/views/ViewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'
import ViewEditNote from '@/views/ViewEditNote.vue'

const router = createRouter({
    history: createWebHistory(),
        routes: [
        {
            path: '/',
            name: 'notes',
            component: ViewNotes
        },
        {
            path: '/stats',
            name: 'stats',
            component: ViewStats
        },
        {
            path: '/editNote/:id',
            name: 'edit-note',
            component: ViewEditNote
        }
    ]
})
export default router
