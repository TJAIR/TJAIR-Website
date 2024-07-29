import partnerships from "../assets/data/partnerships.json";

interface PartnershipElementProps {
    name: string;
    location: string;
    image: string;
    link: string;
    directors: { name: string; email: string }[];
}

function PartnershipElement(props: PartnershipElementProps) {
    return <div>hi</div>;
}

function PartnershipsPage() {
    return (
        <div className="grid grid-cols-4 gap-4">
            {partnerships.map((e, i) => (
                <PartnershipElement {...e} key={i} />
            ))}
        </div>
    );
}

export default PartnershipsPage;
