//your JS code here. If required.
function validate(){
    const age = document.getElementById("age");
    const name = document.getElementById("name");
    const btn = document.getElementById("btn");
	if(age.value && name.value){
        let promise =  new Promise((resolve, reject) => {
            if(age.value >= 18){
                setTimeout(() => resolve(`Welcome, ${name.value}. You can vote.`), 4000);
            }else{
                setTimeout( () => reject(`Oh sorry ${name.value}. You aren't old enough.`), 4000 );
            }
        })
        promise.then((message) => {
            alert(message);
        })
        .catch((error) => {
            alert(error)
        })
	}else{
        alert("Please enter valid details.");
    }
}