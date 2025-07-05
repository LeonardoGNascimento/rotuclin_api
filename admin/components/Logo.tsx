export function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <img
        src="http://rotuclin-minio-bf124c-69-62-86-212.traefik.me:9000/public/rotuclin/logo.png" // coloque sua logo em public/logo.svg
        alt="Minha Logo"
        style={{ height: "2rem" }}
      />
    </div>
  );
}
