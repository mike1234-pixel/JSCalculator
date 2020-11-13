import React from "react";

// REMOVE ALL CONSOLE LOGS

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "0",
      lastSum: "",
      isRunning: false,
    };
    this.handleClear = this.handleClear.bind(this);
    this.handleNum = this.handleNum.bind(this);
    this.handleEval = this.handleEval.bind(this);
    this.handleBackspace = this.handleBackspace.bind(this);
  }

  handleClear() {
    this.setState({ display: "0", lastSum: "" });
  }

  handleBackspace() {
    if (
      this.state.display === "0" ||
      this.state.display === "Error. Please Reset."
    ) {
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

  componentDidUpdate() {
    document.querySelectorAll(".button").forEach((item) => {
      item.addEventListener("click", (event) => {
        if (
          this.state.lastSum.includes("+") ||
          this.state.lastSum.includes("-") ||
          this.state.lastSum.includes("/") ||
          this.state.lastSum.includes("*")
        ) {
          let displayValue = this.state.display;
          this.setState({
            lastSum: "Ans: " + displayValue,
          });
        }
      });
    });
  }

  componentDidMount() {
    document.addEventListener("keydown", (e) => {
      if (
        this.state.lastSum.includes("+") ||
        this.state.lastSum.includes("-") ||
        this.state.lastSum.includes("/") ||
        this.state.lastSum.includes("*")
      ) {
        let displayValue = this.state.display;
        this.setState({
          lastSum: "Ans: " + displayValue,
        });
      }
      if ((e.shiftKey === false && e.keyCode === 187) || e.keyCode === 13) {
        this.handleEval();
      } else if (e.shiftKey === true && e.keyCode === 8) {
        this.handleClear();
      } else if (e.keyCode === 8) {
        this.handleBackspace();
      } else {
        this.handleNum(e);
      }
    });
  }

  handleNum(e) {
    console.log("nice cold beer");
    // if isRunning is true, exit function
    // otherwise execute the function
    if (this.state.isRunning === true) {
      return;
    } else {
      if (this.state.isRunning === false) {
        this.setState({
          isRunning: true,
        });
      }

      if (
        this.state.display === "Infinity" ||
        this.state.display === "NaN" ||
        this.state.display === "Error. Please Reset."
      ) {
        this.setState({ display: "", lastSum: "" });
      }
      if (e.target.id === "zero" || e.keyCode === 48 || e.keyCode === 96) {
        let lastValue = this.state.display.split(" ").splice(-1).toString();
        if (
          (this.state.display !== "0" &&
            this.state.display.startsWith("0", 0) === false &&
            this.state.display.endsWith(" 0") === false) ||
          this.state.display.endsWith(" ") ||
          lastValue.includes(".")
        ) {
          this.setState((prevState) => ({
            display: prevState.display.toString() + "0",
          }));
        }
      } else if (
        e.target.id === "one" ||
        e.keyCode === 49 ||
        e.keyCode === 97
      ) {
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
      } else if (
        e.target.id === "two" ||
        e.keyCode === 50 ||
        e.keyCode === 98
      ) {
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
      } else if (
        e.target.id === "three" ||
        e.keyCode === 51 ||
        e.keyCode === 99
      ) {
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
      } else if (
        e.target.id === "four" ||
        e.keyCode === 52 ||
        e.keyCode === 100
      ) {
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
      } else if (
        e.target.id === "five" ||
        e.keyCode === 53 ||
        e.keyCode === 101
      ) {
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
      } else if (
        e.target.id === "six" ||
        e.keyCode === 54 ||
        e.keyCode === 102
      ) {
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
      } else if (
        e.target.id === "seven" ||
        e.keyCode === 55 ||
        e.keyCode === 103
      ) {
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
      } else if (
        e.target.id === "eight" ||
        (e.shiftKey === false && e.keyCode === 56) ||
        e.keyCode === 104
      ) {
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
      } else if (
        e.target.id === "nine" ||
        e.keyCode === 57 ||
        e.keyCode === 105
      ) {
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
        e.target.id === "add" ||
        (e.shiftKey === true && e.keyCode === 187) ||
        e.keyCode === 107
      ) {
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
      } else if (
        e.target.id === "subtract" ||
        e.keyCode === 189 ||
        e.keyCode === 109
      ) {
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
      } else if (
        e.target.id === "multiply" ||
        (e.shiftKey === true && e.keyCode === 56) ||
        e.keyCode === 106
      ) {
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
      } else if (
        e.target.id === "divide" ||
        e.keyCode === 191 ||
        e.keyCode === 111
      ) {
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
        e.target.id === "decimal" ||
        e.keyCode === 110 ||
        e.keyCode === 190
      ) {
        let lastValue = this.state.display.split(" ").splice(-1).toString();

        if (lastValue.includes(".") === false) {
          this.setState((prevState) => ({
            display: prevState.display.toString() + ".",
          }));
        } else {
          return;
        }
      }
    }
    // set state isRunning back to false and exit
    this.setState({
      isRunning: false,
    });
  }

  // if last char is an operator followed by a decimal  (" ."), return or replace "." with "0"

  handleEval() {
    try {
      // Do something that could throw error
      let displayValue = this.state.display;

      this.setState({
        lastSum: displayValue + " =",
      });
      if (this.state.display.endsWith(" .") || this.state.display === "-") {
        let sliced = this.state.display.slice(0, -1);
        this.setState({
          display: eval(sliced + "0").toString(), // if last char is an operator followed by a decimal  (" ."), convert to "0", then evaluate
        });
      } else if (this.state.display.endsWith(" ") === true) {
        return; // if statement ends with an operator, exit function
      } else {
        let result = eval(this.state.display);

        if (typeof result === "number") {
          this.setState({
            display: eval(this.state.display).toString(),
          });
        }
      }
    } catch (error) {
      console.log("error");
      this.setState({ display: "Error. Please Reset." });
    }
  }

  render() {
    return (
      <div className="app">
        <div className="app-container__heading">
          <p className="heading">JavaScript Calculator</p>
        </div>
        <div className="calc-container">
          <div className="calc-top"></div>
          <div className="calc-sub-display">
            <div id="last-sum">{this.state.lastSum}</div>
          </div>
          <div className="calc-main-display">
            <div id="display">{this.state.display}</div>
          </div>
          <button
            id="equals"
            className="button button__equals"
            onClick={this.handleEval}
          >
            =
          </button>
          <button
            id="zero"
            className="button button__zero"
            onClick={this.handleNum}
          >
            0
          </button>
          <button
            id="one"
            className="1 button button__one"
            onClick={this.handleNum}
          >
            1
          </button>
          <button
            id="two"
            className="button button__two"
            onClick={this.handleNum}
          >
            2
          </button>
          <button
            id="three"
            className="button button__three"
            onClick={this.handleNum}
          >
            3
          </button>
          <button
            id="four"
            className="button button__four"
            onClick={this.handleNum}
          >
            4
          </button>
          <button
            id="five"
            className="button button__five"
            onClick={this.handleNum}
          >
            5
          </button>
          <button
            id="six"
            className="button button__six"
            onClick={this.handleNum}
          >
            6
          </button>
          <button
            id="seven"
            className="button button__seven"
            onClick={this.handleNum}
          >
            7
          </button>
          <button
            id="eight"
            className="button button__eight"
            onClick={this.handleNum}
          >
            8
          </button>
          <button
            id="nine"
            className="button button__nine"
            onClick={this.handleNum}
          >
            9
          </button>
          <button
            id="add"
            className="button button__add"
            onClick={this.handleNum}
          >
            +
          </button>
          <button
            id="subtract"
            className="button button__subtract"
            onClick={this.handleNum}
          >
            -
          </button>
          <button
            id="multiply"
            className="button button__multiply"
            onClick={this.handleNum}
          >
            x
          </button>
          <button
            id="divide"
            className="button button__divide"
            onClick={this.handleNum}
          >
            ÷
          </button>
          <button
            id="decimal"
            className="button button__decimal"
            onClick={this.handleNum}
          >
            .
          </button>
          <button
            id="backspace"
            className="button button__backspace"
            onClick={this.handleBackspace}
          >
            backspace
          </button>
          <button
            id="clear"
            className="button button__clear"
            onClick={this.handleClear}
          >
            AC
          </button>
          <div className="calc-bottom"></div>
        </div>
        <div className="app-container__text">
          <p>Designed and built by Michael Tandy</p>
        </div>
      </div>
    );
  }
}

export default App;
