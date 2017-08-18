webpackHotUpdate(0,{

/***/ 373:
/* unknown exports provided */
/* all exports used */
/*!*************************************************************!*\
  !*** ./frontend/components/play/playground/TestANetCard.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ 37);\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _close = __webpack_require__(/*! material-ui/svg-icons/navigation/close */ 81);\n\nvar _close2 = _interopRequireDefault(_close);\n\nvar _DropDownMenu = __webpack_require__(/*! material-ui/DropDownMenu */ 265);\n\nvar _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);\n\nvar _MenuItem = __webpack_require__(/*! material-ui/MenuItem */ 269);\n\nvar _MenuItem2 = _interopRequireDefault(_MenuItem);\n\nvar _SelectField = __webpack_require__(/*! material-ui/SelectField */ 271);\n\nvar _SelectField2 = _interopRequireDefault(_SelectField);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TestANetCard = function (_React$Component) {\n    _inherits(TestANetCard, _React$Component);\n\n    function TestANetCard(props) {\n        _classCallCheck(this, TestANetCard);\n\n        var _this = _possibleConstructorReturn(this, (TestANetCard.__proto__ || Object.getPrototypeOf(TestANetCard)).call(this, props));\n\n        _this.state = {\n            NN: {},\n            NN_key: -1,\n            options: {}\n        };\n        return _this;\n    }\n\n    _createClass(TestANetCard, [{\n        key: 'loadTestNetwork',\n        value: function loadTestNetwork(e, key, val) {\n            var _this2 = this;\n\n            this.setState({ NN: this.props.networks[val], NN_key: val }, function () {\n                return _this2.setOptions();\n            });\n        }\n    }, {\n        key: 'renderNetworkList',\n        value: function renderNetworkList() {\n            var returnElement = [_react2.default.createElement(_MenuItem2.default, { key: -1, value: -1, primaryText: 'Choose one of your networks' })];\n            this.props.networks.forEach(function (NN, index) {\n                returnElement.push(_react2.default.createElement(_MenuItem2.default, { key: index, value: index, primaryText: NN.description }));\n            });\n            return returnElement;\n        }\n    }, {\n        key: 'renderOptions',\n        value: function renderOptions() {\n            var _this3 = this;\n\n            var returnElement = [];\n            this.state.NN.input_descriptions.input_names.forEach(function (category, index) {\n                var newMenu = _react2.default.createElement(\n                    _SelectField2.default,\n                    {\n                        key: index,\n                        value: _this3.state.options[category],\n                        onChange: function onChange(e, val) {\n                            return console.log(e, val);\n                        },\n                        floatingLabelText: category },\n                    _this3.renderOptionItems(index)\n                );\n                returnElement.push(newMenu);\n            });\n            return returnElement;\n        }\n    }, {\n        key: 'renderOptionItems',\n        value: function renderOptionItems(categoryIndex) {\n            var menuItems = [];\n            this.state.NN.input_descriptions.possible_inputs.string[categoryIndex].forEach(function (input, index) {\n                var newItem = _react2.default.createElement(_MenuItem2.default, { key: index, value: input, primaryText: input });\n                menuItems.push(newItem);\n            });\n            return menuItems;\n        }\n    }, {\n        key: 'setOptions',\n        value: function setOptions() {\n            var _this4 = this;\n\n            var newOptions = {};\n            this.state.NN.input_descriptions.input_names.forEach(function (category, index) {\n                newOptions[category] = _this4.state.NN.input_descriptions.possible_inputs.string[index][0];\n            });\n            this.setState({ options: newOptions }, function () {\n                return console.log(_this4.state);\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this5 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'card-content-container' },\n                _react2.default.createElement(\n                    _IconButton2.default,\n                    { className: 'close-button', onTouchTap: function onTouchTap() {\n                            return _this5.props.closeCard();\n                        } },\n                    _react2.default.createElement(_close2.default, null)\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'card-content create-simple-net' },\n                    _react2.default.createElement(\n                        'h1',\n                        null,\n                        'Activate and Test!'\n                    ),\n                    _react2.default.createElement('hr', null),\n                    _react2.default.createElement(\n                        'h2',\n                        null,\n                        'Choose one of your trained networks!'\n                    ),\n                    _react2.default.createElement(\n                        _DropDownMenu2.default,\n                        { value: this.state.NN_key, onChange: this.loadTestNetwork.bind(this) },\n                        this.renderNetworkList()\n                    ),\n                    this.state.NN_key >= 0 && _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'h2',\n                            null,\n                            'Choose from your options'\n                        ),\n                        this.renderOptions(),\n                        _react2.default.createElement(\n                            'h2',\n                            null,\n                            'Network output'\n                        ),\n                        this.activateNetwork()\n                    )\n                )\n            );\n        }\n    }]);\n\n    return TestANetCard;\n}(_react2.default.Component);\n\nTestANetCard.propTypes = {\n    closeCard: _propTypes2.default.func,\n    networks: _propTypes2.default.array\n};\n\nexports.default = TestANetCard;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzczLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvcGxheS9wbGF5Z3JvdW5kL1Rlc3RBTmV0Q2FyZC5qcz84OTI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvSWNvbkJ1dHRvbic7XG5pbXBvcnQgTmF2aWdhdGlvbkNsb3NlIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL2Nsb3NlJztcbmltcG9ydCBEcm9wRG93bk1lbnUgZnJvbSAnbWF0ZXJpYWwtdWkvRHJvcERvd25NZW51JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdtYXRlcmlhbC11aS9NZW51SXRlbSc7XG5pbXBvcnQgU2VsZWN0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvU2VsZWN0RmllbGQnO1xuXG5jbGFzcyBUZXN0QU5ldENhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIE5OOiB7fSxcbiAgICAgICAgICAgIE5OX2tleTogLTEsXG4gICAgICAgICAgICBvcHRpb25zOiB7fVxuICAgICAgICB9O1xuICAgIH1cbiAgICBsb2FkVGVzdE5ldHdvcmsoZSwga2V5LCB2YWwpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Tk46IHRoaXMucHJvcHMubmV0d29ya3NbdmFsXSwgTk5fa2V5OiB2YWx9LCAoKT0+dGhpcy5zZXRPcHRpb25zKCkpO1xuICAgIH1cbiAgICByZW5kZXJOZXR3b3JrTGlzdCgpIHtcbiAgICAgICAgY29uc3QgcmV0dXJuRWxlbWVudCA9IFs8TWVudUl0ZW0ga2V5PXstMX0gdmFsdWU9ey0xfSBwcmltYXJ5VGV4dD17J0Nob29zZSBvbmUgb2YgeW91ciBuZXR3b3Jrcyd9IC8+XTtcbiAgICAgICAgdGhpcy5wcm9wcy5uZXR3b3Jrcy5mb3JFYWNoKChOTiwgaW5kZXgpPT57XG4gICAgICAgICAgICByZXR1cm5FbGVtZW50LnB1c2goPE1lbnVJdGVtIGtleT17aW5kZXh9IHZhbHVlPXtpbmRleH0gcHJpbWFyeVRleHQ9e05OLmRlc2NyaXB0aW9ufSAvPik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmV0dXJuRWxlbWVudDtcbiAgICB9XG4gICAgcmVuZGVyT3B0aW9ucygpIHtcbiAgICAgICAgY29uc3QgcmV0dXJuRWxlbWVudCA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlLk5OLmlucHV0X2Rlc2NyaXB0aW9ucy5pbnB1dF9uYW1lcy5mb3JFYWNoKChjYXRlZ29yeSwgaW5kZXgpPT57XG4gICAgICAgICAgICBjb25zdCBuZXdNZW51ID0gICAoXG4gICAgICAgICAgICAgICAgPFNlbGVjdEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm9wdGlvbnNbY2F0ZWdvcnldfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIHZhbCkgPT4gY29uc29sZS5sb2coZSwgdmFsKX1cbiAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9e2NhdGVnb3J5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlck9wdGlvbkl0ZW1zKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RGaWVsZD4pO1xuICAgICAgICAgICAgcmV0dXJuRWxlbWVudC5wdXNoKG5ld01lbnUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJldHVybkVsZW1lbnQ7XG4gICAgfVxuICAgIHJlbmRlck9wdGlvbkl0ZW1zKGNhdGVnb3J5SW5kZXgpIHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW1zID0gW107XG4gICAgICAgIHRoaXMuc3RhdGUuTk4uaW5wdXRfZGVzY3JpcHRpb25zLnBvc3NpYmxlX2lucHV0cy5zdHJpbmdbY2F0ZWdvcnlJbmRleF0uZm9yRWFjaCgoaW5wdXQsIGluZGV4KT0+e1xuICAgICAgICAgICAgY29uc3QgbmV3SXRlbSA9IDxNZW51SXRlbSBrZXk9e2luZGV4fSB2YWx1ZT17aW5wdXR9IHByaW1hcnlUZXh0PXtpbnB1dH0gLz47XG4gICAgICAgICAgICBtZW51SXRlbXMucHVzaChuZXdJdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtZW51SXRlbXM7XG4gICAgfVxuICAgIHNldE9wdGlvbnMoKSB7XG4gICAgICAgIGNvbnN0IG5ld09wdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZS5OTi5pbnB1dF9kZXNjcmlwdGlvbnMuaW5wdXRfbmFtZXMuZm9yRWFjaCgoY2F0ZWdvcnksIGluZGV4KT0+e1xuICAgICAgICAgICAgbmV3T3B0aW9uc1tjYXRlZ29yeV0gPSB0aGlzLnN0YXRlLk5OLmlucHV0X2Rlc2NyaXB0aW9ucy5wb3NzaWJsZV9pbnB1dHMuc3RyaW5nW2luZGV4XVswXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wdGlvbnM6IG5ld09wdGlvbnN9LCAoKT0+Y29uc29sZS5sb2codGhpcy5zdGF0ZSkpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT1cImNsb3NlLWJ1dHRvblwiIG9uVG91Y2hUYXA9eygpPT50aGlzLnByb3BzLmNsb3NlQ2FyZCgpfSA+PE5hdmlnYXRpb25DbG9zZSAvPjwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudCBjcmVhdGUtc2ltcGxlLW5ldFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+QWN0aXZhdGUgYW5kIFRlc3QhPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5DaG9vc2Ugb25lIG9mIHlvdXIgdHJhaW5lZCBuZXR3b3JrcyE8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcERvd25NZW51IHZhbHVlPXt0aGlzLnN0YXRlLk5OX2tleX0gb25DaGFuZ2U9e3RoaXMubG9hZFRlc3ROZXR3b3JrLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlck5ldHdvcmtMaXN0KCl9XG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcERvd25NZW51PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5OTl9rZXkgPj0gMCAmJiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkNob29zZSBmcm9tIHlvdXIgb3B0aW9uczwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJPcHRpb25zKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+TmV0d29yayBvdXRwdXQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuYWN0aXZhdGVOZXR3b3JrKCl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuVGVzdEFOZXRDYXJkLnByb3BUeXBlcyA9IHtcbiAgICBjbG9zZUNhcmQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG5ldHdvcmtzOiBQcm9wVHlwZXMuYXJyYXlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RBTmV0Q2FyZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb21wb25lbnRzL3BsYXkvcGxheWdyb3VuZC9UZXN0QU5ldENhcmQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQU9BO0FBQ0E7OztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBUEE7QUFGQTtBQWtCQTs7OztBQXJFQTtBQUNBO0FBdUVBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})