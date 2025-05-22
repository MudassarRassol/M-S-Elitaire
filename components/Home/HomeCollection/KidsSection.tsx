// MenSection.tsx
import React from 'react';
import HomeProductCard from '../HomeProductCard';
import { ArrowRightOutlined } from '@ant-design/icons';
import Link from 'next/link';
const KidSection = () => {
const kidProducts = [
    {
      id: 1,
      name: 'Colorful Winter Jacket',
      description: 'Warm and waterproof jacket with fun colors for kids',
      price: 59.99,
      stock: 25,
      discount: 10,
      images: [
        'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/7d9c9163a4dae33c9c2ad821237ab014.jpg?imageView2/2/w/500/q/60/format/webp',
        'https://m.media-amazon.com/images/I/71b8o+osrmL._AC_UY1000_.jpg',
        'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/3994514fb4e1672dfba81fd57fe0035c.jpg'
      ],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      name: 'Cartoon Graphic T-Shirt',
      description: '100% cotton t-shirt with favorite cartoon characters',
      price: 19.99,
      stock: 42,
      images: [
        'https://hutch.pk/cdn/shop/files/Kids-T-Shirt-Graphic-Grey_1024x1024.jpg?v=1714531240',
        'https://images.bewakoof.com/t540/men-s-green-best-buds-graphic-printed-t-shirt-589380-1739771131-1.jpg',
        'https://rising.com.pk/cdn/shop/files/WhatsAppImage2024-05-14at4.42.43PM.jpg?v=1716012247'
      ],
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ];

  return (
    <div className='bg-white p-4'>
      <div className=' flex justify-between items-center  ' >
      <h2 className='text-2xl font-bold mb-4'>Kid's Collection</h2>
      <Link href={'/'} className=' underline-offset-4 underline cursor-pointer  hover:scale-110 transition-all duration-150 ' >See More <ArrowRightOutlined  className=' animate-pulse '  /> </Link>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {kidProducts.map((product) => (
          <HomeProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default KidSection;