// MenSection.tsx
import React from 'react';
import HomeProductCard from '../HomeProductCard';
import { ArrowRightOutlined } from '@ant-design/icons';
import Link from 'next/link';
const MenSection = () => {
  const menProducts = [
    {
      id: 1,
      name: 'Premium Wool Coat',
      description: 'Luxury wool coat with hand-stitched details',
      price: 249.99,
      stock: 15,
      images: [
        'https://www.politix.co.nz/dw/image/v2/ABBA_PRD/on/demandware.static/-/Sites-politix-master-catalog/default/dw3c08e0d3/images/hires/Winter23/E5%20Hanglay%20-%20NOMP/EC54W-CHARMARL-01_NOMP.jpg?sw=2500&sh=3000&sm=cut',
        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E13684s.jpg?im=Resize,width=750',
        'https://davemcsmenswear.com/cdn/shop/files/13102050-912-01.jpg?v=1710864215'
      ],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      name: 'Classic Leather Jacket',
      description: 'Genuine leather jacket with vintage finish',
      price: 199.99,
      stock: 10,
      images: [
        'https://www.houseofleather.pk/cdn/shop/files/A_210dc6e0-73ec-45aa-8c2f-71760eecc875.jpg?v=1698409056',
        'https://www.thefinestleathers.com/cdn/shop/files/DSC00047.jpg?v=1746371445&width=1080',
        'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1263025_alternate10?$plpDeskRF$'
      ],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  return (
    <div className='bg-white p-4'>
      <div className=' flex justify-between items-center  ' >
      <h2 className='text-2xl font-bold mb-4'>Men's Collection</h2>
      <Link href={'/'} className=' underline-offset-4 underline cursor-pointer  hover:scale-110 transition-all duration-150 ' >See More <ArrowRightOutlined  className=' animate-pulse '  /> </Link>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {menProducts.map((product) => (
          <HomeProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MenSection;