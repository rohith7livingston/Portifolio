import { Outlet } from "react-router-dom";
import Tabs from "./Tabs";

function Pages() {
  return (
    <div className="w-full overflow-x-auto bg-gray-900 text-white font-[Poppins] text-sm font-light">
      <Tabs />
      <section className="min-h-[85vh] bg-gray-900">
        <Outlet />
      </section>
    </div>
  );
}

export default Pages;
