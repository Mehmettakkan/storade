import React from "react";
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
} from "react-icons/fa";
import MegamenuTemplate from "../../../../components/megamenu/mega-menu-template";

const MegaMenuContentProducts: React.FC = () => {
  const products = [
    {
      icon: <FaFileInvoice className="w-8 h-8" />,
      title: "Invoicing",
      description: "Create and manage invoices effortlessly",
      link: "/invoicing",
    },
    {
      icon: <FaCashRegister className="w-8 h-8" />,
      title: "Point of Sale",
      description: "Streamline your sales transactions",
      link: "/point-of-sale",
    },
    {
      icon: <FaMoneyBillWave className="w-8 h-8" />,
      title: "Expenses",
      description: "Track and manage business expenses",
      link: "/expenses",
    },
    {
      icon: <FaStore className="w-8 h-8" />,
      title: "Online Store",
      description: "Build and manage your e-commerce presence",
      link: "/online-store",
    },
    {
      icon: <FaExchangeAlt className="w-8 h-8" />,
      title: "Data Transfer",
      description: "Seamless data migration between platforms",
      link: "/data-transfer",
    },
    {
      icon: <FaCogs className="w-8 h-8" />,
      title: "Integrations",
      description: "Connect with CRM, ERP, and other tools",
      link: "/integrations",
    },
    {
      icon: <FaShoppingCart className="w-8 h-8" />,
      title: "Marketplaces",
      description: "Expand your reach on multiple platforms",
      link: "/marketplaces",
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Sales Channels",
      description: "Optimize and manage various sales channels",
      link: "/sales-channels",
    },
    {
      icon: <FaCreditCard className="w-8 h-8" />,
      title: "Payments",
      description: "Secure and efficient payment processing",
      link: "/payments",
    },
    {
      icon: <FaBoxes className="w-8 h-8" />,
      title: "Inventory Management",
      description: "Real-time inventory tracking and control",
      link: "/inventory-management",
    },
  ];

  const support = {
    title: "Support",
    items: [
      {
        icon: <FaHeadset className="w-6 h-6" />,
        title: "Contact Sales Team",
        description: "Get personalized assistance for your business needs",
        linkText: "Start a conversation",
        link: "/contact-sales",
      },
      {
        icon: <FaUsers className="w-6 h-6" />,
        title: "Community",
        description: "Connect with users and get support from our team",
        linkText: "Join the community",
        link: "/community",
      },
    ],
  };

  return (
    <MegamenuTemplate
      sections={[{ title: "Products", items: products }]}
      support={support}
    />
  );
};

export default MegaMenuContentProducts;