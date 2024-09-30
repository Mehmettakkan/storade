import React from "react";
import { FaBook, FaVideo, FaBlog, FaFileAlt, FaChalkboardTeacher, FaToolbox } from "react-icons/fa";
import MegamenuTemplate from "../../../../components/megamenu/mega-menu-template";

const MegaMenuContentResources = () => {
  const resources = [
    {
      icon: <FaBlog className="w-8 h-8" />,
      title: "Blog",
      description: "Read the latest insights and updates on our blog.",
      link: "/resources/blog",
    },
    {
      icon: <FaBook className="w-8 h-8" />,
      title: "Guides & Documentation",
      description: "Comprehensive guides and documentation to get you started.",
      link: "/resources/guides-documentation",
    },
    {
      icon: <FaVideo className="w-8 h-8" />,
      title: "Webinars",
      description: "Watch our latest webinars and video content.",
      link: "/resources/webinars",
    },
    {
      icon: <FaFileAlt className="w-8 h-8" />,
      title: "Case Studies",
      description: "Learn how others are successfully using our platform.",
      link: "/resources/case-studies",
    },
  ];

  const support = {
    title: "Support",
    items: [
      {
        icon: <FaToolbox className="w-6 h-6" />,
        title: "Developer Portal",
        description: "Access technical documentation and developer tools.",
        linkText: "Visit Developer Portal",
        link: "/support/developer-portal",
      },
      {
        icon: <FaChalkboardTeacher className="w-6 h-6" />,
        title: "Webinar Support",
        description: "Need help with webinars? Our team is here to assist.",
        linkText: "Get Webinar Support",
        link: "/support/webinar-support",
      },
    ],
  };

  return (
    <MegamenuTemplate
      sections={[{ title: "Resources", items: resources }]}
      support={support}
    />
  );
};

export default MegaMenuContentResources;
