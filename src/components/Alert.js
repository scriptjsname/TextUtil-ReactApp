import React from "react";

const Alert = (props) => {
  const capitalized = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.msg} alert-dismissible fade show `}
        role="alert"
        style={{
          background: props.mode === "dark" ? "orange" : "white",
          color: props.mode === "dark" ? "green" : "black",
        }}
      >
        <strong
          style={{
            background: props.mode === "dark" ? "orange" : "white",
            color: props.mode === "dark" ? "green" : "black",
          }}
        >
          {capitalized(props.alert.msg)}
        </strong>
        :{props.alert.type}
      </div>
    )
  );
};

export default Alert;
