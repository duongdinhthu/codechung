import React,{Component} from "react";
import './style.css';
//extends : kế thừa
//vd: a extends b : thì B là lớp(class) cha của a
class Login extends Component// test sẽ kế thừa lại những methods(phương thức) , properties(thuộc tính) trong lớp Component
{
    //render() xuất bản ra HTML => view
    render(){
        return(
            <div>
                <h2>Login Form</h2>
                User Name: <input type="text"></input>
                <br/>
                Password: <input type="password"></input>
                <br/>
                <input type="button"></input>
            </div>
        );
    }  
}
export default Login;