import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";
import { BsFillMoonFill, BsSun } from "react-icons/bs";

const Navbar = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  console.log(theme);

  return (
    <div className="mx-auto py-6 border-b shadow-sm">
      <div className="md:px-20 px-6 flex justify-between items-center lg:text-xl md:text-lg text-md">
        <a className="capitalize font-bold" href="/">
          where is the world?
        </a>
        <div className="md:text-base text-sm">
          <div onClick={switchTheme} className="cursor-pointer">
            {theme === "dark" ? <BsFillMoonFill /> : <BsSun />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
