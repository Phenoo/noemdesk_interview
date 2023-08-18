import * as React from "react";
import {BiSolidDownArrow, BiSolidUpArrow} from "react-icons/bi"

import {AnimatePresence} from "framer-motion"

import {GiFamilyTree} from "react-icons/gi"
import {AiFillBulb, AiFillTags} from "react-icons/ai"
import {CgCopy} from "react-icons/cg"
import { Cog, DatabaseZap } from "lucide-react";

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [expandedItem, setExpandedItem] = React.useState(null);

  const toggleItem = (itemIndex: any) => {
    if (expandedItem === itemIndex) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemIndex);
    }
  };


  const data = [
    {
      label: 'Business Development',
      icon: <GiFamilyTree />,
      subLinks: [
        { label: 'Opportunities & Tenders', url: '#' },
        { label: 'Customers', url: '#' },
        { label: 'Scheduling', url: '#' },
      ],
    },
    {
      label: 'Reservations',
      icon: <AiFillTags />,
      subLinks: [
        { label: 'Bookings', url: '#' },
        { label: 'Scheduling', url: '#' },
      ],
    },
    {
      label: 'Operations',
      icon: <AiFillBulb color='white' />,
      subLinks: [
        { label: 'Checklist', url: '#' },
        { label: 'Moment Logs', url: '#' },
        { label: 'Maintenance', url: '#' },
        { label: 'Driver Performance', url: '#' },
        { label: 'Violations', url: '#' },
        { label: 'Incidents', url: '#' },
        { label: 'Expenses', url: '#' },
      ],
    },
    {
      label: 'Infrastructure',
      icon: <CgCopy />,
      subLinks: [
        { label: 'Drivers', url: '#' },
        { label: 'Vehicles', url: '#' },
        { label: 'Fuel Card', url: '#' },
        { label: 'Inventory', url: '#' },
        { label: 'Third Party Assets', url: '#' },
        { label: 'vendors', url: '#' },
        { label: 'Payroll', url: '#' },
      ],
    },
    {
      label: 'Reports & Tools',
      icon: <DatabaseZap color='white' />,
      subLinks: [
        { label: 'Financials', url: '#' },
        { label: 'Duty Calculator', url: '#' },
        { label: 'Operational Stats', url: '#' },
      ],
    },
    {
      label: 'Settings',
      icon: <Cog />,
      subLinks: [
        { label: 'Dashboard', url: '#' },
        { label: 'Users', url: '#' },
        { label: 'Pricing', url: '#' },
        { label: 'Categories', url: '#' },
        { label: 'Approved Workflow', url: '#' },
        { label: 'Metrics', url: '#' },
      ],
    },
  ];

  const renderSubLinks = (subLinks: any) => {
    return (
      <ul className="pl-4">
        {subLinks.map((subLink: any, index: any) => (
          <li key={index} className="py-2 px-2 text-white text-xs hover:bg-white hover:text-blue-500 rounded-sm cursor-pointer hinge my-2">
            <a href={subLink.url} className="capitalize">
              {subLink.label}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <ul className="px-2 w-full space-y-4">
    {data.map((item, index) => (
      <li key={index} className="w-full">
        <div
          className={`cursor-pointer ${expandedItem === index ? 'font-bold' : ''} text-white flex justify-between items-center w-full p-2`}
          onClick={() => toggleItem(index)}
        >
          <span className="flex gap-2 items-center text-white text-sm">
          {item.icon}
          {item.label}
          </span>
          <span>
          {expandedItem === index ? <BiSolidUpArrow size={10} /> :<BiSolidDownArrow size={10} />}
          </span>
        </div>
        <AnimatePresence>
          {expandedItem === index && renderSubLinks(item.subLinks)}
        </AnimatePresence>

      </li>
    ))}
  </ul>
  );
}
