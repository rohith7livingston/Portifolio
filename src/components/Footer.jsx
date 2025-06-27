import Chevron from "./icons/SourceControlIcon";
import ErrorIcon from "./icons/ErrorIcon";
import WarningIcon from "./icons/WarningIcon";
import BellIcon from "./icons/BellIcon";
import CheckIcon from "./icons/CheckIcon";
import ReactIcon from "./icons/ReactIcon";

function Footer() {
  return (
    <div className="flex h-8 justify-between bg-gray-900 px-4 text-sm font-light text-gray-300">
      <div className="flex items-center gap-x-3">
        <a
          className="flex items-center hover:bg-gray-800 px-2 py-1 rounded"
          href="https://github.com/rohith7livingston/"
          target="_blank"
          rel="noreferrer"
        >
          <Chevron />
        </a>
        <div className="flex cursor-pointer gap-x-1 hover:bg-gray-800 px-2 py-1 rounded">
          <ErrorIcon />
          <WarningIcon />
        </div>
      </div>

      <div className="flex items-center gap-x-3">
        <ReactIcon />
        <CheckIcon />
        <div className="cursor-pointer hover:bg-gray-800 px-2 py-1 rounded">
          <BellIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
