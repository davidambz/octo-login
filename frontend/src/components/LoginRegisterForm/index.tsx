import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

interface LoginResponse {
  access_token?: string;
  message?: string;
}

export default function LoginRegisterForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
    setErrorMessage(null);
    document.title = isLogin ? 'Register' : 'Login';
  };
  

  const handleSubmit = async () => {
    const endpoint = isLogin
      ? "http://localhost:3000/auth"
      : "http://localhost:3000/user";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        const message = Array.isArray(data.message)
          ? data.message[0]
          : data.message;

        setErrorMessage(message);
        return;
      }

      if (isLogin) {
        const loginData = data as LoginResponse;
        if (!loginData.access_token) {
          setErrorMessage("Token not found");
          return;
        }
        navigate("/dashboard", { state: { token: loginData.access_token } });
      } else {
        setErrorMessage(null);
        setIsLogin(true);
      }
    } catch (err) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Erro desconhecido.");
      }
    }
  };

  return (
    <S.PageWrapper>
      {isLogin ? (
        <>
          <S.FormSide>
            <S.FormContainer>
              <S.Title>Sign in now!</S.Title>
              <S.Subtitle>Enter your account details to login</S.Subtitle>
              <S.Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <S.SuportText>{errorMessage}</S.SuportText>
              <S.Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <S.Checkbox>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me?</label>
              </S.Checkbox>
              <S.Button onClick={handleSubmit}>Login</S.Button>
              <S.ForgotPassword href="">Forgot password?</S.ForgotPassword>
            </S.FormContainer>
          </S.FormSide>
          <S.PurpleSide className="login">
            <S.PurpleTitle>New here?</S.PurpleTitle>
            <S.PurpleText>
              Welcome to Octopost. Enter your personal details and start your
              journey with us
            </S.PurpleText>
            <S.SwitchLink onClick={toggleForm}>Sign up</S.SwitchLink>
          </S.PurpleSide>
        </>
      ) : (
        <>
          <S.PurpleSide className="register">
            <S.PurpleTitle>Welcome back</S.PurpleTitle>
            <S.PurpleText>
              To keep connected with us please login with your personal info
            </S.PurpleText>
            <S.SwitchLink onClick={toggleForm}>Sign in</S.SwitchLink>
          </S.PurpleSide>
          <S.FormSide>
            <S.FormContainer>
              <S.Title>Join us right now!</S.Title>
              <S.Subtitle>Register your account now!</S.Subtitle>
              <S.Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <S.SuportText>{errorMessage}</S.SuportText>
              <S.Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <S.Button onClick={handleSubmit}>Registrar</S.Button>
            </S.FormContainer>
          </S.FormSide>
        </>
      )}
    </S.PageWrapper>
  );
}
