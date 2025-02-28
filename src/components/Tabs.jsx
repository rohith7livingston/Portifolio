import react_icon from "../assets/icons/react_icon.svg";
import html_icon from "../assets/icons/html_icon.svg";
import css_icon from "../assets/icons/css_icon.svg";
import js_icon from "../assets/icons/js_icon.svg";
import markdown_icon from "../assets/icons/markdown_icon.svg";
import { Link, useLocation } from "react-router-dom";

const TabsItems = [
  { name: "home.jsx", path: "/", icon: react_icon },
  { name: "about.html", path: "/about", icon: html_icon },
  { name: "contact.css", path: "/contact", icon: css_icon },
  { name: "projects.js", path: "/projects", icon: js_icon },
  { name: "programming.md", path: "/github", icon: markdown_icon },
];

function Tabs() {
  const location = useLocation();

  return (
    <div className="flex overflow-x-auto bg-[#1E1E2E] px-3 py-2">
      {TabsItems.map((tab) => (
        <Link
          key={tab.name}
          to={tab.path}
          className={`flex items-center gap-x-3 px-4 py-2 text-[15px] font-medium transition-all rounded-md opacity-80 
          ${
            location.pathname === tab.path
              ? "bg-[#282A36] text-white border-b-2 border-blue-500 opacity-100"
              : "bg-transparent text-gray-300 hover:bg-[#333447] hover:text-white hover:opacity-100"
          }`}
        >
          <img src={tab.icon} height={20} width={20} alt="tab-icon" />
          <p>{tab.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default Tabs;
