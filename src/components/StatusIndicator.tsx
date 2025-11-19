import useOnlineStatus from "../hooks/useOnlineStatus";

function StatusIndicator() {
  const isOnline = useOnlineStatus();

  return (
    <div style={{ padding: "1rem", border: "1px solid gray", borderRadius: "8px" }}>
      <h2>Connection Status:</h2>
      <p style={{ color: isOnline ? "green" : "red" }}>
        {isOnline ? "You are online" : "You are offline"}
      </p>
    </div>
  );
}

export default StatusIndicator;
