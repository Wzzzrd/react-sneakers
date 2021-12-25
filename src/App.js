import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40 ">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search_block d-flex">
            <img alt="Search" src="/img/search.svg" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        
        <div className="d-flex">
        <Card />
        <Card />
        <div className="card">
          <img width={133} height={112} alt="sneakerImg" src="/img/sneakers/2.jpg" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
            <span>Цена: </span>
            
            <b>12 999 rub.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/Vector.svg" alt="plus" />
          </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} alt="sneakerImg" src="/img/sneakers/3.jpg" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
            <span>Цена: </span>
            <b>12 999 rub.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/Vector.svg" alt="plus" />
          </button>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default App;
