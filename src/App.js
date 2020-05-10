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
  }

  handleClear() {
    this.setState({ display: "0" });
  }

  // THE PROBLEM WAS OCCURING BECAUSE ENDSWITH WAS BEING CALLED ON A VALUE THAT, TO START WITH, WAS A NUMBER AND WAS NOT A STRING
  // BECAUSE THIS.STATE.DISPLAY WAS A NUMBER IT DID NOT CONTAIN THE ENDSWITH FUNCTION, HENCE THE TYPE ERROR

  // LIKELY TO RUN INTO SIMILAR PROBLEMS WHEN THE FIRST RESULT IS CALCULATED BECAUSE DISPLAY BECOMES A NUMBER
  // NEED TO RUN EVAL ON DISPLAY THEN CONVERT IT BACK TO A STRING BEFORE VALUE IS PUT BACK IN DISPLAY

  handleNum(e) {
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
    } else if (
      e.target.id === "add" &&
      this.state.display.endsWith(" ") === false // if last character is not " "...
    ) {
      this.setState((prevState) => ({
        display: prevState.display.toString() + " + ",
      }));
    } else if (
      e.target.id === "subtract" &&
      this.state.display.endsWith(" ") === false
    ) {
      this.setState((prevState) => ({
        display: prevState.display.toString() + " - ",
      }));
    } else if (
      e.target.id === "multiply" &&
      this.state.display.endsWith(" ") === false
    ) {
      this.setState((prevState) => ({
        display: prevState.display.toString() + " * ",
      }));
    } else if (
      e.target.id === "divide" &&
      this.state.display.endsWith(" ") === false
    ) {
      this.setState((prevState) => ({
        display: prevState.display.toString() + " / ",
      }));
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

  // IF LAST CHARACTER OF DISPLAY WAS NOT " ", (which means an operator came before),
  // then add it, otherwise not

  handleEval(err) {
    let result = eval(this.state.display);
    console.log(result);
    if (typeof result === "number") {
      this.setState({
        display: eval(this.state.display).toString(),
      });
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

// LOOK MORE INTO ERROR BOUNDARIES
// https://reactjs.org/docs/error-boundaries.html

// handling zeros

// if last two characters are " 0", then overwrite the last character with "1" or whatever other number
