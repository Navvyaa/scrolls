import Navbar from "../Navbar/navbar"
import "../FAQs/faq.css"
import Footer from "../footer/footer"
import { useEffect } from "react"

function Rules() {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return <>
        <Navbar pg="rules"/>
        <div className="FAQ">
            <p className="dashboard" id="Faqs">Rules and Regulations</p>
            <div id="bullets" className="flex justify-between items-start gap-[0.34rem]"><span className="">1.</span><p className="answer">The competition will be open to all the bonafide students of Engineering and Management Colleges with a minimum of 2 and a maximum of 3 authors per paper.</p></div>
            <hr className="faqLine" />
            <div id="bullets" className="flex justify-between items-start gap-[0.34rem]"><span className="">2.</span> <p className="answer">Synopsis of maximum 1000 words to be sent by a laid down date. Based on the synopsis, an experts’ committee will select the papers for the final paper presentation.</p>
            </div>
            <hr className="faqLine" />
            <div id="bullets" className="flex justify-between items-start gap-[0.34rem]"><span className="">3.</span><p className="answer">For presentation, a time slot of 7 minutes + 3 minutes (for Q&A) will be given to each team.</p>
            </div>
            <hr className="faqLine" />
            <div id="bullets" className="flex justify-between items-start gap-[0.34rem]"><span className="">4.</span><p className="answer">A soft copy of the final paper is to be sent before the designated date.</p>
            </div>
            <hr className="faqLine" />
            <p className="dashboard" id="Faqs">Paper Format</p>
            <div id="bullets" className="flex justify-between items-start gap-[0.34rem]">
    <span className="">1.</span>
    <p className="answer">The paper is to be typed in single space, double column format using Times New Roman font and font size 12.</p>
</div>
<hr className="faqLine" />
<div id="bullets" className="flex justify-between items-start gap-[0.34rem]">
    <span className="">2.</span>
    <p className="answer">Title should be written in 18 font size.</p>
</div>
<hr className="faqLine" />
<div id="bullets" className="flex justify-between items-start gap-[0.34rem]">
    <span className="">3.</span>
    <p className="answer">The paper can be a maximum of 10 pages with no page numbers and a margin of 1’’ all around to be left.</p>
</div>
<hr className="faqLine" />
<div id="bullets" className="flex justify-between items-start gap-[0.34rem]">
    <span className="">4.</span>
    <p className="answer">The first page to include Title, Name(s) of authors, their college name, telephone numbers as well as email addresses. This information to be included with extended abstract also.</p>
</div>

        </div>
        <Footer />
    </>

}

export default Rules
