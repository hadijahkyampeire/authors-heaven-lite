import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { fireEvent } from "@testing-library/react";
import { render } from "testUtils";

import  { LoginForm } from "../login";

type LoginFormProps = React.ComponentProps<typeof LoginForm>;

const baseProps: LoginFormProps = {
  loginUser: jest.fn(),
  user: 'Haddy'
};

function renderUI(props: Partial<LoginFormProps> = {}) {
  return render(
    <Router>
      <LoginForm {...baseProps} {...props} />
    </Router>
  );
};

describe("<SignUpForm />", () => {

  it("should handle email input change", async () => {
    const { getByLabelText, getByText } = renderUI({});

    const email: HTMLInputElement = getByLabelText("Email") as HTMLInputElement;
    const submit = getByText("Submit");

    fireEvent.change(email, { target: { value: "test@gmail.com" } });
    fireEvent.click(submit);

    expect(email.value).toBe("test@gmail.com");
  });

  it("should handle password input change", async () => {
    const { getByLabelText, getByText } = renderUI({});

    const password: HTMLInputElement = getByLabelText("Password") as HTMLInputElement;
    const submit = getByText("Submit");

    fireEvent.change(password, { target: { value: "test123" } });
    fireEvent.click(submit);

    expect(password.value).toBe("test123");
  });
});
