function showPage(id,btn){document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.getElementById(id).classList.add('active');document.querySelectorAll('.bottom button').forEach(b=>b.classList.remove('active'));if(btn) btn.classList.add('active');window.scrollTo(0,0);}
function searchChapters(){let v=document.getElementById('searchInput').value.toLowerCase().trim();let f=false;document.querySelectorAll('.lib-item-full').forEach(item=>{let s=item.dataset.search.includes(v);item.style.display=s?'block':'none';if(s) f=true;});document.getElementById('noResult').style.display=f||v==''?'none':'block';}
function checkAnswers(){
let c=0;
document.querySelectorAll('.q-item').forEach(div=>{
let correctInput=div.querySelector('input[data-correct="1"]');
let correctLabel=correctInput.parentElement;
let checked=div.querySelector('input:checked');
let ans=div.querySelector('.ans');
div.querySelectorAll('label').forEach(l=>{l.classList.remove('correct','wrong');});
if(checked){
let checkedLabel=checked.parentElement;
if(checked===correctInput){
c++;
checkedLabel.classList.add('correct');
ans.innerHTML="✅ Correct! Well done.";
ans.style.color="lightgreen";
}else{
checkedLabel.classList.add('wrong');
correctLabel.classList.add('correct');
ans.innerHTML="❌ Wrong. Auto corrected -> Correct is: "+correctLabel.innerText.trim();
ans.style.color="#ff6b6b";
}
}else{
correctLabel.classList.add('correct');
ans.innerHTML="⚠️ No answer - Correct is: "+correctLabel.innerText.trim();
ans.style.color="orange";
}
});
document.getElementById('score').innerHTML="Your Score: "+c+"/20 - Wrong answers are now highlighted green for correct";
}
function saveNote(){localStorage.setItem('note',document.getElementById('noteArea').value);document.getElementById('saved').innerText="Saved!";}
function saveOpen(id){let v=document.getElementById(id).value;localStorage.setItem(id,v);document.getElementById('s_'+id).innerText=v?'Saved!':'';}
function collectAll(){let ids=['open1_1','open2_1','open3_1','open4_1','open5_1','open6_1'];let all="";ids.forEach((id,i)=>{let el=document.getElementById(id);let q=el.parentElement.querySelector('b').innerText;let a=localStorage.getItem(id)||el.value||"(No answer)";all+=(i+1)+". "+q+"\nAnswer: "+a+"\n\n---\n\n";});document.getElementById('finalAll').value=all;document.getElementById('s_final').innerText="Collected!";}
function copyAll(){let t=document.getElementById('finalAll');t.select();document.execCommand('copy');document.getElementById('s_final').innerText="Copied!";}
window.addEventListener('load',()=>{let ids=['open1_1','open2_1','open3_1','open4_1','open5_1','open6_1'];ids.forEach(id=>{let s=localStorage.getItem(id);if(s&&document.getElementById(id)) document.getElementById(id).value=s;});let n=localStorage.getItem('note');if(n) document.getElementById('noteArea').value=n;});
document.querySelectorAll('.lib-head').forEach(h=>{h.addEventListener('click',()=>{h.nextElementSibling.classList.toggle('open');});});
let stars=document.querySelectorAll('#bigStars span');stars.forEach(s=>{s.addEventListener('click',()=>{let v=s.dataset.v;stars.forEach((st,i)=>{st.style.color=i<v?'#c9a86a':'#555';});document.getElementById('rateMsg').innerText="You rated "+v+" stars! Thank you!";});});