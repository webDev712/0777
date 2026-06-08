import ContactButton from "../Small/ContactButton";
import './css/Hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div data-id="icons"><span></span><span></span><span></span><div>Technical Automation & Integration Experts</div></div>
            <h1>We Build Custom Software & <span>Automation Systems</span> for Growing Businesses</h1>
            <p>Transform manual workflows into automated systems. Connect your tools, integrate APIs, and build custom dashboards that give you complete visibility into your operations.</p>
            <ContactButton color={"white"} bg_color={"#223FFC"} arrow_color={"white"}/>
        </div>
    )
}

export default Hero;