import logo from './logo.svg';
import './App.css';
import {Ele}  from './elements'
import {Address} from './address'
import {Employee} from './employee'
import EmpDepartment from './empDepartment'
import PersonalInfo from './personalInfo';

function App() {
  const element =<div><Ele /></div>
  return (
    <main>
    {element}
    <div><Address /></div>
    <Employee id="100" name="sandy" />
    <EmpDepartment id={1} deptName="Dev" />
    {/* <a href="src\personalInfo.jsx" target="_blank">
    personal
    </a> */}
    <PersonalInfo />
    </main>
  );
}

export default App;
