import React from 'react';
import {
  FaHeadset,
  FaQuestionCircle,
  FaLifeRing,
  FaUsers,
  FaCommentDots,
} from 'react-icons/fa';
import MobileMegamenuTemplate from '../../../../components/megamenu/mobile-mega-menu-template';

const MobileMegaMenuContentSupport: React.FC = () => {
  const supportItems = [
    {
      icon: <FaLifeRing className="w-6 h-6 text-blue-500" />,
      title: "Help Center",
      description: "Find detailed articles and troubleshooting guides.",
      link: "/support/help-center",
    },
    {
      icon: <FaHeadset className="w-6 h-6 text-blue-500" />,
      title: "Live Chat",
      description: "Chat with our support team for real-time assistance.",
      link: "/support/live-chat",
    },
    {
      icon: <FaQuestionCircle className="w-6 h-6 text-blue-500" />,
      title: "FAQ",
      description: "Get answers to frequently asked questions.",
      link: "/support/faq",
    },
    {
      icon: <FaUsers className="w-6 h-6 text-blue-500" />,
      title: "Community Forum",
      description: "Join the community and find peer-to-peer support.",
      link: "/support/community-forum",
    },
    {
      icon: <FaCommentDots className="w-6 h-6 text-blue-500" />,
      title: "Submit a Ticket",
      description: "Can't find what you're looking for? Submit a support ticket.",
      link: "/support/submit-ticket",
    },
  ];

  return (
    <MobileMegamenuTemplate
      sections={[{ title: "Support", items: supportItems }]}
    />
  );
};

export default MobileMegaMenuContentSupport;
