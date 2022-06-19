import { Fragment } from 'react';
import Banner from '../../components/banner/banner.component';
import categoriesData from '../../components/data/categories-data';
import Directory from '../../components/directory/directory.component';

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <Directory categories={categoriesData}/>
    </Fragment>
  );
};

export default Home;
