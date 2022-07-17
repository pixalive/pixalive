const cursorMove = require('./cursorMove');
const updateSelectedColor = require('./updateSelectedColor');
const updateSelectedFrame = require('./updateSelectedFrame');
const addNewFrame = require('./addNewFrame');
const selectLayer = require('./selectLayer');
const addNewLayer = require('./addNewLayer');
const setPreviewLayer = require('./setPreviewLayer');
const disconnect = require('./disconnect');
const selectTool = require('./selectTool');
const canvasClick = require('./canvasClick');
const layerNameChange = require('./layerNameChange');
const deleteSelectedLayer = require('./deleteSelectedLayer');
const moveSelectedLayerUp = require('./moveSelectedLayerUp');
const moveSelectedLayerDown = require('./moveSelectedLayerDown');
const shiftFrameLeft = require('./shiftFrameLeft');
const shiftFrameRight = require('./shiftFrameRight');
const deleteFrame = require('./deleteFrame');
const duplicateSelectedFrame = require('./duplicateSelectedFrame');
const updateUserName = require('./updateUserName');
const updateSpriteName = require('./updateSpriteName');
const translateLayer = require('./translateLayer');
const copyLayer = require('./copyLayer');
const uploadPixels = require('./uploadPixels');
const resizeSpritePixels = require('./resizeSpritePixels');
const copyLayerToOneFrame = require('./copyLayerToOneFrame');
const undo = require('./undo')

module.exports = {
  cursorMove,
  updateSelectedColor,
  updateSelectedFrame,
  addNewFrame,
  selectLayer,
  addNewLayer,
  setPreviewLayer,
  disconnect,
  canvasClick,
  selectTool,
  layerNameChange,
  deleteSelectedLayer,
  moveSelectedLayerUp,
  moveSelectedLayerDown,
  updateUserName,
  updateSpriteName,
  shiftFrameLeft,
  shiftFrameRight,
  duplicateSelectedFrame,
  deleteFrame,
  translateLayer,
  copyLayer,
  uploadPixels,
  resizeSpritePixels,
  copyLayerToOneFrame,
  undo
};
