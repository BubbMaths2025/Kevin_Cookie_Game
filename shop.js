'use strict';
// A buildless SVG stage: each visitor represents a small group of cookie sales.
const shopStage = document.createElement('section');
shopStage.className = 'panel shop-panel';
shopStage.setAttribute('aria-label', 'Your animated cookie shop');
shopStage.innerHTML = `<div class="panel-heading"><span class="step">♥</span><h2>Your little corner of sweet</h2><span class="tag" id="shop-status">READY TO OPEN</span></div>
<div class="shop-stage"><svg id="shop-svg" viewBox="0 0 1000 310" role="img" aria-label="A cozy cookie shop with a smiling shopkeeper and visiting customers">
<defs><linearGradient id="shop-sky" x2="0" y2="1"><stop stop-color="#e5f1ec"/><stop offset="1" stop-color="#f8f5df"/></linearGradient><pattern id="awning-stripes" width="54" height="40" patternUnits="userSpaceOnUse"><rect width="27" height="40" fill="#49765b"/><rect x="27" width="27" height="40" fill="#fff4d8"/></pattern></defs>
<rect width="1000" height="310" fill="url(#shop-sky)"/><circle cx="124" cy="57" r="28" fill="#f4d28b"/>
<g fill="#fffdf3" opacity=".85"><rect x="220" y="42" width="112" height="20" rx="10"/><circle cx="257" cy="43" r="20"/><rect x="803" y="64" width="94" height="16" rx="8"/><circle cx="855" cy="61" r="18"/></g>
<path d="M0 226 Q140 194 300 226T650 226T1000 220V310H0" fill="#c7d7b4"/><rect y="263" width="1000" height="47" fill="#e4d9c5"/><path d="M0 289H1000" stroke="#d5c7af" stroke-width="2"/>
<g transform="translate(77 264) scale(1.65) translate(-77 -264)"><g fill="#789762"><circle cx="74" cy="188" r="29"/><circle cx="110" cy="204" r="23"/></g><path d="M77 204v60" stroke="#947650" stroke-width="9"/></g><g transform="translate(895 264) scale(1.65) translate(-895 -264)"><circle cx="894" cy="195" r="31" fill="#789762"/><path d="M895 212v52" stroke="#947650" stroke-width="9"/></g>
<rect x="370" y="62" width="366" height="204" rx="9" fill="#edcfa5"/><rect x="391" y="116" width="322" height="124" rx="5" fill="#6b5945"/>
<rect x="410" y="27" width="286" height="49" rx="9" fill="#315c46"/><text x="553" y="57" text-anchor="middle" fill="#fff5d9" font-family="Georgia,serif" font-size="22">Kevin’s Cookie Shop</text>
<path d="M381 79H725L744 119H362Z" fill="url(#awning-stripes)"/><rect x="362" y="115" width="382" height="14" rx="6" fill="url(#awning-stripes)"/>
<g id="shopkeeper"></g>
<rect x="389" y="218" width="326" height="49" rx="4" fill="#b47f50"/><rect x="380" y="211" width="345" height="13" rx="5" fill="#f4e0b9"/><path d="M411 231H693M411 251H693" stroke="#a46e40" opacity=".5"/>
<g id="cookie-tray"><ellipse cx="482" cy="207" rx="38" ry="6" fill="#eee4cd"/><g fill="#dda259" stroke="#9c6639"><circle cx="464" cy="201" r="9"/><circle cx="481" cy="199" r="10"/><circle cx="499" cy="201" r="9"/></g><g fill="#633c2b"><circle cx="462" cy="198" r="2"/><circle cx="482" cy="196" r="2"/><circle cx="478" cy="203" r="2"/><circle cx="499" cy="199" r="2"/></g></g>
<rect x="637" y="190" width="36" height="21" rx="3" fill="#355849"/><rect x="644" y="181" width="22" height="15" rx="2" fill="#abc4aa"/>
<g transform="translate(773 205)"><path d="M0 60L9 0H54L63 60" fill="#a67448"/><rect x="14" y="5" width="36" height="44" rx="2" fill="#365844"/><text x="32" y="24" text-anchor="middle" fill="#fff3d6" font-family="Arial, sans-serif" font-size="8" textLength="26" lengthAdjust="spacingAndGlyphs">FRESH</text><text x="32" y="39" text-anchor="middle" fill="#fff3d6" font-family="Arial, sans-serif" font-size="8" textLength="28" lengthAdjust="spacingAndGlyphs">COOKIES</text></g>
<g id="shop-customers"></g><g id="shop-pop" opacity="0"><text x="550" y="152" text-anchor="middle" fill="#315c46" stroke="#fff9e8" stroke-width="5" paint-order="stroke" font-size="21" font-weight="bold">♥ Thank you!</text></g>
</svg></div><div class="shop-caption"><p id="shop-caption" role="status">Your apron is on. The cookies are warm. Let's open up!</p><button type="button" id="shop-skip" class="quiet" hidden>Skip to wrap-up →</button><button type="button" id="shop-replay" class="quiet" hidden>Watch again ↻</button></div>`;
document.querySelector('.columns').before(shopStage);
const skins=['#f2c6a1','#a86d49','#764a34','#dfaa7a','#bc865d','#f6d7bb'];
const tops=['#d47b65','#668ab3','#d9ac4c','#8c78aa','#4e8d80','#c96f91','#6f8455','#e1a17e'];
const hairs=['#3d302a','#71503b','#d8b263','#b9b6b0','#28292d','#9a5435'];
function personSVG(i, keeper=false){
 const skin=skins[i%skins.length],top=tops[i%tops.length],hair=hairs[(i*3+Math.floor(i/3))%hairs.length];
 const style=i%8,small=style===2,scale=keeper?1:small?.79:style===6?.92:1;
 return `<g transform="translate(0 ${91*(1-scale)}) scale(${scale})"><ellipse cx="0" cy="91" rx="23" ry="4" fill="#554a3820"/>
 <g class="person-legs" stroke="${style===4?'#744a61':'#405567'}" stroke-width="9" stroke-linecap="round"><path class="leg-left" d="M-9 65L-11 86"/><path class="leg-right" d="M9 65L12 86"/></g>
 ${style===1||style===5?`<rect x="-21" y="3" width="42" height="39" rx="18" fill="${hair}"/>`:''}
 <path d="M-13 36Q0 30 13 36L19 68H-19Z" fill="${keeper?'#faf0db':top}"/>
 ${style===4?'<path d="M-19 66H19L25 77H-25Z" fill="#744a61"/>':''}
 ${style===0?'<path d="M-16 47H16M-17 55H17M-18 63H18" stroke="#fff8df" stroke-width="3" opacity=".6"/>':''}
 <path d="M-14 40L-24 60" stroke="${skin}" stroke-width="8" stroke-linecap="round"/>
 <g class="serving-arm"><path d="M14 40L25 58L34 51" stroke="${skin}" stroke-width="8" stroke-linecap="round"/>
 ${keeper?'':`<g class="customer-cookie"><circle cx="36" cy="47" r="10" fill="#e8af62" stroke="#bb8243"/><path d="M32 43h2m4 7h2m-8 2h1m7-11h1" stroke="#67402b" stroke-width="3" stroke-linecap="round"/></g>`}</g>
 <rect x="-6" y="27" width="12" height="12" rx="5" fill="${skin}"/><ellipse cy="13" rx="17" ry="20" fill="${skin}"/>
 <path d="M-17 13Q-22-13 0-10Q21-12 17 10L9 1Q-2 9-13 2Z" fill="${hair}"/>
 ${style===5?`<circle cx="17" cy="-7" r="10" fill="${hair}"/>`:''}
 <g fill="#352c27"><circle cx="-6" cy="14" r="1.7"/><circle cx="6" cy="14" r="1.7"/></g><path d="M-5 22Q0 28 6 21" fill="none" stroke="#7f4036" stroke-width="1.7" stroke-linecap="round"/>
 ${style===3||style===6?'<g fill="none" stroke="#514c48" stroke-width="1.5"><circle cx="-7" cy="14" r="5"/><circle cx="7" cy="14" r="5"/><path d="M-2 14H2"/></g>':''}
 ${style===7?'<path d="M-19 4Q-19-15 0-15Q18-15 18 4Z" fill="#d9ac4c"/><path d="M-21 4H23" stroke="#b88933" stroke-width="5" stroke-linecap="round"/>':''}
 ${keeper?'<path d="M-10 39H10L15 70H-15Z" fill="#47795b"/><path d="M-9 40L-7 33M9 40L7 33" stroke="#47795b" stroke-width="3"/><path d="M-18-1V-10Q-26-20-12-25Q-4-38 5-27Q24-29 21-16L18-1Z" fill="#fff9ec"/><path d="M-17-1H18" stroke="#dfd5be" stroke-width="3"/>':''}</g>`;
}
document.getElementById('shopkeeper').innerHTML=`<g transform="translate(569 151)">${personSVG(4,true)}</g>`;
let shopFrame=0,shopPlaying=false,shopLast=null;
const shopEl=id=>document.getElementById(id);
function stopShop(){cancelAnimationFrame(shopFrame);shopPlaying=false;shopEl('shop-customers').replaceChildren();shopEl('shop-pop').setAttribute('opacity','0');shopEl('shopkeeper').classList.remove('is-serving');if(shopLast){shopEl('shop-status').textContent=`DAY ${shopLast.day} • CLOSED`;shopEl('shop-caption').textContent=`${shopLast.sold} cookies sold. Another sweet day in the neighborhood!`;if(!shopLast.sold)shopEl('shop-caption').textContent='A quiet day today. Your shopkeeper is ready for the next batch.';}shopEl('shop-skip').hidden=true;shopEl('shop-replay').hidden=!shopLast;document.dispatchEvent(new Event('shop-animation-end'));}
function animateShop(result){
 stopShop();shopLast=result;shopPlaying=true;document.dispatchEvent(new Event("shop-animation-start"));
 shopEl('shop-status').textContent=`DAY ${result.day} • OPEN`;
 shopEl('shop-replay').hidden=true;shopEl('shop-skip').hidden=false;
 const count=Math.min(60,Math.ceil(result.sold/5));
 shopEl('shop-caption').textContent=count?`${result.sold} cookies to share! Each visitor represents a small group of sales.`:'No sales today. A quiet moment to enjoy the smell of fresh cookies.';
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(reduced){stopShop();return;}
 const visitors=Array.from({length:count},(_,i)=>{const g=document.createElementNS('http://www.w3.org/2000/svg','g');g.innerHTML=personSVG(i+result.day);g.setAttribute('visibility','hidden');g.classList.add('shop-visitor');shopEl('shop-customers').append(g);return g;});
 const gap=.28,life=4.4,total=count?life+(count-1)*gap:2.5;let start;
 function frame(time){if(start===undefined)start=time;const elapsed=(time-start)/1000;let buying=false;
 visitors.forEach((g,i)=>{const t=elapsed-i*gap;if(t<0||t>life){g.setAttribute('visibility','hidden');return;}g.setAttribute('visibility','visible');let x;if(t<1.7)x=-45+485*(t/1.7);else if(t<2.5){x=440;buying=true;}else x=440+620*((t-2.5)/1.9);const bob=t<1.7||t>2.5?Math.sin(t*15)*2:0;g.setAttribute('transform',`translate(${x} ${180+bob+(i%3)*3})`);g.classList.toggle('has-cookie',t>=2.15);g.classList.toggle('walking',t<1.7||t>2.5);});
 shopEl('shop-pop').setAttribute('opacity',buying?'1':'0');shopEl('shopkeeper').classList.toggle('is-serving',buying);
 if(elapsed>=total){stopShop();return;}shopFrame=requestAnimationFrame(frame);}
 shopFrame=requestAnimationFrame(frame);
 shopStage.scrollIntoView({behavior:'smooth',block:'center'});
}
shopEl('shop-skip').addEventListener('click',stopShop);
shopEl('shop-replay').addEventListener('click',()=>{if(shopLast)animateShop(shopLast)});
