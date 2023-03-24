import { counterStore } from "~~/stores/counter";
export default function useCount() {
    const store = counterStore()


    let storeState = store.$state

    function increment() {
        store.increment();
    }


    

    return{
        storeState,
        increment,
    };
}