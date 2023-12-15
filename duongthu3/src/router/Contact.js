import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.productInput = React.createRef();
    this.nameInput = React.createRef();
    this.phoneNumberInput = React.createRef();
    this.emailInput = React.createRef();
  }

  updateSubmit(event) {
    alert("Bạn vừa gửi dữ liệu qua form");
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.updateSubmit} className="Container">
        <label>
          Product:
          <input type="text" ref={this.productInput} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" ref={this.nameInput} />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="text" ref={this.phoneNumberInput} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" ref={this.emailInput} />
        </label>
        <br />
        <div className="button">
          <button type="Register">Register</button>
          <button type="Cancel">Cancel</button>
        </div>
      </form>
    );
  }
}

export default Register;
