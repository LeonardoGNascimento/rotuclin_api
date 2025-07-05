export function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <img
        src="/logo.png" // coloque sua logo em public/logo.svg
        alt="Minha Logo"
        style={{ height: "2rem" }}
      />
      <strong style={{ fontSize: "1.2rem" }}>Minha Aplicação</strong>
    </div>
  );
}
