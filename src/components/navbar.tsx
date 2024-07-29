import { Link } from "react-router-dom";
import Logo from "/logo.png";

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

const navbar_elements: { name: string; route: string }[] = [
    { name: "Partnerships", route: "/partnerships" },
    { name: "About Us", route: "/team" },
    { name: "Contact Us", route: "/contact" },
    { name: "Resources", route: "/resources" },
];

function Navbar() {
    return (
        <header className="flex h-[10vh] w-full flex-row items-center space-x-8 bg-blue-800 px-4 py-2">
            <LogoElement />
            {navbar_elements.map(({ name: name, route: route }, i) => (
                <NavbarElement name={name} path={route} key={i} />
            ))}
            <div className="flex-grow" />
        </header>
    );
}

export default Navbar;
