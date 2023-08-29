import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <form className="form">
        <h1>Register Form</h1>
        <input type="text" placeholder="Name" className="form-input" />
        <input type="email" placeholder="Email" className="form-input" />
        <input type="password" placeholder="Password" className="form-input" />
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
}
