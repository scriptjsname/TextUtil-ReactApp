import { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const handelUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convorted to the Uppercase");
    // console.log("upercase clicked" + text);
  };
  const handelSmallClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convorted to the Lowercase", " Success");
  };
  const handelOnChange = (event) => {
    console.log("On Change clicked");
    setText(event.target.value);
  };

  const copyText = () => {
    window.navigator.clipboard.writeText(text);
    props.showAlert("Copied to ClipBoard", " Success");
  };
  const handelClearClick = () => {
    setText("");
    props.showAlert("Text Cleared", " Success");
  };
  const handelExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "Success");
  };
  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "#072134" }}
    >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          spellCheck="true"
          value={text}
          style={{
            background: props.mode === "dark" ? "#072134" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          onChange={handelOnChange}
          id="mybox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handelUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handelSmallClick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={handelClearClick}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={copyText}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={handelExtraSpaces}>
        Remove Extra Spaces
      </button>

      <div className="contaner my-3">
        <h2>Your text Summery</h2>
        <p>
          {text.split(" ").length} words {text.length} characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview of your Text</h2>
        <p>{text.length > 0 ? text : "Enter Somthing to Preview Here"}</p>
      </div>
    </div>
  );
};
export default TextForm;
