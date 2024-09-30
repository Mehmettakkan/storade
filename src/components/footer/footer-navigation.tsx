import React from "react";
import Link from "next/link";

type FooterNavigation = {
  name: string;
  href: string;
};

const footerNavigations: FooterNavigation[] = [
  { name: "ABOUT US", href: "/about" },
  { name: "CAREERS", href: "/careers" },
  { name: "PRESS", href: "/press" },
  { name: "AWARDS", href: "/awards" },
  { name: "TERMS OF SERVICE", href: "/terms-of-service" },
  { name: "PRIVACY POLICY", href: "/privacy-policy" },
  { name: "CONTACT US", href: "/contact-us" },
];

const FooterNavigation: React.FC = () => {
  return (
    <footer className="bg-[#0E0E0E] text-white w-[1280px] h-[180px] py-4">
      <div className="container mx-auto px-20 flex items-center justify-between w-full h-full"> {/* px-12'yi px-20 yaptık */}
        <div className="flex items-center">
          <Link href="/" className="mr-12"> {/* mr-8 yerine mr-12 ile biraz daha içe alındı */}
            <span className="text-4xl font-bold italic">storade</span>
            <span className="block text-xs font-normal mt-1 text-gray-400">
              Everything you need for your business
            </span>
          </Link>
        </div>

        <nav className="flex items-center space-x-6"> {/* Menü arasındaki boşluğu sabit tutuyoruz */}
          <div className="h-8 w-px bg-gray-600 mr-6"></div>
          {footerNavigations.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs font-bold hover:text-gray-300 transition-colors duration-200 relative group"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-300 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default FooterNavigation;
