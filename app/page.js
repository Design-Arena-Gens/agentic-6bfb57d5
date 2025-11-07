export default function Home() {
  const now = new Date().toLocaleString();
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
      color: 'white',
      padding: '2rem',
      fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif'
    }}>
      <div style={{ maxWidth: 720, textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Hi ??</h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>
          Your Next.js app is live. Built and deployed automatically.
        </p>
        <div style={{ marginTop: '1.5rem', fontSize: '0.95rem', opacity: 0.9 }}>
          Server time: {now}
        </div>
        <div style={{ marginTop: '2rem' }}>
          <a href="/api/health" style={{
            display: 'inline-block',
            padding: '0.75rem 1rem',
            background: 'rgba(255,255,255,0.12)',
            borderRadius: 8,
            color: 'white',
            textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>Check health API</a>
        </div>
      </div>
    </main>
  );
}
