"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(studio)/admin/[[...index]]/page",{

/***/ "(app-pages-browser)/./sanity/schemas/serviceSection.ts":
/*!******************************************!*\
  !*** ./sanity/schemas/serviceSection.ts ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst serviceSection = {\n    name: \"serviceSection\",\n    title: \"Service Section\",\n    type: \"document\",\n    fields: [\n        {\n            name: \"title\",\n            title: \"Title\",\n            type: \"string\",\n            validation: (Rule)=>Rule.required().min(5).max(100)\n        },\n        {\n            name: \"subtitle\",\n            title: \"Subtitle\",\n            type: \"string\",\n            validation: (Rule)=>Rule.required().min(5).max(100)\n        },\n        {\n            name: \"description\",\n            title: \"Description\",\n            type: \"text\",\n            validation: (Rule)=>Rule.required().max(300)\n        },\n        {\n            name: \"items\",\n            title: \"Items\",\n            type: \"array\",\n            of: [\n                {\n                    type: \"string\"\n                }\n            ]\n        },\n        {\n            name: \"ctaButton\",\n            title: \"CTA Button\",\n            type: \"object\",\n            fields: [\n                {\n                    name: \"text\",\n                    title: \"Button Text\",\n                    type: \"string\",\n                    validation: (Rule)=>Rule.required().min(2).max(30)\n                },\n                {\n                    name: \"url\",\n                    title: \"Button URL\",\n                    type: \"url\",\n                    validation: (Rule)=>Rule.required()\n                }\n            ]\n        }\n    ]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serviceSection);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3Nhbml0eS9zY2hlbWFzL3NlcnZpY2VTZWN0aW9uLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxpQkFBaUI7SUFDbkJDLE1BQU07SUFDTkMsT0FBTztJQUNQQyxNQUFNO0lBQ05DLFFBQVE7UUFDTjtZQUNFSCxNQUFNO1lBQ05DLE9BQU87WUFDUEMsTUFBTTtZQUNORSxZQUFZLENBQUNDLE9BQVNBLEtBQUtDLFFBQVEsR0FBR0MsR0FBRyxDQUFDLEdBQUdDLEdBQUcsQ0FBQztRQUNuRDtRQUNBO1lBQ0VSLE1BQU07WUFDTkMsT0FBTztZQUNQQyxNQUFNO1lBQ05FLFlBQVksQ0FBQ0MsT0FBU0EsS0FBS0MsUUFBUSxHQUFHQyxHQUFHLENBQUMsR0FBR0MsR0FBRyxDQUFDO1FBQ25EO1FBQ0E7WUFDRVIsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkUsWUFBWSxDQUFDQyxPQUFTQSxLQUFLQyxRQUFRLEdBQUdFLEdBQUcsQ0FBQztRQUM1QztRQUNBO1lBQ0VSLE1BQU07WUFDRUMsT0FBTztZQUNQQyxNQUFNO1lBQ05PLElBQUk7Z0JBQUM7b0JBQUVQLE1BQU07Z0JBQVM7YUFBRTtRQUNsQztRQUNBO1lBQ0VGLE1BQU07WUFDTkMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLFFBQVE7Z0JBQ047b0JBQ0VILE1BQU07b0JBQ05DLE9BQU87b0JBQ1BDLE1BQU07b0JBQ05FLFlBQVksQ0FBQ0MsT0FBU0EsS0FBS0MsUUFBUSxHQUFHQyxHQUFHLENBQUMsR0FBR0MsR0FBRyxDQUFDO2dCQUNuRDtnQkFDQTtvQkFDRVIsTUFBTTtvQkFDTkMsT0FBTztvQkFDUEMsTUFBTTtvQkFDTkUsWUFBWSxDQUFDQyxPQUFTQSxLQUFLQyxRQUFRO2dCQUNyQzthQUNEO1FBQ0g7S0FDRDtBQUNIO0FBRUEsaUVBQWVQLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZWxsb3Jpbi9EZXNrdG9wL25leHQvbGl2cmEtc3BhY2Uvc2FuaXR5L3NjaGVtYXMvc2VydmljZVNlY3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2VydmljZVNlY3Rpb24gPSB7XG4gICAgbmFtZTogXCJzZXJ2aWNlU2VjdGlvblwiLFxuICAgIHRpdGxlOiBcIlNlcnZpY2UgU2VjdGlvblwiLFxuICAgIHR5cGU6IFwiZG9jdW1lbnRcIixcbiAgICBmaWVsZHM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJ0aXRsZVwiLFxuICAgICAgICB0aXRsZTogXCJUaXRsZVwiLFxuICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICB2YWxpZGF0aW9uOiAoUnVsZSkgPT4gUnVsZS5yZXF1aXJlZCgpLm1pbig1KS5tYXgoMTAwKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwic3VidGl0bGVcIixcbiAgICAgICAgdGl0bGU6IFwiU3VidGl0bGVcIixcbiAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgdmFsaWRhdGlvbjogKFJ1bGUpID0+IFJ1bGUucmVxdWlyZWQoKS5taW4oNSkubWF4KDEwMCksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgIHRpdGxlOiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICB2YWxpZGF0aW9uOiAoUnVsZSkgPT4gUnVsZS5yZXF1aXJlZCgpLm1heCgzMDApLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJpdGVtc1wiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkl0ZW1zXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgIG9mOiBbeyB0eXBlOiBcInN0cmluZ1wiIH1dLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJjdGFCdXR0b25cIixcbiAgICAgICAgdGl0bGU6IFwiQ1RBIEJ1dHRvblwiLFxuICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInRleHRcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkJ1dHRvbiBUZXh0XCIsXG4gICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgdmFsaWRhdGlvbjogKFJ1bGUpID0+IFJ1bGUucmVxdWlyZWQoKS5taW4oMikubWF4KDMwKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwidXJsXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJCdXR0b24gVVJMXCIsXG4gICAgICAgICAgICB0eXBlOiBcInVybFwiLFxuICAgICAgICAgICAgdmFsaWRhdGlvbjogKFJ1bGUpID0+IFJ1bGUucmVxdWlyZWQoKSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuICBcbiAgZXhwb3J0IGRlZmF1bHQgc2VydmljZVNlY3Rpb247XG4gICJdLCJuYW1lcyI6WyJzZXJ2aWNlU2VjdGlvbiIsIm5hbWUiLCJ0aXRsZSIsInR5cGUiLCJmaWVsZHMiLCJ2YWxpZGF0aW9uIiwiUnVsZSIsInJlcXVpcmVkIiwibWluIiwibWF4Iiwib2YiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./sanity/schemas/serviceSection.ts\n"));

/***/ })

});