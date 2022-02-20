


import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";


// ?????????????????????????????
///////////////////////////////////////////


const NavItemsData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiOutlineHome/>,
    bgColor: "green"
    },
  {
    title: "Services",
    path: "/services",
    icon: <MdIcons.MdMiscellaneousServices />,
    bgColor: "orange"
  },
  {
    title: "Results",
    path: "/results",
    icon: <GiIcons.GiDart />,
    bgColor: "blue"
  },
  {
    title: "Ideas",
    path: "/ideas",
    icon: <FaIcons.FaIdeal />,
    bgColor: "indigo"
  },
  {
    title: "About",
    path: "/about",
    icon: <SiIcons.SiAboutdotme />,
    bgColor: "violet"
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaPhoneAlt />,
    bgColor: "red"
  }
]


export default NavItemsData;