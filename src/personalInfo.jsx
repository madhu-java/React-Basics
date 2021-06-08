import React  from 'react'
export class PersonalInfo extends React.Component{
    render(){
        return <div>
            <p>
                <label>FullName:<b>John smith</b></label>
            </p>
            <p>
                <label>DateOfBirth:<b>01/01/2000</b></label>
            </p>
        </div>
    }
}
export default PersonalInfo;