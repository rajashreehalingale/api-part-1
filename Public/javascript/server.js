
function js_getCollegesByCity() {

 // window.location.href = "http://localhost:1337/index/city/" + document.getElementById("ddCity").value;
 const loc = "http://localhost:1337/index/city/" + document.getElementById("ddCity").value;

 locationChange(loc)

}
function locationChange(loc) {

 window.location.href = loc
}

function js_getCollegesByID() {
 window.location.href = "http://localhost:1337/index/id/" + document.getElementsById("Details").value;
 // alert("http://localhost:1337/index/id/" + document.getElementById("Details").name);
}
