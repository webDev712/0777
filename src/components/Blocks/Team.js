import './css/Team.css'

const EmployeeCard = ({img, title, description}) => {
    return (
        <div className='employee-card'>
            <img src={`/${img}`} alt="title"/>
            <div>{title}</div>
            <p>{description}</p>
        </div>
    )
}

const Team = () => {
    return (
        <div>
            <h2>Meet the Team</h2>
            <p>End-to-end automation and integration solutions for modern businesses</p>
            <div>
                <EmployeeCard img={'system_architect.png'} title={'System Architect - Genadiy'} description={'Designs scalable system architecture, API structures, and integration flows across complex systems. '} />
                <EmployeeCard img={'backend_engineer.png'} title={'Backend Engineer - Max'} description={'Builds APIs, automation logic, and data processing systems using Node.js, Python and modern backend stacks. '} />
                <EmployeeCard img={'frontend_engineer.png'} title={'Frontend Engineer - Alla'} description={'Develops dashboards, admin panels, and web applications using React / Next.js. '} />
                <EmployeeCard img={'mobile_engineer.png'} title={'Mobile Engineer - Genadiy'} description={'Builds cross-platform mobile applications using Flutter for iOS and Android. '} />
                <EmployeeCard img={'designer.png'} title={'Product Designer - Anna'} description={'Creates user-centered UI/UX designs, design systems, and interactive prototypes for web and mobile products.'} />
                <EmployeeCard img={'dev_ops_engineer.png'} title={'DevOps / Cloud Engineer - Nastya'} description={'Managing cloud infrastructure with servers, pipelines, and deployment visualizations'} />
                <EmployeeCard img={'itegration_engineer.png'} title={'Integration Engineer - Dima'} description={'Specializes in connecting CRM, eCommerce platforms and third-party APIs (HubSpot, Shopify, Stripe, etc.). '} />
                <EmployeeCard img={'automation_expert.png'} title={'Automation Expert  - Maksym'} description={'Designs and implements workflow automation systems that eliminate manual work and improve operational efficiency across business processes'} />
            </div>
        </div>
    )
}

export default Team;