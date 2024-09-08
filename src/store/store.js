import { reactive } from 'vue';

export const store = reactive({
  cart: [],
  get cartCount() {
    return this.cart.length;
  },
  addToCart(item) {
    this.cart.push(item);
  }
});
