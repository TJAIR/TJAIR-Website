import club_officers from "../assets/data/club_officers.json";

interface TeamElementProps {
    name: string;
    position: string;
    image_path: string;
}

function OfficerElement(props: TeamElementProps) {
    return (
        <div className="flex flex-row items-center justify-end p-4">            
            <div className="mr-4 flex flex-1 flex-col items-center">
            <img src={props.image_path} className="size-56 rounded-full" />
                <div className="text-nowrap text-2xl">{props.name}</div>
                <div className="text-nowrap text-lg text-slate-700">
                    {props.position}
                </div>
            </div>            
        </div>
    );
}

function TeamPage() {
    return (
        <div className="mx-8 mt-10 text-4xl content-center w-11/12">
            <div className="w-full text-center text-6xl">Leadership</div>
            
            <div className="mt-8 grid grid-cols-3 gap-6">
                {club_officers.map((e, i) => (
                    <OfficerElement {...e} key={i} />
                ))}
            </div>
        </div>
    );
}

export default TeamPage;
