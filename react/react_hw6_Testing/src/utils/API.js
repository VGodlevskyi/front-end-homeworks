export const fetchProducts = () => (
    fetch('products.json')
        .then(res => res.json())
);
