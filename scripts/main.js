
function ShowDiv() {
    document.getElementById("myDIV").style.display = "";
    document.getElementById("BB").style.display='none';
}

window.onload = function() {
  document.getElementById('btn').onclick = function()
  {
    window.location.href = "https://www.google.fr/#q="+document.getElementById("url").value
  };
}
