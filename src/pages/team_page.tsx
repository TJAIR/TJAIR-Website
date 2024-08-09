import club_officers from "../assets/data/club_officers.json";

interface TeamElementProps {
    name: string;
    position: string;
    image_path: string;
}

function OfficerElement(props: TeamElementProps) {
    return (
        <div className="flex flex-row items-center justify-end rounded-2xl border-2 border-black bg-blue-500 p-4">
            <div className="mr-4 flex flex-1 flex-col items-center">
                <div className="text-nowrap text-2xl">{props.name}</div>
                <div className="text-nowrap text-lg text-slate-700">
                    {props.position}
                </div>
            </div>
            <img src={props.image_path} className="size-48" />
        </div>
    );
}

function TeamPage() {
    return (
        <div className="mx-8 mt-8 text-4xl font-bold">
            <div>TJ AIR Officers:</div>
            <div className="mt-4 grid grid-cols-3 gap-6">
                {club_officers.map((e, i) => (
                    <OfficerElement {...e} key={i} />
                ))}
            </div>
        </div>
    );
}

export default TeamPage;
