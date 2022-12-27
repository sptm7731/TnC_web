//.............................dark mode...............................................

function DarkFunction(){
    var SetTheme = document.body;
    SetTheme.classList.toggle("dark-mode")
    var theme;
    if(SetTheme.classList.contains("dark-mode")){
        console.log("Dark mode");
        theme = "DARK";
    }else{
        console.log("Light mode");
        theme = "LIGHT";
    }
    // save to localStorage
    localStorage.setItem("PageTheme", JSON.stringify(theme));
    // convert to JSON -----JSON.stringify(theme)
  }
  
  setInterval(() => {
    let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
    console.log(GetTheme);
    if(GetTheme === "DARK"){
        document.body.classList = "dark-mode";
    }else{
        document.body.classList = "";
    }
  }, 5);
  
  
  
//.......nav scroll..........



/*
  document.addEventListener("DOMContentLoaded", function () {  ......wtf is that!?.....
    pTag = document.querySelector("div");
    newVal = document.createElement("p");
    newVal.innerHTML = ' ';
    pTag.appendChild(newVal);
  }); 
*/
  
  var pos1 = window.pageYOffset;
  window.onscroll = function() {
  var pos2 = window.pageYOffset;
    if (pos1 > pos2) {
      document.getElementById("nav").style.top = "0";
    } else {
      document.getElementById("nav").style.top = "-50px";
    }
    pos1 = pos2;
  }
  
  
  
  
  //..........side nav......
  
  function openNav() {
    document.getElementById("side_nav").style.width = "40vw";
  }
  
  function closeNav() {
    document.getElementById("side_nav").style.width = "0";
  }
  
  //////
  
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;
  
  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
  
  
  //.............offer..............
  
  const openModalButtons = document.querySelectorAll('[data-modal-target]')
  const closeModalButtons = document.querySelectorAll('[data-close-button]')
  const overlay = document.getElementById('overlay')
  
  openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal)
    })
  })
  
  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
      closeModal(modal)
    })
  })
  
  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal')
      closeModal(modal)
    })
  })
  
  function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
  }
  
  function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
  }

  //............image slider.....

$(window).load(function(){
  $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({default_offset_pct: 0.45});
  $(".twentytwenty-container[data-orientation='vertical']").twentytwenty({default_offset_pct: 0.3, orientation: 'vertical'});
});
  