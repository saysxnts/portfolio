export default function Header(){
  return (
    <>
      <div className="wave" />
      <header className="section" style={{padding:'18px 22px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <strong style={{letterSpacing:'.6px'}}>saysxnts</strong>
        <nav style={{display:'flex', gap:12}}>
          <a className="btn" href="#projects">Projetos</a>
          <a className="btn" href="#stats">Estatísticas</a>
          <a className="btn" href="#activity">Atividade</a>
        </nav>
      </header>
    </>
  );
}
