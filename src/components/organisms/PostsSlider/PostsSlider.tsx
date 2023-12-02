import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import HighlightedText from 'src/components/atoms/HighlightedText';
import IconButton from 'src/components/atoms/IconButton';
import PostCard from 'src/components/organisms/PostCard/PostCard';
import { IconButtonSize } from 'src/types/icon-buttons';

import classes from './styles.module.scss';

interface IProps {
  title: string;
  posts: any[];
}

const PostsSlider: React.FC<IProps> = ({ title, posts }) => (
  <div>
    <div className={classes.topContainer}>
      <HighlightedText>{title}</HighlightedText>

      <div className={classes.buttonsContainer}>
        <IconButton size={IconButtonSize.SMALL}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </IconButton>

        <IconButton size={IconButtonSize.SMALL}>
          <FontAwesomeIcon icon={faChevronRight} />
        </IconButton>
      </div>
    </div>

    <div>
      <PostCard
        title="Title"
        image="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        date={new Date()}
        authorName="Author Name"
        authorImage="https://www.w3schools.com/howto/img_avatar.png"
      />
    </div>
  </div>
);

export default PostsSlider;
