"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@tiptap+extension-gapcursor@2.4.0_@tiptap+core@2.4.0_@tiptap+pm@2.4.0__@tiptap+pm@2.4.0";
exports.ids = ["vendor-chunks/@tiptap+extension-gapcursor@2.4.0_@tiptap+core@2.4.0_@tiptap+pm@2.4.0__@tiptap+pm@2.4.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@tiptap+extension-gapcursor@2.4.0_@tiptap+core@2.4.0_@tiptap+pm@2.4.0__@tiptap+pm@2.4.0/node_modules/@tiptap/extension-gapcursor/dist/index.js":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tiptap+extension-gapcursor@2.4.0_@tiptap+core@2.4.0_@tiptap+pm@2.4.0__@tiptap+pm@2.4.0/node_modules/@tiptap/extension-gapcursor/dist/index.js ***!
  \***************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gapcursor: () => (/* binding */ Gapcursor),\n/* harmony export */   \"default\": () => (/* binding */ Gapcursor)\n/* harmony export */ });\n/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tiptap/core */ \"(ssr)/./node_modules/.pnpm/@tiptap+core@2.4.0_@tiptap+pm@2.4.0/node_modules/@tiptap/core/dist/index.js\");\n/* harmony import */ var _tiptap_pm_gapcursor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/pm/gapcursor */ \"(ssr)/./node_modules/.pnpm/@tiptap+pm@2.4.0/node_modules/@tiptap/pm/gapcursor/dist/index.js\");\n\n\n\n/**\r\n * This extension allows you to add a gap cursor to your editor.\r\n * A gap cursor is a cursor that appears when you click on a place\r\n * where no content is present, for example inbetween nodes.\r\n * @see https://tiptap.dev/api/extensions/gapcursor\r\n */\r\nconst Gapcursor = _tiptap_core__WEBPACK_IMPORTED_MODULE_1__.Extension.create({\r\n    name: 'gapCursor',\r\n    addProseMirrorPlugins() {\r\n        return [\r\n            (0,_tiptap_pm_gapcursor__WEBPACK_IMPORTED_MODULE_0__.gapCursor)(),\r\n        ];\r\n    },\r\n    extendNodeSchema(extension) {\r\n        var _a;\r\n        const context = {\r\n            name: extension.name,\r\n            options: extension.options,\r\n            storage: extension.storage,\r\n        };\r\n        return {\r\n            allowGapCursor: (_a = (0,_tiptap_core__WEBPACK_IMPORTED_MODULE_1__.callOrReturn)((0,_tiptap_core__WEBPACK_IMPORTED_MODULE_1__.getExtensionField)(extension, 'allowGapCursor', context))) !== null && _a !== void 0 ? _a : null,\r\n        };\r\n    },\r\n});\n\n\n//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHRpcHRhcCtleHRlbnNpb24tZ2FwY3Vyc29yQDIuNC4wX0B0aXB0YXArY29yZUAyLjQuMF9AdGlwdGFwK3BtQDIuNC4wX19AdGlwdGFwK3BtQDIuNC4wL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1nYXBjdXJzb3IvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBFO0FBQ3pCOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbURBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsWUFBWSwrREFBUztBQUNyQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDBEQUFZLENBQUMsK0RBQWlCO0FBQ2hFO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRTBDO0FBQzNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGl0c3RvcC8uL25vZGVfbW9kdWxlcy8ucG5wbS9AdGlwdGFwK2V4dGVuc2lvbi1nYXBjdXJzb3JAMi40LjBfQHRpcHRhcCtjb3JlQDIuNC4wX0B0aXB0YXArcG1AMi40LjBfX0B0aXB0YXArcG1AMi40LjAvbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWdhcGN1cnNvci9kaXN0L2luZGV4LmpzPzA4NDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0ZW5zaW9uLCBjYWxsT3JSZXR1cm4sIGdldEV4dGVuc2lvbkZpZWxkIH0gZnJvbSAnQHRpcHRhcC9jb3JlJztcbmltcG9ydCB7IGdhcEN1cnNvciB9IGZyb20gJ0B0aXB0YXAvcG0vZ2FwY3Vyc29yJztcblxuLyoqXHJcbiAqIFRoaXMgZXh0ZW5zaW9uIGFsbG93cyB5b3UgdG8gYWRkIGEgZ2FwIGN1cnNvciB0byB5b3VyIGVkaXRvci5cclxuICogQSBnYXAgY3Vyc29yIGlzIGEgY3Vyc29yIHRoYXQgYXBwZWFycyB3aGVuIHlvdSBjbGljayBvbiBhIHBsYWNlXHJcbiAqIHdoZXJlIG5vIGNvbnRlbnQgaXMgcHJlc2VudCwgZm9yIGV4YW1wbGUgaW5iZXR3ZWVuIG5vZGVzLlxyXG4gKiBAc2VlIGh0dHBzOi8vdGlwdGFwLmRldi9hcGkvZXh0ZW5zaW9ucy9nYXBjdXJzb3JcclxuICovXHJcbmNvbnN0IEdhcGN1cnNvciA9IEV4dGVuc2lvbi5jcmVhdGUoe1xyXG4gICAgbmFtZTogJ2dhcEN1cnNvcicsXHJcbiAgICBhZGRQcm9zZU1pcnJvclBsdWdpbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgZ2FwQ3Vyc29yKCksXHJcbiAgICAgICAgXTtcclxuICAgIH0sXHJcbiAgICBleHRlbmROb2RlU2NoZW1hKGV4dGVuc2lvbikge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBleHRlbnNpb24ubmFtZSxcclxuICAgICAgICAgICAgb3B0aW9uczogZXh0ZW5zaW9uLm9wdGlvbnMsXHJcbiAgICAgICAgICAgIHN0b3JhZ2U6IGV4dGVuc2lvbi5zdG9yYWdlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYWxsb3dHYXBDdXJzb3I6IChfYSA9IGNhbGxPclJldHVybihnZXRFeHRlbnNpb25GaWVsZChleHRlbnNpb24sICdhbGxvd0dhcEN1cnNvcicsIGNvbnRleHQpKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbnVsbCxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxufSk7XG5cbmV4cG9ydCB7IEdhcGN1cnNvciwgR2FwY3Vyc29yIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@tiptap+extension-gapcursor@2.4.0_@tiptap+core@2.4.0_@tiptap+pm@2.4.0__@tiptap+pm@2.4.0/node_modules/@tiptap/extension-gapcursor/dist/index.js\n");

/***/ })

};
;