import { defineStore } from 'pinia'

export const counterStore = defineStore('counter', {
    state: () => ({ count: 0 }),
    actions: {
        increment() {
            this.count++
            console.log(this.count)

        },
    },
})
