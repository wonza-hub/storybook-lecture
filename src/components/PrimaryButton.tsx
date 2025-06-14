type PrimaryButtonTheme = "dark" | "light" | "social" | "text";

const dark = "bg-primary text-white";
const light = "bg-white text-primary";
const social = "bg-social text-white";
const text = "bg-transparent text-white";
const disabledStyle = "disabled:bg-mono100 disabled:text-mono200";

const color: Record<PrimaryButtonTheme, string> = {
  dark,
  light,
  social,
  text,
};

interface IPrimaryButtonProps {
  disabled?: boolean;
  theme: PrimaryButtonTheme;
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
export default function PrimaryButton({
  children,
  onClick,
  theme,
  disabled,
}: IPrimaryButtonProps & { theme: PrimaryButtonTheme }) {
  return (
    <button
      className={`w-full h-[59px] ${disabledStyle} ${color[theme]} rounded-primary-button`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
