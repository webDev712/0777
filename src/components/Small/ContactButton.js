import './css/ContactButton.css'

const ContactButton = ({color, bg_color, arrow_color}) => {
    return (
        <div style={{
            color: color,
            backgroundColor: bg_color,
            boxShadow: `0px 2px 4px 3px ${bg_color}2b`,
        }}
        className='contact-button'
        onClick={() => {
            document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth"
            });
        }}
        >
            Contact Us<img src={`/arrow_${arrow_color}.png`} alt="→"/>
        </div>
    )
}

export default ContactButton;