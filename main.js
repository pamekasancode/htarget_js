function get() {
  var url = document.getElementById("api").value;
  var ip = document.querySelector("input[name=ip]");
  var req = url + ip.value;
  var xhr = new XMLHttpRequest();
  xhr.onerror = function() {
    alert("Requests Gagal");
  }
  
  xhr.onloadstart = function() {
    document.getElementById("submit").innerHTML= "Loading...";
  }
  
  xhr.onloadend = function() {
    if (this.responseText !== "") {
      document.getElementById("main").innerHTML = (this.responseText);
      setTimeout(function() {
        document.getElementById("submit").innerHTML = "Submit";
      }, 300);
    }
  }
  xhr.open("GET", req, true);
  xhr.send();

}
