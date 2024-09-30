import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaSearch, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import MobileMegaMenuContentProducts from '../../app/(inner)/products/megamenu/mobile-mega-menu-content-products';
import MobileMegaMenuContentIntegrations from '@/app/(inner)/integrations/megamenu/mobile-mega-menu-content-integrations';
import MobileMegaMenuContentResources from '@/app/(inner)/resources/megamenu/mobile-mega-menu-content-resources';
import MobileMegaMenuContentSupport from '@/app/(inner)/support/megamenu/mobile-mega-menu-content-support';

const menuItems = [
  { name: 'Products', megaMenu: MobileMegaMenuContentProducts },
  { name: 'Integrations', megaMenu: MobileMegaMenuContentIntegrations },
  { name: 'Customers', megaMenu: null },
  { name: 'Pricing', megaMenu: null },
  { name: 'Resources', megaMenu: MobileMegaMenuContentResources },
  { name: 'Support', megaMenu: MobileMegaMenuContentSupport },
];

const MobileHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
    setActiveMegaMenu(null);
  }, []);

  const toggleMegaMenu = useCallback((menuName: string) => {
    setActiveMegaMenu(prev => prev === menuName ? null : menuName);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold italic text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#3751DD] rounded">
          storade
        </Link>
        
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3751DD] rounded p-1" aria-label="Search">
            <FaSearch size={20} />
          </button>
          <button 
            onClick={toggleMenu} 
            className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3751DD] rounded p-1"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="bg-white shadow-md max-h-[calc(100vh-60px)] overflow-y-auto"
          >
            <ul className="py-2">
              {menuItems.map((item) => (
                <li key={item.name} className="border-b border-gray-100 last:border-b-0">
                  <button
                    onClick={() => toggleMegaMenu(item.name)}
                    className="flex justify-between items-center w-full px-4 py-3 text-left focus:outline-none focus:bg-gray-50"
                    aria-expanded={activeMegaMenu === item.name}
                  >
                    <span className="text-[#111827] font-medium text-lg">{item.name}</span>
                    {item.megaMenu && (
                      activeMegaMenu === item.name ? <FaChevronUp /> : <FaChevronDown />
                    )}
                  </button>
                  <AnimatePresence>
                    {activeMegaMenu === item.name && item.megaMenu && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="bg-gray-50 px-4 py-2"
                      >
                        <item.megaMenu />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
            <div className="px-4 py-4 border-t border-gray-200">
              <Link href="/login" className="block text-center bg-gray-100 text-[#3751DD] font-semibold py-2 rounded-full mb-2 hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#3751DD]">
                LOGIN
              </Link>
              <Link href="/subscribe" className="block text-center bg-[#3751DD] text-white font-semibold py-2 rounded-full hover:bg-[#2c41b2] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#3751DD]">
                GET STARTED
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default MobileHeader;