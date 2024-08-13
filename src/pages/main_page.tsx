import Perceptron from "/images/perceptron.gif";

function MainPage() {
    return (
        <div className="mt-16 flex flex-col items-center justify-center">
            <div className="text-6xl">AI Research Club</div>
            <div className="mt-6 text-2xl">
                Club at TJHSST focused around AI research and how to publish
                through real-world partnerships
            </div>

            <div className="mt-12 size-132 bg-white items-center">
                    <img className="mb-8" src={Perceptron} />
                    
            </div>
            <div className="text-xs">
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7218494574174834688/?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7218494574174834688%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29">
                        Courtesy of Dr. Justin Hodges from LinkedIn</a></div>
        </div>
    );
}

export default MainPage;
