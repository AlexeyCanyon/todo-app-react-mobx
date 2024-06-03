import "./Header.css";
import iconMoon from "../assets/iconMoon.svg";
import iconSun from "../assets/iconSun.svg";
import { observer } from "mobx-react-lite";
import { useThemeStore } from "../mobxStore/rootStore";

const Header = observer(() => {
    const { switchTheme, theme } = useThemeStore();

    return (
        <div className="header">
            <h1>T O D O</h1>
            <div className="toggle_mode">
                {theme == "dark" ? (
                    <button onClick={switchTheme}>
                        <img src={iconSun} alt="lightmode" />
                    </button>
                ) : (
                    <button onClick={switchTheme}>
                        <img src={iconMoon} alt="darkmode" />
                    </button>
                )}
            </div>
        </div>
    );
});

export default Header;
