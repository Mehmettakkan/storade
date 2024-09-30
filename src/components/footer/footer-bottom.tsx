import React from "react";
import Link from "next/link";
import { Globe, ChevronDown } from 'lucide-react';

// FooterBottom türünü tanımlıyoruz
type FooterBottom = {
  name: string;
  href: string;
};

// Alt kısımdaki bağlantılar için footerBottoms dizisi
const footerBottoms: FooterBottom[] = [
  { name: "Legal", href: "/legal" },
  { name: "Terms of Use", href: "/terms-of-use" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Sales and Refunds", href: "/sales-and-refunds" },
];

// FooterBottom bileşeni
const FooterBottom: React.FC = () => {
  return (
    <footer className="bg-[#0a0f1a] text-white h-[60px]">
      <div className="container mx-auto px-12 flex items-center justify-between w-full h-full text-xs"> {/* text-base eklendi */}
        {/* Şirket adı */}
        <p className="font-light">2022 Storade Co.</p>

        {/* Bağlantılar */}
        <ul className="flex space-x-5">
          {footerBottoms.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="hover:text-gray-300 font-light">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Dil ve bölge seçimi */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <Globe size={13} className="mr-1.5" />
            <span className="mr-1 font-light">USA - EN</span>
            <ChevronDown size={13} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBottom;
