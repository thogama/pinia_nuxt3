import Item from "./Item"

interface ItemState {
    total: number,
    items: Item[],
    quantity: number
}

export default ItemState