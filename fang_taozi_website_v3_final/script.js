const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);

// Mobile navigation
$("#hamburger").addEventListener("click",()=>$("#nav").classList.toggle("menu-open"));
$$(".desktop-nav a").forEach(a=>a.addEventListener("click",()=>$("#nav").classList.remove("menu-open")));

// Custom cursor
document.addEventListener("pointermove",e=>{const c=$("#cursor");c.style.left=e.clientX+"px";c.style.top=e.clientY+"px"});
$$("a,button").forEach(el=>{
  el.addEventListener("mouseenter",()=>{$("#cursor").style.width="34px";$("#cursor").style.height="34px"});
  el.addEventListener("mouseleave",()=>{$("#cursor").style.width="18px";$("#cursor").style.height="18px"});
});

// Scroll reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.12});
$$(".reveal").forEach(x=>io.observe(x));

// Campaign modal
$("#campaignOpen").onclick=()=>$("#modal").classList.add("open");
$("#modalClose").onclick=()=>$("#modal").classList.remove("open");
$("#modal").onclick=e=>{if(e.target.id==="modal")$("#modal").classList.remove("open")};
document.addEventListener("keydown",e=>{if(e.key==="Escape")$("#modal").classList.remove("open")});

// Form
$("#businessForm").addEventListener("submit",e=>{
 e.preventDefault(); const t=$("#toast");t.classList.add("show");e.target.reset();
 setTimeout(()=>t.classList.remove("show"),3300);
});

// Behind IP stages
const stageInfo={
 idea:["01 / IDEA","The concept begins before the audience sees a single frame. Someone decides what kind of “ordinary” moment should exist."],
 script:["02 / SCRIPT","Casual conversation can have a structure, a brief, a caption and a planned emotional beat."],
 character:["03 / CHARACTER","A personality is built from visual language, recurring preferences, habits and a carefully maintained voice."],
 render:["04 / RENDER","The virtual face is assembled into images and scenes that can look spontaneous while remaining fully produced."],
 edit:["05 / EDIT","Hours of production can disappear into a few seconds of content. The finished moment hides the process."],
 engage:["06 / ENGAGE","Replies, community posts and interactions help maintain the feeling of an ongoing personal relationship."]
};
$$(".stages button").forEach(btn=>btn.onclick=()=>{
 $$(".stages button").forEach(x=>x.classList.remove("active"));btn.classList.add("active");
 const [a,b]=stageInfo[btn.dataset.info];$("#stageDetail").innerHTML=`<small>${a}</small><p>${b}</p>`;
});

// Quiz
const qs=[
 {q:"If a virtual influencer causes harm, who should be accountable?",o:["The character","The creative team","The brand","The platform"]},
 {q:"Why can people form real emotional connections with someone who isn't real?",o:["Because the interaction feels personal","Because the story feels authentic","Because emotions don't require a real person","All of these can be true"]},
 {q:"Should virtual influencers be held to the same standards as human influencers?",o:["Yes","Not always","It depends","I'm not sure"]}
];
let qi=0;
function renderQ(){
 const q=qs[qi];$("#qProgress").textContent=String(qi+1).padStart(2,"0")+" / 03";$("#progressBar").style.width=((qi+1)/3*100)+"%";
 $("#quizQuestion").textContent=q.q;$("#quizOptions").innerHTML="";$("#quizFeedback").textContent="";
 q.o.forEach((x,i)=>{const b=document.createElement("button");b.className="quiz-option";b.textContent=String.fromCharCode(65+i)+"  "+x;b.onclick=()=>{
  [...$("#quizOptions").children].forEach(z=>z.disabled=true);$("#quizFeedback").textContent="You chose: "+x+"  ·  There may not be a single answer.";
  setTimeout(()=>{qi++;if(qi<3)renderQ();else{$("#quiz").classList.add("hidden");$("#quizFinal").classList.remove("hidden")}},900)
 };$("#quizOptions").appendChild(b)});
}
renderQ();

// Tiny visual interruption when entering hidden layer
$$('a[href="#archive"],a[href="#behind"],a[href="#questions"]').forEach(a=>a.addEventListener("click",()=>{document.body.style.filter="contrast(1.15)";setTimeout(()=>document.body.style.filter="",250)}));
