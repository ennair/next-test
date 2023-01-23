"use strict";
(() => {
var exports = {};
exports.id = 476;
exports.ids = [476];
exports.modules = {

/***/ 471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Heading)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Heading/Heading.tsx

function Heading(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("h1", {
        children: props.text
    });
}

;// CONCATENATED MODULE: ./components/Heading/index.tsx

/* harmony default export */ const components_Heading = (Heading);


/***/ }),

/***/ 198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Route),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./components/Heading/index.tsx + 1 modules
var Heading = __webpack_require__(471);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-b0f7680d5a/0/cache/next-npm-13.1.4-2b4efff073-cc399e2245.zip/node_modules/next/image.js
var next_image = __webpack_require__(485);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/minion.jpg
/* harmony default export */ const minion = ({"src":"/_next/static/media/minion.500b4955.jpg","height":252,"width":252,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAApAH/xAAbEAEBAAIDAQAAAAAAAAAAAAADAgEEAAUy4f/aAAgBAQABPwBX2y77WGSaxUrq6x4icfef/8QAGREAAwADAAAAAAAAAAAAAAAAAQIhAEGR/9oACAECAQE/AAgQTd7n/8QAFREBAQAAAAAAAAAAAAAAAAAAEQD/2gAIAQMBAT8AW//Z","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./pages/[[...route]].tsx





function Route({}) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Heading/* default */.Z, {
                text: "This is another page"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: minion,
                alt: "Picture alt"
            })
        ]
    });
}
const getServerSideProps = async ({})=>{
    return {
        props: {}
    };
};


/***/ }),

/***/ 918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [608,485], () => (__webpack_exec__(198)));
module.exports = __webpack_exports__;

})();