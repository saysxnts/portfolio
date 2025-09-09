export default function Hero(){
  return (
    <section className="section parallax reveal" style={{padding:'48px 28px'}}>
      <div className="grid cols-2" style={{alignItems:'center'}}>
        <div>
          <h1>Guilherme de Oliveira Santos</h1>
          <p>Backend Engineer · Full Stack Dev · foco em APIs, microsserviços, automação e arquitetura escalável. Código limpo, performance e estética moderna.</p>
          <div style={{display:'flex', gap:12, marginTop:18, flexWrap:'wrap'}}>
            <a className="btn" href="https://www.linkedin.com/in/guilhermedeoliveirasantos/" target="_blank">LinkedIn</a>
            <a className="btn" href="mailto:guilherme_oliveirass@outlook.com">Email</a>
            <a className="btn" href="https://github.com/saysxnts" target="_blank">GitHub</a>
          </div>
        </div>
        <div style={{display:'grid', placeItems:'center'}}>
          <img className="avatar" src="/avatar.jpg" alt="avatar" />
        </div>
      </div>
    </section>
  );
}
