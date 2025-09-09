import { useEffect, useRef } from 'react';
import { projects } from '../data/projects';
import { attachTilt } from '../lib/tilt';

export default function Projects(){
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(()=>{
    const cleanups = cardRefs.current.map(el => el ? attachTilt(el) : () => {});
    return () => cleanups.forEach(fn => fn());
  },[]);

  return (
    <section id="projects" className="section reveal" style={{padding:'36px 24px'}}>
      <h2 style={{padding:'0 6px'}}>Projetos em Destaque</h2>
      <div className="grid cols-2" style={{marginTop:18}}>
        {projects.map((p, i)=>(
          <div
            key={p.key}
            className="card"
            ref={el => { if(el) cardRefs.current[i] = el }}
            data-tilt
            style={{padding:16}}
          >
            <div className="tilt-inner">
              <a href={p.href} target="_blank" rel="noreferrer">
                <img src={p.pin} alt={p.title} style={{width:'100%', borderRadius:12, border:'1px solid var(--border)'}}/>
              </a>
              <div style={{padding:'12px 6px'}}>
                <strong style={{display:'block', fontSize:18}}>{p.title}</strong>
                <p style={{margin:'6px 0 0'}}>{p.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
