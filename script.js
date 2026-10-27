const menuToggle=document.getElementById('menuToggle');
const nav=document.getElementById('nav');
menuToggle.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('contactForm').addEventListener('submit',function(e){
  e.preventDefault();
  const data=new FormData(this);
  const subject=encodeURIComponent('Website project enquiry from '+data.get('name'));
  const body=encodeURIComponent('Name: '+data.get('name')+'\nEmail: '+data.get('email')+'\nProject: '+data.get('project')+'\n\nDetails:\n'+data.get('message'));
  window.location.href='mailto:YOUR_EMAIL@example.com?subject='+subject+'&body='+body;
});