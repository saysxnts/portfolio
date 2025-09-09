export function attachTilt(el: HTMLElement){
  const strength = 12;
  function onMove(e: MouseEvent){
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateY(${px*strength}deg) rotateX(${-py*strength}deg) translateY(-4px)`;
  }
  function reset(){ el.style.transform = ''; }
  el.addEventListener('mousemove', onMove);
  el.addEventListener('mouseleave', reset);
  return () => {
    el.removeEventListener('mousemove', onMove);
    el.removeEventListener('mouseleave', reset);
  };
}
