import React from 'react';
import HighlightedText from 'src/components/atoms/HighlightedText';
import Comment from 'src/components/molecules/Comment/Comment';

import classes from './styles.module.scss';

interface IProps {
  title: string;
}

const CommentList: React.FC<IProps> = ({ title }) => (
  <div>
    <HighlightedText>{title}</HighlightedText>

    <div className={classes.list}>
      <Comment
        authorImage="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
        authorName="Jon Kantner"
        date={new Date()}
        text="When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has kayaks, paddleboards, or the low-key pedal boats."
        replies={[
          {
            authorImage: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
            authorName: 'Jon Kantner',
            date: new Date(),
            text: 'When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has kayaks, paddleboards, or the low-key pedal boats.',
            replies: [],
          },
          {
            authorImage: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
            authorName: 'Jon Kantner',
            date: new Date(),
            text: 'When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has kayaks, paddleboards, or the low-key pedal boats.',
            replies: [],
          },
        ]}
      />
    </div>
  </div>
);

export default CommentList;
