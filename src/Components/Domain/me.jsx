import { useEffect } from "react"
import Footer from "../footer/footer"
import Navbar from "../Navbar/navbar"
import "./domain.css"

function DomainMe() {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <>
            <Navbar />
            <div className="Domain">
                <p className="domainHead">Mechanical Engineering</p>
                <ul>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">CAD/CAE: Design Innovation</p>
                            <p className="domainText">CAD is a software tool used for creating 2D and 3D models and designs of products or parts, which can be used for product visualization, analysis, and simulation. CAE, on the other hand, is a software tool used for simulating and analysing the behaviour of products or parts under different conditions. How do you think CAD and CAE are important tools for modern engineering?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Self-Healing and Smart Materials: Future of Engineering</p>
                            <p className="domainText">Smart materials are materials that can change their properties or shape in response to external stimuli such as temperature, light, pressure, or magnetic fields. Self-healing materials have the ability to repair damage autonomously, leading to increased durability and lifespan of engineered systems. Give your views on the topic.</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Optimizing Supply Chains: Blockchain for Transparency</p>
                            <p className="domainText">Supply Chain Management (SCM) involves the coordination and integration of all activities involved in sourcing, procurement, production, inventory management, transportation, and distribution of goods and services. How can blockchain technology be utilized to enhance transparency and efficiency in supply chain operations?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Sustainable Manufacturing Solutions</p>
                            <p className="domainText">Green manufacturing is the practice of designing and producing products in an environmentally responsible manner that minimizes waste, conserves energy and natural resources, and reduces the overall environmental impact of manufacturing processes. How can sustainable manufacturing practices contribute to a greener future?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">3D Printing Revolution: Printing Electronics On-Demand</p>
                            <p className="domainText">Additive Manufacturing (AM), also known as 3D printing, is a process of creating three-dimensional objects by layering materials on top of each other. How do you think the capabilities of AM are likely to expand, making it an increasingly important part of modern manufacturing?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">MEMS – Micro Electro Mechanical Systems</p>
                            <p className="domainText">Micro Electro Mechanical Systems (MEMS) are tiny integrated devices that combine electrical and mechanical components on a single chip. Give your views on this topic.</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Automated Driving: EV & Self-Driving Tech</p>
                            <p className="domainText">Automated driving technology, including electric vehicles (EVs) and self-driving cars, is rapidly advancing. How do you think these technologies will impact the future of transportation and automotive engineering?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Friction Stir Welding: Innovation</p>
                            <p className="domainText">Friction Stir Welding (FSW) is a solid-state welding technique that offers several advantages over traditional welding methods. Give your views on this topic.</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Industry 4.0: Smart Factory</p>
                            <p className="domainText">Industry 4.0 refers to the integration of advanced technologies and digitalization in manufacturing processes. How do you think this technology is expected to transform the manufacturing landscape in the coming years?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Nanotechnology</p>
                            <p className="domainText">Nanotechnology has the potential to revolutionize many fields, including medicine, electronics, energy, and manufacturing. Explain briefly.</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Cobots: Collaborative Robots</p>
                            <p className="domainText">Cobots, or collaborative robots, are designed to work alongside humans in shared workspaces. How do you think cobots are reshaping the future of manufacturing and industrial automation?</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Bioprinting: Organs on Demand</p>
                            <p className="domainText">Bioprinting is a promising technology that allows for the fabrication of biological tissues and organs using 3D printing techniques. How do you envision the future of bioprinting and its impact on healthcare and biomedical engineering?</p>
                        </div>
                    </li>
                </ul>
            </div>
            <Footer />
        </>
    );
}

export default DomainMe;
