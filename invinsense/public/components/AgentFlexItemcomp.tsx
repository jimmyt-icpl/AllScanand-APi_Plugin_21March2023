import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import './AgentFlexItem.scss';
import './SecurityInfoMonitoring.scss';

import CalledAgent from './CalledAgent';

// ------------------------------------------------------------------------------------------------

    // const handleClick =async ()=>{ 
        // useEffect(()=>{
        //     fetch('/api/request', {
        //         method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'osd-xsrf': 'kibana',
        //         },
        //         body: JSON.stringify( {"method":"GET","path":"/agents/summary/status","body":{},"id":"default"}),
        //     }).then(response => response.json())
        //     .then(data=> setData(data));
            
        // }, []);
        // fetch('/api/request', {
        //         method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'osd-xsrf': 'kibana',
        //         },
        //         body: JSON.stringify( {"method":"GET","path":"/agents/summary/status","body":{},"id":"default"}) 
        // }).then(response => response.json())
        // .then(data => useState({data: data}));

        // fetch('/api/v1/restapiinfo')
        // .then(response => response.json())
        // .then(data => setData(data))
        // .catch(error => console.error(error));

        // try{
        //     const response1 = await fetch('/utils/configuration');
        //     const result1 = await response1.json();
        //     // Store the result in state
        
        //     // Call the second API
        //     const response2 = await fetch('/api/saved_objects/_find?fields=title&per_page=10000&type=index-pattern');
        //     const result2 = await response2.json();
        //     // Store the result in state
            
        //     // Call the third API
        //     const response3 = await fetch('/hosts/apis');
        //     const result3 = await response3.json();
        //     // Store the result in state
        //     setData([result1, result2, result3]);
        // }
        // catch(error){
        //     console.error( error);
        // }

    // };
function AgentFlexItemcomp(props){
    return(
    <React.Fragment>
        <div className="euiFlexItem">
            <div className="euiStat euiStat--centerAligned">
                <div className="euiText euiText--small euiStat__description"><p> {props.AgentName} </p>
                </div>
                <p className="euiTitle euiTitle--large euiStat__title euiStat__title--primary"> <span className="AgentToolTipAnchor"> <Link to="/agent-list"> <span className= "AgentstatWithLink"> 
                    {props.value}
                </span></Link> </span> </p>
            </div>
        </div>   
    </React.Fragment>
);
}
export default AgentFlexItemcomp; 




// export const AgentFlexItemcomp = () => {
//     return(
//         <React.Fragment>
//             <div classname="AgentFlexItem">
//                 <div className="AgentState">
//                     <div classname="AgentText"><p>Total agent</p></div>
//                     <p className="AgentTitle"> <span className="AgentToolTipAnchor"> <span classname= "AgentstateWithLink"></span> </span> </p>
//                 </div>
//             </div>   
//         </React.Fragment>
//     );
// };