document.getElementById("userForm").addEventListener("submit", function(e) {
e.preventDefault();
const name = document.getElementById("name").value;
const age = document.getElementById("age").value;
    if(name === "" || age === ""){
        alert("Please enter valid details.");
        return;
    }

    const newPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(age > 18){
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    });
    newPromise.then((result) => {
        alert(result);
        alert("form submitted successfully");
    }).catch((err) => {
        alert(err);
    }).finally(() => {
        console.log("Promise settled");
    });
});
