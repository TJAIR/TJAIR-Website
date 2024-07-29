import club_officers from "../assets/data/club_officers.json";

interface TeamElementProps {
    name: string;
    position: string;
    image_path: string;
}
function TeamElement(props: TeamElementProps) {
    return (
        <div className="flex flex-row items-center rounded-2xl bg-red-500 p-4">
            <div className="mr-4 flex flex-col items-center">
                <div className="text-nowrap text-2xl">{props.name}</div>
                <div className="text-nowrap text-lg text-slate-600">
                    {props.position}
                </div>
            </div>
            <div className="size-60">
                <img src={props.image_path} />
            </div>
        </div>
    );
}

function TeamPage() {
    return (
        <div className="mx-8 mt-20 grid grid-cols-3 gap-6">
            {club_officers.map((e, i) => (
                <TeamElement {...e} key={i} />
            ))}
        </div>
    );
}

export default TeamPage;
