import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';

const Checkout = ({productid, store}) => {
    const [productId, setProductId] = useState(0);

    useEffect(() => {
        store.productId.subscribe({
            next: (val) => setProductId(val)
        });
    }, [])

    const handleImageChange = () => {
        store.images.next(['test', 'test3']);
    };
    console.log(productid, 'productId');
    return (
        <div>
            <h2>This is Checkout</h2>
            <div>Product Id: {productId}</div>
            <div>
                <button onClick={handleImageChange}>Change Image</button>
            </div>
        </div>
    )
}

// global registry object myMfe, that has a registerComponent fn

global.myMfe.registerComponent('checkout', {
    create(node, props) {
        ReactDom.render(<Checkout {...props} />, node)
    }
});