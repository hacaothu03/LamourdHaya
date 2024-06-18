import React, { useContext } from "react";
import './RelatedProducts.css'
import { ShopContext } from "../../Context/ShopContext";
import Item from "../Item/Item";

const RelatedProducts = ({ productId }) => {
    const { getRelatedProducts } = useContext(ShopContext);
    const relatedProducts = getRelatedProducts(productId);

    if (!relatedProducts || relatedProducts.length === 0) {
        return <div>No related products found.</div>;
    }

    return (
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {relatedProducts.map((item, i) => (
                    <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                ))}
            </div>
        </div>
    );
}

export default RelatedProducts;
