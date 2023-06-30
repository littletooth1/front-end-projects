import './Menu.css';
import MenuSection from "./MenuSection";
import cuisine from "./cuisine";

function Menu() {
    return (
        <div className="menu-page">
            <h2 className="main-title">Menu</h2>
            <p className="page-text">
                Come and select your favorite authentic Chinese cuisine!
            </p>
            <div className="menu-nav">
                <a className="menu-section-nav" href="#Meat">Meat</a>
                <a className="menu-section-nav" href="#Seafood">Seafood</a>
                <a className="menu-section-nav" href="#Vegetables">Vegetables</a>
                <a className="menu-section-nav" href="#Dessert">Dessert</a>
            </div>
            <MenuSection type="Meat" list={cuisine}/>
            <MenuSection type="Seafood" list={cuisine}/>
            <MenuSection type="Vegetables" list={cuisine}/>
            <MenuSection type="Dessert" list={cuisine}/>
        </div>
    );
}

export default Menu;