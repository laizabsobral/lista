import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //importante o bootstrap para questão de estilização
import AdicionarProduto from './Components/AddProduto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Listagem de livros Lidos em 2022</h1>
        <AdicionarProduto> </AdicionarProduto>
      </header>
    </div>
  );
}

export default App;
