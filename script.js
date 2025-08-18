// <!-- For Animation of my name -->
<script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>

  var typed = new Typed("#element", {
    strings: ["I'm an aspiring Web Developer<br> and Software Developer."],
    typeSpeed: 70,
  });

    
    let tablinks = document.getElementsByClassName("tablinks");
    let tabcontents = document.getElementsByClassName("tabcontents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link")
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab")
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    var side = document.getElementById("sidemenu");

    function openmenu(){
        side.style.right = "0";
    }

    function closemenu(){
        side.style.right = "-200px";
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxgkVqDPUL93TKdujqYtaT1_61cTcF0dE270-XqBnpOxBJGr6XBEqJHEszC1G_mRS10jw/exec'
    const form = document.forms['submit-to-google-sheet']
    const mssg = document.getElementById("msg");
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            mssg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                mssg.innerHTML = ""
            },4500)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
    })
