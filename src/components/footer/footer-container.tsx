import React from "react";
import FooterNavigation from "./footer-navigation";
import FooterColumn from "./footer-column";
import FooterBottom from "./footer-bottom";

const FooterContainer: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Flex yönünü dikey hale getiriyoruz */}
      <div className="flex flex-col">
        
        {/* Footer Navigation */}
        <div className="w-full mx-auto max-w-[1280px]">
          <FooterNavigation />
        </div>
        
        {/* Footer Columns */}
        <div className="w-full mx-auto max-w-[1280px] py-6">
          <FooterColumn />
        </div>

        {/* Footer Bottom */}
        <div className="w-full mx-auto max-w-[1280px]">
          <FooterBottom />
        </div>

      </div>
    </div>
  );
};

export default FooterContainer;
