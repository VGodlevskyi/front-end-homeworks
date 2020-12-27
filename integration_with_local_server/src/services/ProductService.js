import CoreService from "./CoreService";

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

    async editProduct({id, title, price}) {
        return this.putRequest(`${this.url}/${id}`, {
            title,
            price
        });
    }
}
