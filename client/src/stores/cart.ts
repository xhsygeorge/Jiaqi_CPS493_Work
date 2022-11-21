import myFetch from "@/services/myFetch";
import { reactive, watch } from "vue";
import type {  Product } from "./products";
import session from "./session";

const PATCH = 'PATCH';

export interface CartItem {
    quantity: number;
    product: Product;
}

const cart = reactive([] as CartItem[]);

export function load() {
    myFetch(`cart/${session.user?.email}`).then((data) => {
        cart.splice(0, cart.length, ...data as CartItem[]);
    });
}
watch(()=> session.user, load);

export function addProductToCart(product: Product, quantity: number = 1) {
    myFetch(`cart/${session.user?.email}`, { productId: product.id, quantity }).then((data) => {
        const i = cart.findIndex((x) => x.product.id === product.id);
        if (i != -1) {
            cart[i] = data as CartItem;
        } else {
            cart.unshift(data as CartItem);
        }
    });
}

export function updateProductQuantity(id: number, quantity: number) {
    myFetch<CartItem>(`cart/${session.user?.email}/${id}/${quantity}`, {}, PATCH).then((data) => {
        const i = cart.findIndex((x) => x.product.id === id);
        if (i != -1) {
            if(data){
                cart[i] = data;
            }else{
                cart.splice(i, 1);
            }
        }
    });
}

export default cart;