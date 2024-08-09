import { Link } from "react-router-dom";
import Logo from "/logo.png";
import { routes } from "../shared";

function NavbarElement({ name, path }: { name: string; path: string }) {
    return (
        <Link to={{ pathname: path }}>
            <span className="font-roboto font-bold text-slate-200">{name}</span>
        </Link>
    );
}

function LogoElement() {
    return (
        <div className="mr-3">
            <Link to="/">
                <div className="size-16 rounded-full bg-white">
                    <img src={Logo} />
                </div>
            </Link>
        </div>
    );
}

function Navbar() {
    return (
        <header className="flex h-[10vh] w-full flex-row items-center space-x-8 bg-blue-800 px-4 py-2">
            <LogoElement />
            {routes.map((j, i) => (
                <NavbarElement name={j.name} path={j.path} key={i} />
            ))}
            <div className="flex-grow" />
        </header>
    );
}

export default Navbar;
