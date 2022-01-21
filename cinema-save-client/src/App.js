function App() {
  return (
    <div className="App">
      <h1>Welcome to Splash Page</h1>

      <br/>
      <a href="/register">register</a>
      <br/>
      <a href={process.env.PUBLIC_URL + "/login"}>login</a>
      <br />
    </div>
  );
}

export default App;
