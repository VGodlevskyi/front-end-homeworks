import {useState} from 'react';

const initialProductStat = {
    id: null,
    price: 0,
    title: ''
}

export default function ProductForm({product = initialProductStat, onSubmit}) {
    const [data, setData] = useState(product);

    const onSubmitForm = (e) => {
        e.preventDefault();

        if (typeof onSubmit === 'function') {
            onSubmit(data);
        }
    };

    const onElementChange = ({target: {name, value}}) => {
        setData(state => ({
            ...state,
            [name]: value
        }));
    }

    return (
        <div className={'product-form'}>
            <form onSubmit={onSubmitForm}>
                <div>
                    <label>Product title</label>
                    <input type='text'
                           onChange={onElementChange}
                           name='title'
                           value={data.title}/>
                </div>

                <div>
                    <label>Product price</label>
                    <input type='number'
                           onChange={onElementChange}
                           name='price'
                           value={data.price}/>
                </div>

                <button type='submit'>Add product</button>
            </form>
        </div>
    )
}
