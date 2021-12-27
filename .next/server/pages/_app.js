(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./hooks/useWalletBalance.tsx
var useWalletBalance = __webpack_require__(7730);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/index.js + 11 modules
var lib = __webpack_require__(4526);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Layout/Header.js







function Header() {
  const {
    0: mobileMenuOpen,
    1: setMobileMenuOpen
  } = (0,external_react_.useState)(false);

  const menuItems = /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "mr-auto pl-3",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        passHref: true,
        href: "/",
        className: "hover:cursor-pointer",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          onClick: () => setMobileMenuOpen(false),
          className: "font-monstmedium text-white block uppercase lg:inline-block px-4 lg:mr-2 hover:text-indigo-500"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        passHref: true,
        href: "/",
        className: "hover:cursor-pointer",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          onClick: () => setMobileMenuOpen(false),
          className: "font-monstmedium text-white block uppercase lg:inline-block px-4 lg:mr-2 hover:text-indigo-500"
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex lg:flex-row flex-col",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mt-3 ml-3 lg:flex hidden",
        children: /*#__PURE__*/jsx_runtime_.jsx(lib/* WalletMultiButton */.aD, {})
      })
    })]
  });

  const mobileMenu = /*#__PURE__*/jsx_runtime_.jsx("nav", {
    className: "lg:hidden fixed right-0 bottom-0 bg-opacity-75 top-12 w-full bg-indigo-900 shadow-lg z-20 pt-12",
    children: menuItems
  });

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Curious Capys First Edition Mint"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: ""
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/images/favicon.ico"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "header",
      className: "w-full z-10 absolute top-0 ",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "container mx-auto flex justify-between items-center px-4 h-14 lg:h-16 ",
          children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "lg:hidden text-white",
            onClick: () => setMobileMenuOpen(!mobileMenuOpen),
            children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M4 8h16M4 16h16"
              })
            })
          }), mobileMenuOpen ? mobileMenu : "", /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "hidden lg:flex items-center w-full ",
            id: "links",
            children: menuItems
          })]
        })
      })
    })]
  });
}
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








__webpack_require__(2121);

const WalletConnectionProvider = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(735), __webpack_require__.e(167), __webpack_require__.e(354)]).then(__webpack_require__.bind(__webpack_require__, 7354)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7354)],
    modules: ["_app.tsx -> " + "../components/WalletConnection/WalletConnectionProvider"]
  }
});

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(WalletConnectionProvider, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(useWalletBalance/* WalletBalanceProvider */.P, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 1492:
/***/ ((module) => {

"use strict";
module.exports = require("@ledgerhq/hw-transport");

/***/ }),

/***/ 6631:
/***/ ((module) => {

"use strict";
module.exports = require("@ledgerhq/hw-transport-webhid");

/***/ }),

/***/ 6391:
/***/ ((module) => {

"use strict";
module.exports = require("@project-serum/anchor");

/***/ }),

/***/ 5681:
/***/ ((module) => {

"use strict";
module.exports = require("@solana/web3.js");

/***/ }),

/***/ 7619:
/***/ ((module) => {

"use strict";
module.exports = require("@toruslabs/openlogin");

/***/ }),

/***/ 9209:
/***/ ((module) => {

"use strict";
module.exports = require("@toruslabs/openlogin-ed25519");

/***/ }),

/***/ 2815:
/***/ ((module) => {

"use strict";
module.exports = require("bs58");

/***/ }),

/***/ 9553:
/***/ ((module) => {

"use strict";
module.exports = require("eventemitter3");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 2307:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 2268:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [67,730], () => (__webpack_exec__(6647)));
module.exports = __webpack_exports__;

})();