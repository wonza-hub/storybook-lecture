interface ITagButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  isChecked: boolean;
}

export default function TagButton({
  children,
  onClick,
  isChecked,
}: ITagButtonProps) {
  const buttonStyle = isChecked
    ? "bg-white text-primary"
    : "bg-dark/10 text-white";
  return (
    <button
      className={`rounded-tag-button px-[10px] border border-white h-[33px] font-medium text-sm ${buttonStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
