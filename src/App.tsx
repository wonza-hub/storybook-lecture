import "./global.css";
import "@fontsource/noto-sans-kr/400.css";
import "@fontsource/noto-sans-kr/700.css";
import TagList from "./components/TagList";

function App() {
  return (
    <div className="flex flex-col gap-y-4 bg-black">
      <TagList tagList={["1", "2", "3"]} onTagClick={console.log} />
    </div>
  );
}

export default App;
