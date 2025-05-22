// MenSection.tsx
import React from 'react';
import HomeProductCard from '../HomeProductCard';
import { ArrowRightOutlined } from '@ant-design/icons';
import Link from 'next/link';
const BeautySection = () => {
const BeautyProducts = [
  {
    id: 1,
    name: 'Rare Beauty Mini Eye Essentials',
    description: 'A curated set of mini eye essentials for creating versatile eye looks.',
    price: 12000.00,
    stock: 25,
    images: [
      'https://hairpharma.al/cdn/shop/products/rare_beauty_sincerely_me_mini_eye_essentials-2-1674203296.webp?v=1680965934',
      'https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw76a6ae96/products/RARE/UK200036855_RARE_1.jpg',
      'https://makyage.com/cdn/shop/files/sincerely-me-mini-essentials-kit-product-1440x1952.jpg?v=1704662244&width=900'
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    name: 'Huda Beauty #FauxFilter Corrector',
    description: 'A high-coverage color corrector that neutralizes dark circles and discoloration.',
    price: 11272.21,
    stock: 30,
    images: [
      'https://hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dw774382c4/images/color-corrector/HB_FFCC-REFRESH_PACKSHOT_MANGO.jpg?sw=1242&sh=1242&sm=fit',
      'https://i.ebayimg.com/images/g/6noAAOSwVEhoCpIb/s-l1200.jpg',
      'https://di2ponv0v5otw.cloudfront.net/posts/2023/07/18/64b726a0fb7304241a631fdc/m_wp_64b72724f644e5ac885986cb.webp'
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

  return (
    <div className='bg-white p-4'>
      <div className=' flex justify-between items-center  ' >
      <h2 className='text-2xl font-bold mb-4'>Beauty Collection</h2>
      <Link href={'/'} className=' underline-offset-4 underline cursor-pointer  hover:scale-110 transition-all duration-150 ' >See More <ArrowRightOutlined  className=' animate-pulse '  /> </Link>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {BeautyProducts.map((product) => (
          <HomeProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BeautySection;