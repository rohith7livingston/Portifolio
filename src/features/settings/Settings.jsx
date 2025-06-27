/* eslint-disable react/prop-types */
import ThemeCard from "./ThemeCard";
import Dracula from "../../assets/images/dracula.png";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Settings() {
  const themeInfo = [
    {
      name: "Dracula",
      publisher: "Dracula theme",
      theme: "dracula",
      img: Dracula,
    }
  ];

  return (
    <HelmetProvider>
      <div className="p-8">
        <Helmet>
          <title>Manav Shete | Settings</title>
        </Helmet>
        <h2 className="text-3xl font-semibold text-textColor">Manage Themes</h2>
        <div className="grid gap-5 pt-8 md:grid-cols-3 xl:grid-cols-4">
          {themeInfo.map((th) => {
            return (
              <ThemeCard
                key={th.name}
                name={th.name}
                img={th.img}
                publisher={th.publisher}
                theme={th.theme}
                // changeTheme={changeTheme}
              />
            );
          })}
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Settings;
