import Explorer from "./Explorer";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Pages from "./Pages";
import SideBar from "./SideBar";
import { useTheme } from "../context/ThemeContext";

function Main() {
  const { theme } = useTheme();
  return (
    <div className={`theme-${theme} bg-gray-900`}>
      <NavBar />
      <div className="mb-2 bg-gray-900"></div> {/* Ensure background matches */}
      <main className="flex">
        <SideBar />
        <Explorer />
        <Pages />
      </main>
      <Footer />
    </div>
  );
}

export default Main;
