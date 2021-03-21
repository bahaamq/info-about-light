var userName = prompt('please add your name')
document.write("<h4> Welcome " + userName + "</h4>")



var favPlayer = prompt('Who is your favourite football player').toLowerCase()

while (!(favPlayer === 'messi' || favPlayer === 'ronaldo')) {
    favPlayer = prompt('Please Choose between messi and ronaldo').toLowerCase()
}

var favPlayerImg = ''
var favTeam = ''


if (favPlayer === 'ronaldo') {
    document.write("<h4> You are  a fan of Juventus </h4>")
    favPlayerImg = '<img src=images/c.ronaldo.jpg>'
    favTeam = 'Juventus'
}

else if (favPlayer === 'messi') {
    document.write("<h4> You are  a fan of Barcelona </h4>")
    favPlayerImg = '<img src=images/messi.jpg>'
    favTeam = 'Barcelona'
}

var favPlayerCounter = prompt('how many photos do you want for your fav player')
var resultOfPlayer = ''
for (var i = 1; i <= favPlayerCounter; i++) {
    resultOfPlayer += "<h3>" + i + "</h3>" + favPlayerImg
}

document.write(resultOfPlayer)

var anime = confirm("Please confirm that your favourite team is" + favTeam)

if (anime == true) {
    document.write("hello there!")
}

else {
    document.write("Are you interested in Anime")
}

var favColor = prompt("Please select your fav color").toLowerCase()
document.body.style.backgroundColor = favColor
