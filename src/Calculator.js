import React, { Component } from "react";
import CalculatorResultComponent from "./CalculatorResultComponent";
import KeyPadComponent from "./KeyPadComponent";
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
    };
  }

  buttonClick = (button) => {
    const { result } = this.state;
    const operators = ["*", "+", "/", "-"];
    const nonStartOperators = ["*", "+", "/"];
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if (result === "" && nonStartOperators.includes(button)) {
      return;
    }

    if (
      result.length > 2 &&
      operators.includes(result[result.length - 2]) &&
      numbers.includes(result[result.length - 1]) &&
      result[result.length - 1] === "0" &&
      numbers.includes(button)
    ) {
      const replaceLeadingZero = result.slice(0, -1) + button;
      return this.setState({ result: replaceLeadingZero });
    }

    if (
      result.length > 0 &&
      numbers.includes(result[0]) &&
      result[0] === "0" &&
      numbers.includes(button)
    ) {
      const replaceFirstZero = result.replace(result[0], button);
      return this.setState({ result: replaceFirstZero });
    }

    if (
      result.length > 2 &&
      nonStartOperators.includes(result[result.length - 2]) &&
      operators.includes(result[result.length - 1]) &&
      operators.includes(button)
    ) {
      const ignoreNextOperator = result + "";
      return this.setState({ result: ignoreNextOperator });
    }

    if (
      result.length > 2 &&
      nonStartOperators.includes(result[result.length - 2]) &&
      button.includes(result[result.length - 1]) &&
      operators.includes(button)
    ) {
      const addOperators = result + button;
      return this.setState({ result: addOperators });
    }

    if (result.length > 0 && operators.includes(button)) {
      const lastPressedButton = result[result.length - 1];

      if (
        operators.includes(lastPressedButton) &&
        operators.includes(button) &&
        button !== "-"
      ) {
        const removedLastButton = result.slice(0, -1) + button;
        return this.setState({ result: removedLastButton });
      }
    }

    if (button === "eq") {
      return this.calculate();
    }

    if (button === "clear") {
      return this.reset();
    }

    return this.setState({ result: result + button });
  };

  calculate = () => {
    let newResult = "";
    const { result } = this.state;
    if (result.includes("--")) {
      newResult = result.replace("--", "+");
    } else {
      newResult = result;
    }
    console.log(newResult);
    try {
      if (eval(newResult) === Infinity) {
        this.setState({
          result: "",
        });
      } else {
        this.setState({
          result: (eval(newResult) || "") + "",
        });
      }
    } catch (e) {
      this.setState({
        result: "",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  render() {
    return (
      <div className="calculator">
        <CalculatorResultComponent result={this.state.result} />
        <KeyPadComponent buttonClick={this.buttonClick} />
      </div>
    );
  }
}

export default Calculator;