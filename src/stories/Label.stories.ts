import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import Label from "../components/Label";

const meta = {
  title: "Text/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    htmlFor: { control: "text", description: "label의 for 속성" },
    children: { control: "text", description: "label의 내용" },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    htmlFor: "email",
    children: "모든 인류 구성원의 천부의 존엄성",
  },
};
