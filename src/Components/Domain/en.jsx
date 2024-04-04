import { useEffect } from "react";
import Footer from "../footer/footer";
import Navbar from "../Navbar/navbar";
import "./domain.css";

function DomainEn() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="Domain">
        <p className="domainHead">Electrical and Electronics</p>
        <ul>
          <li>
            <div id="liItem">
              <p className="domainHeading">
                Vehicular Power Electronic Circuits and Charging Systems
              </p>
              <p className="domainText">
                Vehicular power electronic circuits and charging systems play
                a crucial role in the development of electric vehicles. These
                systems encompass various components such as DC-DC converters,
                onboard chargers, and battery management systems, all aimed at
                optimizing the efficiency and performance of electric
                propulsion. Discuss the latest advancements, challenges, and
                future prospects in this domain.
              </p>
            </div>
          </li>
          <li>
            <div id="liItem">
              <p className="domainHeading">
                Robot Design, Development, and Control
              </p>
              <p className="domainText">
                Robot design, development, and control are interdisciplinary
                fields that involve mechanical, electrical, and software
                engineering. From industrial automation to service robots,
                there's a wide range of applications for robotic systems.
                Explore the latest trends, methodologies, and challenges in
                designing and controlling robots for various purposes.
              </p>
            </div>
          </li>
          <li>
            <div id="liItem">
              <p className="domainHeading">
                Integrating Multiple Energy Sources
              </p>
              <p className="domainText">
                With the increasing adoption of renewable energy sources and
                energy storage systems, there's a growing need for effective
                modeling, control, and integration of multiple energy sources
                into power systems. Discuss the techniques, algorithms, and
                strategies used to model, control, and integrate diverse energy
                sources such as solar, wind, hydro, and battery storage for
                grid stability and reliability.
              </p>
            </div>
          </li>
          <li>
            <div id="liItem">
              <p className="domainHeading">
                Smart Grids and Sustainable Systems
              </p>
              <p className="domainText">
                Smart grids and sustainable systems represent the future of
                electrical infrastructure, offering enhanced efficiency,
                reliability, and sustainability. Explore the components,
                technologies, and benefits of smart grids, as well as their
                role in promoting renewable energy integration,
                demand-side management, and grid resilience.
              </p>
            </div>
          </li>
          <li>
            <div id="liItem">
              <p className="domainHeading">
                IoT in Power Systems
              </p>
              <p className="domainText">
                The Internet of Things (IoT) is revolutionizing power systems
                by enabling real-time monitoring, control, and optimization of
                grid operations. Discuss the applications of IoT in power
                systems, including smart meters, predictive maintenance,
                energy efficiency, and grid automation, and analyze their
                impact on grid performance and reliability.
              </p>
            </div>
          </li>
          <li>
            <div id="liItem">
              <p className="domainHeading">Energy Policies & Standards</p>
              <p className="domainText">
                Energy policies and standards play a crucial role in shaping
                the transition to a sustainable energy future. Explore the
                development, implementation, and impact of energy policies and
                standards at the local, national, and international levels,
                and discuss their implications for energy security,
                affordability, and environmental protection.
              </p>
            </div>
          </li>
          <li>
            <div id="liItem">
              <p className="domainHeading">Battery Energy Management System</p>
              <p className="domainText">
                Battery energy management systems (BEMS) are essential for
                optimizing the performance, efficiency, and lifespan of
                battery-based energy storage systems. Discuss the design,
                control algorithms, and applications of BEMS in grid-connected
                and off-grid renewable energy systems, as well as their role
                in supporting grid stability and reliability.
              </p>
            </div>
          </li>
          <li>
            <div id="liItem">
              <p className="domainHeading">
                E-Mobility: Opportunities & Challenges
              </p>
              <p className="domainText">
                Electric mobility (e-mobility) is rapidly transforming the
                transportation sector, offering opportunities for reduced
                emissions, energy independence, and enhanced urban
                sustainability. Explore the opportunities, challenges, and
                applications of e-mobility, including electric vehicles,
                charging infrastructure, and smart transportation systems.
              </p>
            </div>
          </li>
          <li>
            <div id="liItem">
              <p className="domainHeading">
                Application of AI & ML in Power Stations
              </p>
              <p className="domainText">
                Artificial intelligence (AI) and machine learning (ML) are
                revolutionizing power station operations, offering
                opportunities for predictive maintenance, fault diagnosis,
                optimization, and control. Discuss the applications of AI and
                ML in power stations, including predictive analytics, anomaly
                detection, and optimization algorithms, and analyze their
                impact on efficiency, reliability, and safety.
              </p>
            </div>
          </li>
          <li>
            <div id="liItem">
              <p className="domainHeading">Solar Photovoltaic Systems</p>
              <p className="domainText">
                Solar photovoltaic (PV) systems are a key component of
                renewable energy infrastructure, offering clean and abundant
                electricity generation. Discuss the design, installation,
                operation, and maintenance of solar PV systems, as well as
                their economic, environmental, and social benefits for
                sustainable energy production.
              </p>
            </div>
          </li>
          <li>
            <div id="liItem">
              <p className="domainHeading">
                Modeling Control of AC/DC converters
              </p>
              <p className="domainText">
                AC/DC converters play a crucial role in power electronics
                systems, enabling the conversion of alternating current (AC)
                power to direct current (DC) power and vice versa. Discuss
                the modeling, control, and design of AC/DC converters for
                various applications, including renewable energy systems,
                electric vehicles, and industrial power supplies.
              </p>
            </div>
          </li>
          <li>
            <div id="liItem">
              <p className="domainHeading">
                Energy-Efficient Power Electronics
              </p>
              <p className="domainText">
                Power electronics and energy-efficient drives are essential
                for optimizing energy conversion and utilization in various
                applications, including electric vehicles, renewable energy
                systems, and industrial automation. Explore the latest
                developments, trends, and challenges in power electronics and
                energy-efficient drive technologies, and discuss their
                implications for energy efficiency and sustainability.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default DomainEn;
