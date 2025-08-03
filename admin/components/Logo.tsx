export function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <img
        src="https://minio.rotuclin.com.br/public/rotuclin/logo.png" // coloque sua logo em public/logo.svg
        alt="Minha Logo"
        style={{ height: "2rem" }}
      />
    </div>
  );
}
