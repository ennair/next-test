"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _document),
  "readFile": () => (/* binding */ readFile)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-b0f7680d5a/0/cache/next-npm-13.1.4-2b4efff073-cc399e2245.zip/node_modules/next/document.js
var next_document = __webpack_require__(643);
;// CONCATENATED MODULE: external "crypto"
const external_crypto_namespaceObject = require("crypto");
var external_crypto_default = /*#__PURE__*/__webpack_require__.n(external_crypto_namespaceObject);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "util"
const external_util_namespaceObject = require("util");
;// CONCATENATED MODULE: ./scripts/getCSP.ts
function getCSP(nonce, preview) {
    let contentSecurityPolicy = `
    default-src 'self';
    img-src 'self';
    object-src 'none';
    frame-ancestors 'none';
    form-action 'self';
    style-src 'self';
    font-src 'self';
    connect-src 'self';
    script-src 'strict-dynamic' 'self' 'nonce-${nonce}';
    base-uri 'self';
  `;
    return contentSecurityPolicy.replace(/\s{2,}/g, " ").trim();
}

;// CONCATENATED MODULE: ./pages/_document.tsx






const readFile = (0,external_util_namespaceObject.promisify)((external_fs_default()).readFile);
const cspHashOf = (text)=>{
    const hash = external_crypto_default().createHash("sha256");
    hash.update(text);
    return hash.digest("base64");
};
class Document extends next_document["default"] {
    static async getInitialProps(ctx) {
        const initialProps = await next_document["default"].getInitialProps(ctx);
        let nonce;
        if (ctx.res) {
            const { html  } = await ctx.renderPage();
            nonce = cspHashOf(html + ctx.asPath);
            const preview = ctx.res.getHeader("preview");
            const contentSecurityPolicy = getCSP(nonce, preview);
            ctx.res.setHeader("Content-Security-Policy", contentSecurityPolicy);
        }
        return {
            ...initialProps,
            nonce: nonce
        };
    }
    render() {
        const nonce = this.props.nonce;
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Html, {
            className: "no-js",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_document.Head, {
                    nonce: nonce
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.Main, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.NextScript, {
                            nonce: nonce
                        })
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const _document = (Document);


/***/ }),

/***/ 140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [643], () => (__webpack_exec__(455)));
module.exports = __webpack_exports__;

})();