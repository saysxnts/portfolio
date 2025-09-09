export default function Activity(){
  return (
    <section id="activity" className="section reveal" style={{padding:'36px 24px'}}>
      <h2 style={{padding:'0 6px'}}>Minha Atividade</h2>

      <div style={{marginTop:18}}>
        <img
          src="https://github-readme-activity-graph.vercel.app/graph?username=saysxnts&radius=16&theme=github-dark&area=true&order=5&custom_title=Minha%20Atividade&hide_border=true&bg_color=000000&color=FFFFFF&line=FFFFFF&point=FFFFFF"
          alt="activity-graph"
          className="card"
          style={{width:'100%'}}
        />
      </div>

      <div style={{marginTop:18}}>
        <img
          src="https://raw.githubusercontent.com/saysxnts/saysxnts/output/github-contribution-grid-snake-dark.svg?palette=github-dark"
          alt="snake"
          className="card"
          style={{width:'100%'}}
        />
      </div>
    </section>
  );
}
