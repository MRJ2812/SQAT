class ShoppingCart {
    constructor() {
        this.items = new Map(); // Use Map to store items with unique IDs as keys
    }

    getItemCount() {
        // Use the size property of the Map for faster retrieval of item count
        return this.items.size;
    }

    addProductToCart(product) {
        // Assuming 'product' has a unique 'id' property
        if (!this.items.has(product.id)) {
            // Use the 'id' property as the key in the Map
            this.items.set(product.id, product);
        }
    }

    getAllItems() {
        // Return an array of all items stored in the shopping cart
        return Array.from(this.items.values());
    }
}

module.exports = ShoppingCart;




