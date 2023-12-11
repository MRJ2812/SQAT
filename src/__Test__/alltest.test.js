const ShoppingCart = require('../Component/test');

const cart = new ShoppingCart();

const product1 = { id: 1, name: 'Product A', price: 10, quentity: 2 };
const product2 = { id: 2, name: 'Product B', price: 20, quentity: 1 };
const product3 = { id: 3, name: 'Product C', price: 15, quentity: 1 };


describe('ShoppingCart', () => {

    test('Adding multiple item to the shopping cart', () => {

        // Ensure cart is initially empty
        expect(cart.getItemCount()).toBe(0);

        // Add item to the cart
        cart.addProductToCart(product1);
        cart.addProductToCart(product2);
        cart.addProductToCart(product3);

        // Expect the cart to have one item after adding
        expect(cart.getItemCount()).toBe(3);
    });


    test('Retrieve all items from the cart', () => {

        // Retrieve all items from the cart
        const items = cart.getAllItems();

        // Expect the cart to contain all added products
        expect(items).toHaveLength(3);

        // Match the added products with the retrieved items
        expect(items).toEqual([product1, product2, product3]);
    });

    test('Calculate total price of items in the cart', () => {

        // Calculate the expected total price based on added products
        const expectedTotalPrice = (product1.price * product1.quantity) + (product2.price * product2.quantity) + (product3.price * product3.quantity);

        // Call the getTotalPrice function
        const actualTotalPrice = cart.getTotalPrice();

        // Verify that the actual and expected prices match
        expect(actualTotalPrice).toBe(expectedTotalPrice);
    });


    test('Remove an item from the cart', () => {


        // Retrieve all items from the cart before removal
        let itemsBeforeRemoval = cart.getAllItems();

        // Remove one item from the cart
        cart.removeProductFromCart(product2.id);

        // Retrieve all items from the cart after removal
        const itemsAfterRemoval = cart.getAllItems();

        // Expect the cart to contain one less item after removal
        expect(itemsAfterRemoval).toHaveLength(itemsBeforeRemoval.length - 1);

        // Expect the removed item not to be present in the cart after removal
        expect(itemsAfterRemoval).not.toContainEqual(product2);
    });



    test('Calculate total price after remove item', () => {

        // Calculate the expected total price based on added products
        const expectedTotalPrice = (product1.price * product1.quantity) + (product2.price * product2.quantity) + (product3.price * product3.quantity);

        // Call the getTotalPrice function
        const actualTotalPrice = cart.getTotalPrice();

        // Verify that the actual and expected prices match
        expect(actualTotalPrice).toBe(expectedTotalPrice);
    });

});
