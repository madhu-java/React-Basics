//import React from 'react';
 export const Employee=(props)=>{
    return(
        <div>
            <p>
            <label>Employee Id:<b>{props.id}</b></label>
            </p>
            <p>
                <label>Employee Name:<b>{props.name}</b></label>
            </p>
            
        </div>
    );
    

}
// const elements = <Employee id="100" name="snow" />