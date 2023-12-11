class ShoppingCart {
    constructor() {
        // Array to store items in the cart
        this.items = [];
    }

    getItemCount() {
        // Get the total number of product store in cart.
        return this.items.length;
    }

    addItem(item) {
        // after call this function from test file, this function add new product.
        this.items.push(item);
    }
}

// Export the ShoppingCart class for testing or usage elsewhere
module.exports = ShoppingCart;

