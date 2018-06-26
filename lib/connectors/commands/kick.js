'use strict';
var Package = require('pomelo-protocol').Package;
var logger = require('pomelo-logger').getLogger('pomelo-kick', __filename);

module.exports.handle = function(socket, reason) {
// websocket close code 1000 would emit when client close the connection
  logger.debug("KICK: %s", reason);
  if(typeof reason === 'string') {
    var res = {
      reason: reason
    };
    socket.sendRaw(Package.encode(Package.TYPE_KICK, new Buffer(JSON.stringify(res))));
  }
};
