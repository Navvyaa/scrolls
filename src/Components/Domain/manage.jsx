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
                            <p className="domainHeading">Work-Life Integration</p>
                            <p className="domainText">The concept of work-life integration emphasizes blending professional and personal responsibilities in a way that promotes overall well-being and satisfaction. How can individuals achieve a harmonious integration of work and personal life?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">India's Youth Dividend</p>
                            <p className="domainText">India's young population presents both opportunities and challenges for economic growth and development. How can India harness the potential of its youth to drive innovation, entrepreneurship, and economic prosperity?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Global Connectivity</p>
                            <p className="domainText">Advancements in technology have led to increased global connectivity and interdependence. How is global connectivity shaping business practices, cultural exchange, and geopolitical dynamics?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Sustainability in India</p>
                            <p className="domainText">Sustainability considerations are becoming increasingly important for businesses and governments in India. How can India accelerate its transition towards a more sustainable and eco-friendly economy?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Democratizing News</p>
                            <p className="domainText">The rise of digital media and social networking platforms has democratized access to news and information. How is this changing the landscape of journalism, public discourse, and political participation?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Human-AI Collaboration</p>
                            <p className="domainText">The increasing integration of artificial intelligence (AI) into various aspects of life raises questions about the future of human-AI collaboration. How can humans and AI systems work together synergistically to achieve common goals?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">IRL vs. URL</p>
                            <p className="domainText">The distinction between the "real" world and the online world is becoming increasingly blurred. How are digital technologies shaping human experiences, relationships, and identity?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Universal Basic Income (UBI)</p>
                            <p className="domainText">Universal Basic Income (UBI) is a proposed social welfare system in which all citizens receive a regular, unconditional sum of money from the government. What are the potential benefits and challenges of implementing UBI?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">The Creator Hustle</p>
                            <p className="domainText">The rise of digital platforms and social media has enabled individuals to monetize their creative talents and content. How are creators leveraging digital tools to build personal brands and entrepreneurial ventures?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Ethical Gene Editing</p>
                            <p className="domainText">Advances in genetic engineering and biotechnology raise ethical questions about the manipulation of human DNA. How can society navigate the ethical complexities of gene editing technologies?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">AI and Creativity</p>
                            <p className="domainText">The intersection of artificial intelligence (AI) and creativity is reshaping industries such as art, music, and literature. How is AI influencing the creative process, and what are the implications for human creativity?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">India's Fintech Boom</p>
                            <p className="domainText">India's fintech sector is experiencing rapid growth and innovation, driven by factors such as digital payments, blockchain technology, and financial inclusion initiatives. How is the fintech boom transforming India's financial landscape?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Algorithmic Society</p>
                            <p className="domainText">The increasing reliance on algorithms and data-driven decision-making is shaping various aspects of society, including governance, healthcare, and education. How can we ensure that algorithms are used ethically and responsibly in a rapidly evolving digital society?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Climate Change Action</p>
                            <p className="domainText">Climate change poses significant challenges for societies and ecosystems worldwide. How can businesses, governments, and individuals collaborate to mitigate the impacts of climate change and transition to a sustainable future?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">India's Electric Revolution</p>
                            <p className="domainText">The adoption of electric vehicles (EVs) and renewable energy technologies is gaining momentum in India. How can India accelerate its transition towards clean and sustainable energy sources?</p>
                        </div>
                    </li>
                </ul>
            </div>
            <Footer />
        </>
    );
}

export default DomainManage;
