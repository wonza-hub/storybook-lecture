import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import CategoryButton from "../components/CategoryButton";

const meta = {
  title: "Buttons/CategoryButton",
  component: CategoryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconPath: { control: "text", description: "이미지의 경로" },
    iconAlt: { control: "text", description: "이미지의 alt 속성" },
    text: { control: "text", description: "버튼 텍스트" },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
  args: {
    iconPath: "https://kr.object.ncloudstorage.com/icons/ic-category.svg",
    iconAlt: "icon",
    text: "Category",
    onClick: fn(),
  },
} satisfies Meta<typeof CategoryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconAlt: "icon",
    iconPath: "https://kr.object.ncloudstorage.com/icons/ic-category.svg",
    text: "Category",
  },
};
