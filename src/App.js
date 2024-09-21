import logo from './logo.svg';
import './App.css';
import {HeaderComp} from './components/header/header.component'
import {FooterComp} from './components/footer/footer.component'
import {TableReactComp} from './components/table/table.component'

function App() {
  return (
    <div className="App">
      <HeaderComp />      
      <TableReactComp />
      <FooterComp />
    </div>
  );
}

export default App;
