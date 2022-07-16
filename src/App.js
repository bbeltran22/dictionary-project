import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App mt-3">
      <div className="container">
        <main>
          <Dictionary />
        </main>

        <footer className="text-center">
          Coded By Breanna Beltran{" "}
          <a href="https://github.com/bbeltran22/dictionary-project">
            Open source
          </a>
        </footer>
      </div>
    </div>
  );
}
