import useDebounce from "@hooks/useDebounce/useDebounce";
import TextField from "@mui/material/TextField";
import { memo, useState } from "react";
import styles from "./TextInput.module.css";

const TextInput = ({
  input,
  setInput,
  debounceTime = 0,
}: {
  input: string;
  setInput: (input: string) => void;
  debounceTime?: number;
}) => {
  const [value, setValue] = useState(input || "");
  useDebounce(value, setInput, debounceTime);
  return (
    <TextField
      hiddenLabel
      variant="outlined"
      className={styles.input}
      value={value}
      sx={{borderColor:"rgb(255, 215, 0)"}}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

export default memo(TextInput);
