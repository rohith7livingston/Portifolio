import { useState } from "react";
import ChevronRight from "./icons/ChevronRight";
import react_icon from "../assets/icons/react_icon.svg";
import html_icon from "../assets/icons/html_icon.svg";
import css_icon from "../assets/icons/css_icon.svg";
import js_icon from "../assets/icons/js_icon.svg";
import json_icon from "../assets/icons/json_icon.svg";
import markdown_icon from "../assets/icons/markdown_icon.svg";
import { Link } from "react-router-dom";

const explorerItems = [
  {
    name: "home.jsx",
    path: "/",
    icon: react_icon,
  },
  {
    name: "about.html",
    path: "/about",
    icon: html_icon,
  },
  {
    name: "contact.css",
    path: "/contact",
    icon: css_icon,
  },
  {
    name: "projects.js",
    path: "/projects",
    icon: js_icon,
  },
  {
    name: "programming.md",
    path: "/github",
    icon: markdown_icon,
  },
];

function Explorer() {
  const [show, setShow] = useState(true);

  return (
    <div className="flex flex-col items-start bg-gray-900 font-[Poppins] text-white max-sm:hidden">
      <h1 className="pl-2 text-xl font-semibold uppercase">Explorer</h1>
      <div className="flex min-w-[15vw] flex-col">
        <div
          className="flex cursor-pointer items-center pl-1 pt-2"
          onClick={() => setShow(!show)}
        >
          <ChevronRight style={show ? { transform: "rotate(90deg)" } : {}} />
          <p className="text-base font-medium">PORTFOLIO</p>
        </div>
        {show && (
          <div className="px-5">
            {explorerItems.map((item) => {
              return (
                <Link
                  to={item.path}
                  key={item.name}
                  className="flex gap-x-1 hover:bg-gray-800 p-1"
                >
                  <img src={item.icon} alt={item.name} height={18} width={18} />
                  <p className="text-sm font-normal">{item.name}</p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Explorer;
