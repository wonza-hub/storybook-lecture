import type { Meta, StoryObj } from "@storybook/react-vite";

import { expect } from "storybook/test";

import LoginForm from "../components/LoginForm";

const meta = {
  title: "Forms/LoginForm",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;
export default meta;

type Story = StoryObj<typeof meta>;

export const EmptyForm: Story = {
  play: async ({ canvas }) => {
    // GIVEN
    // await userEvent.type(canvas.getByTestId("email"), "email@provider.com");
    const emailInput = canvas.getByTestId("email");
    const passwordInput = canvas.getByTestId("password");
    const loginButton = canvas.getByRole("button", { name: "로그인" });

    // WHEN
    // THEN
    await expect(emailInput).toBeInTheDocument();
    await expect(passwordInput).toBeInTheDocument();
    await expect(loginButton).toBeDisabled();
  },
};

export const FilledForm: Story = {
  play: async ({ canvas, userEvent }) => {
    // GIVEN
    // await userEvent.type(canvas.getByTestId("email"), "email@provider.com");
    const emailInput = canvas.getByTestId("email");
    const passwordInput = canvas.getByTestId("password");

    // WHEN
    await userEvent.type(emailInput, "email@provider.com");
    await userEvent.type(passwordInput, "a-random-password");
    const loginButton = canvas.getByRole("button", { name: "로그인" });

    // THEN
    await expect(loginButton).toBeEnabled();
  },
};
