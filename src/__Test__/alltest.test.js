const ShoppingCart = require('../Component/test');

const cart = new ShoppingCart();

const product1 = { id: 1, name: 'Product A', price: 10, quentity: 2 };
const product2 = { id: 2, name: 'Product B', price: 20, quentity: 1 };
const product3 = { id: 3, name: 'Product C', price: 15, quentity: 1 };

describe('ShoppingCart', () => {

    test('Adding multiple item to the shopping cart', () => {

        expect(cart.getItemCount()).toBe(0);

        cart.addProductToCart(product1);
        cart.addProductToCart(product2);
        cart.addProductToCart(product3);

        expect(cart.getItemCount()).toBe(3);
    });

    test('Retrieve all items from the cart', () => {

        const items = cart.getAllItems();

        expect(items).toHaveLength(3);
        expect(items).toEqual([product1, product2, product3]);
    });

    test('Calculate total price of items in the cart', () => {

        const expectedTotalPrice = (product1.price * product1.quantity) + (product2.price * product2.quantity) + (product3.price * product3.quantity);

        const actualTotalPrice = cart.getTotalPrice();

        expect(actualTotalPrice).toBe(expectedTotalPrice);
    });

    test('Remove an item from the cart', () => {

        let itemsBeforeRemoval = cart.getAllItems();

        cart.removeProductFromCart(product2.id);

        const itemsAfterRemoval = cart.getAllItems();

        expect(itemsAfterRemoval).toHaveLength(itemsBeforeRemoval.length - 1);
        expect(itemsAfterRemoval).not.toContainEqual(product2);
    });

    test('Calculate total price after remove item', () => {

        const expectedTotalPrice = (product1.price * product1.quantity) + (product2.price * product2.quantity) + (product3.price * product3.quantity);

        const actualTotalPrice = cart.getTotalPrice();

        expect(actualTotalPrice).toBe(expectedTotalPrice);
    });
});
