import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import PrimaryButton from "../components/PrimaryButton";

const meta = {
  title: "Buttons/PrimaryButton",
  component: PrimaryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[360px]">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "버튼이 비활성화 상태인지 여부",
    },
    theme: {
      control: "select",
      options: ["dark", "light", "social", "text"],
      description: "버튼의 테마",
    },
    children: {
      control: "text",
      description: "버튼에 표시될 텍스트",
    },
  },
  args: {
    disabled: false,
    onClick: fn(),
    theme: "light",
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    children: "버튼",
    theme: "dark",
    disabled: false,
  },
};

export const Light: Story = {
  args: {
    children: "버튼",
    theme: "light",
    disabled: false,
  },
};

export const Social: Story = {
  args: {
    children: "버튼",
    theme: "social",
    disabled: false,
  },
};

export const Text: Story = {
  args: {
    children: "버튼",
    theme: "text",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "버튼",
    theme: "dark",
    disabled: true,
  },
};
