// Message Alert
let messageAlert =
"Confirmación: ¿estás seguro de realizar esta acción?, Al hacerlo no se guardará tu juego";

// New Game
function newGame() {
  function event() {
    location.reload();
  }

  var message = confirm(messageAlert);

  if (message === true) {
    return event();
  } else {
    return false;
  }
}

// Return Game
function returnGame() {
  function event() {
    window.history.go(-1);
    window.history.back();
  }

  var message = confirm(messageAlert);

  if (message === true) {
    return event();
  } else {
    return false;
  }
}

// Close Game
function closeGame() {
  function event() {
    window.close();
  }
  
  var message = confirm(messageAlert);

  if (message === true) {
    return event();
  } else {
    return false;
  }
}