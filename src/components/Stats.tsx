export default function Stats(){
  return (
    <section id="stats" className="section reveal" style={{padding:'36px 24px'}}>
      <h2 style={{padding:'0 6px'}}>Estatísticas</h2>
      <div className="grid cols-2" style={{marginTop:18}}>
        <img
          src="https://github-readme-stats.vercel.app/api?username=saysxnts&show_icons=true&include_all_commits=true&count_private=true&hide_border=true&bg_color=000000&title_color=FFFFFF&text_color=FFFFFF&icon_color=FFFFFF"
          alt="stats"
          className="card"
          style={{width:'100%'}}
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs?username=saysxnts&layout=compact&langs_count=8&hide_border=true&bg_color=000000&title_color=FFFFFF&text_color=FFFFFF"
          alt="top-langs"
          className="card"
          style={{width:'100%'}}
        />
      </div>

      <div style={{marginTop:18}}>
        <img
          src="https://streak-stats.demolab.com?user=saysxnts&theme=black-ice&hide_border=true&background=000000&ring=FFFFFF&fire=FFFFFF&currStreakLabel=FFFFFF"
          alt="streak"
          className="card"
          style={{width:'100%'}}
        />
      </div>
    </section>
  );
}
