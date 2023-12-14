class ShoppingCart {

    constructor() {
        this.items = new Set();
    }

    getItemCount() {
        return this.items.size;
    }

    addProductToCart(product) {

        if (typeof product !== 'object' || product === null) {
            throw new Error('Invalid product: Not an object');
        }

        const requiredProperties = ['id', 'name', 'price'];
        const hasAllProperties = requiredProperties.every(prop => Object.prototype.hasOwnProperty.call(product, prop));

        if (!hasAllProperties) {
            throw new Error('Invalid product: Missing required properties');
        }

        this.items.add(product);
    }
}
module.exports = ShoppingCart;
