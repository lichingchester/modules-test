'use strict';

const path = require('path');
// const log = require('./logger');
const temp = require('./commands/index');

const command = (input = []) => {
  // log.debugStatus('command start'); 
  // log.debug(`input: ${input}`);

  const command = input.length > 0 ? input[0] : null;
  switch(command){
    case 'init':
      temp.init();
      break;
    case 'start':
    //  log.debugStatus('start');
     break;
    case 'build':
      temp.build();
     break;
    default:
      // log.debugStatus('Invalid command');
  }
};

module.exports = command;