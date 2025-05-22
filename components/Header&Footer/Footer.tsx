"use client"
import React from 'react';
import { 
  FacebookOutlined, 
  InstagramOutlined, 
  TwitterOutlined, 
  YoutubeOutlined 
} from '@ant-design/icons';
import { Divider, Space } from 'antd';
import Image from 'next/image';
import logo from '@/assets/WhatsApp Image 2025-05-20 at 21.57.31_4468c9ed.jpg';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0000006c] text-[#c79e60] pt-10 pb-6">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src={logo}
              alt="M&S Elitaire"
              width={80}
              height={80}
              className="mb-4"
            />
            <p className="text-center md:text-left">
              Luxury fashion and accessories for the modern elite. 
              Timeless elegance meets contemporary style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/products" className="hover:underline">Products</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/shipping" className="hover:underline">Shipping Policy</Link></li>
              <li><Link href="/returns" className="hover:underline">Return Policy</Link></li>
              <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p>123 Luxury Avenue</p>
              <p>Fashion District, NY 10001</p>
              <p className="mt-2">Email: info@mselitaire.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </address>
          </div>
        </div>

        <Divider className="bg-[#c79e60]" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} M&S Elitaire. All rights reserved.</p>
          
          <Space size="large" className="mt-4 md:mt-0 text-[#e8c78f]">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookOutlined color='#e8c78f' className="  ic text-2xl  hover:text-[#e8c78f] transition" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramOutlined className="text-2xl ic hover:text-[#e8c78f] transition" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterOutlined className="text-2xl ic hover:text-[#e8c78f] transition" />
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <YoutubeOutlined className="text-2xl ic hover:text-[#e8c78f] transition" />
            </Link>
          </Space>

 
        </div>
      </div>
    </footer>
  );
};

export default Footer;