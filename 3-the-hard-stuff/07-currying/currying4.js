//
// Code Moves - Currying - Sample code 4
//

function logSystem(type) {
    return function(message) { 
        console.log(`${type}: ${message}`); 
    }
}

const logInfo = logSystem('INFO');
const logErr = logSystem('ERROR');
const logWarn = logSystem('WARNING');


logInfo('Initial phase started.');
logWarn('Comment too short.');
logErr('Missing semicolon!');
