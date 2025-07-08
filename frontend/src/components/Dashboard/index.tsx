import { useLocation } from "react-router-dom";
import { Page } from "./styles";

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