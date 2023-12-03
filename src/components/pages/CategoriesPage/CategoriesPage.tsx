import React from 'react';
import CategoryCard from 'src/components/molecules/CategoryCard/CategoryCard';
import { CATEGORIES } from 'src/mocks/categories.mock';

import classes from './styles.module.scss';

const CategoriesPage: React.FC = () => {
  return (
    <div className={classes.container}>
      {CATEGORIES.map((category) => (
        <CategoryCard key={category.id} title={category.title} image={category.image} />
      ))}
    </div>
  );
};

export default CategoriesPage;
