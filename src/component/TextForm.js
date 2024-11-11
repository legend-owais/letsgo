import React, { useState } from "react";

export default function TextForm(props) {
  // Initialize text with an empty string to avoid undefined errors
  const [text, setText] = useState("");

  // Function to change text to uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Capitalized", "success");
  };

  // Function to change text to lowercase
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Lowerized", "success");
  };

  // Allow text to be updated as user types
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClear = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            f
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-warning mx-2"
          onClick={handleUpClick}
        >
          Convert To Uppercase
        </button>
        <button
          type="button"
          className="btn btn-warning mx-2"
          onClick={handleLoClick}
        >
          Convert To Lowercase
        </button>
        <button
          type="button"
          className="btn btn-warning mx-2"
          onClick={handleClear}
        >
          Clear Text
        </button>
      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").filter((word) => word.length > 0).length} words and{" "}
          {text.length} characters
        </p>
        <p>
          {0.008 * text.split(" ").filter((word) => word.length > 0).length}{" "}
          Minutes Read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Text Above to Preview"}</p>
      </div>
    </>
  );
}
