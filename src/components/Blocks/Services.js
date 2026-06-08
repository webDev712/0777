import './css/Services.css'

const Service = ({img, title, description}) => {
    return (
        <div className='service' style={{backgroundImage: `url('${img}')`}}>
            <div>{title}</div>
            <p>{description}</p>
        </div>
    )
}

const Services = () => {
    return (
        <div className="services">
            <h2>Our Services</h2>
            <p>End-to-end automation and integration solutions for modern businesses</p>
            <div>
                <Service img={'logo_API.svg'} title={'API Integration Development'} description={'Connect your tools and platforms with custom API integrations. Stripe, HubSpot, Shopify, Salesforce, and more.'} />
                <Service img={'logo_Workflow.svg'} title={'Workflow Automation'} description={'Eliminate manual tasks with intelligent automation systems that trigger actions across your entire tech stack.'} />
                <Service img={'logo_Web.svg'} title={'Web Application Development '} description={'Сustom web applications for your business needs. From customer portals and internal management systems to SaaS platforms and enterprise solutions '} />
                <Service img={'logo_Mobile.svg'} title={'Mobile App Development '} description={'Сross platform and native mobile applications. intuitive, high-performance mobile solutions for both iOS and Android platforms. '} />
                <Service img={'logo_Custom.svg'} title={'Custom Dashboards'} description={'Real-time analytics dashboards that consolidate data from multiple sources into actionable insights.'} />
                <Service img={'logo_CRM.svg'} title={'CRM & SaaS Systems'} description={'Purpose-built CRM systems and SaaS platforms designed around your unique business processes.'} />
            </div>
        </div>
    )
}

export default Services;