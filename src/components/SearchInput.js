import React, { useState, useEffect } from "react";
import classes from "./SearchInput.module.css";

const SearchInput = (props) => {
  const [enterValue, setEnterValue] = useState("");
  const userChangeHandler = (event) => {
    setEnterValue(event.target.value);
  };
  useEffect(() => {
    props.onFetchUser(enterValue);
  }, [enterValue, props]);

  return (
    <input
      className={classes["search-input"]}
      type="text"
      placeholder="Search Github User"
      onChange={userChangeHandler}
      value={enterValue}
    />
  );
};
export default React.memo(SearchInput);
