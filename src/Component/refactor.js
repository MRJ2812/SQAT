class ShoppingCart {

    constructor() {
        // Use a Set instead of an Array for faster lookup and prevent duplicate items
        this.items = new Set();
    }

    // change the function name.
    getItemCount() {
        // Use the size property of the Set for faster retrieval of item count
        return this.items.size;
    }

    // change the function name.
    addProductToCart(product) {

        if (typeof product !== 'object' || product === null) {
            throw new Error('Invalid product: Not an object');
        }

        // Check if the required properties are present in the product object
        const requiredProperties = ['id', 'name', 'price'];
        const hasAllProperties = requiredProperties.every(prop => Object.prototype.hasOwnProperty.call(product, prop));

        if (!hasAllProperties) {
            throw new Error('Invalid product: Missing required properties');
        }

        this.items.add(product);
    }
}
module.exports = ShoppingCart;
