import About from "./pages/about";
import { Link } from "react-router-dom";


const NavList = [
    { navID: 0, navType: "ABOUT", url: "/"},
    { navID: 1, navType: "ALL WORKS", url: "/all-works"},
    { navID: 2, navType: "UI/UX", url: "/uiux"},
    // { navID: 3, navType: "GITHUB", url: "/github"},
    { navID: 4, navType: "ARCHITECTURE", url: "/architecture"},
    { navID: 5, navType: "PHOTOGRAPHY", url: "/photography"},
    { navID: 6, navType: "RESUME", url: "/resume"}]

const Navigation = () => {
    return (
        <div className='navigation'>
            <div className="helloMessage">
                <img src="https://cdn.myportfolio.com/676b95ce-c009-486c-a004-5e4e85202942/5aab14d8-a558-4f94-ac9a-ce46dcdb3418_rwc_68x64x724x696x4096.png?h=0d5d4be694c9bf66a4603e00c6ddb6d2" alt="Haixin Zhou" />
                <p><b>Hello! I am Haixin :]</b></p>
            </div>
            <nav>
                {NavList.map((item) => (
                    <Link key={item.navID} to={item.url}>{item.navType}</Link>
                ))}
            </nav>
        </div>
    );
}

export default Navigation
