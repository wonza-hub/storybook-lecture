interface ICategoryButtonProps {
  iconPath: string;
  iconAlt: string;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function CategoryButton({
  iconPath,
  iconAlt,
  text,
  onClick,
}: ICategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        rounded-button-default 
        border 
        border-primary
        text-mono100 
        text-base 
        font-bold
        pl-[22px]
        pr-[21px]
        py-6
        flex-col-center
        `}
    >
      <img src={iconPath} alt={iconAlt} />
      <p>{text}</p>
    </button>
  );
}
