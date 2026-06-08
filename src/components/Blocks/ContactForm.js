import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Loader from "../Small/Loader";
import { useState } from "react";
import './css/ContactForm.css'

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            company: formData.get("company"),
            message: formData.get("message"),
        };

        try {
            await fetch('https://script.google.com/macros/s/AKfycbxBbPVFTIdtxMeMC-mPr2oM2XSHpnaKpB7cUL8gAk-ZwVHJzWmE7DfdBKhBi20bjQJK/exec', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "text/plain"
                }
            });
            toast.success("Thank you! We will reach to you soon!");
            e.target.reset();
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong, try again later.");
        }
        setLoading(false)
    };
    return (
        <div id='contact' className="contact">
            {loading && (<Loader></Loader>)}
            <h2>Get in Touch</h2>
            <p>Tell us about your project and we'll get back to you ASAP</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <div>Name *</div>
                    <input name="name" placeholder="John Smith" type="text" required  />
                </label>
                <label>
                    <div>Email *</div>
                    <input name="email" placeholder="john@company.com" type="email" required />
                </label>
                <label>
                    <div>Company</div>
                    <input name="company" placeholder="Teska Inc." type="text" />
                </label>
                <label>
                    <div>Message *</div>
                    <textarea name="message" placeholder="Tell us about your integration and automation needs..." required />
                </label>
                <button type="submit"><span>Send Message</span></button>
            </form>
        </div>
    )
}

export default ContactForm;