var cardStatus = document.querySelector("h5")
var addFriend = document.querySelector("#addFriend");
var removeFriend = document.querySelector("#removeFriend")

//Function For Adding Friend
addFriend.addEventListener("click",function(){
    cardStatus.innerHTML = "Friends";
    cardStatus.style.color = "green";
})

//Function For Removing Friend
removeFriend.addEventListener("click",function(){
    cardStatus.innerHTML = "Stranger";
    cardStatus.style.color = "red";
})