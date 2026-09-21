
const io=new IntersectionObserver(entries=>{
entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show');});
},{threshold:.2});
document.querySelectorAll('.panel').forEach(p=>io.observe(p));
