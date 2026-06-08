import './css/AboutUs.css'

const AboutUs = () => {
    return (
        <div className='about-us'>
            <h2>About Soft-macro</h2>
            <p>We are a distributed <b>engineering team</b> focused on building automation systems, integrations, and <b>custom software solutions</b> for growing businesses.</p>
            <p>We operate as a small senior-level collective, combining expertise in backend systems, frontend development, mobile apps, and API integrations. </p>
            <div>
                <video controls poster="/softmacro-thumbnail.png">
                    <source src="/softmacro.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default AboutUs;