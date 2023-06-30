import "./GlobalNav.css";
import {useState} from "react";
import menu from "./navigation";

function GlobalNav({setPage}) {
    const [isOpen, setIsOpen] = useState(false);

    const list = menu.map((item) => {
        return <button key={item.name} className="main-menu-item" onClick={() => {
            setPage(item.name);
            setIsOpen(false);
        }}>{item.name}</button>
    });
    const menuOpenClass = isOpen ? "main-menu-dropdown-show" : "";
    return (
        <nav className="main-menu">
            <button
                className="main-menu-button"
                onClick={() => {setIsOpen(!isOpen)}}>
                <i className="gg-menu" aria-label="Menu"></i>
            </button>
            <div className={`main-menu-bar ${menuOpenClass}`}>
                {list}
            </div>
        </nav>
    );
}

export default GlobalNav;