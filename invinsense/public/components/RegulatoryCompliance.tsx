import React from 'react';
import './SecurityInfoMonitoring.scss'; 



function RegulatoryCompliance(props){return(
    <React.Fragment> {/* --------------------------Regulatory Compliance---------------------- */}
        <div className="euiCard__content">
            <span id="i348c8d71-add1-11ed-8fa9-574084b32ad0Title" className="euiTitle euiText euiText--small euiCard__title"></span>

            <div id="if8a38b21-adca-11ed-ad34-01019cb455e7Description" className="euiText euiText--small euiCard__description">
                <p></p>    
            </div>
            
            <div className="euiSpacer euiSpacer--s"></div>

            <div className="euiFlexGrid euiFlexGrid--gutterLarge euiFlexGrid--halves euiFlexGrid--responsive"> 
                
                <div className="euiFlexItem">{/* display:flex; display:flex; ---------------------------- PCI DSS ------------------------- */}
                    <div className="euiCard euiCard--paddingMedium euiCard--centerAligned euiCard--horizontal euiCard--isClickable euiCard--hasIcon homSynopsis__card" data-test-subj="overviewWelcomeGeneral">
                        <div className="euiCard__top">
                            <svg className="euiIcon euiIcon--xLarge euiIcon--primary euiIcon--app euiIcon-isLoaded euiCard__icon" width="" height="" viewBox="0 0 32 32" 
                            xmlns="http://www.w3.org/2000/svg" focusable="false" role="img">

                                <path d="M29 9H3a3 3 0 01-3-3V3a3 3 0 013-3h26a3 3 0 013 3v3a3 3 0 01-3 3zM3 2a1 1 0 00-1 1v3a1 1 0 001 1h26a1 1 0 001-1V3a1 1 0 00-1-1H3z"></path>
                                <path className="euiIcon__fillSecondary" d="M12 20H3a3 3 0 01-3-3v-3a3 3 0 013-3h9a3 3 0 013 3v3a3 3 0 01-3 3zm-9-7a1 1 0 00-1 1v3a1 1 0 001 1h9a1 1 0 001-1v-3a1 1 0 00-1-1H3z"></path>
                                <path d="M12 31H3a3 3 0 01-3-3v-3a3 3 0 013-3h9a3 3 0 013 3v3a3 3 0 01-3 3zm-9-7a1 1 0 00-1 1v3a1 1 0 001 1h9a1 1 0 001-1v-3a1 1 0 00-1-1H3z"></path>
                                <path className="euiIcon__fillSecondary" d="M29 31h-9a3 3 0 01-3-3V14a3 3 0 013-3h9a3 3 0 013 3v14a3 3 0 01-3 3zm-9-18a1 1 0 00-1 1v14a1 1 0 001 1h9a1 1 0 001-1V14a1 1 0 00-1-1h-9z"></path>
                            </svg>
                        </div>
                    
                        <div className="euiCard__content">
                            <span className="euiTitle euiCard__title">
                                <button className="euiCard__titleButton" aria-describedby=" i348c8d73-add1-11ed-8fa9-574084b32ad0Description">
                                    {props.PciDssNAME}
                                </button>                        
                            </span>
                            <div className="euiText euiText--small euiCard__description " id="i348c8d73-add1-11ed-8fa9-574084b32ad0Description">
                                <p> {props.PciDssmessage1} </p>
                            </div>
                        </div>
                    </div>
                </div>{/* ----------------------------------PCI DSS------------------------------------- */}

                <div className="euiFlexItem">{/* display:flex; display:flex; ---------------------------- NIST 800-53 ------------------------- */}
                    <div className="euiCard euiCard--paddingMedium euiCard--centerAligned euiCard--horizontal euiCard--isClickable euiCard--hasIcon homSynopsis__card" data-test-subj="overviewWelcomeGeneral">
                        <div className="euiCard__top">
                            <svg className="euiIcon euiIcon--xLarge euiIcon--primary euiIcon--app euiIcon-isLoaded euiCard__icon" width="" height="" viewBox="0 0 32 32" 
                            xmlns="http://www.w3.org/2000/svg" focusable="false" role="img">

                                <path d="M29 9H3a3 3 0 01-3-3V3a3 3 0 013-3h26a3 3 0 013 3v3a3 3 0 01-3 3zM3 2a1 1 0 00-1 1v3a1 1 0 001 1h26a1 1 0 001-1V3a1 1 0 00-1-1H3z"></path>
                                <path className="euiIcon__fillSecondary" d="M12 20H3a3 3 0 01-3-3v-3a3 3 0 013-3h9a3 3 0 013 3v3a3 3 0 01-3 3zm-9-7a1 1 0 00-1 1v3a1 1 0 001 1h9a1 1 0 001-1v-3a1 1 0 00-1-1H3z"></path>
                                <path d="M12 31H3a3 3 0 01-3-3v-3a3 3 0 013-3h9a3 3 0 013 3v3a3 3 0 01-3 3zm-9-7a1 1 0 00-1 1v3a1 1 0 001 1h9a1 1 0 001-1v-3a1 1 0 00-1-1H3z"></path>
                                <path className="euiIcon__fillSecondary" d="M29 31h-9a3 3 0 01-3-3V14a3 3 0 013-3h9a3 3 0 013 3v14a3 3 0 01-3 3zm-9-18a1 1 0 00-1 1v14a1 1 0 001 1h9a1 1 0 001-1V14a1 1 0 00-1-1h-9z"></path>
                            </svg>
                        </div>
                    
                        <div className="euiCard__content">
                            <span className="euiTitle euiCard__title">
                                <button className="euiCard__titleButton" aria-describedby=" i348c8d73-add1-11ed-8fa9-574084b32ad0Description">
                                    {props.Nist80053NAME}
                                </button>                        
                            </span>
                            <div className="euiText euiText--small euiCard__description " id="i348c8d73-add1-11ed-8fa9-574084b32ad0Description">
                                <p> {props.Nist80053message2} </p>
                            </div>
                        </div>
                    </div>
                </div>{/* ----------------------------------NIST 800-53------------------------------------- */}

                <div className="euiFlexItem">{/* display:flex; display:flex; ----------------------------TSC------------------------- */}
                    <div className="euiCard euiCard--paddingMedium euiCard--centerAligned euiCard--horizontal euiCard--isClickable euiCard--hasIcon homSynopsis__card" data-test-subj="overviewWelcomeGeneral">
                        <div className="euiCard__top">
                            <svg className="euiIcon euiIcon--xLarge euiIcon--primary euiIcon--app euiIcon-isLoaded euiCard__icon" width="" height="" viewBox="0 0 32 32" 
                            xmlns="http://www.w3.org/2000/svg" focusable="false" role="img">

                                <path d="M29 9H3a3 3 0 01-3-3V3a3 3 0 013-3h26a3 3 0 013 3v3a3 3 0 01-3 3zM3 2a1 1 0 00-1 1v3a1 1 0 001 1h26a1 1 0 001-1V3a1 1 0 00-1-1H3z"></path>
                                <path className="euiIcon__fillSecondary" d="M12 20H3a3 3 0 01-3-3v-3a3 3 0 013-3h9a3 3 0 013 3v3a3 3 0 01-3 3zm-9-7a1 1 0 00-1 1v3a1 1 0 001 1h9a1 1 0 001-1v-3a1 1 0 00-1-1H3z"></path>
                                <path d="M12 31H3a3 3 0 01-3-3v-3a3 3 0 013-3h9a3 3 0 013 3v3a3 3 0 01-3 3zm-9-7a1 1 0 00-1 1v3a1 1 0 001 1h9a1 1 0 001-1v-3a1 1 0 00-1-1H3z"></path>
                                <path className="euiIcon__fillSecondary" d="M29 31h-9a3 3 0 01-3-3V14a3 3 0 013-3h9a3 3 0 013 3v14a3 3 0 01-3 3zm-9-18a1 1 0 00-1 1v14a1 1 0 001 1h9a1 1 0 001-1V14a1 1 0 00-1-1h-9z"></path>
                            </svg>
                        </div>
                    
                        <div className="euiCard__content">
                            <span className="euiTitle euiCard__title">
                                <button className="euiCard__titleButton" aria-describedby=" i348c8d73-add1-11ed-8fa9-574084b32ad0Description">
                                    {props.Tsc_NAME}
                                </button>                        
                            </span>
                            <div className="euiText euiText--small euiCard__description " id="i348c8d73-add1-11ed-8fa9-574084b32ad0Description">
                                <p> {props.Tscmessage3} </p>
                            </div>
                        </div>
                    </div>
                </div>{/* ----------------------------------TSC------------------------------------- */}

                <div className="euiFlexItem">{/* display:flex; display:flex; ---------------------------- GDPR------------------------- */}
                    <div className="euiCard euiCard--paddingMedium euiCard--centerAligned euiCard--horizontal euiCard--isClickable euiCard--hasIcon homSynopsis__card" data-test-subj="overviewWelcomeGeneral">
                        <div className="euiCard__top">
                            <svg className="euiIcon euiIcon--xLarge euiIcon--primary euiIcon--app euiIcon-isLoaded euiCard__icon" width="" height="" viewBox="0 0 32 32" 
                            xmlns="http://www.w3.org/2000/svg" focusable="false" role="img">

                                <path d="M29 9H3a3 3 0 01-3-3V3a3 3 0 013-3h26a3 3 0 013 3v3a3 3 0 01-3 3zM3 2a1 1 0 00-1 1v3a1 1 0 001 1h26a1 1 0 001-1V3a1 1 0 00-1-1H3z"></path>
                                <path className="euiIcon__fillSecondary" d="M12 20H3a3 3 0 01-3-3v-3a3 3 0 013-3h9a3 3 0 013 3v3a3 3 0 01-3 3zm-9-7a1 1 0 00-1 1v3a1 1 0 001 1h9a1 1 0 001-1v-3a1 1 0 00-1-1H3z"></path>
                                <path d="M12 31H3a3 3 0 01-3-3v-3a3 3 0 013-3h9a3 3 0 013 3v3a3 3 0 01-3 3zm-9-7a1 1 0 00-1 1v3a1 1 0 001 1h9a1 1 0 001-1v-3a1 1 0 00-1-1H3z"></path>
                                <path className="euiIcon__fillSecondary" d="M29 31h-9a3 3 0 01-3-3V14a3 3 0 013-3h9a3 3 0 013 3v14a3 3 0 01-3 3zm-9-18a1 1 0 00-1 1v14a1 1 0 001 1h9a1 1 0 001-1V14a1 1 0 00-1-1h-9z"></path>
                            </svg>
                        </div>
                    
                        <div className="euiCard__content">
                            <span className="euiTitle euiCard__title">
                                <button className="euiCard__titleButton" aria-describedby=" i348c8d73-add1-11ed-8fa9-574084b32ad0Description">
                                    {props.Gdpr_NAME}
                                </button>                        
                            </span>
                            <div className="euiText euiText--small euiCard__description " id="i348c8d73-add1-11ed-8fa9-574084b32ad0Description">
                                <p> {props.Gdprmessage4} </p>
                            </div>
                        </div>
                    </div>
                </div>{/* ----------------------------------GDPR------------------------------------- */}

                <div className="euiFlexItem">{/* display:flex; display:flex; ---------------------------- Hippa------------------------- */}
                    <div className="euiCard euiCard--paddingMedium euiCard--centerAligned euiCard--horizontal euiCard--isClickable euiCard--hasIcon homSynopsis__card" data-test-subj="overviewWelcomeGeneral">
                        <div className="euiCard__top">
                            <svg className="euiIcon euiIcon--xLarge euiIcon--primary euiIcon--app euiIcon-isLoaded euiCard__icon" width="" height="" viewBox="0 0 32 32" 
                            xmlns="http://www.w3.org/2000/svg" focusable="false" role="img">

                                <path d="M29 9H3a3 3 0 01-3-3V3a3 3 0 013-3h26a3 3 0 013 3v3a3 3 0 01-3 3zM3 2a1 1 0 00-1 1v3a1 1 0 001 1h26a1 1 0 001-1V3a1 1 0 00-1-1H3z"></path>
                                <path className="euiIcon__fillSecondary" d="M12 20H3a3 3 0 01-3-3v-3a3 3 0 013-3h9a3 3 0 013 3v3a3 3 0 01-3 3zm-9-7a1 1 0 00-1 1v3a1 1 0 001 1h9a1 1 0 001-1v-3a1 1 0 00-1-1H3z"></path>
                                <path d="M12 31H3a3 3 0 01-3-3v-3a3 3 0 013-3h9a3 3 0 013 3v3a3 3 0 01-3 3zm-9-7a1 1 0 00-1 1v3a1 1 0 001 1h9a1 1 0 001-1v-3a1 1 0 00-1-1H3z"></path>
                                <path className="euiIcon__fillSecondary" d="M29 31h-9a3 3 0 01-3-3V14a3 3 0 013-3h9a3 3 0 013 3v14a3 3 0 01-3 3zm-9-18a1 1 0 00-1 1v14a1 1 0 001 1h9a1 1 0 001-1V14a1 1 0 00-1-1h-9z"></path>
                            </svg>
                        </div>
                    
                        <div className="euiCard__content">
                            <span className="euiTitle euiCard__title">
                                <button className="euiCard__titleButton" aria-describedby=" i348c8d73-add1-11ed-8fa9-574084b32ad0Description">
                                    {props.Hippa_NAME}
                                </button>                        
                            </span>
                            <div className="euiText euiText--small euiCard__description " id="i348c8d73-add1-11ed-8fa9-574084b32ad0Description">
                                <p> {props.Hippamessage5} </p>
                            </div>
                        </div>
                    </div>
                </div>{/* ----------------------------------Hippa------------------------------------- */}

            </div>
        </div> 


        <span className="euiCard__betaBadgeWrapper">
            <span id="i348c8d71-add1-11ed-8fa9-574084b32ad0BetaBadge" className="euiBetaBadge euiCard__betaBadge">
                {props.CardTitle}
            </span>
        </span>       
        
        {/*----------------------------------------------Security Information Monitoring--------------------- */}
    </React.Fragment>
);
}

export default RegulatoryCompliance;