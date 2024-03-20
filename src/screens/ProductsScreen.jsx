import React from 'react';
import {Bounce} from 'react-awesome-reveal';
import {Slide} from 'react-awesome-reveal';
import Heading from '../components/products/Heading';
import Product from '../components/products/Product';
import useFetch from '../hooks/useFetch';

const ProductsScreen = () => {
    const [data] = useFetch('products');

    return (
        <div className=" bg-gray-200  h-full w-full pt-10 mx-auto px-6 " >

            <div className="text-2xl font-medium mt-8 font-serif p-10 pl-20">
                <Slide triggerOnce>
                <Heading title="Products"/>
                </Slide>
            </div>
            <div className='min-h-screen p-8  rounded-xl w-full flex items-center justify-center'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 py-8">
                {data.map(product => (
                    // <Bounce left key={product.id}>
                        <Product {...product} />
                    // {/* </Bounce> */}
                ))}
            </div>
            </div>
        </div>
    )
}

export default ProductsScreen