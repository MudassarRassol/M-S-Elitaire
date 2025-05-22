// HomeProductCard.tsx
import React from 'react';
import Card from 'antd/es/card/Card';
import Meta from 'antd/es/card/Meta';
import { Button, Carousel } from 'antd';
import { Image } from 'antd';
import { BiCart } from 'react-icons/bi';
import './Collection.css';
import { EyeOutlined } from '@ant-design/icons';
interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    images: string[];
    createdAt: Date;
    updatedAt: Date;
}

const HomeProductCard = ({ product }: { product: Product }) => {
    return (
        <Card
            className='product-card'
            hoverable
            cover={
                <div className='relative'>
                    <Carousel
                        dots={{ className: 'custom-dots' }}
                    >

                        {product.images.map((image: string, index: number) => (
                            <div key={index} className="h-auto md:h-80">
                                <Image
                                    key={index}
                                    src={image}
                                    alt={`Product Image ${index + 1}`}
                                    className=' aspect-square  object-cover md:aspect-[2/3] '
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            }
            actions={[
                <div className=' grid grid-cols-2   ' >
                    <Button
                        // type="default"
                        className="custom-add-to-cart-btn"
                        key="add-to-cart"
                    >
                        <BiCart className="text-xl" />
                    </Button>
                    <Button
                        type="default"
                        className="custom-add-to-eye-btn"
                        key="add-to-cart"
                    >
                        <EyeOutlined className="text-xl" />
                    </Button>

                </div>
            ]}
        >
            <Meta
                className='w-full text-[#c79e60]'
                title={product.name}
                description={
                    <>
                        <div className='flex justify-between items-center w-full' >
                            <span className=' text-md md:text-lg font-bold text-[#c79e60]'>${product.price.toFixed(2)}</span>
                            <span className='text-sm text-red-500'>In Stock: {product.stock}</span>
                        </div>
                        <div className="text-sm text-gray-500  line-clamp-1 md:line-clamp-2 ">{product.description}</div>
                    </>
                }
            />
        </Card>
    );
};

export default HomeProductCard;