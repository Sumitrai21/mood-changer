
for(var i = 0; i<4; i++)
{
  document.querySelectorAll("td")[i].addEventListener("click", print);
}

function print()
{
  var check = this.innerHTML;

  var x = 1;

  switch(check)
  {
    case 'Romantic':

      romantic();
      break;

    case 'Sad':

        sad();
        break;

     case 'Inspiring':

            inspiring();
            break;

    case 'Anger':

          anger();

          break;

          default:
          break;

}

}

  var audio1 = new Audio('songs/romantic.mp3');
  var audio2 = new Audio('songs/sad.mp3');
  var audio3 = new Audio('songs/anger.mp3');
  var audio4 = new Audio('songs/inspiring.mp3');
function romantic()
{
  document.querySelector("body").classList.remove("sad-body","inspiring-body","anger-body");
  document.querySelector("body").classList.add("romantic-body");

  document.querySelector(".nav-bar").classList.remove("sad-navbar","anger-navbar","inspiring-navbar");
  document.querySelector(".nav-bar").classList.add("romantic-navbar");

  document.querySelector(".main-bar").classList.remove("sad-mainbar","anger-mainbar","inspiring-mainbar");
  document.querySelector(".main-bar").classList.add("romantic-mainbar");

  document.querySelector(".sad").classList.remove("sad-cell","anger-cell","inspiring-cell");
  document.querySelector(".anger").classList.remove("anger-cell");
    document.querySelector(".inspiration").classList.remove("inspiring-cell");
  document.querySelector(".romantic").classList.add("romantic-cell");



  audio1.play();
  audio2.pause();
  audio3.pause();
  audio4.pause();

}


function sad()
{
  document.querySelector("body").classList.remove("romantic-body","inspiring-body","anger-body");
  document.querySelector("body").classList.add("sad-body");

  document.querySelector(".nav-bar").classList.remove("romantic-navbar","anger-navbar","inspiring-navbar");
  document.querySelector(".nav-bar").classList.add("sad-navbar");

  document.querySelector(".main-bar").classList.remove("romantic-mainbar","anger-mainbar","inspiring-mainbar");
  document.querySelector(".main-bar").classList.add("sad-mainbar");

  document.querySelector(".romantic").classList.remove("romantic-cell");
    document.querySelector(".anger").classList.remove("anger-cell");
      document.querySelector(".inspiration").classList.remove("inspiring-cell");
  document.querySelector(".sad").classList.add("sad-cell");



    audio2.play();

      audio1.pause();
      audio3.pause();
      audio4.pause();
}


function anger()
{

  document.querySelector("body").classList.remove("romantic-body","inspiring-body","sad-body");
  document.querySelector("body").classList.add("anger-body");

  document.querySelector(".nav-bar").classList.remove("romantic-navbar","sad-navbar","inspiring-navbar");
  document.querySelector(".nav-bar").classList.add("anger-navbar");

  document.querySelector(".main-bar").classList.remove("romantic-mainbar","sad-mainbar","inspiring-mainbar");
  document.querySelector(".main-bar").classList.add("anger-mainbar");

  document.querySelector(".sad").classList.remove("sad-cell");
    document.querySelector(".romantic").classList.remove("romantic-cell");
      document.querySelector(".inspiration").classList.remove("inspiring-cell");
  document.querySelector(".anger").classList.add("anger-cell");



    audio3.play();
    audio1.pause();
    audio2.pause();
    audio4.pause();

}

function inspiring()
{
  document.querySelector("body").classList.remove("romantic-body","sad-body","anger-body");
  document.querySelector("body").classList.add("inspiring-body");

  document.querySelector(".nav-bar").classList.remove("romantic-navbar","anger-navbar","sad-navbar");
  document.querySelector(".nav-bar").classList.add("inspiring-navbar");

  document.querySelector(".main-bar").classList.remove("romantic-mainbar","anger-mainbar","sad-mainbar");
  document.querySelector(".main-bar").classList.add("inspiring-mainbar");

  document.querySelector(".sad").classList.remove("sad-cell");
    document.querySelector(".anger").classList.remove("anger-cell");
      document.querySelector(".romantic").classList.remove("romantic-cell");
  document.querySelector(".inspiration").classList.add("inspiring-cell");



    audio4.play();
    audio1.pause();
    audio3.pause();
    audio2.pause();
}
