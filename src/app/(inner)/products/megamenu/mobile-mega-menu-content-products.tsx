import React from 'react';
import {
  FaFileInvoice,
  FaCashRegister,
  FaMoneyBillWave,
  FaStore,
  FaExchangeAlt,
  FaCogs,
  FaShoppingCart,
  FaChartLine,
  FaCreditCard,
  FaBoxes,
  FaHeadset,
  FaUsers
} from 'react-icons/fa';
import MobileMegamenuTemplate from '../../../../components/megamenu/mobile-mega-menu-template';

const MobileMegaMenuContentProducts: React.FC = () => {
  const products = [
    {
      icon: <FaFileInvoice className="w-6 h-6 text-blue-500" />,
      title: "Invoicing",
      description: "Manage and create invoices easily.",
      link: "/invoicing",
    },
    {
      icon: <FaCashRegister className="w-6 h-6 text-blue-500" />,
      title: "Point of Sale",
      description: "Easy management of sales transactions.",
      link: "/point-of-sale",
    },
    {
      icon: <FaMoneyBillWave className="w-6 h-6 text-blue-500" />,
      title: "Expenses",
      description: "Track and manage business expenses.",
      link: "/expenses",
    },
    {
      icon: <FaStore className="w-6 h-6 text-blue-500" />,
      title: "Online Store",
      description: "Manage your online store effortlessly.",
      link: "/online-store",
    },
    {
      icon: <FaExchangeAlt className="w-6 h-6 text-blue-500" />,
      title: "Data Transfer",
      description: "Seamless data transfer between platforms.",
      link: "/data-transfer",
    },
    {
      icon: <FaCogs className="w-6 h-6 text-blue-500" />,
      title: "Integrations",
      description: "Connect with CRM, ERP, and other tools.",
      link: "/integrations",
    },
    {
      icon: <FaShoppingCart className="w-6 h-6 text-blue-500" />,
      title: "Marketplaces",
      description: "Expand your reach by selling on multiple marketplaces.",
      link: "/marketplaces",
    },
    {
      icon: <FaChartLine className="w-6 h-6 text-blue-500" />,
      title: "Sales Channels",
      description: "Manage and optimize your sales channels.",
      link: "/sales-channels",
    },
    {
      icon: <FaCreditCard className="w-6 h-6 text-blue-500" />,
      title: "Payments",
      description: "Accept and process payments securely.",
      link: "/payments",
    },
    {
      icon: <FaBoxes className="w-6 h-6 text-blue-500" />,
      title: "Inventory Management",
      description: "Real-time inventory tracking and management.",
      link: "/inventory-management",
    },
  ];

  const support = {
    title: "Support",
    items: [
      {
        icon: <FaHeadset className="w-5 h-5 text-blue-500" />,
        title: "Contact Sales Team",
        description: "Get in touch with our sales team for detailed information on our products and services.",
        linkText: "Start a conversation",
        link: "/contact-sales",
      },
      {
        icon: <FaUsers className="w-5 h-5 text-blue-500" />,
        title: "Community",
        description: "Visit our community pages to interact with other users and get help from the support team.",
        linkText: "Visit the community pages",
        link: "/community",
      },
    ],
  };

  return <MobileMegamenuTemplate sections={[{ title: "Products", items: products }]} support={support} />;
};

export default MobileMegaMenuContentProducts;