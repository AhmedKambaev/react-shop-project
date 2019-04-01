export default class StoreService {
    data = [
        {
            id: 1,
            title: 'Allistero',
            image: 'assets/images/products/product-1.jpg',
            price: 39
        },
        {
            id: 2,
            title: 'Aclirondack',
            image: 'assets/images/products/product-2.jpg',
            price: 42
        },
        {
            id: 3,
            title: 'Indoructor',
            image: 'assets/images/products/product-3.jpg',
            price: 37
        }
    ];


    getProducts() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data)
            }, 1200);
        });
    };
}