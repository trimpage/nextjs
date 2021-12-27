"use strict";
exports.id = 735;
exports.ids = [735];
exports.modules = {

/***/ 3735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lj": () => (/* binding */ WalletError),
/* harmony export */   "l5": () => (/* binding */ WalletNotFoundError),
/* harmony export */   "Yf": () => (/* binding */ WalletNotInstalledError),
/* harmony export */   "OZ": () => (/* binding */ WalletNotReadyError),
/* harmony export */   "$w": () => (/* binding */ WalletConnectionError),
/* harmony export */   "at": () => (/* binding */ WalletDisconnectedError),
/* harmony export */   "UG": () => (/* binding */ WalletDisconnectionError),
/* harmony export */   "Nx": () => (/* binding */ WalletPublicKeyError),
/* harmony export */   "Db": () => (/* binding */ WalletKeypairError),
/* harmony export */   "oS": () => (/* binding */ WalletNotConnectedError),
/* harmony export */   "IW": () => (/* binding */ WalletSendTransactionError),
/* harmony export */   "fk": () => (/* binding */ WalletSignMessageError),
/* harmony export */   "PY": () => (/* binding */ WalletSignTransactionError),
/* harmony export */   "NK": () => (/* binding */ WalletTimeoutError),
/* harmony export */   "d2": () => (/* binding */ WalletWindowBlockedError),
/* harmony export */   "hd": () => (/* binding */ WalletWindowClosedError)
/* harmony export */ });
/* unused harmony export WalletAccountError */
class WalletError extends Error {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor(message, error) {
    super(message);
    this.error = error;
  }

}
class WalletNotFoundError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotFoundError';
  }

}
class WalletNotInstalledError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotInstalledError';
  }

}
class WalletNotReadyError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotReadyError';
  }

}
class WalletConnectionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletConnectionError';
  }

}
class WalletDisconnectedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletDisconnectedError';
  }

}
class WalletDisconnectionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletDisconnectionError';
  }

}
class WalletAccountError extends (/* unused pure expression or super */ null && (WalletError)) {
  constructor() {
    super(...arguments);
    this.name = 'WalletAccountError';
  }

}
class WalletPublicKeyError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletPublicKeyError';
  }

}
class WalletKeypairError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletKeypairError';
  }

}
class WalletNotConnectedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotConnectedError';
  }

}
class WalletSendTransactionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletSendTransactionError';
  }

}
class WalletSignMessageError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletSignMessageError';
  }

}
class WalletSignTransactionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletSignTransactionError';
  }

}
class WalletTimeoutError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletTimeoutError';
  }

}
class WalletWindowBlockedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletWindowBlockedError';
  }

}
class WalletWindowClosedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletWindowClosedError';
  }

}

/***/ })

};
;