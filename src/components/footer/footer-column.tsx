import React from "react";
import Link from "next/link";

type FooterColumn = {
  title: string;
  items: string[];
};

const footerColumns: FooterColumn[] = [
  {
    title: "Products",
    items: [
      "Invoice",
      "Point of sale",
      "Expense",
      "Online Market",
      "Migration",
      "Marketplace",
      "Sales Channels",
      "Sales",
      "Checkout",
      "Inventory",
    ],
  },
  {
    title: "Resources",
    items: [
      "Overview",
      "Articles",
      "Guides",
      "Webinars",
      "Podcast",
      "Events",
      "Ecommerce blog",
      "Developer blog",
    ],
  },
  {
    title: "Partner",
    items: [
      "Overview",
      "Become a partner",
      "Find a partner",
      "Affiliates",
      "Partner offers",
    ],
  },
  {
    title: "Customer",
    items: ["Case studies", "Store examples"],
  },
];

const FooterColumn: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-8">
          {footerColumns.map((footerColumn, index) => (
            <div key={index}>
              <h2 className="font-semibold mb-4 text-sm text-gray-900">
                {footerColumn.title}
              </h2>

              <ul className="space-y-2.5">
                {footerColumn.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-[13px] text-gray-500 hover:text-gray-700 transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterColumn;
