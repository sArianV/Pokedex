import { useState } from "react";
import SearchBar from "@components/TextInput/TextInput";
import styles from "./Header.module.css";

const Header = () => {
  const [input, setInput] = useState("");
  console.log(input);
  
  return (
    <div className={styles.header}>
      <SearchBar input={input} setInput={setInput} debounceTime={2000} fullWidth/>
    </div>
  );
};

export default Header;
