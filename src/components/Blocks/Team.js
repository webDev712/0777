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
                <EmployeeCard img={'backend_engineer.png'} title={'Backend Engineer '} description={'Builds APIs, automation logic, and data processing systems using Node.js, Python and modern backend stacks. '} />
                <EmployeeCard img={'system_architect.png'} title={'System Architect'} description={'Designs scalable system architecture, API structures, and integration flows across complex systems. '} />
                <EmployeeCard img={'frontend_engineer.png'} title={'Frontend Engineer '} description={'Develops dashboards, admin panels, and web applications using React / Next.js. '} />
                <EmployeeCard img={'mobile_engineer.png'} title={'Mobile Engineer'} description={'Builds cross-platform mobile applications using Flutter for iOS and Android. '} />
                <EmployeeCard img={'itegration_engineer.png'} title={'Integration Engineer'} description={'Specializes in connecting CRM, eCommerce platforms and third-party APIs (HubSpot, Shopify, Stripe, etc.). '} />
                <EmployeeCard img={'dev_ops_engineer.png'} title={'DevOps / Cloud Engineer'} description={'Managing cloud infrastructure with servers, pipelines, and deployment visualizations'} />
            </div>
        </div>
    )
}

export default Team;