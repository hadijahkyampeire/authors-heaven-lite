import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { render } from "testUtils";

import  { SignUpPage } from "../signup";

type signUpPageProps = React.ComponentProps<typeof SignUpPage>;

const baseProps: signUpPageProps = {
  registerUser: jest.fn(),
  username: 'Haddy'
};

function renderUI(props: Partial<signUpPageProps> = {}) {
  return render(
    <Router>
      <SignUpPage {...baseProps} {...props} />
    </Router>
  );
};

describe("<SignUpPage />", () => {
  it("snapshot test", () => {
    const { container } = renderUI({});
    expect(container).toMatchSnapshot();
  });

  it("should display all elements of the page", async () => {
    const { getByText, findByTestId } = renderUI({});
    const signupForm = await findByTestId('signup-form');

    expect(getByText('REGISTER')).toBeInTheDocument();
    expect(signupForm).toBeInTheDocument();
    expect(getByText('Already have an account?')).toBeInTheDocument();
  });

  it("should have a form with input texts", async () => {
    const { findByTestId } = renderUI({});

    const signupForm = await findByTestId('signup-form');
    expect(signupForm).toHaveFormValues({
      email: "",
      username: "",
      password: ""
    });
  });
});
