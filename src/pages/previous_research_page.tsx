import previous_research from "../assets/data/previous_research.json";

interface ResearchElementProps {
    name: string;
    description: string;
}

function ResearchElement(props: ResearchElementProps) {
    return (
        <div className="flex w-1/2 flex-col items-center">
            <div className="font-semibold">{props.name}</div>
            <div>{props.description}</div>
        </div>
    );
}

function PreviousResearchPage() {
    return (
        <div className="mt-16 flex flex-col items-center justify-center">
            <div className="text-6xl">Research</div>
            <div className="mx-8 mt-12 flex">
                {previous_research.map((r, i) => (
                    <ResearchElement {...r} key={i} />
                ))}
            </div>
        </div>
    );
}

export default PreviousResearchPage;
