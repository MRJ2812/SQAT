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

    getTotalPrice() {
        let totalPrice = 0;
        for (const item of this.items.values()) {
            totalPrice += item.price * item.quantity;
        }
        return totalPrice;
    }

    removeProductFromCart(productId) {
        if (this.items.has(productId)) {
            this.items.delete(productId); // Remove the item with the provided ID from the Map
        } else {
            // Handle scenario when the item to remove is not found in the cart
            console.log(`Item with ID ${productId} not found in the cart.`);
            // Optionally, you can throw an error or handle it in a different way based on your requirements
        }
    }
}

module.exports = ShoppingCart;
