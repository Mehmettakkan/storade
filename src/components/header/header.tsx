import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import MegamenuContentProducts from "@/app/(inner)/products/megamenu/mega-menu-content-products";
import MegamenuContentIntegrations from "@/app/(inner)/integrations/megamenu/mega-menu-content-integrations";
import MegaMenuContentResources from "@/app/(inner)/resources/megamenu/mega-menu-content-resources";
import MegaMenuContentSupport from "@/app/(inner)/support/megamenu/mega-menu-content-support";

const menuItems = [
  { name: "Products", href: "/products", content: MegamenuContentProducts },
  { name: "Integrations", href: "/integrations", content: MegamenuContentIntegrations },
  { name: "Customers", href: "/customers", content: null },
  { name: "Pricing", href: "/pricing", content: null },
  { name: "Resources", href: "/resources", content: MegaMenuContentResources },
  { name: "Support", href: "/support", content: MegaMenuContentSupport },
];

const Header = () => {
  const [isMegamenuVisible, setMegamenuVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const megamenuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const showMegamenu = (menu: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveMenu(menu);
    setMegamenuVisible(true);
  };

  const hideMegamenu = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setMegamenuVisible(false);
      setActiveMenu(null);
    }, 200);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const activeItem = menuItems.find((item) => item.name === activeMenu);

  return (
    <header ref={headerRef} className="w-full bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-3xl font-bold italic text-[#111827]">
            storade
          </Link>

          <div className="hidden lg:block w-[1px] h-[40px] bg-neutral-200 mx-[30px]"></div>

          <nav className="hidden lg:flex items-center space-x-[25px]">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => showMegamenu(item.name)}
                onMouseLeave={hideMegamenu}
              >
                <Link
                  href={item.href}
                  className="text-[#111827] font-medium text-[15px] leading-[20px] hover:text-[#3751DD] transition-all duration-200 tracking-wide"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <Link
            href="/login"
            className="text-[#111827] font-medium text-[16px] leading-[17px] hover:text-[#3751DD] transition-all duration-200"
          >
            LOGIN
          </Link>
          <Link
            href="/subscribe"
            className="bg-[#3751DD] text-white px-[35px] py-[14px] rounded-full font-semibold text-[16px] leading-[22px] hover:bg-[#2c41b2] shadow-md hover:shadow-lg transition-all duration-300"
          >
            GET STARTED
          </Link>
        </div>

        <button
          className="lg:hidden text-[#111827]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white py-4">
          <nav className="flex flex-col space-y-4 px-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#111827] font-medium text-[15px] leading-[20px] hover:text-[#3751DD] transition-all duration-200 tracking-wide"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="text-[#111827] font-medium text-[16px] leading-[17px] hover:text-[#3751DD] transition-all duration-200"
            >
              LOGIN
            </Link>
            <Link
              href="/subscribe"
              className="bg-[#3751DD] text-white px-[35px] py-[14px] rounded-full font-semibold text-[16px] leading-[22px] hover:bg-[#2c41b2] shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              GET STARTED
            </Link>
          </nav>
        </div>
      )}

      {isMegamenuVisible && activeItem?.content && (
        <div
          ref={megamenuRef}
          className="absolute mt-4 z-50 left-1/2 transform -translate-x-1/2 w-full max-w-7xl transition-opacity duration-200 ease-in-out"
          style={{ top: "100%" }}
          onMouseEnter={() => {
            if (hoverTimeoutRef.current) {
              clearTimeout(hoverTimeoutRef.current);
              hoverTimeoutRef.current = null;
            }
            setMegamenuVisible(true);
          }}
          onMouseLeave={hideMegamenu}
        >
          <activeItem.content />
        </div>
      )}
    </header>
  );
};

export default Header;