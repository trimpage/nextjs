"use strict";
exports.id = 167;
exports.ids = [167];
exports.modules = {

/***/ 7353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mI": () => (/* binding */ BaseWalletAdapter),
/* harmony export */   "QZ": () => (/* binding */ WalletAdapterNetwork)
/* harmony export */ });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9553);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);


class BaseWalletAdapter extends (eventemitter3__WEBPACK_IMPORTED_MODULE_0___default()) {}
var WalletAdapterNetwork;

(function (WalletAdapterNetwork) {
  WalletAdapterNetwork["Mainnet"] = "mainnet-beta";
  WalletAdapterNetwork["Testnet"] = "testnet";
  WalletAdapterNetwork["Devnet"] = "devnet";
})(WalletAdapterNetwork || (WalletAdapterNetwork = {}));

/***/ }),

/***/ 3708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ pollUntilReady)
/* harmony export */ });
/* unused harmony export poll */
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

function poll(callback, interval, count) {
  if (count > 0) {
    setTimeout(() => __awaiter(this, void 0, void 0, function* () {
      const done = yield callback();
      if (!done) poll(callback, interval, count - 1);
    }), interval);
  }
}
function pollUntilReady(adapter, pollInterval, pollCount) {
  poll(() => {
    const {
      ready
    } = adapter;

    if (ready) {
      if (!adapter.emit('ready')) {
        console.warn(`${adapter.constructor.name} is ready but no listener was registered`);
      }
    }

    return ready;
  }, pollInterval, pollCount);
}

/***/ }),

/***/ 8344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ BaseSignerWalletAdapter),
/* harmony export */   "e": () => (/* binding */ BaseMessageSignerWalletAdapter)
/* harmony export */ });
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7353);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3735);
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



class BaseSignerWalletAdapter extends _adapter__WEBPACK_IMPORTED_MODULE_0__/* .BaseWalletAdapter */ .mI {
  sendTransaction(transaction, connection, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      let emit = true;

      try {
        try {
          transaction.feePayer || (transaction.feePayer = this.publicKey || undefined);
          transaction.recentBlockhash || (transaction.recentBlockhash = (yield connection.getRecentBlockhash('finalized')).blockhash);

          const {
            signers
          } = options,
                sendOptions = __rest(options, ["signers"]);

          (signers === null || signers === void 0 ? void 0 : signers.length) && transaction.partialSign(...signers);
          transaction = yield this.signTransaction(transaction);
          const rawTransaction = transaction.serialize();
          return yield connection.sendRawTransaction(rawTransaction, sendOptions);
        } catch (error) {
          // If the error was thrown by `signTransaction`, rethrow it and don't emit a duplicate event
          if (error instanceof _errors__WEBPACK_IMPORTED_MODULE_1__/* .WalletError */ .lj) {
            emit = false;
            throw error;
          }

          throw new _errors__WEBPACK_IMPORTED_MODULE_1__/* .WalletSendTransactionError */ .IW(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        if (emit) {
          this.emit('error', error);
        }

        throw error;
      }
    });
  }

}
class BaseMessageSignerWalletAdapter extends BaseSignerWalletAdapter {}

/***/ }),

/***/ 7406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* binding */ ConnectionProvider)
});

// EXTERNAL MODULE: external "@solana/web3.js"
var web3_js_ = __webpack_require__(5681);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useConnection.js

const ConnectionContext = /*#__PURE__*/(0,external_react_.createContext)({});
function useConnection() {
  return useContext(ConnectionContext);
}
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react/lib/ConnectionProvider.js



const ConnectionProvider = ({
  children,
  endpoint,
  config = {
    commitment: 'confirmed'
  }
}) => {
  const connection = (0,external_react_.useMemo)(() => new web3_js_.Connection(endpoint, config), [endpoint, config]);
  return /*#__PURE__*/external_react_default().createElement(ConnectionContext.Provider, {
    value: {
      connection
    }
  }, children);
};

/***/ }),

/***/ 4210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* binding */ WalletProvider)
});

// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/errors.js
var errors = __webpack_require__(3735);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react/lib/errors.js

class WalletNotSelectedError extends errors/* WalletError */.lj {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotSelectedError';
  }

}
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useLocalStorage.js

function useLocalStorage(key, defaultState) {
  const {
    0: value,
    1: setValue
  } = (0,external_react_.useState)(() => {
    if (typeof localStorage === 'undefined') return defaultState;
    const value = localStorage.getItem(key);

    try {
      return value ? JSON.parse(value) : defaultState;
    } catch (error) {
      console.warn(error);
      return defaultState;
    }
  });
  const setLocalStorage = (0,external_react_.useCallback)(newValue => {
    if (newValue === value) return;
    setValue(newValue);

    if (newValue === null) {
      localStorage.removeItem(key);
    } else {
      try {
        localStorage.setItem(key, JSON.stringify(newValue));
      } catch (error) {
        console.error(error);
      }
    }
  }, [value, setValue, key]);
  return [value, setLocalStorage];
}
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useWallet.js
var useWallet = __webpack_require__(67);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react/lib/WalletProvider.js
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};






const initialState = {
  wallet: null,
  adapter: null,
  ready: false,
  publicKey: null,
  connected: false
};
const WalletProvider = ({
  children,
  wallets,
  autoConnect = false,
  onError: _onError = error => console.error(error),
  localStorageKey = 'walletName'
}) => {
  const [name, setName] = useLocalStorage(localStorageKey, null);
  const {
    0: {
      wallet,
      adapter,
      ready,
      publicKey,
      connected
    },
    1: setState
  } = (0,external_react_.useState)(initialState);
  const {
    0: connecting,
    1: setConnecting
  } = (0,external_react_.useState)(false);
  const {
    0: disconnecting,
    1: setDisconnecting
  } = (0,external_react_.useState)(false);
  const isConnecting = (0,external_react_.useRef)(false);
  const isDisconnecting = (0,external_react_.useRef)(false);
  const isUnloading = (0,external_react_.useRef)(false); // Map of wallet names to wallets

  const walletsByName = (0,external_react_.useMemo)(() => wallets.reduce((walletsByName, wallet) => {
    walletsByName[wallet.name] = wallet;
    return walletsByName;
  }, {}), [wallets]); // When the selected wallet changes, initialize the state

  (0,external_react_.useEffect)(() => {
    const wallet = name && walletsByName[name] || null;
    const adapter = wallet && wallet.adapter();

    if (adapter) {
      const {
        ready,
        publicKey,
        connected
      } = adapter;
      setState({
        wallet,
        adapter,
        connected,
        publicKey,
        ready
      });
    } else {
      setState(initialState);
    }
  }, [name, walletsByName, setState]); // If autoConnect is enabled, try to connect when the adapter changes and is ready

  (0,external_react_.useEffect)(() => {
    if (isConnecting.current || connecting || connected || !autoConnect || !adapter || !ready) return;

    (function () {
      return __awaiter(this, void 0, void 0, function* () {
        isConnecting.current = true;
        setConnecting(true);

        try {
          yield adapter.connect();
        } catch (error) {
          // Clear the selected wallet
          setName(null); // Don't throw error, but onError will still be called
        } finally {
          setConnecting(false);
          isConnecting.current = false;
        }
      });
    })();
  }, [isConnecting, connecting, connected, autoConnect, adapter, ready, setConnecting, setName]); // If the window is closing or reloading, ignore disconnect and error events from the adapter

  (0,external_react_.useEffect)(() => {
    function listener() {
      isUnloading.current = true;
    }

    window.addEventListener('beforeunload', listener);
    return () => window.removeEventListener('beforeunload', listener);
  }, [isUnloading]); // Select a wallet by name

  const select = (0,external_react_.useCallback)(newName => __awaiter(void 0, void 0, void 0, function* () {
    if (name === newName) return;
    if (adapter) yield adapter.disconnect();
    setName(newName);
  }), [name, adapter, setName]); // Handle the adapter's ready event

  const onReady = (0,external_react_.useCallback)(() => setState(state => Object.assign(Object.assign({}, state), {
    ready: true
  })), [setState]); // Handle the adapter's connect event

  const onConnect = (0,external_react_.useCallback)(() => {
    if (!adapter) return;
    const {
      connected,
      publicKey,
      ready
    } = adapter;
    setState(state => Object.assign(Object.assign({}, state), {
      connected,
      publicKey,
      ready
    }));
  }, [adapter, setState]); // Handle the adapter's disconnect event

  const onDisconnect = (0,external_react_.useCallback)(() => {
    // Clear the selected wallet unless the window is unloading
    if (!isUnloading.current) setName(null);
  }, [isUnloading, setName]); // Handle the adapter's error event, and local errors

  const onError = (0,external_react_.useCallback)(error => {
    // Call the provided error handler unless the window is unloading
    if (!isUnloading.current) _onError(error);
    return error;
  }, [isUnloading, _onError]); // Connect the adapter to the wallet

  const connect = (0,external_react_.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
    if (isConnecting.current || connecting || disconnecting || connected) return;
    if (!wallet || !adapter) throw onError(new WalletNotSelectedError());

    if (!ready) {
      // Clear the selected wallet
      setName(null);

      if (false) {}

      throw onError(new errors/* WalletNotReadyError */.OZ());
    }

    isConnecting.current = true;
    setConnecting(true);

    try {
      yield adapter.connect();
    } catch (error) {
      // Clear the selected wallet
      setName(null); // Rethrow the error, and onError will also be called

      throw error;
    } finally {
      setConnecting(false);
      isConnecting.current = false;
    }
  }), [isConnecting, connecting, disconnecting, connected, wallet, adapter, onError, ready, setConnecting, setName]); // Disconnect the adapter from the wallet

  const disconnect = (0,external_react_.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
    if (isDisconnecting.current || disconnecting) return;
    if (!adapter) return setName(null);
    isDisconnecting.current = true;
    setDisconnecting(true);

    try {
      yield adapter.disconnect();
    } catch (error) {
      // Clear the selected wallet
      setName(null); // Rethrow the error, and onError will also be called

      throw error;
    } finally {
      setDisconnecting(false);
      isDisconnecting.current = false;
    }
  }), [isDisconnecting, disconnecting, adapter, setDisconnecting, setName]); // Send a transaction using the provided connection

  const sendTransaction = (0,external_react_.useCallback)((transaction, connection, options) => __awaiter(void 0, void 0, void 0, function* () {
    if (!adapter) throw onError(new WalletNotSelectedError());
    if (!connected) throw onError(new errors/* WalletNotConnectedError */.oS());
    return yield adapter.sendTransaction(transaction, connection, options);
  }), [adapter, onError, connected]); // Sign a transaction if the wallet supports it

  const signTransaction = (0,external_react_.useMemo)(() => adapter && 'signTransaction' in adapter ? transaction => __awaiter(void 0, void 0, void 0, function* () {
    if (!connected) throw onError(new errors/* WalletNotConnectedError */.oS());
    return yield adapter.signTransaction(transaction);
  }) : undefined, [adapter, onError, connected]); // Sign multiple transactions if the wallet supports it

  const signAllTransactions = (0,external_react_.useMemo)(() => adapter && 'signAllTransactions' in adapter ? transactions => __awaiter(void 0, void 0, void 0, function* () {
    if (!connected) throw onError(new errors/* WalletNotConnectedError */.oS());
    return yield adapter.signAllTransactions(transactions);
  }) : undefined, [adapter, onError, connected]); // Sign an arbitrary message if the wallet supports it

  const signMessage = (0,external_react_.useMemo)(() => adapter && 'signMessage' in adapter ? message => __awaiter(void 0, void 0, void 0, function* () {
    if (!connected) throw onError(new errors/* WalletNotConnectedError */.oS());
    return yield adapter.signMessage(message);
  }) : undefined, [adapter, onError, connected]); // Setup and teardown event listeners when the adapter changes

  (0,external_react_.useEffect)(() => {
    if (adapter) {
      adapter.on('ready', onReady);
      adapter.on('connect', onConnect);
      adapter.on('disconnect', onDisconnect);
      adapter.on('error', onError);
      return () => {
        adapter.off('ready', onReady);
        adapter.off('connect', onConnect);
        adapter.off('disconnect', onDisconnect);
        adapter.off('error', onError);
      };
    }
  }, [adapter, onReady, onConnect, onDisconnect, onError]);
  return /*#__PURE__*/external_react_default().createElement(useWallet/* WalletContext.Provider */.z.Provider, {
    value: {
      wallets,
      autoConnect,
      wallet,
      adapter,
      publicKey,
      ready,
      connected,
      connecting,
      disconnecting,
      select,
      connect,
      disconnect,
      sendTransaction,
      signTransaction,
      signAllTransactions,
      signMessage
    }
  }, children);
};

/***/ }),

/***/ 1817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* binding */ SolletWalletAdapter)
});

// EXTERNAL MODULE: external "eventemitter3"
var external_eventemitter3_ = __webpack_require__(9553);
var external_eventemitter3_default = /*#__PURE__*/__webpack_require__.n(external_eventemitter3_);
// EXTERNAL MODULE: external "@solana/web3.js"
var web3_js_ = __webpack_require__(5681);
// EXTERNAL MODULE: external "bs58"
var external_bs58_ = __webpack_require__(2815);
var external_bs58_default = /*#__PURE__*/__webpack_require__.n(external_bs58_);
;// CONCATENATED MODULE: ./node_modules/@project-serum/sol-wallet-adapter/dist/cjs/index.js
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};





var Wallet = function (_super) {
  __extends(Wallet, _super);

  function Wallet(provider, _network) {
    var _this = _super.call(this) || this;

    _this._network = _network;
    _this._publicKey = null;
    _this._popup = null;
    _this._handlerAdded = false;
    _this._nextRequestId = 1;
    _this._autoApprove = false;
    _this._responsePromises = new Map();

    _this.handleMessage = function (e) {
      var _a;

      if (_this._injectedProvider && e.source === window || e.origin === ((_a = _this._providerUrl) === null || _a === void 0 ? void 0 : _a.origin) && e.source === _this._popup) {
        if (e.data.method === 'connected') {
          var newPublicKey = new web3_js_.PublicKey(e.data.params.publicKey);

          if (!_this._publicKey || !_this._publicKey.equals(newPublicKey)) {
            if (_this._publicKey && !_this._publicKey.equals(newPublicKey)) {
              _this.handleDisconnect();
            }

            _this._publicKey = newPublicKey;
            _this._autoApprove = !!e.data.params.autoApprove;

            _this.emit('connect', _this._publicKey);
          }
        } else if (e.data.method === 'disconnected') {
          _this.handleDisconnect();
        } else if (e.data.result || e.data.error) {
          var promises = _this._responsePromises.get(e.data.id);

          if (promises) {
            var _b = __read(promises, 2),
                resolve = _b[0],
                reject = _b[1];

            if (e.data.result) {
              resolve(e.data.result);
            } else {
              reject(new Error(e.data.error));
            }
          }
        }
      }
    };

    _this._beforeUnload = function () {
      void _this.disconnect();
    };

    if (isInjectedProvider(provider)) {
      _this._injectedProvider = provider;
    } else if (isString(provider)) {
      _this._providerUrl = new URL(provider);
      _this._providerUrl.hash = new URLSearchParams({
        origin: window.location.origin,
        network: _this._network
      }).toString();
    } else {
      throw new Error('provider parameter must be an injected provider or a URL string.');
    }

    return _this;
  }

  Wallet.prototype.handleConnect = function () {
    var _this = this;

    var _a;

    if (!this._handlerAdded) {
      this._handlerAdded = true;
      window.addEventListener('message', this.handleMessage);
      window.addEventListener('beforeunload', this._beforeUnload);
    }

    if (this._injectedProvider) {
      return new Promise(function (resolve) {
        void _this.sendRequest('connect', {});
        resolve();
      });
    } else {
      window.name = 'parent';
      this._popup = window.open((_a = this._providerUrl) === null || _a === void 0 ? void 0 : _a.toString(), '_blank', 'location,resizable,width=460,height=675');
      return new Promise(function (resolve) {
        _this.once('connect', resolve);
      });
    }
  };

  Wallet.prototype.handleDisconnect = function () {
    var _this = this;

    if (this._handlerAdded) {
      this._handlerAdded = false;
      window.removeEventListener('message', this.handleMessage);
      window.removeEventListener('beforeunload', this._beforeUnload);
    }

    if (this._publicKey) {
      this._publicKey = null;
      this.emit('disconnect');
    }

    this._responsePromises.forEach(function (_a, id) {
      var _b = __read(_a, 2),
          reject = _b[1];

      _this._responsePromises.delete(id);

      reject(new Error('Wallet disconnected'));
    });
  };

  Wallet.prototype.sendRequest = function (method, params) {
    return __awaiter(this, void 0, void 0, function () {
      var requestId;

      var _this = this;

      return __generator(this, function (_a) {
        if (method !== 'connect' && !this.connected) {
          throw new Error('Wallet not connected');
        }

        requestId = this._nextRequestId;
        ++this._nextRequestId;
        return [2
        /*return*/
        , new Promise(function (resolve, reject) {
          var _a, _b, _c, _d;

          _this._responsePromises.set(requestId, [resolve, reject]);

          if (_this._injectedProvider) {
            _this._injectedProvider.postMessage({
              jsonrpc: '2.0',
              id: requestId,
              method: method,
              params: __assign({
                network: _this._network
              }, params)
            });
          } else {
            (_a = _this._popup) === null || _a === void 0 ? void 0 : _a.postMessage({
              jsonrpc: '2.0',
              id: requestId,
              method: method,
              params: params
            }, (_c = (_b = _this._providerUrl) === null || _b === void 0 ? void 0 : _b.origin) !== null && _c !== void 0 ? _c : '');

            if (!_this.autoApprove) {
              (_d = _this._popup) === null || _d === void 0 ? void 0 : _d.focus();
            }
          }
        })];
      });
    });
  };

  Object.defineProperty(Wallet.prototype, "publicKey", {
    get: function () {
      return this._publicKey;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Wallet.prototype, "connected", {
    get: function () {
      return this._publicKey !== null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Wallet.prototype, "autoApprove", {
    get: function () {
      return this._autoApprove;
    },
    enumerable: false,
    configurable: true
  });

  Wallet.prototype.connect = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (this._popup) {
              this._popup.close();
            }

            return [4
            /*yield*/
            , this.handleConnect()];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Wallet.prototype.disconnect = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!this._injectedProvider) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , this.sendRequest('disconnect', {})];

          case 1:
            _a.sent();

            _a.label = 2;

          case 2:
            if (this._popup) {
              this._popup.close();
            }

            this.handleDisconnect();
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Wallet.prototype.sign = function (data, display) {
    return __awaiter(this, void 0, void 0, function () {
      var response, signature, publicKey;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!(data instanceof Uint8Array)) {
              throw new Error('Data must be an instance of Uint8Array');
            }

            return [4
            /*yield*/
            , this.sendRequest('sign', {
              data: data,
              display: display
            })];

          case 1:
            response = _a.sent();
            signature = external_bs58_default().decode(response.signature);
            publicKey = new web3_js_.PublicKey(response.publicKey);
            return [2
            /*return*/
            , {
              signature: signature,
              publicKey: publicKey
            }];
        }
      });
    });
  };

  Wallet.prototype.signTransaction = function (transaction) {
    return __awaiter(this, void 0, void 0, function () {
      var response, signature, publicKey;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.sendRequest('signTransaction', {
              message: external_bs58_default().encode(transaction.serializeMessage())
            })];

          case 1:
            response = _a.sent();
            signature = external_bs58_default().decode(response.signature);
            publicKey = new web3_js_.PublicKey(response.publicKey);
            transaction.addSignature(publicKey, signature);
            return [2
            /*return*/
            , transaction];
        }
      });
    });
  };

  Wallet.prototype.signAllTransactions = function (transactions) {
    return __awaiter(this, void 0, void 0, function () {
      var response, signatures, publicKey;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.sendRequest('signAllTransactions', {
              messages: transactions.map(function (tx) {
                return external_bs58_default().encode(tx.serializeMessage());
              })
            })];

          case 1:
            response = _a.sent();
            signatures = response.signatures.map(function (s) {
              return external_bs58_default().decode(s);
            });
            publicKey = new web3_js_.PublicKey(response.publicKey);
            transactions = transactions.map(function (tx, idx) {
              tx.addSignature(publicKey, signatures[idx]);
              return tx;
            });
            return [2
            /*return*/
            , transactions];
        }
      });
    });
  };

  Wallet.prototype.diffieHellman = function (publicKey) {
    return __awaiter(this, void 0, void 0, function () {
      var response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!(publicKey instanceof Uint8Array)) {
              throw new Error('Data must be an instance of Uint8Array');
            }

            return [4
            /*yield*/
            , this.sendRequest('diffieHellman', {
              publicKey: publicKey
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , response];
        }
      });
    });
  };

  return Wallet;
}((external_eventemitter3_default()));

/* harmony default export */ const cjs = (Wallet);

function isString(a) {
  return typeof a === 'string';
}

function isInjectedProvider(a) {
  return isObject(a) && 'postMessage' in a && typeof a.postMessage === 'function';
}

function isObject(a) {
  return typeof a === 'object' && a !== null;
}
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/signer.js
var signer = __webpack_require__(8344);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/errors.js
var errors = __webpack_require__(3735);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/adapter.js
var adapter = __webpack_require__(7353);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/poll.js
var poll = __webpack_require__(3708);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-sollet/lib/adapter.js
var adapter_awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};



class SolletWalletAdapter extends signer/* BaseMessageSignerWalletAdapter */.e {
  constructor(config = {}) {
    super();

    this._disconnected = () => {
      const wallet = this._wallet;

      if (wallet) {
        wallet.off('disconnect', this._disconnected);
        this._wallet = null;
        this.emit('error', new errors/* WalletDisconnectedError */.at());
        this.emit('disconnect');
      }
    };

    this._provider = config.provider || ( true ? undefined : 0);
    this._network = config.network || adapter/* WalletAdapterNetwork.Mainnet */.QZ.Mainnet;
    this._connecting = false;
    this._wallet = null;
    if (!this.ready) (0,poll/* pollUntilReady */._)(this, config.pollInterval || 1000, config.pollCount || 3);
  }

  get publicKey() {
    var _a;

    return ((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.publicKey) || null;
  }

  get ready() {
    var _a;

    return typeof this._provider === 'string' ||  false && 0;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    var _a;

    return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.connected);
  }

  connect() {
    return adapter_awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        const provider = this._provider ||  false && 0;
        if (!provider) throw new errors/* WalletNotFoundError */.l5();
        let wallet;

        try {
          wallet = new cjs(provider, this._network); // HACK: sol-wallet-adapter doesn't reject or emit an event if the popup or extension is closed or blocked

          const handleDisconnect = wallet.handleDisconnect;
          let timeout;
          let interval;

          try {
            yield new Promise((resolve, reject) => {
              const connect = () => {
                if (timeout) clearTimeout(timeout);
                wallet.off('connect', connect);
                resolve();
              };

              wallet.handleDisconnect = (...args) => {
                wallet.off('connect', connect);
                reject(new errors/* WalletWindowClosedError */.hd());
                return handleDisconnect.apply(wallet, args);
              };

              wallet.on('connect', connect);
              wallet.connect().catch(reason => {
                wallet.off('connect', connect);
                reject(reason);
              });

              if (typeof provider === 'string') {
                let count = 0;
                interval = setInterval(() => {
                  const popup = wallet._popup;

                  if (popup) {
                    if (popup.closed) reject(new errors/* WalletWindowClosedError */.hd());
                  } else {
                    if (count > 50) reject(new errors/* WalletWindowBlockedError */.d2());
                  }

                  count++;
                }, 100);
              } else {
                // HACK: sol-wallet-adapter doesn't reject or emit an event if the extension is closed or ignored
                timeout = setTimeout(() => reject(new errors/* WalletTimeoutError */.NK()), 10000);
              }
            });
          } finally {
            wallet.handleDisconnect = handleDisconnect;
            if (interval) clearInterval(interval);
          }
        } catch (error) {
          if (error instanceof errors/* WalletError */.lj) throw error;
          throw new errors/* WalletConnectionError */.$w(error === null || error === void 0 ? void 0 : error.message, error);
        }

        wallet.on('disconnect', this._disconnected);
        this._wallet = wallet;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return adapter_awaiter(this, void 0, void 0, function* () {
      const wallet = this._wallet;

      if (wallet) {
        wallet.off('disconnect', this._disconnected);
        this._wallet = null; // HACK: sol-wallet-adapter doesn't reliably fulfill its promise or emit an event on disconnect

        const handleDisconnect = wallet.handleDisconnect;

        try {
          yield new Promise((resolve, reject) => {
            const timeout = setTimeout(() => resolve(), 250);

            wallet.handleDisconnect = (...args) => {
              clearTimeout(timeout);
              resolve(); // HACK: sol-wallet-adapter rejects with an uncaught promise error

              wallet._responsePromises = new Map();
              return handleDisconnect.apply(wallet, args);
            };

            wallet.disconnect().then(() => {
              clearTimeout(timeout);
              resolve();
            }, error => {
              clearTimeout(timeout); // HACK: sol-wallet-adapter rejects with an error on disconnect

              if ((error === null || error === void 0 ? void 0 : error.message) === 'Wallet disconnected') {
                resolve();
              } else {
                reject(error);
              }
            });
          });
        } catch (error) {
          this.emit('error', new errors/* WalletDisconnectionError */.UG(error === null || error === void 0 ? void 0 : error.message, error));
        } finally {
          wallet.handleDisconnect = handleDisconnect;
        }
      }

      this.emit('disconnect');
    });
  }

  signTransaction(transaction) {
    return adapter_awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new errors/* WalletNotConnectedError */.oS();

        try {
          return (yield wallet.signTransaction(transaction)) || transaction;
        } catch (error) {
          throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return adapter_awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new errors/* WalletNotConnectedError */.oS();

        try {
          return (yield wallet.signAllTransactions(transactions)) || transactions;
        } catch (error) {
          throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signMessage(message) {
    return adapter_awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new errors/* WalletNotConnectedError */.oS();

        try {
          const {
            signature
          } = yield wallet.sign(message, 'utf8');
          return Uint8Array.from(signature);
        } catch (error) {
          throw new errors/* WalletSignMessageError */.fk(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}

/***/ }),

/***/ 7314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* binding */ getLedgerWallet)
});

// EXTERNAL MODULE: external "@ledgerhq/hw-transport-webhid"
var hw_transport_webhid_ = __webpack_require__(6631);
var hw_transport_webhid_default = /*#__PURE__*/__webpack_require__.n(hw_transport_webhid_);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/signer.js
var signer = __webpack_require__(8344);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/errors.js
var errors = __webpack_require__(3735);
// EXTERNAL MODULE: external "@ledgerhq/hw-transport"
var hw_transport_ = __webpack_require__(1492);
// EXTERNAL MODULE: external "@solana/web3.js"
var web3_js_ = __webpack_require__(5681);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-ledger/lib/util.js
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};



function getDerivationPath(account, change) {
  const length = account !== undefined ? change === undefined ? 3 : 4 : 2;
  const derivationPath = Buffer.alloc(1 + length * 4);
  let offset = derivationPath.writeUInt8(length, 0);
  offset = derivationPath.writeUInt32BE(harden(44), offset); // Using BIP44

  offset = derivationPath.writeUInt32BE(harden(501), offset); // Solana's BIP44 path

  if (account !== undefined) {
    offset = derivationPath.writeUInt32BE(harden(account), offset);

    if (change !== undefined) {
      derivationPath.writeUInt32BE(harden(change), offset);
    }
  }

  return derivationPath;
}
const BIP32_HARDENED_BIT = 1 << 31 >>> 0;

function harden(n) {
  return (n | BIP32_HARDENED_BIT) >>> 0;
}

const INS_GET_PUBKEY = 0x05;
const INS_SIGN_MESSAGE = 0x06;
const P1_NON_CONFIRM = 0x00;
const P1_CONFIRM = 0x01;
const P2_EXTEND = 0x01;
const P2_MORE = 0x02;
const MAX_PAYLOAD = 255;
const LEDGER_CLA = 0xe0;
function getPublicKey(transport, derivationPath) {
  return __awaiter(this, void 0, void 0, function* () {
    const bytes = yield send(transport, INS_GET_PUBKEY, P1_NON_CONFIRM, derivationPath);
    return new web3_js_.PublicKey(bytes);
  });
}
function signTransaction(transport, transaction, derivationPath) {
  return __awaiter(this, void 0, void 0, function* () {
    const paths = Buffer.alloc(1);
    paths.writeUInt8(1, 0);
    const message = transaction.serializeMessage();
    const data = Buffer.concat([paths, derivationPath, message]);
    return yield send(transport, INS_SIGN_MESSAGE, P1_CONFIRM, data);
  });
}

function send(transport, instruction, p1, data) {
  return __awaiter(this, void 0, void 0, function* () {
    let p2 = 0;
    let offset = 0;

    if (data.length > MAX_PAYLOAD) {
      while (data.length - offset > MAX_PAYLOAD) {
        const buffer = data.slice(offset, offset + MAX_PAYLOAD);
        const response = yield transport.send(LEDGER_CLA, instruction, p1, p2 | P2_MORE, buffer); // @ts-ignore

        if (response.length !== 2) throw new hw_transport_.TransportStatusError(hw_transport_.StatusCodes.INCORRECT_DATA);
        p2 |= P2_EXTEND;
        offset += MAX_PAYLOAD;
      }
    }

    const buffer = data.slice(offset);
    const response = yield transport.send(LEDGER_CLA, instruction, p1, p2, buffer);
    return response.slice(0, response.length - 2);
  });
}
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-ledger/lib/adapter.js
var adapter_awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};




class LedgerWalletAdapter extends signer/* BaseSignerWalletAdapter */.s {
  constructor(config = {}) {
    super();

    this._disconnected = () => {
      const transport = this._transport;

      if (transport) {
        transport.off('disconnect', this._disconnected);
        this._transport = null;
        this._publicKey = null;
        this.emit('error', new errors/* WalletDisconnectedError */.at());
        this.emit('disconnect');
      }
    };

    this._derivationPath = config.derivationPath || getDerivationPath(0, 0);
    this._connecting = false;
    this._transport = null;
    this._publicKey = null;
  }

  get publicKey() {
    return this._publicKey;
  }

  get ready() {
    return  false && 0;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    return !!this._transport;
  }

  connect() {
    return adapter_awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        let transport;

        try {
          transport = yield hw_transport_webhid_default().create();
        } catch (error) {
          throw new errors/* WalletConnectionError */.$w(error === null || error === void 0 ? void 0 : error.message, error);
        }

        let publicKey;

        try {
          publicKey = yield getPublicKey(transport, this._derivationPath);
        } catch (error) {
          throw new errors/* WalletPublicKeyError */.Nx(error === null || error === void 0 ? void 0 : error.message, error);
        }

        transport.on('disconnect', this._disconnected);
        this._transport = transport;
        this._publicKey = publicKey;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return adapter_awaiter(this, void 0, void 0, function* () {
      const transport = this._transport;

      if (transport) {
        transport.off('disconnect', this._disconnected);
        this._transport = null;
        this._publicKey = null;

        try {
          yield transport.close();
        } catch (error) {
          this.emit('error', new errors/* WalletDisconnectionError */.UG(error === null || error === void 0 ? void 0 : error.message, error));
        }
      }

      this.emit('disconnect');
    });
  }

  signTransaction(transaction) {
    return adapter_awaiter(this, void 0, void 0, function* () {
      try {
        const transport = this._transport;
        const publicKey = this._publicKey;
        if (!transport || !publicKey) throw new errors/* WalletNotConnectedError */.oS();

        try {
          const signature = yield signTransaction(transport, transaction, this._derivationPath);
          transaction.addSignature(publicKey, signature);
        } catch (error) {
          throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
        }

        return transaction;
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return adapter_awaiter(this, void 0, void 0, function* () {
      try {
        const transport = this._transport;
        const publicKey = this._publicKey;
        if (!transport || !publicKey) throw new errors/* WalletNotConnectedError */.oS();

        try {
          const derivationPath = this._derivationPath;

          for (const transaction of transactions) {
            const signature = yield signTransaction(transport, transaction, derivationPath);
            transaction.addSignature(publicKey, signature);
          }
        } catch (error) {
          throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
        }

        return transactions;
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-wallets/lib/types.js
var types = __webpack_require__(3342);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-wallets/lib/ledger.js


const getLedgerWallet = (config = {}) => ({
  name: types/* WalletName.Ledger */.w.Ledger,
  url: 'https://ledger.com',
  icon: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzUgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0ibTIzLjU4OCAwaC0xNnYyMS41ODNoMjEuNnYtMTZhNS41ODUgNS41ODUgMCAwIDAgLTUuNi01LjU4M3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuNzM5KSIvPjxwYXRoIGQ9Im04LjM0MiAwaC0yLjc1N2E1LjU4NSA1LjU4NSAwIDAgMCAtNS41ODUgNS41ODV2Mi43NTdoOC4zNDJ6Ii8+PHBhdGggZD0ibTAgNy41OWg4LjM0MnY4LjM0MmgtOC4zNDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDUuNzM5KSIvPjxwYXRoIGQ9Im0xNS4xOCAyMy40NTFoMi43NTdhNS41ODUgNS41ODUgMCAwIDAgNS41ODUtNS42di0yLjY3MWgtOC4zNDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMS40NzggMTEuNDc4KSIvPjxwYXRoIGQ9Im03LjU5IDE1LjE4aDguMzQydjguMzQyaC04LjM0MnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuNzM5IDExLjQ3OCkiLz48cGF0aCBkPSJtMCAxNS4xOHYyLjc1N2E1LjU4NSA1LjU4NSAwIDAgMCA1LjU4NSA1LjU4NWgyLjc1N3YtOC4zNDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDExLjQ3OCkiLz48L2c+PC9zdmc+',
  adapter: () => new LedgerWalletAdapter(config)
});

/***/ }),

/***/ 5030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "y": () => (/* binding */ getPhantomWallet)
});

// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/signer.js
var signer = __webpack_require__(8344);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/errors.js
var errors = __webpack_require__(3735);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/poll.js
var poll = __webpack_require__(3708);
// EXTERNAL MODULE: external "@solana/web3.js"
var web3_js_ = __webpack_require__(5681);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-phantom/lib/adapter.js
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};



class PhantomWalletAdapter extends signer/* BaseMessageSignerWalletAdapter */.e {
  constructor(config = {}) {
    super();

    this._disconnected = () => {
      const wallet = this._wallet;

      if (wallet) {
        wallet.off('disconnect', this._disconnected);
        this._wallet = null;
        this._publicKey = null;
        this.emit('error', new errors/* WalletDisconnectedError */.at());
        this.emit('disconnect');
      }
    };

    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (!this.ready) (0,poll/* pollUntilReady */._)(this, config.pollInterval || 1000, config.pollCount || 3);
  }

  get publicKey() {
    return this._publicKey;
  }

  get ready() {
    var _a;

    return  false && 0;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    var _a;

    return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.isConnected);
  }

  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        const wallet =  false && 0;
        if (!wallet) throw new errors/* WalletNotFoundError */.l5();
        if (!wallet.isPhantom) throw new errors/* WalletNotInstalledError */.Yf();

        if (!wallet.isConnected) {
          // HACK: Phantom doesn't reject or emit an event if the popup is closed
          const handleDisconnect = wallet._handleDisconnect;

          try {
            yield new Promise((resolve, reject) => {
              const connect = () => {
                wallet.off('connect', connect);
                resolve();
              };

              wallet._handleDisconnect = (...args) => {
                wallet.off('connect', connect);
                reject(new errors/* WalletWindowClosedError */.hd());
                return handleDisconnect.apply(wallet, args);
              };

              wallet.on('connect', connect);
              wallet.connect().catch(reason => {
                wallet.off('connect', connect);
                reject(reason);
              });
            });
          } catch (error) {
            if (error instanceof errors/* WalletError */.lj) throw error;
            throw new errors/* WalletConnectionError */.$w(error === null || error === void 0 ? void 0 : error.message, error);
          } finally {
            wallet._handleDisconnect = handleDisconnect;
          }
        }

        if (!wallet.publicKey) throw new errors/* WalletConnectionError */.$w();
        let publicKey;

        try {
          publicKey = new web3_js_.PublicKey(wallet.publicKey.toBytes());
        } catch (error) {
          throw new errors/* WalletPublicKeyError */.Nx(error === null || error === void 0 ? void 0 : error.message, error);
        }

        wallet.on('disconnect', this._disconnected);
        this._wallet = wallet;
        this._publicKey = publicKey;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      const wallet = this._wallet;

      if (wallet) {
        wallet.off('disconnect', this._disconnected);
        this._wallet = null;
        this._publicKey = null;

        try {
          yield wallet.disconnect();
        } catch (error) {
          this.emit('error', new errors/* WalletDisconnectionError */.UG(error === null || error === void 0 ? void 0 : error.message, error));
        }
      }

      this.emit('disconnect');
    });
  }

  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new errors/* WalletNotConnectedError */.oS();

        try {
          return (yield wallet.signTransaction(transaction)) || transaction;
        } catch (error) {
          throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new errors/* WalletNotConnectedError */.oS();

        try {
          return (yield wallet.signAllTransactions(transactions)) || transactions;
        } catch (error) {
          throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signMessage(message) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new errors/* WalletNotConnectedError */.oS();

        try {
          const {
            signature
          } = yield wallet.signMessage(message);
          return Uint8Array.from(signature);
        } catch (error) {
          throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-wallets/lib/types.js
var types = __webpack_require__(3342);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-wallets/lib/phantom.js


const getPhantomWallet = (config = {}) => ({
  name: types/* WalletName.Phantom */.w.Phantom,
  url: 'https://phantom.app',
  icon: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjM0IiB3aWR0aD0iMzQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iLjUiIHgyPSIuNSIgeTE9IjAiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1MzRiYjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1NTFiZjkiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9Ii41IiB4Mj0iLjUiIHkxPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii44MiIvPjwvbGluZWFyR3JhZGllbnQ+PGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgZmlsbD0idXJsKCNhKSIgcj0iMTciLz48cGF0aCBkPSJtMjkuMTcwMiAxNy4yMDcxaC0yLjk5NjljMC02LjEwNzQtNC45NjgzLTExLjA1ODE3LTExLjA5NzUtMTEuMDU4MTctNi4wNTMyNSAwLTEwLjk3NDYzIDQuODI5NTctMTEuMDk1MDggMTAuODMyMzctLjEyNDYxIDYuMjA1IDUuNzE3NTIgMTEuNTkzMiAxMS45NDUzOCAxMS41OTMyaC43ODM0YzUuNDkwNiAwIDEyLjg0OTctNC4yODI5IDEzLjk5OTUtOS41MDEzLjIxMjMtLjk2MTktLjU1MDItMS44NjYxLTEuNTM4OC0xLjg2NjF6bS0xOC41NDc5LjI3MjFjMCAuODE2Ny0uNjcwMzggMS40ODQ3LTEuNDkwMDEgMS40ODQ3LS44MTk2NCAwLTEuNDg5OTgtLjY2ODMtMS40ODk5OC0xLjQ4NDd2LTIuNDAxOWMwLS44MTY3LjY3MDM0LTEuNDg0NyAxLjQ4OTk4LTEuNDg0Ny44MTk2MyAwIDEuNDkwMDEuNjY4IDEuNDkwMDEgMS40ODQ3em01LjE3MzggMGMwIC44MTY3LS42NzAzIDEuNDg0Ny0xLjQ4OTkgMS40ODQ3LS44MTk3IDAtMS40OS0uNjY4My0xLjQ5LTEuNDg0N3YtMi40MDE5YzAtLjgxNjcuNjcwNi0xLjQ4NDcgMS40OS0xLjQ4NDcuODE5NiAwIDEuNDg5OS42NjggMS40ODk5IDEuNDg0N3oiIGZpbGw9InVybCgjYikiLz48L3N2Zz4K',
  adapter: () => new PhantomWalletAdapter(config)
});

/***/ }),

/***/ 9560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* binding */ getSlopeWallet)
});

// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/signer.js
var signer = __webpack_require__(8344);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/poll.js
var poll = __webpack_require__(3708);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/errors.js
var errors = __webpack_require__(3735);
// EXTERNAL MODULE: external "@solana/web3.js"
var web3_js_ = __webpack_require__(5681);
// EXTERNAL MODULE: external "bs58"
var external_bs58_ = __webpack_require__(2815);
var external_bs58_default = /*#__PURE__*/__webpack_require__.n(external_bs58_);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-slope/lib/adapter.js
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};




class SlopeWalletAdapter extends signer/* BaseMessageSignerWalletAdapter */.e {
  constructor(config = {}) {
    super();
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (!this.ready) (0,poll/* pollUntilReady */._)(this, config.pollInterval || 1000, config.pollCount || 3);
  }

  get publicKey() {
    return this._publicKey;
  }

  get ready() {
    return  false && 0;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    return !!this._publicKey;
  }

  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        if (!window.Slope) throw new errors/* WalletNotFoundError */.l5();
        const wallet = new window.Slope();
        let account;

        try {
          const {
            data
          } = yield wallet.connect();
          if (!data.publicKey) throw new errors/* WalletConnectionError */.$w();
          account = data.publicKey;
        } catch (error) {
          if (error instanceof errors/* WalletError */.lj) throw error;
          throw new errors/* WalletConnectionError */.$w(error === null || error === void 0 ? void 0 : error.message, error);
        }

        let publicKey;

        try {
          publicKey = new web3_js_.PublicKey(account);
        } catch (error) {
          throw new errors/* WalletPublicKeyError */.Nx(error === null || error === void 0 ? void 0 : error.message, error);
        }

        this._wallet = wallet;
        this._publicKey = publicKey;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      const wallet = this._wallet;

      if (wallet) {
        this._wallet = null;
        this._publicKey = null;

        try {
          const {
            msg
          } = yield wallet.disconnect();
          if (msg !== 'ok') throw new errors/* WalletDisconnectionError */.UG(msg);
        } catch (error) {
          if (!(error instanceof errors/* WalletError */.lj)) {
            // eslint-disable-next-line no-ex-assign
            error = new errors/* WalletDisconnectionError */.UG(error === null || error === void 0 ? void 0 : error.message, error);
          }

          this.emit('error', error);
        }
      }

      this.emit('disconnect');
    });
  }

  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new errors/* WalletNotConnectedError */.oS();

        try {
          const message = external_bs58_default().encode(transaction.serializeMessage());
          const {
            msg,
            data
          } = yield wallet.signTransaction(message);
          if (!data.publicKey || !data.signature) throw new errors/* WalletSignTransactionError */.PY(msg);
          const publicKey = new web3_js_.PublicKey(data.publicKey);
          const signature = external_bs58_default().decode(data.signature);
          transaction.addSignature(publicKey, signature);
          return transaction;
        } catch (error) {
          if (error instanceof errors/* WalletError */.lj) throw error;
          throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    var _a;

    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new errors/* WalletNotConnectedError */.oS();

        try {
          const messages = transactions.map(transaction => external_bs58_default().encode(transaction.serializeMessage()));
          const {
            msg,
            data
          } = yield wallet.signAllTransactions(messages);
          const length = transactions.length;
          if (!data.publicKey || ((_a = data.signatures) === null || _a === void 0 ? void 0 : _a.length) !== length) throw new errors/* WalletSignTransactionError */.PY(msg);
          const publicKey = new web3_js_.PublicKey(data.publicKey);

          for (let i = 0; i < length; i++) {
            transactions[i].addSignature(publicKey, external_bs58_default().decode(data.signatures[i]));
          }

          return transactions;
        } catch (error) {
          if (error instanceof errors/* WalletError */.lj) throw error;
          throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signMessage(message) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new errors/* WalletNotConnectedError */.oS();

        try {
          const response = yield wallet.signMessage(message);
          return external_bs58_default().decode(response.data.signature);
        } catch (error) {
          throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-wallets/lib/types.js
var types = __webpack_require__(3342);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-wallets/lib/slope.js


const getSlopeWallet = (config = {}) => ({
  name: types/* WalletName.Slope */.w.Slope,
  url: 'https://slope.finance',
  icon: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHdpZHRoPSIxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNjQiIGN5PSI2NCIgZmlsbD0iIzZlNjZmYSIgcj0iNjQiLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtMzUuMTk2MyA1NC4zOTk4aDE5LjJ2MTkuMmgtMTkuMnoiLz48cGF0aCBkPSJtNzMuNTk3IDU0LjM5OTgtMTkuMiAxOS4ydi0xOS4ybDE5LjItMTkuMnoiIGZpbGwtb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtNzMuNTk3IDczLjU5OTgtMTkuMiAxOS4ydi0xOS4ybDE5LjItMTkuMnoiIGZpbGwtb3BhY2l0eT0iLjc1Ii8+PHBhdGggZD0ibTczLjYwNCA1NC4zOTk4aDE5LjJ2MTkuMmgtMTkuMnoiLz48cGF0aCBkPSJtNTQuMzk2OCAzNS4yIDE5LjItMTkuMnYxOS4ybC0xOS4yIDE5LjJoLTE5LjJ6IiBmaWxsLW9wYWNpdHk9Ii43NSIvPjxwYXRoIGQ9Im03My41OTE1IDkyLjgtMTkuMiAxOS4ydi0xOS4ybDE5LjItMTkuMmgxOS4yeiIgZmlsbC1vcGFjaXR5PSIuNCIvPjwvZz48L3N2Zz4=',
  adapter: () => new SlopeWalletAdapter(config)
});

/***/ }),

/***/ 104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* binding */ getSolflareWallet)
});

// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/signer.js
var signer = __webpack_require__(8344);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/errors.js
var errors = __webpack_require__(3735);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/poll.js
var poll = __webpack_require__(3708);
// EXTERNAL MODULE: external "@solana/web3.js"
var web3_js_ = __webpack_require__(5681);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-solflare/lib/adapter.js
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};



class SolflareWalletAdapter extends signer/* BaseMessageSignerWalletAdapter */.e {
  constructor(config = {}) {
    super();

    this._disconnected = () => {
      const wallet = this._wallet;

      if (wallet) {
        wallet.off('disconnect', this._disconnected);
        this._wallet = null;
        this._publicKey = null;
        this.emit('error', new errors/* WalletDisconnectedError */.at());
        this.emit('disconnect');
      }
    };

    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (!this.ready) (0,poll/* pollUntilReady */._)(this, config.pollInterval || 1000, config.pollCount || 3);
  }

  get publicKey() {
    return this._publicKey;
  }

  get ready() {
    var _a;

    return  false && 0;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    var _a;

    return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.isConnected);
  }

  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        const wallet =  false && 0;
        if (!wallet) throw new errors/* WalletNotFoundError */.l5();
        if (!wallet.isSolflare) throw new errors/* WalletNotInstalledError */.Yf();

        if (!wallet.isConnected) {
          try {
            yield wallet.connect();
          } catch (error) {
            throw new errors/* WalletConnectionError */.$w(error === null || error === void 0 ? void 0 : error.message, error);
          }
        } // HACK: Solflare doesn't reject its promise if the popup is closed


        if (!wallet.publicKey) throw new errors/* WalletConnectionError */.$w();
        let publicKey;

        try {
          publicKey = new web3_js_.PublicKey(wallet.publicKey.toBytes());
        } catch (error) {
          throw new errors/* WalletPublicKeyError */.Nx(error === null || error === void 0 ? void 0 : error.message, error);
        }

        wallet.on('disconnect', this._disconnected);
        this._wallet = wallet;
        this._publicKey = publicKey;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      const wallet = this._wallet;

      if (wallet) {
        wallet.off('disconnect', this._disconnected);
        this._wallet = null;
        this._publicKey = null;

        try {
          yield wallet.disconnect();
        } catch (error) {
          this.emit('error', new errors/* WalletDisconnectionError */.UG(error === null || error === void 0 ? void 0 : error.message, error));
        }
      }

      this.emit('disconnect');
    });
  }

  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new errors/* WalletNotConnectedError */.oS();

        try {
          return (yield wallet.signTransaction(transaction)) || transaction;
        } catch (error) {
          throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new errors/* WalletNotConnectedError */.oS();

        try {
          return (yield wallet.signAllTransactions(transactions)) || transactions;
        } catch (error) {
          throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signMessage(message) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new errors/* WalletNotConnectedError */.oS();

        try {
          const {
            signature
          } = yield wallet.signMessage(message, 'utf8');
          return Uint8Array.from(signature);
        } catch (error) {
          throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-wallets/lib/types.js
var types = __webpack_require__(3342);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-wallets/lib/solflare.js


const getSolflareWallet = (config = {}) => ({
  name: types/* WalletName.Solflare */.w.Solflare,
  url: 'https://solflare.com',
  icon: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmMxMGIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYjNmMmUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2LjQ3ODM1IiB4Mj0iMzQuOTEwNyIgeGxpbms6aHJlZj0iI2EiIHkxPSI3LjkyIiB5Mj0iMzMuNjU5MyIvPjxyYWRpYWxHcmFkaWVudCBpZD0iYyIgY3g9IjAiIGN5PSIwIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQuOTkyMTg4MzIgMTIuMDYzODc5NjMgLTEyLjE4MTEzNjU1IDUuMDQwNzEwNzQgMjIuNTIwMiAyMC42MTgzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHI9IjEiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZD0ibTI1LjE3MDggNDcuOTEwNGMuNTI1IDAgLjk1MDcuNDIxLjk1MDcuOTQwM3MtLjQyNTcuOTQwMi0uOTUwNy45NDAyLS45NTA3LS40MjA5LS45NTA3LS45NDAyLjQyNTctLjk0MDMuOTUwNy0uOTQwM3ptLTEuMDMyOC00NC45MTU2NWMuNDY0Ni4wMzgzNi44Mzk4LjM5MDQuOTAyNy44NDY4MWwxLjEzMDcgOC4yMTU3NGMuMzc5OCAyLjcxNDMgMy42NTM1IDMuODkwNCA1LjY3NDMgMi4wNDU5bDExLjMyOTEtMTAuMzExNThjLjI3MzMtLjI0ODczLjY5ODktLjIzMTQ5Ljk1MDcuMDM4NTEuMjMwOS4yNDc3Mi4yMzc5LjYyNjk3LjAxNjEuODgyNzdsLTkuODc5MSAxMS4zOTU4Yy0xLjgxODcgMi4wOTQyLS40NzY4IDUuMzY0MyAyLjI5NTYgNS41OTc4bDguNzE2OC44NDAzYy40MzQxLjA0MTguNzUxNy40MjM0LjcwOTMuODUyNC0uMDM0OS4zNTM3LS4zMDc0LjYzOTUtLjY2MjguNjk0OWwtOS4xNTk0IDEuNDMwMmMtMi42NTkzLjM2MjUtMy44NjM2IDMuNTExNy0yLjEzMzkgNS41NTc2bDMuMjIgMy43OTYxYy4yNTk0LjMwNTguMjE4OC43NjE1LS4wOTA4IDEuMDE3OC0uMjYyMi4yMTcyLS42NDE5LjIyNTYtLjkxMzguMDIwM2wtMy45Njk0LTIuOTk3OGMtMi4xNDIxLTEuNjEwOS01LjIyOTctLjI0MTctNS40NTYxIDIuNDI0M2wtLjg3NDcgMTAuMzk3NmMtLjAzNjIuNDI5NS0uNDE3OC43NDg3LS44NTI1LjcxMy0uMzY5LS4wMzAzLS42NjcxLS4zMDk3LS43MTcxLS42NzIxbC0xLjM4NzEtMTAuMDQzN2MtLjM3MTctMi43MTQ0LTMuNjQ1NC0zLjg5MDQtNS42NzQzLTIuMDQ1OWwtMTIuMDUxOTUgMTAuOTc0Yy0uMjQ5NDcuMjI3MS0uNjM4MDkuMjExNC0uODY4LS4wMzUtLjIxMDk0LS4yMjYyLS4yMTczNS0uNTcyNC0uMDE0OTMtLjgwNmwxMC41MTgxOC0xMi4xMzg1YzEuODE4Ny0yLjA5NDIuNDg0OS01LjM2NDQtMi4yODc2LTUuNTk3OGwtOC43MTg3Mi0uODQwNWMtLjQzNDEzLS4wNDE4LS43NTE3Mi0uNDIzNS0uNzA5MzYtLjg1MjQuMDM0OTMtLjM1MzcuMzA3MzktLjYzOTQuNjYyNy0uNjk1bDkuMTUzMzgtMS40Mjk5YzIuNjU5NC0uMzYyNSAzLjg3MTgtMy41MTE3IDIuMTQyMS01LjU1NzZsLTIuMTkyLTIuNTg0MWMtLjMyMTctLjM3OTItLjI3MTMtLjk0NDMuMTEyNi0xLjI2MjEuMzI1My0uMjY5NC43OTYzLS4yNzk3IDEuMTMzNC0uMDI0OWwyLjY5MTggMi4wMzQ3YzIuMTQyMSAxLjYxMDkgNS4yMjk3LjI0MTcgNS40NTYxLTIuNDI0M2wuNzI0MS04LjU1OTk4Yy4wNDU3LS41NDA4LjUyNjUtLjk0MjU3IDEuMDczOS0uODk3Mzd6bS0yMy4xODczMyAyMC40Mzk2NWMuNTI1MDQgMCAuOTUwNjcuNDIxLjk1MDY3Ljk0MDNzLS40MjU2My45NDAzLS45NTA2Ny45NDAzYy0uNTI1MDQxIDAtLjk1MDY3LS40MjEtLjk1MDY3LS45NDAzcy40MjU2MjktLjk0MDMuOTUwNjctLjk0MDN6bTQ3LjY3OTczLS45NTQ3Yy41MjUgMCAuOTUwNy40MjEuOTUwNy45NDAzcy0uNDI1Ny45NDAyLS45NTA3Ljk0MDItLjk1MDctLjQyMDktLjk1MDctLjk0MDIuNDI1Ny0uOTQwMy45NTA3LS45NDAzem0tMjQuNjI5Ni0yMi40Nzk3Yy41MjUgMCAuOTUwNi40MjA5NzMuOTUwNi45NDAyNyAwIC41MTkzLS40MjU2Ljk0MDI3LS45NTA2Ljk0MDI3LS41MjUxIDAtLjk1MDctLjQyMDk3LS45NTA3LS45NDAyNyAwLS41MTkyOTcuNDI1Ni0uOTQwMjcuOTUwNy0uOTQwMjd6IiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0ibTI0LjU3MSAzMi43NzkyYzQuOTU5NiAwIDguOTgwMi0zLjk3NjUgOC45ODAyLTguODgxOSAwLTQuOTA1My00LjAyMDYtOC44ODE5LTguOTgwMi04Ljg4MTlzLTguOTgwMiAzLjk3NjYtOC45ODAyIDguODgxOWMwIDQuOTA1NCA0LjAyMDYgOC44ODE5IDguOTgwMiA4Ljg4MTl6IiBmaWxsPSJ1cmwoI2MpIi8+PC9zdmc+',
  adapter: () => new SolflareWalletAdapter(config)
});

/***/ }),

/***/ 6255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ getSolletWallet)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_sollet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1817);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3342);
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



const getSolletWallet = (_a = {}) => {
  var {
    provider
  } = _a,
      config = __rest(_a, ["provider"]);

  return {
    name: _types__WEBPACK_IMPORTED_MODULE_0__/* .WalletName.Sollet */ .w.Sollet,
    url: 'https://www.sollet.io',
    icon: 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUzMCIgd2lkdGg9IjUzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtLTEtMWg1MzJ2NTMyaC01MzJ6IiBmaWxsPSJub25lIi8+PGcgZmlsbD0iIzAwZmZhMyI+PHBhdGggZD0ibTg4Ljg4OTM1IDM3Mi45ODIwMWMzLjE5My0zLjE5IDcuNTIyLTQuOTgyIDEyLjAzNS00Ljk4Mmg0MTYuNDYxYzcuNTg2IDAgMTEuMzg0IDkuMTc0IDYuMDE3IDE0LjUzNmwtODIuMjkxIDgyLjIyNmMtMy4xOTMgMy4xOTEtNy41MjIgNC45ODMtMTIuMDM2IDQuOTgzaC00MTYuNDYwMWMtNy41ODY2IDAtMTEuMzg0NS05LjE3NC02LjAxNzgtMTQuNTM3bDgyLjI5MTktODIuMjI2eiIvPjxwYXRoIGQ9Im04OC44ODkzNSA2NS45ODI1YzMuMTkzLTMuMTkwNCA3LjUyMi00Ljk4MjUgMTIuMDM1LTQuOTgyNWg0MTYuNDYxYzcuNTg2IDAgMTEuMzg0IDkuMTczOSA2LjAxNyAxNC41MzYzbC04Mi4yOTEgODIuMjI2N2MtMy4xOTMgMy4xOS03LjUyMiA0Ljk4Mi0xMi4wMzYgNC45ODJoLTQxNi40NjAxYy03LjU4NjYgMC0xMS4zODQ1LTkuMTc0LTYuMDE3OC0xNC41MzZsODIuMjkxOS04Mi4yMjY1eiIvPjxwYXRoIGQ9Im00NDEuMTExMzUgMjE5LjEwOTVjLTMuMTkzLTMuMTktNy41MjItNC45ODItMTIuMDM2LTQuOTgyaC00MTYuNDYwMWMtNy41ODY2IDAtMTEuMzg0NSA5LjE3My02LjAxNzggMTQuNTM2bDgyLjI5MTkgODIuMjI2YzMuMTkzIDMuMTkgNy41MjIgNC45ODMgMTIuMDM1IDQuOTgzaDQxNi40NjFjNy41ODYgMCAxMS4zODQtOS4xNzQgNi4wMTctMTQuNTM3eiIvPjwvZz48L3N2Zz4=',
    adapter: () => new _solana_wallet_adapter_sollet__WEBPACK_IMPORTED_MODULE_1__/* .SolletWalletAdapter */ .I(Object.assign({
      provider: 'https://www.sollet.io'
    }, config))
  };
};

/***/ }),

/***/ 9499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ getSolletExtensionWallet)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_sollet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1817);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3342);
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



const getSolletExtensionWallet = (_a = {}) => {
  var {
    provider
  } = _a,
      config = __rest(_a, ["provider"]);

  return {
    name: _types__WEBPACK_IMPORTED_MODULE_0__/* .WalletName.SolletExtension */ .w.SolletExtension,
    url: 'https://chrome.google.com/webstore/detail/sollet/fhmfendgdocmcbmfikdcogofphimnkno',
    icon: 'data:image/png;base64,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',
    adapter: () => new _solana_wallet_adapter_sollet__WEBPACK_IMPORTED_MODULE_1__/* .SolletWalletAdapter */ .I(config)
  };
};

/***/ }),

/***/ 3959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "s": () => (/* binding */ getTorusWallet)
});

// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/signer.js
var signer = __webpack_require__(8344);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/errors.js
var errors = __webpack_require__(3735);
// EXTERNAL MODULE: external "@solana/web3.js"
var web3_js_ = __webpack_require__(5681);
// EXTERNAL MODULE: external "@toruslabs/openlogin"
var openlogin_ = __webpack_require__(7619);
var openlogin_default = /*#__PURE__*/__webpack_require__.n(openlogin_);
// EXTERNAL MODULE: external "@toruslabs/openlogin-ed25519"
var openlogin_ed25519_ = __webpack_require__(9209);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-torus/lib/adapter.js
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};





class TorusWalletAdapter extends signer/* BaseSignerWalletAdapter */.s {
  constructor(config) {
    super();
    this._options = Object.assign({
      uxMode: 'popup',
      network: openlogin_.OPENLOGIN_NETWORK.MAINNET
    }, config.options);
    this._connecting = false;
    this._openLogin = null;
    this._keypair = null;
  }

  get publicKey() {
    var _a;

    return ((_a = this._keypair) === null || _a === void 0 ? void 0 : _a.publicKey) || null;
  }

  get ready() {
    return false;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    return !!this._keypair;
  }

  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        let openLogin;
        let privateKey;

        try {
          openLogin = new (openlogin_default())(this._options);
          yield openLogin.init();
          privateKey = openLogin.privKey;

          if (!privateKey) {
            let listener;

            try {
              privateKey = yield new Promise((resolve, reject) => {
                listener = ({
                  reason
                }) => {
                  switch (reason === null || reason === void 0 ? void 0 : reason.message.toLowerCase()) {
                    case 'user closed popup':
                      reason = new errors/* WalletWindowClosedError */.hd(reason.message, reason);
                      break;

                    case 'unable to open window':
                      reason = new errors/* WalletWindowBlockedError */.d2(reason.message, reason);
                      break;
                  }

                  reject(reason);
                };

                window.addEventListener('unhandledrejection', listener);
                openLogin.login().then( // HACK: result.privKey is not padded to 64 bytes, use provider.privKey
                result => resolve(openLogin.privKey), reason => listener({
                  reason
                }));
              });
            } finally {
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              window.removeEventListener('unhandledrejection', listener);
            }
          }
        } catch (error) {
          if (error instanceof errors/* WalletError */.lj) throw error;
          throw new errors/* WalletConnectionError */.$w(error === null || error === void 0 ? void 0 : error.message, error);
        }

        let keypair;

        try {
          keypair = web3_js_.Keypair.fromSecretKey((0,openlogin_ed25519_.getED25519Key)(privateKey).sk);
        } catch (error) {
          throw new errors/* WalletKeypairError */.Db(error === null || error === void 0 ? void 0 : error.message, error);
        }

        this._openLogin = openLogin;
        this._keypair = keypair;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      const openLogin = this._openLogin;

      if (openLogin) {
        this._openLogin = null;
        this._keypair = null;

        try {
          yield openLogin.logout();
          yield openLogin._cleanup();
        } catch (error) {
          this.emit('error', new errors/* WalletDisconnectionError */.UG(error === null || error === void 0 ? void 0 : error.message, error));
        }
      }

      this.emit('disconnect');
    });
  }

  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const keypair = this._keypair;
        if (!keypair) throw new errors/* WalletNotConnectedError */.oS();

        try {
          transaction.partialSign(keypair);
        } catch (error) {
          throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
        }

        return transaction;
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const keypair = this._keypair;
        if (!keypair) throw new errors/* WalletNotConnectedError */.oS();

        try {
          for (const transaction of transactions) {
            transaction.partialSign(keypair);
          }
        } catch (error) {
          throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
        }

        return transactions;
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-wallets/lib/types.js
var types = __webpack_require__(3342);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-wallets/lib/torus.js


const getTorusWallet = config => ({
  name: types/* WalletName.Torus */.w.Torus,
  url: 'https://tor.us',
  icon: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjcyIiB3aWR0aD0iNzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtOS40MDY5MSAwYy0zLjcyMjcxIDAtNi43NDA1NiAzLjAxNzg0LTYuNzQwNTYgNi43NDA1NXY3Ljg1MjI1YzAgMy43MjI3IDMuMDE3ODUgNi43NDA1IDYuNzQwNTUgNi43NDA1aDExLjkyNTg1djQzLjkyNjFjMCAzLjcyMjcgMy4wMTc5IDYuNzQwNiA2Ljc0MDYgNi43NDA2aDcuODUyMmMzLjcyMjcgMCA2Ljc0MDYtMy4wMTc5IDYuNzQwNi02Ljc0MDZ2LTUwLjYwOTVjLjAwMDEtLjAxOTEuMDAwMi0uMDM4MS4wMDAyLS4wNTcxdi03Ljg1MjI0YzAtMy43MjI3MS0zLjAxNzktNi43NDA1Ni02Ljc0MDYtNi43NDA1NmgtNy44NTI0LTE4LjY2NjQ0eiIgZmlsbD0iIzAzNjRmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0ibTU4LjY2Njk1IDIxLjMzMzNjNS44OTExIDAgMTAuNjY2Ny00Ljc3NTYgMTAuNjY2Ny0xMC42NjY2IDAtNS44OTEwNy00Ljc3NTYtMTAuNjY2Ny0xMC42NjY3LTEwLjY2NjctNS44OTEgMC0xMC42NjY2IDQuNzc1NjMtMTAuNjY2NiAxMC42NjY3IDAgNS44OTEgNC43NzU2IDEwLjY2NjYgMTAuNjY2NiAxMC42NjY2eiIgZmlsbD0iIzFhYzdmZSIvPjwvc3ZnPg==',
  adapter: () => new TorusWalletAdapter(config)
});

/***/ }),

/***/ 3342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ WalletName)
/* harmony export */ });
var WalletName;

(function (WalletName) {
  WalletName["BitKeep"] = "BitKeep";
  WalletName["Bitpie"] = "Bitpie";
  WalletName["Blocto"] = "Blocto";
  WalletName["Clover"] = "Clover";
  WalletName["Coin98"] = "Coin98";
  WalletName["Coinhub"] = "Coinhub";
  WalletName["Ledger"] = "Ledger";
  WalletName["MathWallet"] = "MathWallet";
  WalletName["Phantom"] = "Phantom";
  WalletName["SafePal"] = "SafePal";
  WalletName["Slope"] = "Slope";
  WalletName["Solflare"] = "Solflare";
  WalletName["SolflareWeb"] = "Solflare (Web)";
  WalletName["Sollet"] = "Sollet";
  WalletName["SolletExtension"] = "Sollet (Extension)";
  WalletName["Solong"] = "Solong";
  WalletName["TokenPocket"] = "TokenPocket";
  WalletName["Torus"] = "Torus"; // WalletConnect = 'WalletConnect', // not published yet
})(WalletName || (WalletName = {}));

/***/ })

};
;