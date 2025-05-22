// WomenSection.tsx
import React from 'react';
import HomeProductCard from '../HomeProductCard';
import { ArrowRightOutlined } from '@ant-design/icons';
import Link from 'next/link';

const WomenSection = () => {
const womenProducts = [
  {
    id: 1,
    name: 'Silk Floral Midi Dress',
    description: 'Elegant silk midi dress with vibrant floral patterns, perfect for summer outings.',
    price: 129.99,
    stock: 20,
    images: [
      'https://slipintosoft.com/cdn/shop/files/womens-summer-silk-floral-dress-v-neck-guest-party-silk-midi-dress-408811.jpg?v=1724341411',
      'https://www.mytheresa.com/media/1094/1238/100/76/P00912662_b1.jpg',
      'https://alexiamaria.com/cdn/shop/files/LucieSkyFloralSilkFailleALineMidiDress-1_66c0d3e9-cfc1-4084-ae72-01dbdd8de82c.jpg?v=1710280484'
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    name: 'Denim Jacket',
    description: 'Classic denim jacket with a modern fit, suitable for all seasons.',
    price: 89.99,
    stock: 15,
    images: [
      'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/15507912/2021/12/22/49a339c0-d4ee-40f8-8f6d-96ac23faff591640158848256-Mast--Harbour-Women-Jackets-1211640158847593-1.jpg',
      'https://di2ponv0v5otw.cloudfront.net/posts/2024/04/18/662161de538bebcd6ff126b3/m_wp_66216568a2c69e4fb83281d8.webp',
      'https://m.media-amazon.com/images/I/71SV3S+xq6L._AC_UY1000_.jpg'
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  }
];


  return (
    <div className='bg-white p-4'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-bold mb-4'>Women's Collection</h2>

          <Link href={'/'} className='underline-offset-4 underline cursor-pointer hover:scale-110 transition-all duration-150'>
            See More <ArrowRightOutlined className='animate-pulse' />
          </Link>

      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {womenProducts.map((product) => (
          <HomeProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default WomenSection;
