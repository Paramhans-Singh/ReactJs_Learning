import "./styles.css";
import List from "./List";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <h3>CodeTube Catalog</h3>
      <div className="container">
        <List />
        <Sidebar />
      </div>
    </div>
  );
}
