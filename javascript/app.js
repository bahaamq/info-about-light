// Taking username and displaying it into HTML
var userName = prompt('please add your name')
function getName(u_name) {

    return u_name
}


var favPlayer = prompt('Who is your favourite football player').toLowerCase()
var favPlayerImg = ''
var favTeam = ''

function getFavPlayerandTeam(fav_player) {




    if (fav_player === 'ronaldo') {
        document.write("<h4> You are  a fan of Juventus </h4>")
        favPlayerImg = '<img src=images/c.ronaldo.jpg>'
        favTeam = 'Juventus'
    }

    else if (fav_player === 'messi') {
        document.write("<h4> You are  a fan of Barcelona </h4>")
        favPlayerImg = '<img src=images/messi.jpg width=300 height=400>'
        favTeam = 'Barcelona'
    }



    var yourFavPlayer = confirm("Please confirm that your favourite team is" + favTeam)

    if (yourFavPlayer == true) {
        document.write("<p>You are a fan of " + favTeam + "</p>")
    }

    else {
        document.write("Are you interested in football")
    }

}






var favPlayerCounter = prompt('how many photos do you want for your fav player')
function getFavPlayerCounter() {
    var resultOfPlayer = ''
    for (var i = 1; i <= favPlayerCounter; i++) {
        resultOfPlayer += i + favPlayerImg
    }

    return resultOfPlayer
}


function changeColor() {

    var favColor = prompt("Please select your fav color").toLowerCase()
    document.body.style.backgroundColor = favColor
}