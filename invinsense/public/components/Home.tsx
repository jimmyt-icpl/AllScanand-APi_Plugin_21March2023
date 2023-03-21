
import React, { useState, useEffect } from 'react';

import './AgentUI.scss';
import './AgentFlexItem.scss';
import AgentFlexItemcomp from './AgentFlexItemcomp';

import SecurityInforMonito from './SecurityInforMonito';
import AuditingANDPolicy from './AuditingAndPolicy';
import ThreatDetectResponse from './ThreatDetectResponse';
import RegulatoryCompliance from './RegulatoryCompliance';


import './SecurityInfoMonitoring.scss';

const Home = () => {

    const [data, setData] = useState([]);
      
    const loadAgentCount = ()=>{
        fetch('/api/request', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'osd-xsrf': 'kibana',
            },
            body: JSON.stringify( {"method":"GET","path":"/agents/summary/status","body":{},"id":"default"}),
        }).then(response => response.json())
        .then(responseData=> {setData(responseData.data); 
        
            console.log(data);
            console.log(data.total);
            console.log(data.active);
            console.log(data.disconnected);
            console.log(data.never_connected);
            console.log(data.pending);
        });
    }

    useEffect(()=>{
        loadAgentCount();
    }, []);

    return(
        <React.Fragment>
            <div className="euiPage">
                <div className="euiFlexGroup euiFlexGroup--gutterLarge euiFlexGroup--directionRow euiFlexGroup--responsive">
                <AgentFlexItemcomp AgentName=" " value=" "/>
                <AgentFlexItemcomp AgentName="Total Agents" value= {data.total} />
                <AgentFlexItemcomp AgentName="Active Agents" value={data.active} />
                <AgentFlexItemcomp AgentName="Disconnected Agents" value={data.disconnected}/>
                <AgentFlexItemcomp AgentName="Pending Agents" value={data.pending}/>
                <AgentFlexItemcomp AgentName="Never connected Agents"  value={data.never_connected}/>
                <AgentFlexItemcomp AgentName="" value=" "/>
                
                </div>
            </div>
            <br />

            

            <div className="euiPage wz-welcome-page">
              <div className="euiFlexGroup euiFlexGroup--gutterLarge euiFlexGroup--directionRow euiFlexGroup--responsive">
                <div className="euiFlexItem">


                  <div className="euiFlexGroup euiFlexGroup--gutterLarge euiFlexGroup--directionRow euiFlexGroup--responsive">
                    
                    <div className="euiFlexItem">
                      <div className="euiCard euiCard--paddingMedium euiCard--centerAligned euiCard--hasBetaBadge euiCard--hasChildren">
                      < SecurityInforMonito SecurityEventsNAME="Security Events" IntegrityMonitoringNAME="Integrity Monitoring"
                        SecurityEventsmessage1="Browse through Security alerts, issues and threats in your environment." 
                        IntegrityMonitoringmessage2="Alert related to file changes including permissions, content, ownership and attribute."
                        CardTitle="Security Information Monitoring"
                        />
                      </div>
                    </div>

                    <div className="euiFlexItem">
                      <div className="euiCard euiCard--paddingMedium euiCard--centerAligned euiCard--hasBetaBadge euiCard--hasChildren">
                      <AuditingANDPolicy PolicyMonitoringNAME="Policy Monitoring" SystemAuditingNAME="System Auditing" ConfigurationAssesNAME="Security Configuration assessment"
                        PolicyMonitoringmessage1="Verify that your system are configured according to your security ploicies baseline." 
                        SystemAuditingmessage2="Audit users behavior, monitoring command execution and alerting on acess to critical files."
                        ConfigurationAssesmessage3="Scan your assests as a part of configuration assessment audit"
                        CardTitle="Auditing and Policy Monitoring"
                        />
                      </div>
                    </div>

                  </div>


                  <div className="euiSpacer euiSpacer--xl"></div>


                  <div className="euiFlexGroup euiFlexGroup--gutterLarge euiFlexGroup--directionRow euiFlexGroup--responsive">
                    
                    <div className="euiFlexItem">
                      <div className="euiCard euiCard--paddingMedium euiCard--centerAligned euiCard--hasBetaBadge euiCard--hasChildren">
                      < ThreatDetectResponse VulnerabiltyNAME="Vulnerabilities" MitreAttackNAME="MITRE ATT&CK"
                        Vulnerabilitymessage1="Discover what application in your environment are affected by well known vulnerabilities." 
                        MitreAttackmessage2="Security events from knowledge base of adversary tactics and techniques based real-world observations."
                        CardTitle="Threat Detection and Response"
                        />
                  
                      </div>
                    </div>

                    <div className="euiFlexItem">
                      <div className="euiCard euiCard--paddingMedium euiCard--centerAligned euiCard--hasBetaBadge euiCard--hasChildren">
                      <RegulatoryCompliance PciDssNAME="PCI DSS" Nist80053NAME="NIST 800-53" Tsc_NAME="TSC" Gdpr_NAME="GDPR" Hippa_NAME="HIPPA"
                        PciDssmessage1="Browse through Security alerts, issues and threats in your environment." 
                        Nist80053message2="Alert related to file changes including permissions, content, ownership and attribute."
                        Tscmessage3="Trust Services Criteria for Security, Availability, Processing, Integrity, Confidentiality and Privacy."
                        Gdprmessage4="General Data Protection Regulation (GDPR) sets guidelines for processing of personal data."
                        Hippamessage5="Health Insuarance Portability and Accountability Act of 1996 (HIPPA) provides data privacy and security provision for safeguarding medical information."
                        CardTitle="Regulatory Compliance"
                        />
                  
                      </div>
                    </div>
z
                  </div>


                </div>
              </div>
            </div>
            

        </React.Fragment>
    );
}

export default Home;