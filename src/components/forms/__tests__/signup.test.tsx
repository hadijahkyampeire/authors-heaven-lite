import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { fireEvent } from "@testing-library/react";
import { render } from "testUtils";

import  { SignUpForm } from "../signup";

type signUpFormProps = React.ComponentProps<typeof SignUpForm>;

const baseProps: signUpFormProps = {
  registerUser: jest.fn(),
  user: 'Haddy'
};

function renderUI(props: Partial<signUpFormProps> = {}) {
  return render(
    <Router>
      <SignUpForm {...baseProps} {...props} />
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

  it("should handle username input change", async () => {
    const { getByLabelText, getByText } = renderUI({});

    const username: HTMLInputElement = getByLabelText("Username") as HTMLInputElement;
    const submit = getByText("Submit");

    fireEvent.change(username, { target: { value: "testUser" } });
    fireEvent.click(submit);

    expect(username.value).toBe("testUser");
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
