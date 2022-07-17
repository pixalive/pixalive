const constants = require('../../shared/constants');
const { frameFactory, layerFactory } = require('../../shared/factories');

module.exports = (socket, namespacedIo, state, spriteHash, socketId) => {
  //add new frame
  socket.on(constants.MSG.ADD_NEW_FRAME, () => {
    // derive index for new frame from length of frames array
    const newFrameOrder = state[spriteHash].frames.length;

    //make a new frame and add to frames
    const newFrame = frameFactory(newFrameOrder);

    // add new layers to single frame
    const sampleFrame = state[spriteHash].frames[0];
    sampleFrame.layers.forEach(layer => {
      const h = layer.pixels.length;
      const w = layer.pixels[0].length;
      const newLayer = layerFactory(w, h, layer.layerOrder, layer.name);
      newFrame.layers.push(newLayer);
    });

    // push in new frame
    state[spriteHash].frames.push(newFrame);

    //send updated sprite
    namespacedIo.emit(constants.MSG.SEND_SPRITE, state[spriteHash]);
  });
};
