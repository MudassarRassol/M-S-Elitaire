"use client"
import React, { useState } from 'react';
import { 
  Menu, 
  Button, 
  Drawer,
  Badge,
  Dropdown
} from 'antd';
import { 
  ShoppingCartOutlined, 
  MenuOutlined,
  CloseOutlined,
  DownOutlined
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import logo from '@/assets/WhatsApp Image 2025-05-20 at 21.57.31_4468c9ed.jpg';
import Image from 'next/image';
import { CgShoppingCart } from 'react-icons/cg';

const Navbar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const router = useRouter();

  // Product dropdown menus
  const menItems = [
    { key: 'men-shirts', label: 'Shirts', onClick: () => router.push('/products/men/shirts') },
    { key: 'men-pants', label: 'Pants', onClick: () => router.push('/products/men/pants') },
    { key: 'men-shoes', label: 'Shoes', onClick: () => router.push('/products/men/shoes') },
  ];

  const womenItems = [
    { key: 'women-dresses', label: 'Dresses', onClick: () => router.push('/products/women/dresses') },
    { key: 'women-bags', label: 'Bags', onClick: () => router.push('/products/women/bags') },
    { key: 'women-beauty', label: 'Beauty', onClick: () => router.push('/products/women/beauty') },
  ];

  const kidsItems = [
    { key: 'kids-toys', label: 'Toys', onClick: () => router.push('/products/kids/toys') },
    { key: 'kids-clothes', label: 'Clothes', onClick: () => router.push('/products/kids/clothes') },
    { key: 'kids-shoes', label: 'Shoes', onClick: () => router.push('/products/kids/shoes') },
  ];

  const productsMenu = (
    <Menu className="min-w-[200px] bg-amber-500">
      <Menu.SubMenu key="men" title="Men" popupClassName="product-submenu">
        {menItems.map(item => (
          <Menu.Item key={item.key} onClick={item.onClick}>{item.label}</Menu.Item>
        ))}
      </Menu.SubMenu>
      <Menu.SubMenu key="women" title="Women" popupClassName="product-submenu">
        {womenItems.map(item => (
          <Menu.Item key={item.key} onClick={item.onClick}>{item.label}</Menu.Item>
        ))}
      </Menu.SubMenu>
      <Menu.SubMenu key="kids" title="Kids" popupClassName="product-submenu">
        {kidsItems.map(item => (
          <Menu.Item key={item.key} onClick={item.onClick}>{item.label}</Menu.Item>
        ))}
      </Menu.SubMenu>
    </Menu>
  );

  return (
    <header className="sticky top-0 z-50 border-b p-1 bg-[#000000c0] ">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center container mx-auto px-6 h-16">
        {/* Left - Logo */}
        <Image
          src={logo}
          alt='M&S Elitaire'
          width={65}
          height={65}
          className="cursor-pointer"
          onClick={() => router.push('/')}
        />

        {/* Center - Navigation */}
        <div className="flex space-x-8 items-center text-[#c79e60]">
          <span 
            className="cursor-pointer hover:underline transition"
            onClick={() => router.push('/')}
          >
            Home
          </span>
          
          <Dropdown 
            overlay={productsMenu} 
            trigger={['hover']}
            placement="bottom"
          >
            <span className="cursor-pointer hover:underline transition flex items-center">
              Products <DownOutlined className="ml-1 text-xs" />
            </span>
          </Dropdown>
          
          <span 
            className="cursor-pointer hover:underline transition"
            onClick={() => router.push('/contact')}
          >
            Contact
          </span>
        </div>

        {/* Right - Cart */}
        <Badge color='#c79e60' count={5}>
          <CgShoppingCart 
            className="text-2xl cursor-pointer text-[#c79e60] hover:opacity-80 transition" 
            onClick={() => router.push('/cart')}
          />
        </Badge>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center p-4 h-16">
        <Button 
        //   color='#c79e60'
          type="text" 
          icon={<MenuOutlined   className="text-xl bg-[#c79e60] p-2  rounded-lg " />} 
          onClick={() => setMobileMenuVisible(true)}
        />
        
        <Image
          src={logo}
          alt='M&S Elitaire'
          width={60}
          height={60}
          className="cursor-pointer"
          onClick={() => router.push('/')}
        />
        
        <Badge color='#c79e60' count={5}>
          <CgShoppingCart 
            className="text-2xl cursor-pointer text-[#c79e60]" 
            onClick={() => router.push('/cart')}
          />
        </Badge>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <Image
            src={logo}
            alt='M&S Elitaire'
            width={50}
            height={50}
            className="cursor-pointer"
            onClick={() => {
              router.push('/');
              setMobileMenuVisible(false);
            }}
          />
        }
        placement="left"
        closable={false}
        onClose={() => setMobileMenuVisible(false)}
        open={mobileMenuVisible}
        width={280}
        extra={
          <CloseOutlined 
            className="text-[#c79e60]"
            onClick={() => setMobileMenuVisible(false)}
          />
        }
      >
        <div className="flex flex-col space-y-4 text-[#c79e60]">
          <span 
            className="text-lg cursor-pointer hover:underline transition"
            onClick={() => {
              router.push('/');
              setMobileMenuVisible(false);
            }}
          >
            Home
          </span>
          
          <Menu
           
            mode="vertical"
            className="border-0"
          >
            <Menu.SubMenu 
              key="products" 
              title="Products" 
              icon={<DownOutlined className="text-xs" />}
            >
              <Menu.SubMenu key="men" title="Men">
                {menItems.map(item => (
                  <Menu.Item key={item.key} onClick={() => {
                    item.onClick();
                    setMobileMenuVisible(false);
                  }}>{item.label}</Menu.Item>
                ))}
              </Menu.SubMenu>
              <Menu.SubMenu key="women" title="Women">
                {womenItems.map(item => (
                  <Menu.Item key={item.key} onClick={() => {
                    item.onClick();
                    setMobileMenuVisible(false);
                  }}>{item.label}</Menu.Item>
                ))}
              </Menu.SubMenu>
              <Menu.SubMenu key="kids" title="Kids">
                {kidsItems.map(item => (
                  <Menu.Item key={item.key} onClick={() => {
                    item.onClick();
                    setMobileMenuVisible(false);
                  }}>{item.label}</Menu.Item>
                ))}
              </Menu.SubMenu>
            </Menu.SubMenu>
          </Menu>
          
          <span 
            className="text-lg cursor-pointer hover:underline transition"
            onClick={() => {
              router.push('/contact');
              setMobileMenuVisible(false);
            }}
          >
            Contact
          </span>
        </div>
      </Drawer>
    </header>
  );
};

export default Navbar;