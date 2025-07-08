/** @jsxImportSource @emotion/react */
import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";

const Page = styled.div`
  background-color: #fff;
    color: #000;
    width: 100vw;
    height: 100vh;
`;

interface LocationState {
  token?: string;
}

export default function Dashboard() {
  const location = useLocation();
  const state = location.state as LocationState;

  return (
    <Page>
      {state?.token ? (
        <>
          <p>Token: {state.token}</p>
        </>
      ) : (
        <p>Token not found.</p>
      )}
    </Page>
  );
}
