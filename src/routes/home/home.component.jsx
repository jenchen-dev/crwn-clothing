import categoriesData from '../../components/data/categories-data';
import Directory from '../../components/directory/directory.component';

const Home = () => {
  return (
    <Directory categories={categoriesData}/>
  );
};

export default Home;
