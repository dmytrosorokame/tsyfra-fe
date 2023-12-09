import React from 'react';

import classes from './styles.module.scss';

type TProps = React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string;
    isTextarea?: boolean;
  };

const Input: React.FC<TProps> = ({ label, isTextarea, ...rest }) => {
  return (
    <label>
      <p className={classes.label}>{label}</p>

      {isTextarea && (
        <textarea className={classes.textarea} {...rest}>
          {rest.value}
        </textarea>
      )}

      {!isTextarea && <input className={classes.input} {...rest} />}
    </label>
  );
};

export default Input;
