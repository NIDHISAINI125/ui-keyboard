function textdisp(result) {
	system.input.value +=result;
	
}

function spacebtn()
{
	system.input.value+= " ";
}

function bckspce() {
	system.input.value =" ";
}

// function caps() {
//  	system.input.value += lowercase;
// }


// const input=document.querySelector('.theme-switcher');

// input.addEventListener('click',checkMode);
// function checkMode(){
// 	console.log('checking....');
// 	if(input.checked){
// 		console.log('dark on');
// 	}
// 	else{
// 		console.log('dark-off');
// 		darkModeOff();
// 	}
// }
// function darkModeOn() {
// 	document.body.classList.add("dark-mode");
// }

// function darkModeOff() {
// 	document.body.classList.remove("dark-mode");
// }
window.onload= function (){
const input=document.querySelector('.theme-switcher input');
input.addEventListener('click',(e)=>{
	if(e.target.checked){
		document.body.setAttribute('data-theme','dark');
		// console.log(e.target);

	}else{
		document.body.setAttribute('data-theme','light');
		
	}
	
})
};

// }document.querySelector("checkbox").addEventListener("click",handleclick);

// function handleclick(){
// 	alert("workrd");
