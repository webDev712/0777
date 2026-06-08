import ContactButton from '../Small/ContactButton';
import './css/LetsAutomate.css'

const LetsAutomate = () => {
    return (
        <div className="lets-automate">
            <h2>Let's Automate Your Business Systems</h2>
            <p>Book a free consultation to discuss your integration and automation needs</p>
            <ContactButton color={"blue"} bg_color={"#ffffff"} arrow_color={"blue"}/>
        </div>
    )
}

export default LetsAutomate;