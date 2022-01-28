// $(function () { // Same as document.addEventListener("DOMContentLoaded"...

//   // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
//   $("#navbarToggle").blur(function (event) {
//     var screenWidth = window.innerWidth;
//     if (screenWidth < 768) {
//       $("#collapsable-nav").collapse('hide');
//     }
//   });
// });

function makeActive(item){
var items=["chick","bee","sush"];
for(var i=0;i<items.length;i++){
	if(item==items[i]){
		if(document.getElementById(items[i]).className.indexOf("active")==-1){
			document.getElementById(item).className+=" active";
			console.log(document.getElementById(items[i]).className);			
		}
	}
	else{
		if(document.getElementById(items[i]).className.indexOf("active")!=-1){
			document.getElementById(items[i]).className="";
		}
	}
}
}

