// get the shooping cart from Component folder.
const ShoppingCart = require("../Component/refactor");

// This is a failing test case
test('Adding an item to the shopping cart', () => {

    // Mock cart functionality (not implemented yet)
    const cart = new ShoppingCart();

    // Ensure cart is initially empty
    expect(cart.getItemCount()).toBe(0);

    // Add an item to the cart
    cart.addProductToCart({ id: 1, name: 'Product 1', price: 10 });

    // Expect the cart to have one item after adding
    expect(cart.getItemCount()).toBe(1);
});





