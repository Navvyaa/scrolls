import { useEffect } from "react";
import Footer from "../footer/footer";
import Navbar from "../Navbar/navbar";
import caBanner from "../Assets/cabanner.png";

function CA() {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <>
            <Navbar pg="ca"/>
            <div className="pt-[3.7rem]">
                <img className="" src={caBanner} />
                <div style={{ paddingTop: "2rem" }} className="FAQ">
                    <p className="domainHead" id="Faqs">
                        Campus Ambassador
                    </p>
                    <p className="answer">
                         An exciting opportunity awaits as we launch the new
                        edition of Scrolls, a National-level technical paper
                        presentation competition on May 8, 2024. We're seeking
                        dynamic students with networking skills and a strong
                        social media presence to join as Campus Ambassadors and
                        align with the legacy of Scrolls. The Campus Ambassador
                        program is our effort to create a web of college
                        students across the country and provide them with ample
                        opportunities to develop and revolutionize technical
                        writing. The selected Campus Ambassadors will work
                        collectively with our team and become the face of
                        SCROLLS’24 in their respective campuses. The program
                        will give them the room to enhance their skill-set
                        while simultaneously bringing about innovative and
                        technical minds together.
                    </p>
                    <p className="answer">SCROLLS is a national-level technical paper presentation contest that provides a pedestal to unleash the talent of budding technocrats. SCROLLS-2024 deals with the most thriving and progressive fields of technology and management, bringing Computer Sc. & Information Technology, Mechanical Engineering, Electrical Engineering, Electronics & Communication Technology and Civil Engineering along with major developmental leaps in management and leadership in its fold. The crystal clarity and insight of the unique topics will not only transcend the contestants to glory but will also add to the technological advancements of the era. The responsibility is on your shoulders to cleanse the smog of ignorance with the lucidity of your conceptions.</p>
                    <hr className="faqLine" />
                    <div className="flex flex-col items-center mb-[1rem]">
                    <p style={{fontSize:"1.6rem"}} className="domainHeading">Responsibilities</p>
                    <div style={{fontFamily:"Montserrat"}} className="flex text-[1.2rem] gap-4 flex-wrap items-center justify-center my-4">
                        <div className="w-[10rem] border-[3px] border-[#fac949] h-[10rem] font-semibold bg-[#191919] text-[#fac949] flex items-center justify-center rounded-lg">
                            <p>Communicate</p>
                        </div>
                        <div className="w-[10rem] border-[3px] border-[#fac949] h-[10rem] font-semibold bg-[#191919] text-[#fac949] flex items-center justify-center rounded-lg">

                            <p>Promote</p>
                        </div>
                        <div className="w-[10rem] border-[3px] border-[#fac949] h-[10rem] font-semibold bg-[#191919] text-[#fac949] flex items-center justify-center rounded-lg">

                            <p>Orchestrate</p>
                        </div>
                        <div className="w-[10rem] border-[3px] border-[#fac949] h-[10rem] font-semibold bg-[#191919] text-[#fac949] flex items-center justify-center rounded-lg">

                            <p>Connect</p>
                        </div>
                    </div>
                    </div>
                    <hr className="faqLine" />
                    <p className="domainHeading">Incentives:</p>
                    <p className="answer">1. Certificate and token of appreciation for all the campus ambassadors.</p>
            <hr className="faqLine" />
            <p className="answer">2. Exciting cash rewards to the top 3 performing Campus Ambassadors.</p>
            <hr className="faqLine" />
            <p className="answer">3. Goodies and hampers to the campus ambassadors(performance based).
</p>
            <hr className="faqLine" />
            <div className="answer">4. Discounts on registration fees based on the number of teams registered by the referrals of the CA :
            <ul className="list-disc mt-2">
                <li className="">If Team Registrations by Campus Ambassador ≥ 4, then 200 Rs off on registration charges of Campus Ambassador's team.</li>
                <li>If Team Registrations by Campus Ambassador ≥ 6, then 300 Rs off on registration charges of Campus Ambassador's team.</li>
                <li>If Team Registrations by Campus Ambassador ≥ 10, then 100% off on registration charges of Campus Ambassador's team.</li>
            </ul>
            </div>
            </div>
        </div>
        <Footer />
    </>
    );
}

export default CA;
