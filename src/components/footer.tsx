import footer_links from "../assets/data/footer_links.json";
import { SocialIcon } from "react-social-icons";

interface FooterLinkProps {
    name: string;
    link: string;
}

function FooterLink(props: FooterLinkProps) {
    return (
        <div className="size-6">
            <SocialIcon url={props.link} />
        </div>
    );
}

function Footer() {
    return (
        <footer className="flex h-[10vh] w-full flex-col items-center bg-slate-600 pt-4">
            <div className="flex flex-row space-x-4 items-center justify-center">
            {footer_links.map((e, i) => (
                <FooterLink {...e} key={i} />
            ))}
            </div>
            
        </footer>
    );
}

export default Footer;
