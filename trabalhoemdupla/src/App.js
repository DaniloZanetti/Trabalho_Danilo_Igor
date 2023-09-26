import './App.css';
import Jogos from './components/jogos';


function App() {
  return (
<div className="App">
   <Jogos titulo="GTA IV" />
   <Jogos descricao="Grand Theft Auto IV é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games. É o sexto título principal da série Grand Theft Auto e foi lançado em 29 de abril de 2008 para PlayStation 3 e Xbox 360 e depois em 2 de dezembro para Microsoft Windows." />
   <Jogos preco="R$ 50" />
   <Jogos categoria="Categoria: Jogos" />


    
</div>
  );
}

export default App;