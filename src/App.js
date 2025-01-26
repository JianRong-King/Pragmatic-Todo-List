import "./App.css";
import { TodoWrapper } from "./components/TodoWrapper";

// main component
// npm start basically runs app.js
// so what you have inside app.js is what you see on the browser

// The app.js now has a single component TodoWrapper
//

function App() {
  return (
    <div className="App">
      <TodoWrapper />
    </div>
  );
}

export default App;
