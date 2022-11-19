import React, { useState } from "react";
import OCR from "./OCR";

const App = () => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [text, setText] = useState('')

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onExamineResult = async (result: Tesseract.RecognizeResult) => {
    const l = result.data.lines.find(line => line.text.startsWith("Serial Number:"))
    if (l) {
      setText(l.text)
      return true
    };
    return false;
  }

  const onSelect = async (text: string) => {
    setText(text)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ margin: "auto", fontSize: "30px" }}>{`Result: ${text}`}</div>
      <OCR onExamineResult={onExamineResult} size={{ width: 640, height: 480 }} onSelect={onSelect} />
    </div>
  );
};

export default App;
