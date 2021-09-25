import { Component } from "react";
import { Helmet } from "react-helmet";
import {
  LoginForm,
  LoginWrapper,
  LoginContainer,
  Form,
  Group,
  Label,
  Input,
  LabelCheck,
  Checkbox,
  HR,
  Link,
  sign,
  center,
  flex,
  SignIn,
  SignUp,
  Radio,
  RadioLabel,
} from "./styles";

class RenderForm extends Component {
  state = {
    SignIn: null,
    SignUp: { SignUp },
  };

  handleClick = (num, id) => {
    num === 1 ? this.setState({ SignIn: null, SignUp: id }) : this.setState({ SignIn: id, SignUp: null });
  };

  render() {
    return (
      <LoginForm>
        <LoginWrapper>
          <Group flex={flex}>
            <Radio id="SignIn" type="Radio" name="sign" readOnly={true} checked={this.state.SignIn == null ? "checked" : ""}
            />
            <LabelCheck htmlFor="SignIn" RadioLabel={RadioLabel} onClick={() => this.handleClick(1, { SignIn })}> SIGN IN</LabelCheck>
            <Radio id="SignUp" type="Radio" name="sign"/>
            <LabelCheck htmlFor="SignUp" RadioLabel={RadioLabel} onClick={() => this.handleClick(2, { SignUp })}> SIGN UP</LabelCheck>
          </Group>
          <LoginContainer>
            <Form SignIn={this.state.SignIn}>
              <Group>
                <Label>Username</Label>
                <Input id="user" type="text" />
              </Group>
              <Group>
                <Label>Password</Label>
                <Input id="pass" type="password" data-type="password" />
              </Group>
              <Group flex={flex}>
                <Checkbox id="check" name="check" type="checkbox" />
                <LabelCheck htmlFor="check"> Keep me Signed in</LabelCheck>
              </Group>
              <Group>
                <Input type="submit" value="Sign In" sign={sign} />
              </Group>
              <HR />
              <Group center={center}>
                <Link href="#forgot">Forgot Password?</Link>
              </Group>
            </Form>

            <Form SignUp={this.state.SignUp}>
              <Group>
                <Label>Username</Label>
                <Input name="user" type="text" />
              </Group>
              <Group>
                <Label>Password</Label>
                <Input name="pass" type="password" data-type="password" />
              </Group>
              <Group>
                <Label>Repeat Password</Label>
                <Input name="repeat-pass" type="password" data-type="password" />
              </Group>
              <Group>
                <Label>E-mail</Label>
                <Input name="email" type="text" />
              </Group>
              <Group>
                <Label>&nbsp;</Label>
              </Group>
              <Group>
                <Input type="submit" value="Sign Up" sign={sign} />
              </Group>
              <HR />
              <Group center={center}>
                <Link onClick={() => this.handleClick(1, { SignIn })}>Already Member?</Link>
              </Group>
            </Form>
          </LoginContainer>
        </LoginWrapper>
      </LoginForm>
    );
  }
}

export const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login" />
      </Helmet>
      <RenderForm />
    </div>
  );
};
