import partnerships from "../assets/data/partnerships.json";
import { IconMapPinShare } from "@tabler/icons-react";

interface PartnershipElementProps {
    name: string;
    location?: string;
    image?: string;
    link?: string;
    directors: { name: string; email: string }[];
}

function PartnershipElement(props: PartnershipElementProps) {
    return (
        <div className="flex flex-col items-center">
            <div className="text-3xl font-semibold hover:text-slate-600">
                <a href={props.link}>{props.name}</a>
            </div>

            {props.location &&
                <div className="flex flex-row">
                    <IconMapPinShare />
                    <div>{props.location}</div>
                </div>
            }
            <img src={props.image} />

            {props.directors &&
                <>
                    <div>Directors:</div>
                    <div className="flex flex-col items-center">
                        {props.directors.map((d) => (
                            <div>
                                {d.name} - {d.email}
                            </div>
                        ))}
                    </div>
                </>}
        </div>
    );
}

function PartnershipsPage() {
    if (partnerships.length == 0) {
        return (
            <div className="mt-4 flex justify-center text-xl font-semibold">
                Coming Soon...
            </div>
        );
    }

    return (
        <div className="mx-8 mt-10 grid grid-cols-4 gap-4">
            {partnerships.map((e, i) => (
                <PartnershipElement
                    {...(e as PartnershipElementProps)}
                    key={i}
                />
            ))}
        </div>
    );
}

export default PartnershipsPage;
