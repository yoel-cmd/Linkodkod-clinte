import { useRef } from "react";
import { useNavigate } from "react-router";
import { Login } from "../utils/Auth";

export default function LoginOrSignUp() {
  const navigate = useNavigate();
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="enter username" ref={userNameRef} />
      <input type="password" placeholder="enter password" ref={passwordRef} />

      <button
        onClick={async (e) => {
          e.preventDefault();
                console.log(passwordRef.current?.value);
                console.log(userNameRef.current?.value);
                
          const res = await Login({
            username: userNameRef.current?.value,
            password: passwordRef.current?.value,
          });

          if (res) {
            navigate("/home");
          } else {
            console.log("Login failed");
          }
        }}
      >
        Login
      </button>
    </div>
  );
}
