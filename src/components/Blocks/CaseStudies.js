import './css/CaseStudies.css'

const CaseStudies = () => {
    return (
        <div className='case-studies'>
            <h2>Case Studies</h2>
            <p>Real results from real integrations</p>
            <div>
                <div>
                    <div>CRM + Stripe + HubSpot Automation</div>
                    <span>Challenge</span>
                    <p>Sales team spending 15+ hours per week manually updating records across three platforms</p>
                    <span>Solution</span>
                    <p>Built automated sync system that captures Stripe payments, updates CRM records, and triggers HubSpot workflows</p>
                    <div>
                        <span>Results</span>
                        <div>
                            <div>
                                <div data-id="less-graph">80%</div>
                                <span>Time saved</span>
                            </div>
                            <div>
                                <div data-id="task">0</div>
                                <span>Manual Errors</span>
                            </div>
                            <div>
                                <div data-id="energy">10/10</div>
                                <span>Sales team satisfaction</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>Stripe API</div>
                        <div>HubSpot</div>
                        <div>Custom CRM</div>
                    </div>
                </div>
                <div>
                    <div>Shopify Inventory + Analytics Integration</div>
                    <span>Challenge</span>
                    <p>eCommerce team making decisions based on day-old spreadsheet exports</p>
                    <span>Solution</span>
                    <p>Real-time dashboard pulling data from Shopify, Google Analytics, and fulfillment APIs</p>
                    <div>
                        <span>Results</span>
                        <div>
                            <div>
                                <div data-id="less-graph">-95%</div>
                                <span>Inventory errors</span>
                            </div>
                            <div>
                                <div data-id="task">+40%</div>
                                <span>Fulfillment speed</span>
                            </div>
                            <div>
                                <div data-id="energy">{`<5min`}</div>
                                <span>Data latency</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>Stripe API</div>
                        <div>HubSpot</div>
                        <div>Custom CRM</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudies;