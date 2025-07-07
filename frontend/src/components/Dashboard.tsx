import { useLocation } from "react-router-dom";

interface LocationState {
  token?: string;
}

export default function Dashboard() {
  const location = useLocation();
  const state = location.state as LocationState;

  return (
    <div>
      {state?.token ? (
        <>
          <p>Token recebido: {state.token}</p>
        </>
      ) : (
        <p>Nenhum token disponível.</p>
      )}
    </div>
  );
}
