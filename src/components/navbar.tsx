import { Link } from "react-router-dom";
import Logo from "/logo.png";
import { routes } from "../shared";

function NavbarElement({ name, path }: { name: string; path: string }) {
    return (
        <Link to={{ pathname: path }}>
            <span className="font-roboto text-2xl text-gray-700 underline-offset-8 hover:underline">
                {name}
            </span>
        </Link>
    );
}

function LogoElement() {
    return (
        <div className="mr-3">
            <Link to="/">
                <div className="size-28 rounded-full bg-white">
                    <img src={Logo} />
                </div>
            </Link>
        </div>
    );
}

function Navbar() {
    return (
        <header className="flex h-[16vh] w-full flex-row items-center space-x-8 bg-slate-200 px-4 py-2">
            <LogoElement />
            {routes.map((j, i) => (
                <NavbarElement name={j.name} path={j.path} key={i} />
            ))}
            <div className="flex-grow" />
        </header>
    );
}

export default Navbar;
