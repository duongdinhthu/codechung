import React,{Component} from "react";
import './style.css';
import Product from "../Product";
//extends : kế thừa
//vd: a extends b : thì B là lớp(class) cha của a
class Login extends Component// test sẽ kế thừa lại những methods(phương thức) , properties(thuộc tính) trong lớp Component
{
    constructor(){
        super();
        this.state = {color:"red"};
    }
    //render() xuất bản ra HTML => view
    render(){
        return(
            <div>
                {this.state.color}
                <br/>
                {this.props.color}
                <h2>Login Form</h2>
                User Name: <input type="text"></input>
                <br/>
                Password: <input type="password"></input>
                <br/>
                <input type="button"></input>
                <Car/>
            </div>
        );
    } 
}
class Car extends Component {
    render() {
      return <h2>I am a Car!</h2>;
    }
  }
   
export default Login;