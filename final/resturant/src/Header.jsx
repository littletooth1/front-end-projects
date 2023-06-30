import './Header.css';
import Skiplink from "./Skiplink";
import GlobalNav from "./GlobalNav";


function Header({ setPage }) {
    return (
        <header className="header">
            <Skiplink/>
            <h1 className="header-title">Yang's Kitchen</h1>
            <GlobalNav setPage={setPage}/>
        </header>
    );
}

export default Header;