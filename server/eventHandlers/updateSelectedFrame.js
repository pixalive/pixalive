const constants = require('../../shared/constants');

module.exports = (socket, namespacedIo, state, spriteHash, socketId) => {
  //handle selected frame
  socket.on(constants.MSG.UPDATE_SELECTED_FRAME, selectedFrame => {
    state[spriteHash].users[socketId].selectedFrame = selectedFrame;

    namespacedIo.emit(constants.MSG.BROADCAST_SELECTED_FRAME_UPDATE, {
      selectedFrame,
      socketId
    });
  });
};
