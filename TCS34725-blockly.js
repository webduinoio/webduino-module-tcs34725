+(function (window, webduino) {

  'use strict';

  window.getTCS34725 = function (board, sda, scl) {
    return new webduino.module.TCS34725(board, sda, scl);
  };

}(window, window.webduino));
