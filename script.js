


  function toggleNavbar() {
    document.getElementById("navLinks").classList.toggle("active");
  }

const text = document.querySelector(".text");

const textLoad = () =>{
    setTimeout(() => {
        text.textContent = "Software Developer";
    },0);
    setTimeout(() => {
        text.textContent = "Software Tester";
    },5000);
    setTimeout(() => {
        text.textContent = "System Analyst";
    },10000);
}
textLoad();
setInterval(textLoad,15000);

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const dialog = document.getElementById("thank-you-dialog");
    dialog.style.display = "block";

    setTimeout(() => {
      this.submit();
    }, 5000); 
  });