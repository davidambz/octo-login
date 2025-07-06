import { useLocation } from "react-router-dom";

interface LocationState {
  token?: string;
}

export default function Dashboard() {
  const location = useLocation();
  const state = location.state as LocationState;

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Dashboard</h2>
      {state?.token ? (
        <>
          <p>Token recebido:</p>
          <code style={{ wordBreak: "break-word" }}>{state.token}</code>
        </>
      ) : (
        <p>Nenhum token disponível.</p>
      )}
    </div>
  );
}
