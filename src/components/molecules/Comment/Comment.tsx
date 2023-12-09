import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import ReplyButton from 'src/components/atoms/ReplyButton';
import { formatDate } from 'src/utils/formatDate';

import classes from './styles.module.scss';

interface IProps {
  authorImage: string;
  authorName: string;
  date: Date;
  text: string;
  replies: IProps[];
  replyTo?: string;
}

const Comment: React.FC<IProps> = ({ authorImage, authorName, date, text, replies, replyTo }) => {
  const isReply = !!replyTo;
  const isWithReply = replies.length > 0;

  const formattedDate = formatDate(date);

  const handleReplyClick = () => {};

  return (
    <div>
      <div
        className={classNames(classes.container, {
          [classes.reply]: isReply,
          [classes.withReply]: isWithReply,
        })}
      >
        <div className={classes.topContainer}>
          <div className={classes.leftTopContainer}>
            <img className={classes.img} src={authorImage} alt={authorName} />

            <div className={classes.info}>
              <p className={classes.name}>{authorName}</p>

              <div className={classes.date}>
                <FontAwesomeIcon className={classes.dateIcon} icon={faCalendar} />

                <p className={classes.dateText}>{formattedDate}</p>
              </div>
            </div>
          </div>

          {!isReply && <ReplyButton onClick={handleReplyClick} />}
        </div>

        <p className={classes.text}>{text}</p>
      </div>

      {replies.length > 0 && (
        <div className={classes.list}>
          {replies.map((reply) => (
            <Comment
              key={reply.authorName}
              authorImage={reply.authorImage}
              authorName={reply.authorName}
              date={reply.date}
              text={reply.text}
              replies={reply.replies}
              replyTo={reply.authorName}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
