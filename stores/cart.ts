import { defineStore } from 'pinia'
import Item from '~~/interfaces/Item'
import ItemState from '~~/interfaces/ItemStorePinia'


function finalPrice(array: Item[]) {
    let value = 0
    array.forEach((item) => {
        value += item.price * item.quantity

    })
    return value
}

function finalQuanity(array: Item[]) {
    let value = 0
    array.forEach((item) => {
        value += item.quantity

    })
    return value
}


export const cartStore = defineStore('cart', {

    state: (): ItemState => ({
        items: [],
        total: 0,
        quantity: 0

    }),
    actions: {
        add(item: Item) {
            let itemOnCart = (this.items.find((element) => {
                return element.name === item.name && element.price === item.price
            }))

            if (itemOnCart) {
                itemOnCart.quantity += 1
            }
            else {
                this.items.push(item)
            }

            this.quantity = finalQuanity(this.items)
            this.total = finalPrice(this.items)

        },
        remove(item: Item) {
            let removed = this.items.find(element => element.name === item.name)
            if (removed && removed.quantity > 0) {
                removed.quantity -= -1
                this.quantity = finalQuanity(this.items)
                this.total = finalPrice(this.items)
            }
        }
    },
})