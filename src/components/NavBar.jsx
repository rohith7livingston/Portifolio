/* eslint-disable react/prop-types */
import vscode from "../assets/icons/vscode.ico";

const list = ["File", "Edit", "View", "Go", "Run", "Terminal", "Help"];

function NavBar({ theme }) {
  return (
    <header className="bg-gray-900 text-gray-100 font-[Poppins]">
      <nav className="mx-3 flex h-8 items-center justify-between text-center">
        <div className="mr-auto flex items-center md:gap-x-3">
          <img src={vscode} height={20} width={20} alt="VS Code Icon" />
          <ul className="flex gap-x-3 max-md:hidden">
            {list.map((l, i) => (
              <li className="cursor-pointer text-gray-300 opacity-80 hover:opacity-100" key={i}>
                {l}
              </li>
            ))}
          </ul>
        </div>
        <h1 className="md:mr-auto text-lg font-semibold text-gray-300 opacity-80">
          Living ston's - Visual Studio Code
        </h1>
        <div className="ml-auto flex gap-x-2">
          <div className="h-3 w-3 rounded-full bg-yellow-400 md:h-4 md:w-4"></div>
          <div className="h-3 w-3 rounded-full bg-green-500 md:h-4 md:w-4"></div>
          <div className="h-3 w-3 rounded-full bg-red-500 md:h-4 md:w-4"></div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
