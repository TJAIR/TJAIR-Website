import Resources from "../assets/data/resources.json";

interface ResourceElementProps {
    part: string;
    items: { name: string; desc: string; link: string }[];
}

function ResourceElement(props: ResourceElementProps) {
    return (
        <div className="mt-8 flex flex-col content-center">
            <div className="mb-2 text-3xl font-semibold">{props.part}</div>
            <div className="flex flex-col bg-slate-50">
                {props.items.map((d) => (
                    <div className="mx-8 mb-2 mt-2">
                        <div className="text-2xl">
                            <a
                                className="text-blue-400 hover:text-red-900"
                                href={d.link}>
                                {d.name}
                            </a>{" "}
                            - {d.desc}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ResourcesPage() {
    return (
        <div className="mt-16 flex flex-col items-center">
            <div className="text-6xl">Resources</div>
            <div className="mx-8 mb-8 mt-2 grid grid-cols-1 gap-4">
                {Resources.map((e, i) => (
                    <ResourceElement {...e} key={i} />
                ))}
            </div>
            <div className="content-center text-xs">
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7218494574174834688/?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7218494574174834688%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29">
                    Courtesy of Dr. Justin Hodges from LinkedIn
                </a>
            </div>
        </div>
    );
}

export default ResourcesPage;
