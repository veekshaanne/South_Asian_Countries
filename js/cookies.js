function setCookie(name,value){
document.cookie = name + "=" + value;
}
function getCookie(name){
let cookies = document.cookie.split(";");
for(let i=0;i<cookies.length;i++){
let c = cookies[i].trim();
if(c.indexOf(name + "=") === 0){
return c.substring(name.length+1);
}
}
return null;
}
function countVisit(pageName){
let visits = getCookie(pageName);
if(visits == null){
visits = 1;
}else{
visits = parseInt(visits) + 1;
}
setCookie(pageName,visits);
console.log(pageName + " visits:", visits);
}