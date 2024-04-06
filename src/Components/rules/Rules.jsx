import Navbar from "../Navbar/navbar"
import "../FAQs/faq.css"
import Footer from "../footer/footer"
import { useEffect } from "react"

function Rules() {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return <>
        <Navbar />
        <div className="FAQ">
            <p className="dashboard" id="Faqs">Rules and Regulations</p>
            <p className="answer">1. The competition will be open to all the bonafide students of Engineering and Management Colleges with a minimum of 2 and a maximum of 3 authors per paper.</p>
            <hr className="faqLine" />
            <p className="answer">2. Synopsis of maximum 1000 words to be sent by a laid down date. Based on the synopsis, an experts’ committee will select the papers for the final paper presentation.</p>
            <hr className="faqLine" />
            <p className="answer">3. For presentation, a time slot of 7 minutes + 3 minutes (for Q&A) will be given to each team.</p>
            <hr className="faqLine" />
            <p className="answer">4. A soft copy of the final paper is to be sent before the designated date.</p>
            <hr className="faqLine" />
            <p className="dashboard" id="Faqs">Paper Format</p>
            <ul className="list-disc">
                <li>The paper is to be typed in single space, double column format using Times New Roman font and font size 12.</li>
                <li>Title should be written in 18 font size.</li>
                <li>The paper can be a maximum of 10 pages with no page numbers and a margin of 1’’ all around to be left.</li>
                <li>The first page to include Title, Name(s) of authors, their college name, telephone numbers as well as email addresses. This information to be included with extended abstract also.</li>
            </ul>
        </div>
        <Footer />
    </>

}

export default Rules
