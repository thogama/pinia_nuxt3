import Item from "~~/interfaces/Item";
import { cartStore } from "~~/stores/cart";

export default function useCart() {
    const store = cartStore()


    let storeState = store.$state

    function addItem(item: Item) {
        store.add(item)
    }

    function removeItem(item: Item) {
        store.remove(item)
    }

    return {
        storeState,
        addItem,
        removeItem
    };
}