import styled from "@emotion/styled";
import useDebounce from "@hooks/useDebounce/useDebounce";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { memo, useState } from "react";
import styles from "./TextInput.module.css";

const TextInput = ({
  input,
  setInput,
  debounceTime = 0,
  ...props
}: {
  input: string;
  setInput: (input: string) => void;
  debounceTime?: number;

} & TextFieldProps

) => {
  const [value, setValue] = useState(input || "");
  useDebounce(value, setInput, debounceTime);
  return (
    <CustomInput
      hiddenLabel
      variant="outlined"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      {...props}
    />
  );
};

export default memo(TextInput);

const CustomInput = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    backgroundColor: "white",    
  },
  '& input:valid + fieldset': {
    borderColor: 'lightGray',
    borderWidth: 3,
  },
  '& input:invalid + fieldset': {
    borderColor: 'darkGray',
    borderWidth: 3,
  },
  '& input:valid:hover + fieldset': {
    borderLeftWidth: 3,
    borderColor: 'darkGray',
    borderWidth: 2,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 3,
    borderColor: 'darkGray',
    borderWidth: 2,
  },
});