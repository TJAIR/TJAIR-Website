import footer_links from "../assets/data/footer_links.json";
import { SocialIcon } from "react-social-icons";

interface FooterLinkProps {
    name: string;
    link: string;
}

function FooterLink(props: FooterLinkProps) {
    return (
        <div>
            <SocialIcon url={props.link} style={{ width: 30, height: 30 }} />
        </div>
    );
}

function Footer() {
    return (
        <footer className="flex h-[10vh] w-full flex-col items-center bg-slate-600 pt-4">
            <div className="mb-1 flex flex-row items-center justify-center space-x-2">
                {footer_links.map((e, i) => (
                    <FooterLink {...e} key={i} />
                ))}
            </div>

            <div className="text-slate-100">Built by Justin Lee (2025jlee)</div>
        </footer>
    );
}

export default Footer;
