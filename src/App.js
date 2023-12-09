import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Tasks from './Tasks';
import Practice from './Practice';


function App() {
  return (
    <div className="App">
      <body>
        <Tasks />
        <hr />
        <Practice />
      </body>
    </div>
  );
}

export default App;
