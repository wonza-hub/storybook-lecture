import "./global.css";
import "@fontsource/noto-sans-kr/400.css";
import "@fontsource/noto-sans-kr/700.css";
import DefaultTextField from "./components/DefaultTextField";

function App() {
  return (
    <>
      <div className="bg-primary text-white text-2xl">
        모든 인류 구성원의 천부의 존엄성
      </div>
      <DefaultTextField
        errorMessage="에러"
        iconPath="https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg"
        iconAlt="dd"
        onIconClick={() => {}}
        placeholder="place"
        onChange={() => {}}
        value="value"
        isError={false}
      />
    </>
  );
}

export default App;
