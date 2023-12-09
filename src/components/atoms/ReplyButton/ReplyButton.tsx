import { faReply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import classes from './styles.module.scss';

interface IProps {
  onClick: () => void;
}

const ReplyButton: React.FC<IProps> = ({ onClick }) => (
  <button className={classes.container} onClick={onClick}>
    <FontAwesomeIcon className={classes.icon} icon={faReply} />
  </button>
);

export default ReplyButton;
