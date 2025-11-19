import useOnlineStatus from "../hooks/useOnlineStatus";

function StatusIndicator() {
  const isOnline = useOnlineStatus();

  return (
    <div style={{ padding: "1rem", border: "1px solid gray", borderRadius: "8px" }}>
      <h2>وضعیت اتصال:</h2>
      <p style={{ color: isOnline ? "green" : "red" }}>
        {isOnline ? "✅ آنلاین هستید" : "❌ آفلاین هستید"}
      </p>
    </div>
  );
}

export default StatusIndicator;