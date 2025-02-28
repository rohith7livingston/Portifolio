import Code from "./icons/CodeIcon";
import Files from "./icons/FilesIcon";
import Github from "./icons/GithubIcon";
import Pencil from "./icons/Pencil";
import Mail from "./icons/MailIcon";
import Account from "./icons/AccountIcon";
import Settings from "./icons/SettingsIcon";
import { Link, useLocation } from "react-router-dom";

const sidebarTopItems = [
  { Icon: Files, path: "/" },
  { Icon: Github, path: "/github" },
  { Icon: Code, path: "/projects" },
  { Icon: Pencil, path: "/about" },
  { Icon: Mail, path: "/contact" },
];

const sidebarBottomItems = [
  { Icon: Account, path: "/about" },
  { Icon: Settings, path: "/settings" },
];

function SideBar() {
  const location = useLocation();
  return (
    <aside className="flex w-[4.2vw] min-w-[40px] flex-col justify-between bg-gray-900 font-mono text-gray-300 py-2 md:min-h-[calc(100vh-65px)]">
      <div className="flex flex-col items-start justify-center gap-y-1 md:gap-y-3">
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link to={path} key={path}>
            <div
              className={`p-2 max-sm:pl-2 transition-colors duration-200 ${
                location.pathname === path
                  ? "border-l-2 border-blue-400 text-white"
                  : "hover:text-gray-100"
              }`}
            >
              <Icon
                fill={
                  location.pathname === path ? "rgb(225, 228, 232)" : "rgb(150, 150, 150)"
                }
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-y-3">
        {sidebarBottomItems.map(({ Icon, path }) => (
          <Link to={path} key={path}>
            <div className="p-2 max-sm:pl-2 transition-colors duration-200 hover:text-gray-100">
              <Icon
                fill={
                  location.pathname === path ? "rgb(225, 228, 232)" : "rgb(150, 150, 150)"
                }
              />
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}

export default SideBar;
