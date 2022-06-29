import React from "react";

class Button extends React.Component<{
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  children: string;
}> {
  render() {
    const { type = "button", className = "btn btn-primary" } = this.props;

    return (
      <button type={type} className={className}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
