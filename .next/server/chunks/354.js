"use strict";
exports.id = 354;
exports.ids = [354];
exports.modules = {

/***/ 7354:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7406);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4210);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4526);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5030);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9560);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(104);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3959);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7314);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6255);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9499);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5681);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const WalletConnectionProvider = ({
  children
}) => {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = "mainnet-beta";
  const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.clusterApiUrl)(network), [network]);
  const wallets = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => [(0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__/* .getPhantomWallet */ .y)(), (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__/* .getSlopeWallet */ .W)(), (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__/* .getSolflareWallet */ .I)(), (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_7__/* .getTorusWallet */ .s)({
    options: {
      clientId: "CLIENT_ID"
    }
  }), (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_8__/* .getLedgerWallet */ .D)(), (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_9__/* .getSolletWallet */ .D)({
    network
  }), (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_10__/* .getSolletExtensionWallet */ .K)({
    network
  })], [network]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_11__/* .ConnectionProvider */ .U, {
    endpoint: endpoint,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_12__/* .WalletProvider */ .n, {
      wallets: wallets,
      autoConnect: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_0__/* .WalletModalProvider */ .sR, {
        children: children
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletConnectionProvider);
});

/***/ })

};
;