import "./App.css";
import Header from "./components/Header/Header";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <MainRoutes />
      </div>
    </div>
  );
}

export default App;
