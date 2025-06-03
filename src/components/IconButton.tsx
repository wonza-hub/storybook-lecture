interface IIconButtonProps {
  alt: string;
  iconPath: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  //   onClick:(e:React.MouseEvent<HTMLButtonElement>)=>void
}

export default function IconButton({
  alt,
  iconPath,
  onClick,
}: IIconButtonProps) {
  return (
    <button onClick={onClick}>
      <img src={iconPath} alt={alt} />
    </button>
  );
}
