function date() {
var date= new Date();
var month = date.getMonth()+ 1;
var day = date.getDate(); 
var year = date.getFullYear();


document.getElementById('dateBox').innerHTML = day + '/' + month + '/' + year;

}
