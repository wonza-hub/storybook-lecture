import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import DefaultTextField from "../components/DefaultTextField";

const meta = {
  title: "TextFields/DefaultTextField",
  component: DefaultTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    errorMessage: { control: "text", description: "이미지의 alt 속성" },
    iconAlt: { control: "text", description: "이미지의 alt 속성" },
    iconPath: { control: "text", description: "이미지의 경로" },
    onIconClick: { action: "clicked", description: "버튼 클릭 이벤트" },
    isError: {
      control: "boolean",
      description: "에러 상태 여부",
      defaultValue: false,
    },
  },
  args: {
    id: "email",
    iconAlt: "icon",
    iconPath: "https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg",
    placeholder: "텍스트 입력",
    value: "",
    errorMessage: "텍스트를 확인해주세요",
    onIconClick: fn(),
    onChange: fn(),
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // errorMessage: "텍스트를 확인하랑께",
    // iconPath: "https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg",
    // iconAlt: "icon",
    // placeholder: "텍스트 입력",
    // value: "",
    isError: false,
  },
};
