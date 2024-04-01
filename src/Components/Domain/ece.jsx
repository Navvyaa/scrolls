import { useEffect } from "react"
import Footer from "../footer/footer"
import Navbar from "../Navbar/navbar"
import "./domain.css"

function DomainEce() {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return <>
        <Navbar />
        <div className="Domain">
            <p className="domainHead">Electronics and Communication</p>
            <ul>
                <li>
                    <div id="liItem">
                        <p className="domainHeading">Revolution of semiconductor industries</p>
                        <p className="domainText">Semiconductors revolution sets out to explain the development of modern electronic systems and devices from the viewpoint of the semiconductor materials (germanium, silicon, gallium arsenide and many others) which made them possible. The industry plays a vital role in powering modern society, from communication and transportation to healthcare and entertainment</p>
                    </div>
                </li>
                <li>
                    <div id="liItem">
                        <p className="domainHeading">Flexible Electronics and Display</p>
                        <p className="domainText">Flexible electronics is a technology that allows you to build electronic circuits on flexible substrates thus making them bendable and stretchable. It enables new product paradigms that aren’t possible with conventional semiconductors and glass substrates. They are increasingly being used in a number of applications which benefit from their low profile, light weight, and favorable dielectric properties. This technology is attractive for current and emerging applications, such as flexible circuit boards and flexible chip carriers, as well as for potential future applications such as flexible displays and macroelectronic systems. Brief your views on this technology.</p>
                    </div>
                </li>
                <li>
                    <div id="liItem">
                        <p className="domainHeading">Fuel cell technology</p>
                        <p className="domainText">The fuel cell technology is a clean technology with low chemical pollution and is a chemical engineering way of producing energy based on electrochemical energy conversion of chemical energy of hydrogen and oxygen into electricity and heat which produces only water as the byproduct. Fuel cell technologies are expected to substantially reduce consumption of oil and emissions of pollutants such as greenhouse gases as compared with conventional combustion-based power generation technologies. Fuel cell technologies have the additional advantages of high efficiency, at times including the ability to take advantage of cogeneration or hybrid applications. What are your views on this promising technology?</p>
                    </div>
                </li>
                <li>
                    <div id="liItem">
                        <p className="domainHeading">IoT home/industry</p>
                        <p className="domainText">The internet of things, or IoT, is a system of interrelated computing devices, mechanical and digital machines, objects, animals or people that are provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction. The internet of things helps people live and work smarter, as well as gain complete control over their lives. In addition to offering smart devices to automate homes, it is essential for industry. IoT encourages companies to rethink their approach and gives them the tools to improve their strategies. At home, it monitors and manipulates mechanical and electrical systems . Share you views.</p>
                    </div>
                </li>
                <li>
                    <div id="liItem">
                        <p className="domainHeading">Optical Wireless and 5G</p>
                        <p className="domainText">Optical Wireless Communications (OWC) has become a promising technology for supporting high-data-rate 5G communication and the massive connectivity of IoT. OWC technologies possess a number of prominent features such as wide spectrum, high-data-rate, low latency, high security, low cost, and low energy consumption, addressing the highly demanding requirements of 5G communications. They can play an important role of sensing, monitoring, and resource sharing in massive device connectivity of IoT networks. Enunciate on this technology.</p>
                    </div>
                </li>
                <li>
                    <div id="liItem">
                        <p className="domainHeading">Visible light communication</p>
                        <p className="domainText">Visible light communication (VLC) is a wireless method that enables high-speed transmission of data with visible light. This data is transmitted by modulating the intensity of light given off by a light source. The signal is received by a photodiode device that transforms the data into forms that are readable and readily-consumed by end users. It  can be used as a communications medium for ubiquitous computing, because light-producing devices (such as indoor/outdoor lamps, TVs, traffic signs, commercial displays and car headlights/taillights) are used everywhere.
                            Share your thoughts.
                        </p>
                    </div>
                </li>
                <li>
                    <div id="liItem">
                        <p className="domainHeading">Smart antenna</p>
                        <p className="domainText">A smart antenna is a specific type of digital antenna that has capabilities related to tracking or handling signals. They are used to increase the productivity of digital wireless communication system. Some of the most common smart antenna applications include acoustic signal processing, track and scan radar, and cellular systems such as 5G and LTE. When multiple mitigation is needed, diversity becomes a big problem. How do you think you can tame this problem?
                        </p>
                    </div>
                </li>
                <li>
                    <div id="liItem">
                        <p className="domainHeading">Hybrid cars</p>
                        <p className="domainText">Hybrid cars use more than one means of propulsion that means combining petrol or diesel engines with electric motor. They consume less fuel and less emission of CO2 which makes the vehicle eco friendly as compared to conventional cars. Due to their higher complexity, hybrid vehicles are considerably more expensive than their ICE counterparts. Apart from increasing the overall purchasing cost, added tech in a hybrid car can affect maintenance costs.
                            What do you think modifications need to be?
                        </p>
                    </div>
                </li>
                <li>
                    <div id="liItem">
                        <p className="domainHeading">Augmented reality and virtual reality</p>
                        <p className="domainText">Augmented reality and virtual reality are reality technologies that either enhance or replace a real-life environment with a simulated one. Virtual reality is fully immersive and augmented reality overlays digital information on real-world elements. AR and VR are still in their infancy, and they have a long timeline of development ahead of them before they become true mainstream technologies. What do you think these technologies have in store?
                        </p>
                    </div>
                </li>
                <li>
                    <div id="liItem">
                        <p className="domainHeading">Nanotechnology in electronics</p>
                        <p className="domainText">In nanotechnology, the  phenomena takes place at dimensions in the nanometre scale are utilised in the design, characterisation, production and application of materials, structures, devices and system. Nanotechnology in electronics offers faster, smaller and more portable systems. However, they posses new health risks, possibly involving quite different mechanisms of interference with the physiology of human and environmental species. Shower light upon the scope and risk of this technology.</p>
                    </div>
                </li>
                <li>
                    <div id="liItem">
                        <p className="domainHeading">OLEDs</p>
                        <p className="domainText">OLEDs are solid-state devices composed of thin films of organic molecules that create light with the application of electricity. OLEDs can provide brighter, crisper displays on electronic devices and use less power than conventional light-emitting diodes (LEDs) or liquid crystal displays (LCDs) used today. The future of OLEDs seems bright as their presence in the smartphone and TV markets is continuously growing, in addition to other markets. Brief on this new era technology.</p>
                    </div>
                </li>
                <li>
                    <div id="liItem">
                        <p className="domainHeading">Wireless Sensor Networks</p>
                        <p className="domainText">Wireless Sensor Network can be defined as a network of devices that can communicate the information gathered from a monitored field through wireless links. A wireless sensor network is used for a variety of important applications in remote monitoring and target tracking. Recently, sensors have been manufactured to be smaller, cheaper, more intelligent, and equipped and interfaced wirelessly within a network for communication purposes. What is the significance of this technology in Space Research and how has it proved beneficial for the military and armed forces? Enunciate on the future advancements in this field.</p>
                    </div>
                </li>
                <li>
                    <div id="liItem">
                        <p className="domainHeading">Deep Learning</p>
                        <p className="domainText">Deep Learning is a subset of Machine Learning that is based on artificial neural networks (ANNs) with multiple layers, also known as deep neural networks (DNNs). These neural networks are inspired by the structure and function of the human brain–millions of interconnected neurons that work together to ‘learn’ and process information, large amounts of data in an unsupervised or semi-supervised manner. Thus the Deep Learning models makes them well-suited for tasks such as image recognition, speech recognition, natural language processing and provides benefits like hidden relationships and pattern recovery, unsupervised learning, etc. With the advancement in Deep Learning, how has this field of technology helped in the health care sector? How can we ensure that the misuse of this technology is prevented?</p>
                    </div>
                </li>
                <li>
                    <div id="liItem">
                        <p className="domainHeading">Image Processing</p>
                        <p className="domainText">Image processing is a way to convert an image to a digital aspect and perform certain functions on it, in order to get an enhanced image or extract other useful information from it. Image processing basically involves the following three steps. First, importing an image with an optical scanner or digital photography. Second, analysis and image management including data compression and image enhancement and visual detection patterns such as satellite imagery. Third, it produces the final stage where the result can be changed to an image or report based on image analysis . Enunciate on this technology and also throw light on the drawbacks in the field of privacy and security.</p>
                    </div>
                </li>
                <li>
                    <div id="liItem">
                        <p className="domainHeading">Machine Learning</p>
                        <p className="domainText">Machine learning is a branch of artificial intelligence (AI) and computer science in which algorithms are trained using a training data set to create a model. Its  learning system has three main parts– Decision Process, Error Function and Model Optimization Process. When new input data is introduced to the ML algorithm, it makes a prediction on the basis of the model. The prediction is evaluated for accuracy and if the accuracy is acceptable, the Machine Learning algorithm is deployed. Classical, or ‘non-deep’, machine learning is more dependent on human intervention to learn. Human experts determine the set of features to understand the differences between data inputs, usually requiring more structured data to learn. How does ML provide a layout on the growing Data trends in India? Enunciate on the upcoming future trends in this field.</p>
                    </div>
                </li>
            </ul>
        </div>
        <Footer />
    </>
}

export default DomainEce
