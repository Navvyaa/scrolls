import instagram from "../Assets/Instagram.svg";
import phone from "../Assets/phone.svg"
import horizon from "../Assets/horizon.svg";
import SI from "../Assets/SI_logo.svg"
import "../LandingPage/landingPage.css"
import { Link } from "react-router-dom";

function Footer() {
    return <>

        <div className="landFooter">
            <div id="footer">
                <div id="footFlex1">
                    <p className="footHead">Scrolls<span className="navDot">.</span></p>
                    <p className="footHead2">Any questions or remarks? Just write us a message.</p>
                    <p id="formLink"><a target="_blank" className="underline" style={{color:"#FAC949"}} href="https://docs.google.com/forms/d/e/1FAIpQLSe8k570vDVMd-W0VgvwtU2hKJxSCakEi2HNhW1xlLn1xl4dvA/viewform">Query Form</a></p>
                </div>
                <div id="footFlex2">
    <p id="telephone">Contact</p>
    <div className="footFlexRow">
        <a href="tel:7037236902">
            <p className="w-[4.7rem] xl1:w-[7.2rem]">7037236902</p>
        </a>
        <p>(Radhika Aggarwal)</p>
    </div>
    <div className="footFlexRow">
        <a href="tel:6394785007">
            <p className="w-[4.7rem] xl1:w-[7.2rem]">6394785007</p>
        </a>
        <p>(Omar Siddiqui)</p>
    </div>
    <div className="footFlexRow">
        <a href="tel:7300559100">
            <p className="w-[4.7rem] xl1:w-[7.2rem]">7300559100</p>
        </a>
        <p>(Varun Varshney)</p>
    </div>
    <div className="footFlexRow">
        <a href="tel:9140745541">
            <p className="w-[4.7rem] xl1:w-[7.2rem]">9140745541</p>
        </a>
        <p>(Gauri Tripathi)</p>
    </div>
   
</div>

{/* 
                <div id="footFlex3">
                    <p id="telephone">Quick links</p>
                    <div style={{margin:"0.4rem 0"}} className="footFlexRow">
                        <Link to="/accommodations"><p id="link">Accommodation</p></Link>
                    </div>
                </div> */}

                <div id="footFlex4">
                    <p id="telephone">Find us</p>
                    <div style={{margin:"0.4rem 0"}} className="footFlexRow">
                        <img src={instagram} id="instagram" />
                        <p id="link"><a href="https://www.instagram.com/scrolls.akgec?igsh=eHBid3liazkwdXB4" target="_blank"  >scrolls.akgec</a></p>
                    </div>
                    <div className="footFlexRow">
                        <img src={horizon} id="horizon" />
                        <p id="link"><a href="https://instagram.com/horizon.akgec?igshid=MGU3ZTQzNzY=" target="_blank" >Team Horizon</a></p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center flex-wrap gap-2" id="footText">Powered by <a href="https://www.instagram.com/software.incubator/" target="_blank"  >
            <div className="flex items-center gap-2 justify-center">
                    <img src={SI} />
                    <span id="software">SOFTWARE</span><span id="incubator">INCUBATOR </span></div>
            </a>
                & Managed by <a href="https://instagram.com/horizon.akgec?igshid=MGU3ZTQzNzY=" target="_blank" >
                    <div className="flex items-center gap-2 justify-center">
                    <img src={horizon} id="horizon" />
                    <span id="incubator"> TEAM </span>
                    <span id="horizonText"> HORIZON</span>
                    </div></a></div>

        </div>
    </>
}

export default Footer
