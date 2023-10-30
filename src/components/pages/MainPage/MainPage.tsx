import React from "react";
import classes from "./styles.module.scss";
import Button from "../../atoms/Button";
import ArrowIcon from "../../../icons/arrow-icon";

const MainPage: React.FC = () => {
  return (
    <div className={classes.main}>
      <Button Icon={<ArrowIcon />} onClick={console.log}>
        Click me!
      </Button>
    </div>
  );
};

export default MainPage;
