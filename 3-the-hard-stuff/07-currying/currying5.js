//
// Code Moves - Currying - Sample code 5
//

function logSystem(type) {
  return function(color) {
    return function(message) { 
        console.log(`${color} ${type}: ${message}`); 
    }
  }
}

const logInfo = logSystem('INFO')('White');
const logErr = logSystem('ERROR')('Red');
const logWarn = logSystem('WARNING')('Yellow');


logInfo('Initial phase started.');
logWarn('Comment too short.');
logErr('Missing semicolon!');
