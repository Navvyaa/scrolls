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
                            <p className="domainHeading">Self-Healing and Smart Materials: Future of Engineering</p>
                            <p className="domainText">Self-healing and smart materials are engineered to sense damage and autonomously repair themselves, extending the life of components and reducing maintenance costs. In mechanical systems, these materials can recover from cracks, scratches, or stress-induced failures. Applications include aerospace structures, automotive parts, and civil infrastructure. Smart materials also respond to stimuli like temperature, pressure, or electricity, enabling adaptive and intelligent systems. These innovations represent a major leap toward sustainable and resilient engineering.</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Optimizing Supply Chains: Blockchain for Transparency</p>
                            <p className="domainText">Blockchain technology introduces secure, immutable, and transparent records into supply chains. For mechanical engineering industries like automotive and aerospace manufacturing, blockchain ensures authenticity of parts, prevents counterfeiting, and improves traceability of materials. By linking every stakeholder in real time, blockchain reduces delays, enhances trust, and optimizes logistics. Integrating blockchain with IoT and AI promises supply chains that are not only efficient but also tamper-proof and highly adaptive to market demands.</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">3D Printing Revolution: Printing Electronics On-Demand</p>
                            <p className="domainText">3D printing is evolving beyond plastics and metals to include conductive materials, enabling the creation of electronic circuits directly within mechanical parts. This opens possibilities for embedding sensors, antennas, and circuits into structural components, leading to lightweight, multifunctional designs. Such on-demand electronics are vital in aerospace, automotive, and consumer devices, reducing assembly complexity and enabling rapid prototyping. The convergence of additive manufacturing and electronics is reshaping how machines and products are designed.</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">MEMS (Micro-Electro-Mechanical Systems)</p>
                            <p className="domainText">MEMS are miniaturized mechanical and electro-mechanical devices fabricated using microfabrication techniques. They combine sensors, actuators, and electronics on a single chip, allowing precise measurement and control. MEMS are widely used in accelerometers, gyroscopes, pressure sensors, and biomedical devices. Their small size, low cost, and high sensitivity make them essential in modern vehicles, drones, robotics, and healthcare equipment. The integration of MEMS into mechanical systems enhances efficiency, accuracy, and automation.</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Industry 4.0: Smart Factory</p>
                            <p className="domainText">Industry 4.0 integrates IoT, cyber-physical systems, robotics, and AI into manufacturing to create smart factories. Machines communicate in real time, processes are optimized with big data, and predictive maintenance ensures minimal downtime. For mechanical engineers, Industry 4.0 means designing flexible production systems that adapt to demand while reducing waste. This revolution transforms manufacturing from rigid mass production to agile, intelligent, and customized production environments.</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Nanotechnology</p>
                            <p className="domainText">Nanotechnology manipulates matter at the atomic and molecular scale to develop materials with extraordinary properties. In mechanical engineering, nano-coatings improve wear resistance, nanocomposites enhance strength-to-weight ratios, and nano-lubricants reduce friction. Applications extend to aerospace, automotive, energy systems, and medical devices. By controlling properties at the nanoscale, engineers can design materials and systems that are lighter, stronger, and more efficient, driving breakthroughs in performance and sustainability.</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Bioprinting: Organs on Demand</p>
                            <p className="domainText">Bioprinting uses 3D printing techniques to create biological tissues and organs using bio-inks composed of living cells. This innovation has the potential to address organ shortages by producing transplantable organs. For mechanical engineers, challenges include bioprinter design, precision control of printing processes, and ensuring vascularization within tissues. Beyond healthcare, bioprinting opens pathways for drug testing, reducing reliance on animal trials. It is a powerful intersection of engineering, biology, and medicine.</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Kinetic Energy Recovery Systems (KERS) in Vehicles</p>
                            <p className="domainText">KERS capture and store the energy generated during braking, which would otherwise be wasted as heat. This energy is stored in batteries, flywheels, or supercapacitors and later reused to provide an acceleration boost. Initially used in Formula 1 racing, KERS is now applied in hybrid and electric vehicles to improve fuel efficiency and performance. Mechanical engineers play a key role in designing efficient energy storage mechanisms and integrating them into vehicle systems.</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Supercritical CO₂ in Power Generation</p>
                            <p className="domainText">Supercritical carbon dioxide (sCO₂) cycles use CO₂ above its critical temperature and pressure as a working fluid in power plants. Compared to steam, sCO₂ turbines are more compact, efficient, and environmentally friendly. They offer higher thermal efficiency for applications in nuclear, solar, and waste heat recovery plants. Mechanical engineers contribute to the development of high-pressure components, heat exchangers, and turbines that can withstand extreme operating conditions.</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Autonomous Drones for Inspection and Delivery</p>
                            <p className="domainText">Autonomous drones integrate sensors, AI, and mechanical design to perform inspection and delivery tasks without human pilots. In mechanical engineering, drones are used for inspecting pipelines, bridges, wind turbines, and factories, reducing risks and costs. For logistics, drones enable last-mile delivery with efficiency and speed. Advances in lightweight materials, battery optimization, and aerodynamic design make drones versatile tools for both industrial and commercial applications.</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">Bio-Inspired Cooling Systems</p>
                            <p className="domainText">Bio-inspired cooling systems mimic natural processes, such as leaf transpiration or termite mounds, to manage heat in engineering applications. These systems offer efficient alternatives to conventional cooling in electronics, automotive systems, and renewable energy technologies. For example, microchannel designs inspired by blood vessels improve thermal regulation in high-performance devices. By learning from biology, mechanical engineers are developing sustainable and energy-efficient cooling methods that address modern heat management challenges.</p>
                        </div>
                    </li>
                    <li>
                        <div id="liItem">
                            <p className="domainHeading">CAD/CAM in Reverse Engineering</p>
                            <p className="domainText">Computer-Aided Design (CAD) and Computer-Aided Manufacturing (CAM) play a crucial role in reverse engineering, where existing products or components are digitally scanned, analyzed, and reproduced. Using 3D scanning and CAD modeling, engineers can recreate parts without original blueprints. CAM then facilitates automated manufacturing of these components. This approach is vital for legacy systems, automotive spares, aerospace components, and customization. It accelerates innovation while reducing costs and downtime.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <Footer />
        </>
    );
}

export default DomainMe;
