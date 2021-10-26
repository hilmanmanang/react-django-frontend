import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import ListPage from './pages/ListPage'
import ViewPage from "./pages/ViewPage";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="app">
          <Route path="/" exact component={ListPage}/>        
          <Route path="/contact/:id" component={ViewPage}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
