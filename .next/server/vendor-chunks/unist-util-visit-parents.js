/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-visit-parents";
exports.ids = ["vendor-chunks/unist-util-visit-parents"];
exports.modules = {

/***/ "(ssr)/./node_modules/unist-util-visit-parents/color.js":
/*!********************************************************!*\
  !*** ./node_modules/unist-util-visit-parents/color.js ***!
  \********************************************************/
/***/ ((module) => {

eval("module.exports = color\nfunction color(d) {\n  return '\\u001B[33m' + d + '\\u001B[39m'\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzL2NvbG9yLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cy9jb2xvci5qcz9kMTcxIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gY29sb3JcbmZ1bmN0aW9uIGNvbG9yKGQpIHtcbiAgcmV0dXJuICdcXHUwMDFCWzMzbScgKyBkICsgJ1xcdTAwMUJbMzltJ1xufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-visit-parents/color.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/unist-util-visit-parents/index.js":
/*!********************************************************!*\
  !*** ./node_modules/unist-util-visit-parents/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nmodule.exports = visitParents\n\nvar convert = __webpack_require__(/*! unist-util-is/convert */ \"(ssr)/./node_modules/unist-util-is/convert.js\")\nvar color = __webpack_require__(/*! ./color */ \"(ssr)/./node_modules/unist-util-visit-parents/color.js\")\n\nvar CONTINUE = true\nvar SKIP = 'skip'\nvar EXIT = false\n\nvisitParents.CONTINUE = CONTINUE\nvisitParents.SKIP = SKIP\nvisitParents.EXIT = EXIT\n\nfunction visitParents(tree, test, visitor, reverse) {\n  var step\n  var is\n\n  if (typeof test === 'function' && typeof visitor !== 'function') {\n    reverse = visitor\n    visitor = test\n    test = null\n  }\n\n  is = convert(test)\n  step = reverse ? -1 : 1\n\n  factory(tree, null, [])()\n\n  function factory(node, index, parents) {\n    var value = typeof node === 'object' && node !== null ? node : {}\n    var name\n\n    if (typeof value.type === 'string') {\n      name =\n        typeof value.tagName === 'string'\n          ? value.tagName\n          : typeof value.name === 'string'\n          ? value.name\n          : undefined\n\n      visit.displayName =\n        'node (' + color(value.type + (name ? '<' + name + '>' : '')) + ')'\n    }\n\n    return visit\n\n    function visit() {\n      var grandparents = parents.concat(node)\n      var result = []\n      var subresult\n      var offset\n\n      if (!test || is(node, index, parents[parents.length - 1] || null)) {\n        result = toResult(visitor(node, parents))\n\n        if (result[0] === EXIT) {\n          return result\n        }\n      }\n\n      if (node.children && result[0] !== SKIP) {\n        offset = (reverse ? node.children.length : -1) + step\n\n        while (offset > -1 && offset < node.children.length) {\n          subresult = factory(node.children[offset], offset, grandparents)()\n\n          if (subresult[0] === EXIT) {\n            return subresult\n          }\n\n          offset =\n            typeof subresult[1] === 'number' ? subresult[1] : offset + step\n        }\n      }\n\n      return result\n    }\n  }\n}\n\nfunction toResult(value) {\n  if (value !== null && typeof value === 'object' && 'length' in value) {\n    return value\n  }\n\n  if (typeof value === 'number') {\n    return [CONTINUE, value]\n  }\n\n  return [value]\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyw0RUFBdUI7QUFDN0MsWUFBWSxtQkFBTyxDQUFDLHVFQUFTOztBQUU3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0LXBhcmVudHMvaW5kZXguanM/MzJiOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB2aXNpdFBhcmVudHNcblxudmFyIGNvbnZlcnQgPSByZXF1aXJlKCd1bmlzdC11dGlsLWlzL2NvbnZlcnQnKVxudmFyIGNvbG9yID0gcmVxdWlyZSgnLi9jb2xvcicpXG5cbnZhciBDT05USU5VRSA9IHRydWVcbnZhciBTS0lQID0gJ3NraXAnXG52YXIgRVhJVCA9IGZhbHNlXG5cbnZpc2l0UGFyZW50cy5DT05USU5VRSA9IENPTlRJTlVFXG52aXNpdFBhcmVudHMuU0tJUCA9IFNLSVBcbnZpc2l0UGFyZW50cy5FWElUID0gRVhJVFxuXG5mdW5jdGlvbiB2aXNpdFBhcmVudHModHJlZSwgdGVzdCwgdmlzaXRvciwgcmV2ZXJzZSkge1xuICB2YXIgc3RlcFxuICB2YXIgaXNcblxuICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZpc2l0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXZlcnNlID0gdmlzaXRvclxuICAgIHZpc2l0b3IgPSB0ZXN0XG4gICAgdGVzdCA9IG51bGxcbiAgfVxuXG4gIGlzID0gY29udmVydCh0ZXN0KVxuICBzdGVwID0gcmV2ZXJzZSA/IC0xIDogMVxuXG4gIGZhY3RvcnkodHJlZSwgbnVsbCwgW10pKClcblxuICBmdW5jdGlvbiBmYWN0b3J5KG5vZGUsIGluZGV4LCBwYXJlbnRzKSB7XG4gICAgdmFyIHZhbHVlID0gdHlwZW9mIG5vZGUgPT09ICdvYmplY3QnICYmIG5vZGUgIT09IG51bGwgPyBub2RlIDoge31cbiAgICB2YXIgbmFtZVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZS50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgbmFtZSA9XG4gICAgICAgIHR5cGVvZiB2YWx1ZS50YWdOYW1lID09PSAnc3RyaW5nJ1xuICAgICAgICAgID8gdmFsdWUudGFnTmFtZVxuICAgICAgICAgIDogdHlwZW9mIHZhbHVlLm5hbWUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgPyB2YWx1ZS5uYW1lXG4gICAgICAgICAgOiB1bmRlZmluZWRcblxuICAgICAgdmlzaXQuZGlzcGxheU5hbWUgPVxuICAgICAgICAnbm9kZSAoJyArIGNvbG9yKHZhbHVlLnR5cGUgKyAobmFtZSA/ICc8JyArIG5hbWUgKyAnPicgOiAnJykpICsgJyknXG4gICAgfVxuXG4gICAgcmV0dXJuIHZpc2l0XG5cbiAgICBmdW5jdGlvbiB2aXNpdCgpIHtcbiAgICAgIHZhciBncmFuZHBhcmVudHMgPSBwYXJlbnRzLmNvbmNhdChub2RlKVxuICAgICAgdmFyIHJlc3VsdCA9IFtdXG4gICAgICB2YXIgc3VicmVzdWx0XG4gICAgICB2YXIgb2Zmc2V0XG5cbiAgICAgIGlmICghdGVzdCB8fCBpcyhub2RlLCBpbmRleCwgcGFyZW50c1twYXJlbnRzLmxlbmd0aCAtIDFdIHx8IG51bGwpKSB7XG4gICAgICAgIHJlc3VsdCA9IHRvUmVzdWx0KHZpc2l0b3Iobm9kZSwgcGFyZW50cykpXG5cbiAgICAgICAgaWYgKHJlc3VsdFswXSA9PT0gRVhJVCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobm9kZS5jaGlsZHJlbiAmJiByZXN1bHRbMF0gIT09IFNLSVApIHtcbiAgICAgICAgb2Zmc2V0ID0gKHJldmVyc2UgPyBub2RlLmNoaWxkcmVuLmxlbmd0aCA6IC0xKSArIHN0ZXBcblxuICAgICAgICB3aGlsZSAob2Zmc2V0ID4gLTEgJiYgb2Zmc2V0IDwgbm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICBzdWJyZXN1bHQgPSBmYWN0b3J5KG5vZGUuY2hpbGRyZW5bb2Zmc2V0XSwgb2Zmc2V0LCBncmFuZHBhcmVudHMpKClcblxuICAgICAgICAgIGlmIChzdWJyZXN1bHRbMF0gPT09IEVYSVQpIHtcbiAgICAgICAgICAgIHJldHVybiBzdWJyZXN1bHRcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBvZmZzZXQgPVxuICAgICAgICAgICAgdHlwZW9mIHN1YnJlc3VsdFsxXSA9PT0gJ251bWJlcicgPyBzdWJyZXN1bHRbMV0gOiBvZmZzZXQgKyBzdGVwXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0b1Jlc3VsdCh2YWx1ZSkge1xuICBpZiAodmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiB2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gW0NPTlRJTlVFLCB2YWx1ZV1cbiAgfVxuXG4gIHJldHVybiBbdmFsdWVdXG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-visit-parents/index.js\n");

/***/ })

};
;