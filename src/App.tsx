import "./global.css";
import "@fontsource/noto-sans-kr/400.css";
import "@fontsource/noto-sans-kr/700.css";
import DefaultTextField from "./components/DefaultTextField";
import Label from "./components/Label";
import { useState } from "react";

function App() {
  const [isError, setIsError] = useState(false);
  return (
    <>
      <Label htmlFor="email">이메일</Label>
      <DefaultTextField
        id="email"
        errorMessage="에러"
        iconPath="https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg"
        iconAlt="dd"
        onIconClick={() => {}}
        placeholder="place"
        onChange={() => {}}
        value="value"
        isError={isError}
      />
      <div className="my-20" />
      <Label htmlFor="address">주소</Label>
      <DefaultTextField
        id="address"
        errorMessage="에러"
        iconPath="https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg"
        iconAlt="dd"
        onIconClick={() => {}}
        placeholder="place"
        onChange={() => {}}
        value="value"
        isError={isError}
      />
      <button onClick={() => setIsError(!isError)}>error toggle</button>
    </>
  );
}

export default App;
