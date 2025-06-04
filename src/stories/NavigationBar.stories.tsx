import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import NavigationBar from "../components/NavigationBar";

const meta = {
  title: "Navigation/NavigationBar",
  component: NavigationBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      // <div>
      <div className="w-[360px]">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    isDark: {
      control: "boolean",
      description: "다크 모드 여부",
      defaultValue: false,
    },
    showBackButton: {
      control: "boolean",
      description: "뒤로가기 버튼 표시 여부",
      defaultValue: true,
    },
    showCloseButton: {
      control: "boolean",
      description: "닫기 버튼 표시 여부",
      defaultValue: true,
    },
    showTitle: {
      control: "boolean",
      description: "페이지 타이틀 표시 여부",
      defaultValue: true,
    },
    title: {
      control: "text",
      description: "페이지 타이틀",
      defaultValue: "타이틀",
    },
    onBackButtonClick: {
      action: "backButtonClicked",
      description: "뒤로가기 버튼 클릭 이벤트",
    },
    onCloseButtonClick: {
      action: "closeButtonClicked",
      description: "닫기 버튼 클릭 이벤트",
    },
  },
  args: {
    showBackButton: true,
    showCloseButton: true,
    showTitle: true,
    title: "타이틀",
    onBackButtonClick: fn(),
    onCloseButtonClick: fn(),
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isDark: false,
    showBackButton: true,
    showCloseButton: true,
    showTitle: true,
    title: "타이틀",
  },
};
