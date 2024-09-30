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

interface MegamenuTemplateProps {
  sections: Section[];
  support?: {
    title: string;
    items: SupportItem[];
  };
}

const MegamenuTemplate: React.FC<MegamenuTemplateProps> = ({ sections, support }) => {
  const hasSupport = support && support.items.length > 0;

  return (
    <div
      className="bg-white shadow-2xl rounded-[30px] overflow-hidden mx-auto max-w-7xl w-full transition-all duration-300 ease-in-out"
      style={{ marginTop: '-17px' }} // Move the megamenu 30px upwards
    >
      <div className="flex flex-col lg:flex-row">
        <div className={`${hasSupport ? 'lg:w-2/3' : 'w-full'} p-8`}>
          {sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 uppercase tracking-wide">
                {section.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, idx) => (
                  <Link
                    href={item.link}
                    key={idx}
                    className="group flex flex-col p-4 bg-white hover:bg-[#EFF3FF] rounded-lg transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center mb-3">
                      <div className="mr-4 text-blue-500 group-hover:text-blue-600 transition-colors duration-300">
                        {item.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-[#111827] group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {hasSupport && (
          <div className="lg:w-1/3 bg-[#EFF3FF] p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6 uppercase tracking-wide">
              {support.title}
            </h3>
            <div className="space-y-6">
              {support.items.map((item, index) => (
                <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="mr-4 text-blue-500">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <Link
                      href={item.link}
                      className="text-blue-500 text-sm font-medium flex items-center hover:text-blue-700 transition-colors duration-300"
                    >
                      {item.linkText}
                      <svg
                        className="ml-2 w-4 h-4"
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
    </div>
  );
};

export default MegamenuTemplate;
