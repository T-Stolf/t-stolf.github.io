'use strict'
// const phone = document.getElementById("phone");
// phone.addEventListener('click', function()
// {
//     alert("416-434-6088");
// });

// const mail = document.getElementById("email");
// mail.addEventListener('click', function()
// {
//     alert("thomsstolf@gmail.com");
// });

// const disc = document.getElementById("discord");
// disc.addEventListener('click', function()
// {
//     alert("Kasfas#1675");
// });

function aboutme()
{
    window.open("aboutme.html", "_self");
}
function projects()
{
    window.open("projects.html", "_self");
}
function experience()
{
    window.open("experience.html", "_self");
}
function back()
{
    window.open("index.html", "_self");
}

function contact(type)
{
    switch(type)
    {
        case 0:
            window.open("tel:16-434-6088", "_self");
            break;
        case 2:
            window.open("https://discord.gg/zmdPaKqkZS", "_self");
            break;
        case 1:
            window.open("mailto: thomsstolf@gmail.com" ,  "_self");
            break;
        default:
            window.alert("error");
            break;
    }

}
function gitHub()
{
    window.open("https://github.com/T-Stolf");
}