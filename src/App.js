import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "0",
    };
    this.handleClear = this.handleClear.bind(this);
    this.handleNum = this.handleNum.bind(this);
    this.handleEval = this.handleEval.bind(this);
    this.handleBackspace = this.handleBackspace.bind(this);
  }

  handleClear() {
    this.setState({ display: "0" });
  }

  handleBackspace() {
    if (this.state.display === "0") {
      return;
    } else if (
      this.state.display === "1" ||
      this.state.display === "2" ||
      this.state.display === "3" ||
      this.state.display === "4" ||
      this.state.display === "5" ||
      this.state.display === "6" ||
      this.state.display === "7" ||
      this.state.display === "8" ||
      this.state.display === "9" ||
      this.state.display === "-" ||
      this.state.display === "Infinity" ||
      this.state.display === "NaN"
    ) {
      this.setState({
        display: "0",
      });
    } else if (this.state.display.endsWith(" ") === false) {
      let sliced = this.state.display.slice(0, 0 - 1);
      this.setState({
        display: sliced,
      });
    } else if (this.state.display.endsWith(" ") === true) {
      let sliced = this.state.display.slice(0, 0 - 3);
      this.setState({
        display: sliced,
      });
    }
  }

  handleNum(e) {
    if (this.state.display === "Infinity" || this.state.display === "NaN") {
      this.setState({ display: "" });
    }
    console.log(e.target.id); // gets the id of the clicked button

    if (e.target.id === "zero") {
      if (
        this.state.display !== "0" &&
        this.state.display.startsWith("0", 0) === false &&
        this.state.display.endsWith(" 0") === false
      ) {
        console.log("pass");
        this.setState((prevState) => ({
          display: prevState.display.toString() + "0",
        }));
      }
    } else if (e.target.id === "one") {
      // ONE
      if (this.state.display.slice(-2) === " 0") {
        // if string endsWith " 0", slice off last character and add zero
        let sliced = this.state.display.slice(0, -1); // removes last char and returns rest of string
        this.setState({
          display: sliced + "1",
        });
      }
      // if "display" is not 0 / starting value, concat 1 to the end of the string
      else if (this.state.display !== "0") {
        this.setState((prevState) => ({
          display: prevState.display.toString() + "1",
        }));
      } else if (this.state.display === "0") {
        // if "display" is 0 / starting value, set "display" to "1"
        this.setState({
          display: "1",
        });
      }
    } else if (e.target.id === "two") {
      // TWO

      if (this.state.display.endsWith(" 0") === true) {
        let sliced = this.state.display.slice(0, -1);
        this.setState({
          display: sliced + "2",
        });
      } else if (this.state.display !== "0") {
        this.setState((prevState) => ({
          display: prevState.display.toString() + "2",
        }));
      } else if (this.state.display === "0") {
        this.setState({
          display: "2",
        });
      }
    } else if (e.target.id === "three") {
      // THREE

      if (this.state.display.endsWith(" 0") === true) {
        let sliced = this.state.display.slice(0, -1);
        this.setState({
          display: sliced + "3",
        });
      } else if (this.state.display !== "0") {
        this.setState((prevState) => ({
          display: prevState.display.toString() + "3",
        }));
      } else if (this.state.display === "0") {
        this.setState({
          display: "3",
        });
      }
    } else if (e.target.id === "four") {
      // FOUR

      if (this.state.display.endsWith(" 0") === true) {
        let sliced = this.state.display.slice(0, -1);
        this.setState({
          display: sliced + "4",
        });
      } else if (this.state.display !== "0") {
        this.setState((prevState) => ({
          display: prevState.display.toString() + "4",
        }));
      } else if (this.state.display === "0") {
        this.setState({
          display: "4",
        });
      }
    } else if (e.target.id === "five") {
      // FIVE

      if (this.state.display.endsWith(" 0") === true) {
        let sliced = this.state.display.slice(0, -1);
        this.setState({
          display: sliced + "5",
        });
      } else if (this.state.display !== "0") {
        this.setState((prevState) => ({
          display: prevState.display.toString() + "5",
        }));
      } else if (this.state.display === "0") {
        this.setState({
          display: "5",
        });
      }
    } else if (e.target.id === "six") {
      // SIX

      if (this.state.display.endsWith(" 0") === true) {
        let sliced = this.state.display.slice(0, -1);
        this.setState({
          display: sliced + "6",
        });
      } else if (this.state.display !== "0") {
        this.setState((prevState) => ({
          display: prevState.display.toString() + "6",
        }));
      } else if (this.state.display === "0") {
        this.setState({
          display: "6",
        });
      }
    } else if (e.target.id === "seven") {
      // SEVEN

      if (this.state.display.endsWith(" 0") === true) {
        let sliced = this.state.display.slice(0, -1);
        this.setState({
          display: sliced + "7",
        });
      } else if (this.state.display !== "0") {
        this.setState((prevState) => ({
          display: prevState.display.toString() + "7",
        }));
      } else if (this.state.display === "0") {
        this.setState({
          display: "7",
        });
      }
    } else if (e.target.id === "eight") {
      // EIGHT

      if (this.state.display.endsWith(" 0") === true) {
        let sliced = this.state.display.slice(0, -1);
        this.setState({
          display: sliced + "8",
        });
      } else if (this.state.display !== "0") {
        this.setState((prevState) => ({
          display: prevState.display.toString() + "8",
        }));
      } else if (this.state.display === "0") {
        this.setState({
          display: "8",
        });
      }
    } else if (e.target.id === "nine") {
      // NINE

      if (this.state.display.endsWith(" 0") === true) {
        let sliced = this.state.display.slice(0, -1);
        this.setState({
          display: sliced + "9",
        });
      } else if (this.state.display !== "0") {
        this.setState((prevState) => ({
          display: prevState.display.toString() + "9",
        }));
      } else if (this.state.display === "0") {
        this.setState({
          display: "9",
        });
      }
    } else if (e.target.id === "add") {
      if (
        this.state.display.endsWith(" +  - ") === true ||
        this.state.display.endsWith(" -  - ") === true ||
        this.state.display.endsWith(" *  - ") === true ||
        this.state.display.endsWith(" /  - ") === true
      ) {
        return;
      } else if (this.state.display.endsWith(" ") === true) {
        // if the string ends with an operator and a " "
        let sliced = this.state.display.slice(0, -3); // delete the last 3 characters and add the new operator
        this.setState({
          display: sliced + " + ",
        });
      } else if (this.state.display.endsWith(" ") === false) {
        this.setState((prevState) => ({
          display: prevState.display.toString() + " + ", // otherwise just add the operator
        }));
      }
    } else if (e.target.id === "subtract") {
      // IF THE LAST TWO CHARACTERS ARE "- ", then do nothing, otherwise add the " - "
      if (
        this.state.display.endsWith(" +  - ") === true ||
        this.state.display.endsWith(" -  - ") === true ||
        this.state.display.endsWith(" *  - ") === true ||
        this.state.display.endsWith(" /  - ") === true
      ) {
        return;
      } else if (this.state.display.endsWith("- ") === false) {
        this.setState((prevState) => ({
          display: prevState.display.toString() + " - ",
        }));
      }
    } else if (e.target.id === "multiply") {
      if (
        this.state.display.endsWith(" +  - ") === true ||
        this.state.display.endsWith(" -  - ") === true ||
        this.state.display.endsWith(" *  - ") === true ||
        this.state.display.endsWith(" /  - ") === true
      ) {
        return;
      } else if (this.state.display.endsWith(" ") === true) {
        let sliced = this.state.display.slice(0, -3);
        this.setState({
          display: sliced + " * ",
        });
      } else if (this.state.display.endsWith(" ") === false) {
        this.setState((prevState) => ({
          display: prevState.display.toString() + " * ",
        }));
      }
    } else if (e.target.id === "divide") {
      console.log(this.state.display);
      // IF LAST CHARACTERS IN A STRING ARE " + - ", " - - ", " * - " or " / - ", then do nothing
      if (
        this.state.display.endsWith(" +  - ") === true ||
        this.state.display.endsWith(" -  - ") === true ||
        this.state.display.endsWith(" *  - ") === true ||
        this.state.display.endsWith(" /  - ") === true
      ) {
        return;
      } else if (this.state.display.endsWith(" ") === true) {
        let sliced = this.state.display.slice(0, -3);
        this.setState({
          display: sliced + " / ",
        });
      } else if (this.state.display.endsWith(" ") === false) {
        this.setState((prevState) => ({
          display: prevState.display.toString() + " / ",
        }));
      }
    } else if (
      e.target.id === "decimal"
      // &&
      // this.state.display.includes(".") === false
    ) {
      this.setState((prevState) => ({
        display: prevState.display.toString() + ".",
      }));
    }
  }

  // EQUALS ONCLICK
  // if last character in string is " " (meaning string ends with operator),
  // setstate - add "0" to the end, then evaluate

  handleEval() {
    if (this.state.display.endsWith(" ") === true) {
      return;
    } else {
      let result = eval(this.state.display);
      console.log(result);
      if (typeof result === "number") {
        this.setState({
          display: eval(this.state.display).toString(),
        });
      }
    }

    // console.log(eval(this.state.display));
  }

  render() {
    return (
      <div>
        <p>HELLO CALCULATOR WORLD</p>
        <div id="display">{this.state.display}</div>
        <button id="equals" onClick={this.handleEval}>
          =
        </button>
        <button id="zero" onClick={this.handleNum}>
          0
        </button>
        <button id="one" className="1" onClick={this.handleNum}>
          1
        </button>
        <button id="two" onClick={this.handleNum}>
          2
        </button>
        <button id="three" onClick={this.handleNum}>
          3
        </button>
        <button id="four" onClick={this.handleNum}>
          4
        </button>
        <button id="five" onClick={this.handleNum}>
          5
        </button>
        <button id="six" onClick={this.handleNum}>
          6
        </button>
        <button id="seven" onClick={this.handleNum}>
          7
        </button>
        <button id="eight" onClick={this.handleNum}>
          8
        </button>
        <button id="nine" onClick={this.handleNum}>
          9
        </button>
        <button id="add" onClick={this.handleNum}>
          +
        </button>
        <button id="subtract" onClick={this.handleNum}>
          -
        </button>
        <button id="multiply" onClick={this.handleNum}>
          x
        </button>
        <button id="divide" onClick={this.handleNum}>
          ÷
        </button>
        <button id="decimal" onClick={this.handleNum}>
          .
        </button>
        <button id="backspace" onClick={this.handleBackspace}>
          backspace
        </button>
        <button id="clear" onClick={this.handleClear}>
          AC
        </button>
      </div>
    );
  }
}

export default App;

// ADDITIONAL:
// ADD KEY PRESS

// DO SOMETHING IF ERROR

// LOOK MORE INTO ERROR BOUNDARIES
// https://reactjs.org/docs/error-boundaries.html

// FINAL (major) ISSUE --------
// each number should only be allowed to contain one decimal place
