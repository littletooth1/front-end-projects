
import './Main.css';
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Career from "./Career";

function Main({ page }) {
    return (
        <main className="main" id="main">
            {(page === "Home") && <Home/>}
            {(page === "About") && <About/>}
            {(page === "Menu") && <Menu/>}
            {(page === "Career") && <Career/>}
        </main>
    );
}

export default Main;