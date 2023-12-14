class ShoppingCart {

    constructor() {
        this.items = new Map();
    }

    getItemCount() {
        return this.items.size;
    }

    addProductToCart(product) {

        if (typeof product !== 'object' || product === null) {
            throw new Error('Invalid product: Not an object');
        }

        const requiredProperties = ['id', 'name', 'price', 'quentity'];
        const hasAllProperties = requiredProperties.every(prop => Object.prototype.hasOwnProperty.call(product, prop));

        if (!hasAllProperties) {
            throw new Error('Invalid product: Missing required properties');
        }

        this.items.set(product.id, product);
    }

    getAllItems() {
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
            this.items.delete(productId);
        }
        else {
            console.log(`Item with ID ${productId} not found in the cart.`);
        }
    }
}
module.exports = ShoppingCart;
