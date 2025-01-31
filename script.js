var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
var sidemenuu=document.getElementById("sidemenu");
function openmenu(){
    sidemenuu.style.right="0";
    // This is done to make mobile menu work
}
function closemenu(){
    sidemenuu.style.right= "-200px";
    // This is done to make mobile menu work
}
const scriptURL = 'https://script.google.com/macros/s/AKfycby62Gc7q478gqyza31yiC3l0QGbM63gE8g4ulQpg8nL55Ucm68QXQC6YvdzVC2VAp0x/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })