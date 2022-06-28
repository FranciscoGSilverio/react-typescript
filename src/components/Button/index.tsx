import React from "react";

class Button extends React.Component<any, any> {
  render() {
    return <button>{this.props.children}</button>;
  }
}

export default Button;
