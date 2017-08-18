webpackHotUpdate(0,{

/***/ 380:
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ./frontend/reducers/playReducer.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar createInitState = function createInitState() {\n    return {\n        user: false,\n        cardScreens: [],\n        networks: []\n    };\n};\n\nvar playReducer = function playReducer() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : createInitState();\n    var action = arguments[1];\n\n    switch (action.type) {\n        case 'loadUser':\n            return Object.assign({}, state, { user: true });\n        case 'showCardScreen':\n            var newArray0 = state.cardScreens.concat([action.cardIndex.toString()]);\n            return Object.assign({}, state, { cardScreens: newArray0 });\n        case 'closeCard':\n            var newArray1 = state.cardScreens.slice();\n            newArray1.splice(action.index, 1);\n            return Object.assign({}, state, { cardScreens: newArray1 });\n        case 'loadNetwork':\n            var newArray2 = JSON.parse(JSON.stringify(state.networks));\n            newArray2.push(action.networkJSON);\n            return Object.assign({}, state, { networks: newArray2 });\n        case 'logout':\n            return Object.assign({}, state, { user: null });\n        default:\n            return state;\n    }\n};\n\nexports.default = playReducer;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzgwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL3JlZHVjZXJzL3BsYXlSZWR1Y2VyLmpzPzYxYTkiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBjcmVhdGVJbml0U3RhdGUgPSAoKSA9PiAoXG4gICAge1xuICAgICAgICB1c2VyOiBmYWxzZSxcbiAgICAgICAgY2FyZFNjcmVlbnM6IFtdLFxuICAgICAgICBuZXR3b3JrczogW11cbiAgICB9XG4pO1xuXG5jb25zdCBwbGF5UmVkdWNlciA9IChzdGF0ZSA9IGNyZWF0ZUluaXRTdGF0ZSgpLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2xvYWRVc2VyJzpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge3VzZXI6IHRydWV9KTtcbiAgICAgICAgY2FzZSAnc2hvd0NhcmRTY3JlZW4nOlxuICAgICAgICAgICAgY29uc3QgbmV3QXJyYXkwID0gc3RhdGUuY2FyZFNjcmVlbnMuY29uY2F0KFthY3Rpb24uY2FyZEluZGV4LnRvU3RyaW5nKCldKTtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge2NhcmRTY3JlZW5zOiBuZXdBcnJheTB9KTtcbiAgICAgICAgY2FzZSAnY2xvc2VDYXJkJzpcbiAgICAgICAgICAgIGNvbnN0IG5ld0FycmF5MSA9IHN0YXRlLmNhcmRTY3JlZW5zLnNsaWNlKCk7XG4gICAgICAgICAgICBuZXdBcnJheTEuc3BsaWNlKGFjdGlvbi5pbmRleCwgMSk7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtjYXJkU2NyZWVuczogbmV3QXJyYXkxfSk7XG4gICAgICAgIGNhc2UgJ2xvYWROZXR3b3JrJzpcbiAgICAgICAgICAgIGNvbnN0IG5ld0FycmF5MiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3RhdGUubmV0d29ya3MpKTtcbiAgICAgICAgICAgIG5ld0FycmF5Mi5wdXNoKGFjdGlvbi5uZXR3b3JrSlNPTik7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtuZXR3b3JrczogbmV3QXJyYXkyfSk7XG4gICAgICAgIGNhc2UgJ2xvZ291dCc6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHt1c2VyOiBudWxsfSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGxheVJlZHVjZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvcmVkdWNlcnMvcGxheVJlZHVjZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQW1CQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})