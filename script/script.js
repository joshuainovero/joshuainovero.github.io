'use strict';

const myEmail = "joshuainovero20@gmail.com";
const maxSideBar = 250;

const copyTextToClipboard = (text) => {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand('copy');
    if (!successful) throw "Unable to copy to clipboard";
  } catch (err) {
    console.log(err);
  }
  document.body.removeChild(textArea);
  alert('My email has been copied to your clipboard');
}

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });
  });

document.querySelector('.openbtn').addEventListener('click', () => {
  document.querySelector('.side-bar').style.width = `${maxSideBar}px`;
});

document.querySelector('.closebtn').addEventListener('click', () => {
  document.querySelector('.side-bar').style.width = "0";
});

document.querySelector('#email-cpy').addEventListener('click', () => {copyTextToClipboard(myEmail);});
