
var currentUser = window.localStorage.getItem('currentUser')

if(currentUser != null){
	window.location ="personalcenter.html";
}

var saveUser = window.localStorage.getItem('acc_020a');
var savePass = window.localStorage.getItem('pass_020a');
console.log(saveUser);


var loginButton = document.getElementById('login-btn');

loginButton.onclick = function(){
	// alert(1);

	var loginUser = document.getElementById('account-name');
	var loginPassword = document.getElementById('user-password');

	var inputUser = loginUser.value;
	var inputPassword = loginPassword.value;

	console.log(inputUser);
	console.log(inputPassword);


	var saveObj = window.localStorage.getItem('userObj_020a');
	var saveJSONObj =JSON.parse(saveObj);
	console.log(saveJSONObj);
	var flag =1;
	for(var i = 0; i<saveJSONObj.length; i++){
		if(inputUser==saveJSONObj[i].user && inputPassword==saveJSONObj[i].pwd){
           flag = 0
		}
	}


	if(flag == 0){
		alert('Login Successfully!');
		window.localStorage.setItem('currentUser', inputUser);
		window.location.href="personalcenter.html";
	}else{
		alert('username or password is incorrect!');
	}

}


