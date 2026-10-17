/* App */
function App() {
  fetch("/health-check")
    .then((msg) => msg.json())
    .then((x) => console.log(x))
    .catch((err) => console.error(err));

  return (
    <>
      <img src="./icon.svg" className="app-icon" style={{ width: "2rem" }} />
      <h1>JobMore</h1>
    </>
  );
}

export default App;
