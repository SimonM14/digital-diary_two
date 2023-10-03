import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [

{
	title: "My Profile",
	path: "/profile",
	icon: <IoIcons.IoIosPaper />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Service 1",
		path: "/services/services1",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Service 2",
		path: "/services/services2",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Service 3",
		path: "/services/services3",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},

{
	title: "Entries",
	path: "/Entries",
	icon: <FaIcons.FaEnvelopeOpenText />,


	
},
{
	title: "Contact",
	path: "/contact",
	icon: <FaIcons.FaPhone />,
},
{
	title: "Support",
	path: "/support",
	icon: <IoIcons.IoMdHelpCircle />,
},
{
	title: "About Us",
	path: "/about",
	icon: <AiIcons.AiFillHome />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	
},
];
