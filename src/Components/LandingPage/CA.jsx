import { useEffect } from "react"
import Footer from "../footer/footer"
import Navbar from "../Navbar/navbar"

function CA() {

    useEffect(()=>{
        window.scroll(0,0)
    },[])

    return <>
        <Navbar />
        <div className="FAQ">
            <p className="domainHead" id="Faqs">Campus Ambassador</p>
            <p className="answer">An exciting opportunity awaits as we launch the new edition of Scrolls, a National-level technical paper presentation competition on May 8, 2024. We're seeking dynamic students with networking skills and a strong social media presence to join as Campus Ambassadors and align with the legacy of Scrolls.</p>
            <hr className="faqLine" />
            <p className="domainHeading">Rules and Regulations</p>
            <p className="answer">Campus Ambassadors will be rewarded for achieving at least 5 team registrations, including their own.</p>
            
            <hr className="faqLine" />
            <p className="domainHeading">Perks for Campus Ambassador</p>
            <p className="answer">1. Letter of appreciation and other prizes for all Campus Ambassadors.</p>
            <hr className="faqLine" />
            <p className="answer">2. Cash reward for the Campus Ambassador with the highest number of team registrations (only 1).</p>
            <hr className="faqLine" />
            <div className="answer">3. Discounts on registration fees based on the number of teams registered by the Campus Ambassador's efforts.
            <ul className="list-disc mt-2">
                <li className="">If Team Registrations by Campus Ambassador ≥ 4, then 200 Rs off on registration charges of Campus Ambassador's team.</li>
                <li>If Team Registrations by Campus Ambassador ≥ 6, then 300 Rs off on registration charges of Campus Ambassador's team.</li>
                <li>If Team Registrations by Campus Ambassador ≥ 10, then 100% off on registration charges of Campus Ambassador's team.</li>
            </ul>
            </div>

        </div>
        <Footer />
    </>

}

export default CA