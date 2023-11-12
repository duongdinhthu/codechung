import React, {Component} from 'react';
// import { ReactPropTypes } from 'react;
// import PropTypes from 'prop-types'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
class ComponentExample extends React.Component{
render(){
return(
<div>
{/* {print all props} */}
<h1>
{this.props.arrayProp}<br/>
{this.props.stringProp}<br/>
{this.props.numberProp}<br/>
{this.props.boolProp}<br/>
</h1>
</div>
);
}
}
// componentClassName.propTypes: import kiểu(dữ liệu) của các property
ComponentExample.propTypes={
arrayProp:PropTypes.array,
stringProp:PropTypes.string,
numberProp:PropTypes.number,
boolProp:PropTypes.bool,
}
ComponentExample.defaultProps ={
arrayProp:['Ngoc', 'Binh', 'Thanh'],
stringProp:"fpt-aptech",
numberProp:20,
boolProp:true,
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<ComponentExample></ComponentExample>
{/* <App />  */}
{/* <Login></Login> */}
</React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();