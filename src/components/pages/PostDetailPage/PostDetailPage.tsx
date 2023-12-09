import React from 'react';
import { useParams } from 'react-router-dom';
import Tags from 'src/components/molecules/Tags/Tags';
import { formatDate } from 'src/utils/formatDate';

const PostDetailPage: React.FC = () => {
  const { id } = useParams();

  const title = 'How to Spend the Perfect Day on Croatia’s Most Magical Island';
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed sagittis`;
  const img =
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const date = formatDate(new Date());
  const commentsCount = 10;
  const category = 'Travel';

  const tags = ['Travel', 'Food', 'Lifestyle'];

  return (
    <div>
      <h1>{title}</h1>

      <img src={img} alt={title} />

      <div>
        <div>{date}</div>
        <div>{commentsCount}</div>
        <div>{category}</div>
      </div>

      {text}

      <Tags tags={tags} />
    </div>
  );
};

export default PostDetailPage;
