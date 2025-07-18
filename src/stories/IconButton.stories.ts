import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import IconButton from "../components/IconButton";

const meta = {
  title: "Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    alt: { control: "text", description: "이미지의 alt 속성" },
    iconPath: { control: "text", description: "이미지의 경로" },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
  args: {
    alt: "icon",
    iconPath: "https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg",
    onClick: fn(),
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: "icon",
    iconPath: "https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg",
  },
};
