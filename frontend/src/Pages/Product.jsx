import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
    const { allProducts } = useContext(ShopContext);
    const { productId } = useParams();
    const product = allProducts.find((e) => e.id === Number(productId));

    if (!product) {
        console.error(`Product with id ${productId} not found`);
        return <div>Product not found or loading...</div>;
    }

    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product = {product}/>
            <DescriptionBox />
            <RelatedProducts productId={Number(productId)} />
        </div>
    );
};

export default Product;
