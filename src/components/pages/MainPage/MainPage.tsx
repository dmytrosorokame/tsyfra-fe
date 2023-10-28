import React from "react";
import classes from "./styles.module.scss";
import Button from "../../atoms/Button";

const MainPage: React.FC = () => {
  return (
    <div className={classes.main}>
      <Button />
    </div>
  );
};

export default MainPage;
