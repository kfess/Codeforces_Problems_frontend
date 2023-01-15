import reactLogo from "./assets/react.svg";
import "./App.css";
import { TopcoderLikeCircle } from "@features/color/TopCoderLikeCircle.component";
import { DevContainer } from "@pages/dev";

function App() {
  return (
    <div>
      <DevContainer>
        <TopcoderLikeCircle displayPurpose="difficulty" rating={2300} />
      </DevContainer>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </div>
  );
}

export default App;
