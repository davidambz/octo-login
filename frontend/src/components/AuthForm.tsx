/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const PageWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const PurpleSide = styled.div`
  flex: 1;
  background-color: #894DF6;
`;

const FormSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  transition: all 0.3s ease;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    background-color: #005bd1;
  }
`;

const SwitchLink = styled.button`
  background: none;
  border: none;
  color: #0070f3;
  cursor: pointer;
  font-size: 0.9rem;
  text-decoration: underline;
  display: block;
  margin: 0 auto;
`;

interface LoginResponse {
  access_token?: string;
  message?: string;
}

interface RegisterResponse {
  message?: string;
}

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const toggleForm = () => setIsLogin(!isLogin);

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
        alert("Erro: " + (data.message || "Erro na requisição"));
        return;
      }

      if (isLogin) {
        const loginData = data as LoginResponse;
        if (!loginData.access_token) {
          alert("Erro: token não recebido");
          return;
        }
        navigate("/dashboard", { state: { token: loginData.access_token } });
      } else {
        const registerData = data as RegisterResponse;
        alert(registerData.message || "Cadastro realizado com sucesso!");
        setIsLogin(true);
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <PageWrapper>
      {isLogin ? (
        <>
          <PurpleSide />
          <FormSide>
            <FormContainer>
              <Title>Entrar</Title>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={handleSubmit}>Login</Button>
              <SwitchLink onClick={toggleForm}>
                Não tem conta? Cadastre-se
              </SwitchLink>
            </FormContainer>
          </FormSide>
        </>
      ) : (
        <>
          <FormSide>
            <FormContainer>
              <Title>Cadastrar</Title>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={handleSubmit}>Registrar</Button>
              <SwitchLink onClick={toggleForm}>
                Já tem conta? Faça login
              </SwitchLink>
            </FormContainer>
          </FormSide>
          <PurpleSide />
        </>
      )}
    </PageWrapper>
  );
}
