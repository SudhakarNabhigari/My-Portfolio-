(()=>{'use strict';const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
// Short cinematic intro with skip control.
const intro=$('#intro'),shell=$('#siteShell'),bar=$('#loaderBar'),pct=$('#loaderPct'),loaderText=$('#loaderText');let progress=0,closed=false;
function finishIntro(){if(closed)return;closed=true;intro.classList.add('hidden');shell.classList.add('ready');setTimeout(()=>intro.remove(),900)}
const introTimer=setInterval(()=>{if(closed){clearInterval(introTimer);return}progress=Math.min(100,progress+Math.ceil(Math.random()*9));bar.style.width=progress+'%';pct.textContent=String(progress).padStart(2,'0')+'%';if(progress>62)loaderText.textContent='PREPARING THE EXPERIENCE';if(progress>=100){clearInterval(introTimer);setTimeout(finishIntro,350)}},120);
$('#skipIntro').addEventListener('click',finishIntro);setTimeout(finishIntro,2600);
// Typewriter role line.
const roles=['AI-powered applications','LLM & RAG experiences','intelligent workflows','useful tools for people'];let ri=0,ci=0,del=false;const typed=$('#typedRole');function type(){if(!typed)return;const word=roles[ri];ci+=del?-1:1;typed.textContent=word.slice(0,ci);let delay=del?36:72;if(!del&&ci===word.length){del=true;delay=1450}else if(del&&ci===0){del=false;ri=(ri+1)%roles.length;delay=250}setTimeout(type,delay)}setTimeout(type,1800);
// Reveal-on-scroll.
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});$$('.reveal').forEach(el=>observer.observe(el));
// Active nav tracking.
const sections=$$('main section[id]'),navLinks=$$('.nav-link');const navObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}}),{rootMargin:'-30% 0px -60% 0px'});sections.forEach(s=>navObserver.observe(s));
// Mobile nav.
$('#mobileMenu').addEventListener('click',()=>$('#mainNav').classList.toggle('open'));navLinks.forEach(a=>a.addEventListener('click',()=>$('#mainNav').classList.remove('open')));
// Project filters.
$$('.filter').forEach(btn=>btn.addEventListener('click',()=>{const filter=btn.dataset.filter;$$('.filter').forEach(b=>b.classList.toggle('active',b===btn));$$('.project-card').forEach(card=>{const cats=card.dataset.category.split(' ');card.classList.toggle('is-hidden',filter!=='all'&&!cats.includes(filter))})}));
})();/* Contact copy buttons: green Copied! feedback for 2 seconds */
document.addEventListener("click", async function (event) {
  const button = event.target.closest(".contact-copy");
  if (!button) return;

  const value = button.dataset.copy;
  if (!value) return;

  const originalHTML = button.innerHTML;
  const originalTitle = button.title;
  const originalLabel = button.getAttribute("aria-label");

  try {
    await navigator.clipboard.writeText(value);

    button.innerHTML = "Copied!";
    button.style.setProperty("color", "#52e5a5", "important");
    button.style.setProperty("border-color", "#52e5a5", "important");
    button.style.setProperty("background", "#52e5a51a", "important");
    button.style.width = "auto";
    button.style.minWidth = "76px";
    button.style.padding = "0 10px";
    button.style.fontSize = "11px";
    button.style.fontWeight = "700";
    button.title = "Copied!";
    button.setAttribute("aria-label", "Copied!");

    setTimeout(() => {
      button.innerHTML = originalHTML;
      button.style.removeProperty("color");
      button.style.removeProperty("border-color");
      button.style.removeProperty("background");
      button.style.removeProperty("width");
      button.style.removeProperty("min-width");
      button.style.removeProperty("padding");
      button.style.removeProperty("font-size");
      button.style.removeProperty("font-weight");
      button.title = originalTitle;

      if (originalLabel) {
        button.setAttribute("aria-label", originalLabel);
      } else {
        button.removeAttribute("aria-label");
      }
    }, 2000);
  } catch (error) {
    window.prompt("Copy this contact detail:", value);
  }
});


// Public profile statistics for the portfolio.
(async function loadSocialStats() {
  const status = document.getElementById('statsStatus');

  try {
    const response = await fetch('https://api.github.com/users/SudhakarNabhigari');
    if (!response.ok) throw new Error('GitHub API unavailable');

    const data = await response.json();

    document.getElementById('githubRepos').textContent = data.public_repos ?? '--';
    document.getElementById('githubFollowers').textContent = data.followers ?? '--';
    document.getElementById('githubFollowing').textContent = data.following ?? '--';
    document.getElementById('githubGists').textContent = data.public_gists ?? '--';

    if (status) {
      status.textContent = 'GitHub figures are loaded from the public profile API. LinkedIn statistics require authorized access.';
    }
  } catch (error) {
    if (status) {
      status.textContent = 'GitHub statistics are temporarily unavailable. Open the profile links to view current figures.';
    }
  }
})();
