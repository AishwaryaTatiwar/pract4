import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <>
    <center>
    <table border="1">
       <tr>
        <td>Name:</td>
        <td>{props.name}</td>
       </tr>
       <tr>
        <td colspan="2">Marks Scored</td>
       </tr>
       <tr>
        <td>OOPs:</td>
        <td>{props.m1}</td>
       </tr>
       <tr>
       <td>CWS:</td>
       <td>{props.m2}</td>
       </tr>
       <tr>
        <td>Maths:</td>
        <td>{props.m3}</td>
       </tr>
       </table>
       </center>
    </>
    );
}

export default App;
App.defaultProps={
  name:"Not available",
  m1:"Absent",
  m2:"Absent",
  m3:"Absent"
}
