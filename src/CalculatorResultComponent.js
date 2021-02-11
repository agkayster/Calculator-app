import React, { Component } from "react";
class CalculatorResultComponent extends Component {
  render() {
    const { result } = this.props;
    return (
      <div className="result">
        <p>{result}</p>
      </div>
    );
  }
}

export default CalculatorResultComponent;
