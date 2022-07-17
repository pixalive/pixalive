import React, { useContext } from 'react';
import { SocketContext, SpriteContext, PopupContext } from '../contexts';
const constants = require('../../shared/constants');

const ExportStringButton = () => {
  const sprite = useContext(SpriteContext);
  const socket = useContext(SocketContext);
  const [popup, setPopup] = useContext(PopupContext);

  const copyTextToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  const onExportToStringClick = () => {
    if (socket) {
      const jsonString = JSON.stringify(sprite.frames);
      const base64String = btoa(jsonString);
      copyTextToClipboard(base64String);
      setPopup(false);
    }
  };

  return (
    <div className="popup-button" onClick={onExportToStringClick}>
      Export String to Clipboard
    </div>
  );
};

export default ExportStringButton;
