import './css/ContactForm.css'

const ContactForm = () => {
     const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            company: formData.get("company"),
            message: formData.get("message"),
        };

        console.log(data);
    };
    return (
        <div id='contact'>
            <h2>Get in Touch</h2>
            <p>Tell us about your project and we'll get back to you within 24 hours</p>
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