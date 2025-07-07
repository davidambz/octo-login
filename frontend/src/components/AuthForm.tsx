/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const PageWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PurpleSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  background-color: #894df6;
  color: #f4f4f4;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const PurpleTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const PurpleText = styled.span`
  margin-bottom: 1rem;
  font-size: 0.95rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const SwitchLink = styled.button`
  width: 200px;
  padding: 0.6rem 2rem;
  border: 2px solid white;
  background-color: transparent;
  font-size: 1rem;
  border-radius: 50px;
  color: white;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const FormSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  margin-bottom: 0;
  font-weight: 700;
  color: #2e2e2e;

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const Subtitle = styled.span`
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 3rem;
  display: block;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.2s ease;
  background-color: #fff;
  margin-top: 10px;
  box-sizing: border-box;
  color: #2e2e2e;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #894df6;
  }
`;

const SuportText = styled.span`
  font-size: 0.9rem;
  color: #f0261f;
  display: block;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #894df6;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 50px;
  margin-top: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #6e34db;
  }
`;

interface LoginResponse {
  access_token?: string;
  message?: string;
}

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
    setErrorMessage(null);
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
        setErrorMessage(data.message);
        return;
      }

      if (isLogin) {
        const loginData = data as LoginResponse;
        if (!loginData.access_token) {
          setErrorMessage("Erro: token não recebido");
          return;
        }
        navigate("/dashboard", { state: { token: loginData.access_token } });
      } else {
        setIsLogin(true);
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setErrorMessage("Erro ao conectar com o servidor.");
    }
  };

  return (
    <PageWrapper>
      {isLogin ? (
        <>
          <FormSide>
            <FormContainer>
              <Title>Sign in now!</Title>
              <Subtitle>Enter your account details to login</Subtitle>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <SuportText>{errorMessage}</SuportText>
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={handleSubmit}>Login</Button>
            </FormContainer>
          </FormSide>
          <PurpleSide>
            <PurpleTitle>New here?</PurpleTitle>
            <PurpleText>
              Welcome to Octopost. Enter your personal details and start your
              journey with us
            </PurpleText>
            <SwitchLink onClick={toggleForm}>Sign up</SwitchLink>
          </PurpleSide>
        </>
      ) : (
        <>
          <PurpleSide>
            <PurpleTitle>Welcome back</PurpleTitle>
            <PurpleText>
              To keep connected with us please login with your personal info
            </PurpleText>
            <SwitchLink onClick={toggleForm}>Sign in</SwitchLink>
          </PurpleSide>
          <FormSide>
            <FormContainer>
              <Title>Join us right now!</Title>
              <Subtitle>Register your account now!</Subtitle>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <SuportText>{errorMessage}</SuportText>
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={handleSubmit}>Registrar</Button>
            </FormContainer>
          </FormSide>
        </>
      )}
    </PageWrapper>
  );
}
