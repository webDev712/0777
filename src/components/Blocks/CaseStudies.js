import './css/CaseStudies.css'

const CaseStudie = ({name, challenge, solution, results, specs}) => {
    return(
        <div>
            <div>{name}</div>
            <span>Challenge</span>
            <p>{challenge}</p>
            <span>Solution</span>
            <p>{solution}</p>
            <div>
                <span>Results</span>
                <div>
                    <div>
                        <div data-id="less-graph">{results.less_graph.value}</div>
                        <span>{results.less_graph.name}</span>
                    </div>
                    <div>
                        <div data-id="task">{results.task.value}</div>
                        <span>{results.task.name}</span>
                    </div>
                    <div>
                        <div data-id="energy">{results.energy.value}</div>
                        <span>{results.energy.name}</span>
                    </div>
                </div>
            </div>
            <div>
                <div>{specs[0]}</div>
                <div>{specs[1]}</div>
                <div>{specs[2]}</div>
            </div>
        </div>
    )
}

const CaseStudies = () => {
    return (
        <div className='case-studies'>
            <h2>Case Studies</h2>
            <p>Real results from real integrations</p>
            <div>
                <CaseStudie 
                    name={"CRM + Stripe + HubSpot Automation"} 
                    challenge={'Sales team spending 15+ hours per week manually updating records across three platforms'} 
                    solution={'Built automated sync system that captures Stripe payments, updates CRM records, and triggers HubSpot workflows'} 
                    results={{
                        less_graph: {name: 'Time saved', value: '80%'}, 
                        task: {name: "Manual Errors", value: '0'}, 
                        energy: {name: "Sales team satisfaction", value: '0'}}}
                    specs={['Stripe API', 'HubSpot', 'Custom CRM']}/>
                <CaseStudie 
                    name={"Shopify Inventory + Analytics Integration"} 
                    challenge={'eCommerce team making decisions based on day-old spreadsheet exports'} 
                    solution={'Real-time dashboard pulling data from Shopify, Google Analytics, and fulfillment APIs'} 
                    results={{
                        less_graph: {name: 'Inventory errors', value: '-95%'}, 
                        task: {name: "Fulfillment speed", value: '+40%'}, 
                        energy: {name: "Data latency", value: 'Fulfillment speed'}}}
                    specs={['Shopify', 'Google Analytics', 'eCommerce']}/>
                <CaseStudie 
                    name={"Zoho CRM + Multi-System Integration & Reporting"} 
                    challenge={'Marketing and sales teams working in isolated tools with no unified reporting or real-time visibility across systems'} 
                    solution={'Built centralized integration layer connecting Zoho CRM with marketing tools, support systems, and external APIs, with automated data sync and unified dashboards'} 
                    results={{
                        less_graph: {name: 'Reporting time', value: '-85%'}, 
                        task: {name: "Data consistency issues", value: '0'}, 
                        energy: {name: "Decision speed", value: '+60%'}
                    }}
                    specs={['Zoho CRM', 'API Integrations', 'Dashboarding', 'Automation Engine']}
                />

                <CaseStudie 
                    name={"QuickBooks + ERP + Financial Analytics Automation"} 
                    challenge={'Finance team manually reconciling invoices, expenses, and bank transactions across QuickBooks and external ERP systems'} 
                    solution={'Developed automated financial integration system syncing QuickBooks with ERP and banking APIs, generating real-time financial dashboards and reports'} 
                    results={{
                        less_graph: {name: 'Reconciliation time', value: '-90%'}, 
                        task: {name: "Manual accounting tasks", value: '-80%'}, 
                        energy: {name: "Financial visibility", value: '+70%'}
                    }}
                    specs={['QuickBooks', 'ERP Systems', 'Financial APIs', 'Dashboards', 'Reporting Automation']}
                />
            </div>
        </div>
    )
}

export default CaseStudies;