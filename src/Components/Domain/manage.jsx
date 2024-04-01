import { useEffect } from "react"
import Footer from "../footer/footer"
import Navbar from "../Navbar/navbar"
import "./domain.css"

function DomainManage() {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <>
            <Navbar />
            <div className="Domain">
                <p className="domainHead">Management Sciences</p>
                <ul>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Work-life Balance: A Myth?</p>
                            <p className="domainText">The concept of work-life balance has been a topic of much debate. Some argue that achieving a perfect balance between work and personal life is unattainable and that the notion of balance itself is flawed. Others believe that with proper time management and boundary-setting, individuals can achieve a satisfactory balance. What are your thoughts on this?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Harnessing India's Young Population for Economic Transformation</p>
                            <p className="domainText">India has one of the youngest populations in the world, presenting both opportunities and challenges for economic growth and development. Harnessing the potential of India's youth is crucial for driving innovation, entrepreneurship, and productivity. How can India leverage its young population to achieve sustainable economic transformation?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Balancing Ethics & Profit</p>
                            <p className="domainText">Businesses often face the dilemma of balancing ethical considerations with the pursuit of profit. Ethical business practices are essential for maintaining trust and credibility with stakeholders, but they may sometimes conflict with profit-driven motives. How can businesses strike the right balance between ethics and profit?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">ESG Goals and its Impact on Indian Business</p>
                            <p className="domainText">Environmental, Social, and Governance (ESG) goals have gained increasing prominence in the corporate world, with investors and stakeholders placing greater emphasis on sustainability and responsible business practices. How are ESG goals shaping the strategies and operations of Indian businesses, and what impact do they have on long-term value creation?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Moonlighting: How Far Justified?</p>
                            <p className="domainText">Moonlighting, or engaging in secondary employment outside of one's primary job, is a common practice among individuals seeking additional income or professional fulfillment. However, moonlighting can raise questions about conflicts of interest, productivity, and loyalty to primary employers. What are your views on the ethics and implications of moonlighting?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Machines will Rule the World: Future of Human-AI Collaboration</p>
                            <p className="domainText">The rapid advancement of artificial intelligence (AI) and automation technologies has led to speculation about the future of human-AI collaboration. While AI has the potential to enhance productivity and efficiency, concerns about job displacement and ethical implications persist. How do you envision the future relationship between humans and AI?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Virtual World of Youths Affecting Interpersonal Relationships</p>
                            <p className="domainText">The prevalence of virtual worlds and online communities has transformed the way young people interact and form relationships. While these digital platforms offer opportunities for connection and self-expression, they can also impact interpersonal skills and real-world social dynamics. How is the virtual world influencing the development of interpersonal relationships among youths?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">ChatGPT Killing Creativity?</p>
                            <p className="domainText">ChatGPT, and similar AI-powered tools, are increasingly being used for various purposes, including content generation and creative writing. However, some argue that reliance on AI for creative tasks may stifle human creativity and originality. What are your thoughts on the impact of AI on creativity?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">India Ready for Green Vehicles?</p>
                            <p className="domainText">The transition to green vehicles, such as electric cars and hybrids, is gaining momentum globally as countries seek to reduce emissions and combat climate change. Is India prepared to embrace green vehicles, and what are the challenges and opportunities associated with their adoption?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Global Climate Crisis: A Big Challenge</p>
                            <p className="domainText">The global climate crisis presents one of the most pressing challenges of our time, with far-reaching implications for the environment, economy, and society. Addressing climate change requires collective action and innovative solutions at local, national, and global levels. How can businesses, governments, and individuals work together to mitigate the impacts of climate change?</p>
                        </div>
                    </li>
                </ul>
            </div>
            <Footer />
        </>
    );
}

export default DomainManage;
