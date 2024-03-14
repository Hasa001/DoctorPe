import React from 'react';
import Flash from 'react-awesome-reveal';
import Heading from '../components/products/Heading';
import Product from '../components/products/Product';
import useFetch from '../hooks/useFetch';

const ProductsScreen = () => {
    const [data] = useFetch('products');

    return (
        <section className=" bg-slate-100 h-100 w-100 py-24 mx-auto px-6">
            {/* heading  */}
            <Heading title="Products" />
            {/* products  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 py-8">
                {data.map(product => (
                    <Flash left key={product.id}>
                        <Product {...product} />
                    </Flash>
                ))}
            </div>
        </section>
    )
}

export default ProductsScreen