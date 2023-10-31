import React from 'react';
import AuthorCard from 'src/components/molecules/AuthorCard';

interface IProps {
  title: string;
  subtitle: string;
  image: string;
  isSaved?: boolean;
  onSaveClick: () => void;
}

const PostCard: React.FC<IProps> = () => {
  return (
    <div>
      <img src="" alt="" />

      <div>
        <h5> </h5>

        <p></p>
      </div>

      <AuthorCard />
    </div>
  );
};

export default PostCard;
