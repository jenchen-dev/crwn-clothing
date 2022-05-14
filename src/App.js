import categoriesData from './components/data/categories-data';
import Directory from './components/directory/directory.component';

const App = () => {
  return (
    <Directory categories={categoriesData}/>
  );
}

export default App;
