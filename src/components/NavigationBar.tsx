import IconButton from "./IconButton";

interface INavigationBarProps {
  isDark: boolean;
  showBackButton?: boolean;
  showCloseButton?: boolean;
  showTitle?: boolean;
  title: string;
  onBackButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  onCloseButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavigationBar({
  isDark,
  showBackButton,
  showCloseButton,
  showTitle,
  title = "",
  onBackButtonClick = () => {},
  onCloseButtonClick = () => {},
}: INavigationBarProps) {
  return (
    <div className="flex justify-between w-full">
      {/* 뒤로가기 */}
      <div className="navigation-title-wrapper flex">
        {showBackButton && (
          <IconButton
            iconPath={`https://kr.object.ncloudstorage.com/icons/ic-back-arrow${
              isDark ? "-white" : ""
            }.svg`}
            alt="뒤로가기"
            onClick={onBackButtonClick}
          />
        )}
        {/* 페이지 이름 */}
        {showTitle && (
          <h1 className={`text-2xl ${isDark ? "text-white" : "text-primary"}`}>
            {title}
          </h1>
        )}
      </div>
      {/* 닫기 버튼 */}
      {showCloseButton && (
        <IconButton
          iconPath={`https://kr.object.ncloudstorage.com/icons/ic-close${
            isDark ? "-white" : ""
          }.svg`}
          alt="닫기"
          onClick={onCloseButtonClick}
        />
      )}
    </div>
  );
}
