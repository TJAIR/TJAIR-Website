import Perceptron from "/images/perceptron.gif";

function MissionElement() {
    return (
        <div className="mt-32 w-7/12 rounded-xl border-4 border-blue-400 p-4">
            <div className="mx-12">
                <div className="text-4xl font-semibold">Our Mission</div>
                <div className="mt-3 flex-grow border-t border-gray-600"></div>
            </div>

            <div className="text-md mx-2 mt-8 px-8 text-black">
                Leveraging partnerships with organizations and colleges in order
                to offer high quality{" "}
                <a className="text-lg font-semibold">research opportunities</a>{" "}
                for high school students. Striving to create{" "}
                <a className="text-lg font-semibold">equitable</a> opportunities
                in order to bridge socioeconomic barriers and make the
                possibility of effecttive, published research available to all.
            </div>
        </div>
    );
}

function MainPage() {
    return (
        <div className="mt-16 flex flex-col items-center justify-center">
            <div className="text-6xl">AI Research Club</div>
            <MissionElement />

            <div className="size-132 mt-12 items-center bg-white">
                <img className="mb-8" src={Perceptron} />
            </div>
            <div className="text-xs">
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7218494574174834688/?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7218494574174834688%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29">
                    Courtesy of Dr. Justin Hodges from LinkedIn
                </a>
            </div>
        </div>
    );
}

export default MainPage;
