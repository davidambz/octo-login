import styled from "@emotion/styled";
import vectorLogin from "../../assets/images/vector-login.svg";
import vectorRegister from "../../assets/images/vector-register.svg";
import logo from "../../assets/logo/logo.png";

export const PageWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PurpleSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  background-color: #894df6;
  color: #f4f4f4;

  &.login {
    background-image: url(${vectorLogin});
    background-position: top left;
    background-repeat: no-repeat;
  }

  &.register {
    background-image: url(${vectorRegister});
    background-position: bottom right;
    background-repeat: no-repeat;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const PurpleTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const PurpleText = styled.span`
  margin-bottom: 1rem;
  font-size: 0.95rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const SwitchLink = styled.button`
  width: 200px;
  padding: 0.6rem 2rem;
  border: 2px solid white;
  background-color: transparent;
  font-size: 1rem;
  border-radius: 50px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #6e34db;
    border-color: #fff;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const FormSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
  background-image: url(${logo});
  background-position: top left;
  background-repeat: no-repeat;
  background-position: 1.5rem 1.5rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

export const Title = styled.h2`
  margin-bottom: 0;
  font-weight: 700;
  color: #2e2e2e;

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const Subtitle = styled.span`
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 3rem;
  display: block;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const Input = styled.input`
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

export const SuportText = styled.span`
  font-size: 0.9rem;
  color: #f0261f;
  display: block;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #894df6;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 50px;
  margin-top: 0.5rem;

  &:hover {
    background-color: #6e34db;
  }
`;

export const Checkbox = styled.div`
  gap: 0.2rem;
  margin: 0.75rem 0;
  color: #6e34db;
  font-size: 0.9rem;

  input[type="checkbox"] {
    accent-color: #894df6;
    cursor: pointer;
  }

  label {
    cursor: pointer;
  }
`;

export const ForgotPassword = styled.a`
  display: block;
  text-align: right;
  font-size: 0.9rem;
  color: #894df6;
  text-decoration: none;
  cursor: pointer;
`;
