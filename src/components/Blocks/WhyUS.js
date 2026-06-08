import './css/WhyUs.css'

const WhyUS = () => {
    return (
        <div className="why-us">
            <h2>Why Choose Soft-macro</h2>
            <p>Technical expertise meets business outcomes</p>
            <div>
                <div data-id="team">
                    <div>Full-Stack Team</div>
                    <p>Frontend, backend, DevOps, and API specialists all in one team</p>
                </div>
                <div data-id="puzzle">
                    <div>API Integration Expertise</div>
                    <p>Deep experience with Stripe, Shopify, HubSpot, Salesforce, and custom APIs</p>
                </div>
                <div data-id="energy-big">
                    <div>Automation-First Approach</div>
                    <p>We design systems that eliminate manual work and scale with your business</p>
                </div>
                <div data-id="goal">
                    <div>Business-Oriented</div>
                    <p>We focus on ROI and measurable results, not just technical implementation</p>
                </div>
            </div>
        </div>
    )
}

export default WhyUS;