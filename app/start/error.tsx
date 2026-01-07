"use client";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Something went wrong</h1>
      <p>Please try again.</p>

      <button
        onClick={reset}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Try again
      </button>
    </div>
  );
}
