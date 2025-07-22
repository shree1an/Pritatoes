var topButton = document.getElementById("top");
// When the user scrolls down 150 from the top of the document, show the button
window.addEventListener("scroll", function() {
  if (scrollY > 150){
    topButton.style.display="block";
  }else{
    topButton.style.display="none";
  }
}) 

//triggering a function when top button is clicked
topButton.addEventListener("click", function()
{
  window.scrollTo({top:0,behavior:"smooth"})
})