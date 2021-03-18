var userName = prompt('please add your name')
document.write("<h4> Welcome " + userName + "</h4>")


var favPlayer = prompt('Who is your favourite football player').toLowerCase()

if (favPlayer === 'ronaldo') {
    document.write("<h4> You are  a fan of Juventus </h4>")
}

else if (favPlayer === 'messi') {
    document.write("<h4> You are  a fan of Barcelona </h4>")

}
else {
   alert("its not messi and not ronaldo !")
}


var anime = confirm("Please confirm you are anime lover")

if (anime == true) {
    document.write("hello there!")
}

else {
    document.write("Are you interested in Anime")
}

var favColor = prompt("Please select your fav color").toLowerCase()
document.body.style.backgroundColor = favColor








