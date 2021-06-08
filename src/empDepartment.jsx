import React from 'react';
 const EmpDepartment=(props)=>{
    return(
        <div>
<h1>Emp Department details</h1>
<label>Dept. no.<b>{props.id}</b></label>
<label>Dept. Name<b>{props.deptName}</b></label>
</div>
    );
}
export default EmpDepartment;