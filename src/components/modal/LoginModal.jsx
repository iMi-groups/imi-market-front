import { Logo, Input, Button } from "..";
import { eyeIconSvg } from "../../data/icons";

export const LoginModal = () => {
  return (
    <div className="register-modal">
      <Logo url="https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&w=3840&q=75" />
      <p className="description">Login with your email & password</p>
      <Input label="Email" type="email" />
      <Input label="Password" type="password" icon={eyeIconSvg} />
      <Button text="Login" className={["primary lg full"]} />
      <fieldset className="seperator">
        <legend>Or</legend>
      </fieldset>
      <p className="link-to-login">
        Don't have any account?
        <a href="/register" className="login-link">
          Register
        </a>
      </p>
    </div>
  );
};
