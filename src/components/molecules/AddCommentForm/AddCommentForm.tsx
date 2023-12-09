import { faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Button from 'src/components/atoms/Button';
import HighlightedText from 'src/components/atoms/HighlightedText';
import Input from 'src/components/atoms/Input/Input';

import classes from './styles.module.scss';

const AddCommentForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  return (
    <form>
      <HighlightedText>Додати коментар</HighlightedText>

      <div className={classes.inputList}>
        <Input label="Ім'я" value={name} onChange={(e) => setName(e.target.value)} />

        <Input label="Пошта" value={email} onChange={(e) => setEmail(e.target.value)} />

        <Input
          label="Коментар"
          value={comment}
          isTextarea
          onChange={(e) => setComment(e.target.value)}
          placeholder="Коментар..."
          cols={10}
          rows={10}
        />
      </div>

      <div className={classes.buttonRow}>
        <Button Icon={<FontAwesomeIcon icon={faComment} />}>Send Comment</Button>
      </div>
    </form>
  );
};

export default AddCommentForm;
