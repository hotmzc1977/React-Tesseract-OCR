import { TextField } from "@mui/material";
import React, { useState } from "react";
import OCR from "./OCR";

const App = () => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [text, setText] = useState('')
  const [find, setFind] = useState('Serial Number:')

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onExamineResult = async (result: Tesseract.RecognizeResult) => {
    const l = result.data.lines.find(line => line.text.startsWith(find))
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
      <TextField
        sx={{ width: "300px" }}
        required
        id="outlined-required"
        label="Search in video"
        value={find}
        variant="standard"
        helperText={`Result: ${text}`}
        onChange={(e: any) => setFind(e.target.value)}
      />

      <OCR onExamineResult={onExamineResult} onSelect={onSelect} />
    </div>
  );
};

export default App;
