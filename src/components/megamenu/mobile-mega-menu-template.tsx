import React from 'react';
import Link from 'next/link';

interface MegamenuItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

interface Section {
  title: string;
  items: MegamenuItem[];
}

interface SupportItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  link: string;
}

interface MobileMegamenuTemplateProps {
  sections: Section[];
  support?: {
    title: string;
    items: SupportItem[];
  };
}

const MobileMegamenuTemplate: React.FC<MobileMegamenuTemplateProps> = ({ sections, support }) => {
  return (
    <div className="bg-white w-full">
      {/* Main Menu Sections */}
      {sections.map((section, index) => (
        <div key={index} className="mb-6">
          {/* <h3 className="text-md font-bold text-gray-800 mb-2 px-4 uppercase tracking-wide">
            {section.title}
          </h3> */}
          <div className="space-y-2">
            {section.items.map((item, idx) => (
              <Link
                href={item.link}
                key={idx}
                className="flex items-center p-4 hover:bg-[#EFF3FF] transition-colors duration-300"
              >
                <div className="mr-3">{item.icon}</div>
                <div>
                  <h4 className="text-sm font-semibold text-[#111827]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}

      {/* Support Section */}
      {support && support.items.length > 0 && (
        <div className="bg-[#EFF3FF] p-4 mt-4">
          <h3 className="text-md font-bold text-gray-800 mb-4 uppercase tracking-wide">
            {support.title}
          </h3>
          <div className="space-y-4">
            {support.items.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-3 mt-1">{item.icon}</div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  <Link
                    href={item.link}
                    className="text-blue-500 text-xs mt-1 flex items-center hover:text-blue-700 transition-colors duration-300"
                  >
                    {item.linkText}
                    <svg
                      className="ml-1 w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMegamenuTemplate;