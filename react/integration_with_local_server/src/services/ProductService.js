import CoreService from "./CoreService";

// export default class ProductService{
//     static getProducts(){
//         return fetch('http://localhost:3029/api/v1/products')
//             .then(response => response.json());
//     }
// }
export default class ProductService extends CoreService {
    constructor() {
        super();
        this.url = 'products';
    }

    async getProducts() {
        return this.getRequest(this.url);
    }

    async createProduct({title, price}) {
        return this.postRequest(this.url, {
            title,
            price
        });
    }
}
