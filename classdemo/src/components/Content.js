import { Component } from "react";
// instead of import the entire module, we are specifically importing the component
// and using it. so we use {}
class Content extends Component {
  constructor() {
    super(); // this is thee method which will trigger the parent class.
    this.state = {
      email: "", // variables created inside the state which is empty, which is ready to hold the data.
      pass: "",
    };
    console.log("I am Constructor");
  }
  componentDidMount() {
    console.log("Hey, I amd ComponentDidMount");
    setTimeout(() => {
      console.log("After 5 seconds");
    }, 5000);
  }

  componentDidUpdate() {
    console.log("Hey, I amd ComponentDidUpdate");
  }

  componentWillUnmount() {
    setTimeout(() => {
      this.setstate = ({ email: "" }, { pass: "" });
    }, 10000);
  }
  // userdefined functions
  myFunction = (event) => {
    event.preventDefault(); // stips the page from refreshing
    console.log("Submited the Data");
    console.log(this.state.email);
    console.log(this.state.pass);
  };

  myEmail = (event) => {
    this.setState({ email: event.target.value }); //setState is important
  };
  //inside the state we need to pass the object as key-value pair, key is from the
  //variable defined in the state and the value is from the target in the inout field.
  //setState wil automatically update the state.

  myPass = (event) => {
    this.setState({ pass: event.target.value });
  };
  //   this function is browser compiled
  render() {
    return (
      <div>
        <form onSubmit={this.myFunction}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email" //
              onChange={this.myEmail} //
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="pass" //
              onChange={this.myPass} //
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          {/* <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div> */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <p>{console.log("I am render method")}</p>
      </div>
    );
  }
}

export default Content;
