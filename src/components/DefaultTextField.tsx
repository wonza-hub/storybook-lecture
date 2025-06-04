import IconButton from "./IconButton";
import ErrorMessage from "./ErrorMessage";
import { useState } from "react";

interface IDefaultTextFieldProps {
  id: string;
  errorMessage: string;
  iconPath: string;
  iconAlt: string;
  onIconClick: React.MouseEventHandler<HTMLButtonElement>;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  isError: boolean;
}
export default function DefaultTextField({
  id,
  errorMessage,
  iconPath,
  iconAlt,
  onIconClick,
  placeholder,
  onChange,
  value,
  isError,
}: IDefaultTextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused
    ? "border-secondary"
    : !value
    ? "border-mono300"
    : "border-primary";

  return (
    <div className="relative text-field">
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
      text-primary
      border-b
      ${borderColor}
      `}
      >
        <input
          id={id}
          placeholder={placeholder}
          value={value}
          type="text"
          onChange={onChange}
          className="outline-none"
        />
        <IconButton onClick={onIconClick} alt={iconAlt} iconPath={iconPath} />
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}
