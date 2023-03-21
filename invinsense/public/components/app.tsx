import React, { useState, useEffect } from 'react';
import { i18n } from '@osd/i18n';
import { FormattedMessage, I18nProvider } from '@osd/i18n/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './AgentUI.scss';
import './AgentFlexItem.scss';
import AgentFlexItemcomp from './AgentFlexItemcomp';

import SecurityInforMonito from './SecurityInforMonito';
import AuditingANDPolicy from './AuditingAndPolicy';
import ThreatDetectResponse from './ThreatDetectResponse';
import RegulatoryCompliance from './RegulatoryCompliance';

import './SecurityInfoMonitoring.scss'; 
 
import Home from './Home';



import {
  EuiButton,
  EuiHorizontalRule,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageHeader,
  EuiTitle,
  EuiText,
} from '@elastic/eui';

import { CoreStart } from '../../../../src/core/public';
import { NavigationPublicPluginStart } from '../../../../src/plugins/navigation/public';

import { PLUGIN_ID, PLUGIN_NAME } from '../../common';

import {AgentList} from './AgentList';

interface InvinsenseAppDeps {
  basename: string;
  notifications: CoreStart['notifications'];
  http: CoreStart['http'];
  navigation: NavigationPublicPluginStart;
}


const about = ()=> (
  <div>
    <h1>About</h1>
  </div>
);

const contact = ()=> (
  <div>
    <h1>Contact</h1>
  </div>
);

export const InvinsenseApp = ({ basename, notifications, http, navigation }: InvinsenseAppDeps) => (
  // Use React hooks to manage state.
  // const [timestamp, setTimestamp] = useState<string | undefined>();

  // const onClickHandler = () => {
  //   // Use the core http service to make a response to the server API.
  //   http.get('/api/invinsense/example').then((res) => {
  //     setTimestamp(res.time);
  //     // Use the core notifications service to display a success message.
  //     notifications.toasts.addSuccess(
  //       i18n.translate('invinsense.dataUpdated', {
  //         defaultMessage: 'Data updated',
  //       })
  //     );
  //   });
  // };

// -------------------------------------------------------------(01) Api Call code here----------
  // const [data, setData] = useState([]);
    
  // const loadAgentCount = ()=>{
  //     fetch('/api/request', {
  //         method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //         headers: {
  //             'Content-Type': 'application/json',
  //             'osd-xsrf': 'kibana',
  //         },
  //         body: JSON.stringify( {"method":"GET","path":"/agents/summary/status","body":{},"id":"default"}),
  //     }).then(response => response.json())
  //     .then(responseData=> {setData(responseData.data); 
      
  //         console.log(data);
  //         console.log(data.total);
  //         console.log(data.active);
  //         console.log(data.disconnected);
  //         console.log(data.never_connected);
  //         console.log(data.pending);
  //     });
  // }

  // useEffect(()=>{
  //     loadAgentCount();
  // }, []);
// ------------------------------------------------------------- 01 Api Call code here----------


// -------------------------------------------------------------02 Api Call code here----------

// const [data2, setData2] = useState([]);
    
// const listAgentCount = ()=>{
    // fetch('/api/request', {
    //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'osd-xsrf': 'kibana',
    //     },
    //     body: JSON.stringify( {"method":"GET","path":"/agents","body":{ "params": {
    //       limit: 15, offset: 0, q: "id!=000", sort: "+id"
    //     }},"id":"default"}),
    // }).then(listresponse => listresponse.json())
    // .then(listresponseData=> {setData2(listresponseData.data2); 
    
//         console.log(data2);
//         console.log(data2.registerIP);
//         console.log(data2.status);
//         console.log(data2.name);
//         console.log(data2.ip);
//         console.log(data2.node_name);
//         console.log(data2.id);
//         console.log(data2.dateAdd);
//     });
// }

// useEffect(()=>{
//     listAgentCount();
// }, []);

// -------------------------------------------------------------end 02 Api Call code here----------



  // Render the application DOM.
  // Note that `navigation.ui.TopNavMenu` is a stateful component exported on the `navigation` plugin's start contract.

    <Router basename={basename}>
      <I18nProvider>
        <>
          <navigation.ui.TopNavMenu
            appName={PLUGIN_ID}
            showSearchBar={true}
            useDefaultBehaviors={true}
          />
          {/* <div className="euiPage">
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
          <br /> */}

            
            <Route path="/" component={Home} exact={true} ></Route>
            <Route path="/agent-list" component={ AgentList }></Route>
            <Route path="/about" component={about}></Route>
            <Route path="/contact" component={contact}></Route>

{/* 
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

                  </div>


                </div>
              </div>
            </div>
             */}







          {/* <EuiPage restrictWidth="1000px">
            <EuiPageBody component="main">
              <EuiPageHeader>
                <EuiTitle size="l">
                  <h1>
                    <FormattedMessage
                      id="invinsense.helloWorldText"
                      defaultMessage="{name}"
                      values={{ name: PLUGIN_NAME }}
                    />
                  </h1>
                </EuiTitle>
              </EuiPageHeader>
              <EuiPageContent>
                <EuiPageContentHeader>
                  <EuiTitle>
                    <h2>
                      <FormattedMessage
                        id="invinsense.congratulationsTitle"
                        defaultMessage="Congratulations, you have successfully created a new OpenSearch Dashboards Plugin!"
                      />
                    </h2>
                  </EuiTitle>
                </EuiPageContentHeader>
                <EuiPageContentBody>
                  <EuiText>
                    <p>
                      <FormattedMessage
                        id="invinsense.content"
                        defaultMessage="Look through the generated code and check out the plugin development documentation."
                      />
                    </p>
                    <EuiHorizontalRule />
                    <p>
                      <FormattedMessage
                        id="invinsense.timestampText"
                        defaultMessage="Last timestamp: {time}"
                        values={{ time: timestamp ? timestamp : 'Unknown' }}
                      />
                    </p>
                    <EuiButton type="primary" size="s" onClick={onClickHandler}>
                      <FormattedMessage id="invinsense.buttonText" defaultMessage="Get data" />
                    </EuiButton>
                  </EuiText>
                </EuiPageContentBody>
              </EuiPageContent>
            </EuiPageBody>
          </EuiPage> */}
        </>
      </I18nProvider>
    </Router>
);
