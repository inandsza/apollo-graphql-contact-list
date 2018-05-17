module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AddContact/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Card__ = __webpack_require__("material-ui/Card");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Divider__ = __webpack_require__("material-ui/Divider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_TextField__ = __webpack_require__("material-ui/TextField");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_TextField__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_RaisedButton__ = __webpack_require__("material-ui/RaisedButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_RaisedButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_RaisedButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__state_hoc__ = __webpack_require__("./components/AddContact/state.hoc.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_css__ = __webpack_require__("./components/AddContact/styles.css.js");
var _jsxFileName = "/Users/sina/Documents/GitHub/react-redux-graphql-contact-list/components/AddContact/index.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  mutation createContact(\n    $firstName: String!,\n    $lastName: String!,\n    $phoneNumbers: [PhoneNumber!]!,\n  ) {\n    createContact(\n      firstName: $firstName\n      lastName: $lastName\n      phoneNumbers: $phoneNumbers\n    ) {\n      id\n      firstName\n      lastName\n      phoneNumbers {\n        number\n        label\n      }\n      createdAt\n    }\n  }\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  mutation updateContact($id: ID!, $firstName: String!, $lastName: String!, $PhoneNumbers: [PhoneNumber]!) {\n    updateContact(id: $id, firstName: $firstName, lastName: $lastName, number: $number, label: $label) {\n      id\n      firstName\n      lastName\n      phoneNumber\n      updatedAt\n    }\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var placeholders = ['https://semantic-ui.com/images/avatar2/large/elyse.png', 'https://semantic-ui.com/images/avatar2/large/matthew.png', 'https://semantic-ui.com/images/avatar2/large/kristy.png'];
var AddContact = Object(__WEBPACK_IMPORTED_MODULE_8__state_hoc__["a" /* default */])(function (_ref) {
  var _onChange = _ref.onChange,
      createContact = _ref.createContact,
      updateContact = _ref.updateContact,
      id = _ref.id,
      firstName = _ref.firstName,
      lastName = _ref.lastName,
      phoneNumbers = _ref.phoneNumbers,
      errors = _ref.errors;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
    noValidate: true,
    autoComplete: "off",
    onSubmit: function onSubmit(e) {
      e.preventDefault();

      if (id) {
        updateContact(id, firstName, lastName, [phoneNumbers]);
      } else {
        createContact(firstName, lastName, [phoneNumbers]);
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Card__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Card__["CardHeader"], {
    title: "".concat(id ? 'Edit' : 'Add', " a contact"),
    subtitle: "Here you can ".concat(id ? 'edit' : 'add', " a contact"),
    avatar: placeholders[1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_TextField___default.a, {
    hintText: "First name",
    style: __WEBPACK_IMPORTED_MODULE_9__styles_css__["a" /* styles */].textField,
    underlineShow: false,
    value: firstName,
    onChange: function onChange(e) {
      return _onChange({
        firstName: e.target.value
      });
    },
    errorText: errors.firstName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Divider___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_TextField___default.a, {
    hintText: "Last name",
    style: __WEBPACK_IMPORTED_MODULE_9__styles_css__["a" /* styles */].textField,
    underlineShow: false,
    value: lastName,
    onChange: function onChange(e) {
      return _onChange({
        lastName: e.target.value
      });
    },
    errorText: errors.lastName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Divider___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_TextField___default.a, {
    hintText: "Phone Number",
    style: __WEBPACK_IMPORTED_MODULE_9__styles_css__["a" /* styles */].textField,
    underlineShow: false,
    value: phoneNumbers && phoneNumbers.number,
    onChange: function onChange(e) {
      return _onChange({
        phoneNumbers: _objectSpread({}, phoneNumbers, {
          number: e.target.value
        })
      });
    },
    errorText: errors.phoneNumbers && errors.phoneNumbers[0].number,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_TextField___default.a, {
    hintText: "Phone Label",
    style: __WEBPACK_IMPORTED_MODULE_9__styles_css__["a" /* styles */].textField,
    underlineShow: false,
    value: phoneNumbers && phoneNumbers.label,
    onChange: function onChange(e) {
      return _onChange({
        phoneNumbers: _objectSpread({}, phoneNumbers, {
          label: e.target.value
        })
      });
    },
    errorText: errors.phoneNumbers && errors.phoneNumbers[0].number,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Divider___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Card__["CardActions"], {
    style: __WEBPACK_IMPORTED_MODULE_9__styles_css__["a" /* styles */].actions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_RaisedButton___default.a, {
    label: "Submit",
    type: "submit",
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }))));
});
AddContact.propTypes = {
  onChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  onSubmit: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"]
};
var createContact = __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(_templateObject);
var updateContact = __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(_templateObject2);
var withQuery = Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(createContact, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      createContact: function createContact(firstName, lastName, phoneNumbers) {
        return mutate({
          variables: {
            firstName: firstName,
            lastName: lastName,
            phoneNumbers: phoneNumbers
          },
          refetchQueries: ['allContacts']
        });
      }
    };
  }
}), Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(updateContact, {
  props: function props(_ref3) {
    var mutate = _ref3.mutate;
    return {
      updateContact: function updateContact(id, firstName, lastName, phoneNumber) {
        return mutate({
          variables: {
            id: id,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber
          }
        });
      }
    };
  }
}));
/* harmony default export */ __webpack_exports__["a"] = (withQuery(AddContact));

/***/ }),

/***/ "./components/AddContact/state.hoc.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propTypes_Contact__ = __webpack_require__("./propTypes/Contact/index.js");
var _jsxFileName = "/Users/sina/Documents/GitHub/react-redux-graphql-contact-list/components/AddContact/state.hoc.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




/* harmony default export */ __webpack_exports__["a"] = (function (Component) {
  var AddContact =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(AddContact, _React$Component);

    function AddContact() {
      var _ref;

      var _temp, _this;

      _classCallCheck(this, AddContact);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = AddContact.__proto__ || Object.getPrototypeOf(AddContact)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: _objectSpread({}, _this.props.realContact, {
          errors: {}
        })
      }), Object.defineProperty(_assertThisInitialized(_this), "onChange", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function value(contact) {
          return _this.setState(_objectSpread({}, _this.state.contact, contact));
        }
      }), _temp));
    }

    _createClass(AddContact, [{
      key: "render",
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, this.state, this.props, {
          onChange: this.onChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }));
      }
    }]);

    return AddContact;
  }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

  AddContact.propTypes = {
    realContact: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["shape"])(__WEBPACK_IMPORTED_MODULE_2__propTypes_Contact__["a" /* contactType */]).isRequired
  };
  return AddContact;
});

/***/ }),

/***/ "./components/AddContact/styles.css.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
var styles = {
  textField: {
    marginLeft: 20
  },
  actions: {
    textAlign: 'center',
    margin: '16px 0'
  }
};
/* unused harmony default export */ var _unused_webpack_default_export = (styles);

/***/ }),

/***/ "./components/Layout/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_AppBar__ = __webpack_require__("material-ui/AppBar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_RaisedButton__ = __webpack_require__("material-ui/RaisedButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_RaisedButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_RaisedButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_withMUI__ = __webpack_require__("./lib/withMUI.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_css__ = __webpack_require__("./components/Layout/styles.css.js");
var _jsxFileName = "/Users/sina/Documents/GitHub/react-redux-graphql-contact-list/components/Layout/index.js";








var Title = function Title() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    style: __WEBPACK_IMPORTED_MODULE_6__styles_css__["a" /* default */].title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Contact List"));
};

var ElementRightButton = function ElementRightButton(_ref) {
  var href = _ref.href,
      label = _ref.label;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_RaisedButton___default.a, {
    style: __WEBPACK_IMPORTED_MODULE_6__styles_css__["a" /* default */].create,
    overlayStyle: {
      padding: '0 16px'
    },
    secondary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, label));
};

var IconElementRight = function IconElementRight() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ElementRightButton, {
    href: "/create",
    label: "Create a contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ElementRightButton, {
    href: "/",
    label: "Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }));
};

var Layout = function Layout(_ref2) {
  var children = _ref2.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_AppBar___default.a, {
    title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      }
    }),
    iconElementRight: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(IconElementRight, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }), children);
};

Layout.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["node"].isRequired
};
ElementRightButton.propTypes = {
  href: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"].isRequired,
  label: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"].isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5__lib_withMUI__["a" /* default */])(Layout));

/***/ }),

/***/ "./components/Layout/styles.css.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
var styles = {
  title: {
    cursor: 'pointer'
  },
  create: {
    color: 'white',
    margin: 8
  }
};
/* harmony default export */ __webpack_exports__["a"] = (styles);

/***/ }),

/***/ "./lib/apollo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_apollo__ = __webpack_require__("next-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__ = __webpack_require__("apollo-link-http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_link_http__);


var config = {
  link: new __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__["HttpLink"]({
    uri: 'https://api.graph.cool/simple/v1/cjh90k2zk3b340183cxd6sk8i',
    // Server URL (must be absolute)
    opts: {
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`

    }
  })
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_next_apollo__["withData"])(config));

/***/ }),

/***/ "./lib/theme.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PRIMARY_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PRIMARY_COLOR_TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PRIMARY_COLOR_THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACCENT_COLOR_ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ACCENT_COLOR_TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ACCENT_COLOR_THREE; });
var PRIMARY_COLOR = '#55acee';
var PRIMARY_COLOR_TWO = '#88cde9';
var PRIMARY_COLOR_THREE = '#1e6e87';
var ACCENT_COLOR_ONE = '#7ed6df';
var ACCENT_COLOR_TWO = '#686de0';
var ACCENT_COLOR_THREE = '#686de0';

/***/ }),

/***/ "./lib/withMUI.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles_MuiThemeProvider__ = __webpack_require__("material-ui/styles/MuiThemeProvider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles_getMuiTheme__ = __webpack_require__("material-ui/styles/getMuiTheme");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles_getMuiTheme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles_getMuiTheme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_tap_event_plugin__ = __webpack_require__("react-tap-event-plugin");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_tap_event_plugin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_tap_event_plugin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme__ = __webpack_require__("./lib/theme.js");

var _jsxFileName = "/Users/sina/Documents/GitHub/react-redux-graphql-contact-list/lib/withMUI.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global navigator */







try {
  __WEBPACK_IMPORTED_MODULE_4_react_tap_event_plugin___default()();
} catch (e) {// Can only be called once per application lifecycle
}

var withMaterialUI = function withMaterialUI(C) {
  var HOC =
  /*#__PURE__*/
  function (_Component) {
    _inherits(HOC, _Component);

    function HOC() {
      _classCallCheck(this, HOC);

      return _possibleConstructorReturn(this, (HOC.__proto__ || Object.getPrototypeOf(HOC)).apply(this, arguments));
    }

    _createClass(HOC, [{
      key: "render",
      value: function render() {
        var userAgent = this.props.userAgent;
        var Lato = 'lato, sans-serif';
        var muiTheme = __WEBPACK_IMPORTED_MODULE_3_material_ui_styles_getMuiTheme___default()({
          fontFamily: Lato,
          palette: {
            primary1Color: __WEBPACK_IMPORTED_MODULE_6__theme__["d" /* PRIMARY_COLOR */],
            primary2Color: __WEBPACK_IMPORTED_MODULE_6__theme__["f" /* PRIMARY_COLOR_TWO */],
            primary3Color: __WEBPACK_IMPORTED_MODULE_6__theme__["e" /* PRIMARY_COLOR_THREE */],
            accent1Color: __WEBPACK_IMPORTED_MODULE_6__theme__["a" /* ACCENT_COLOR_ONE */],
            accent2Color: __WEBPACK_IMPORTED_MODULE_6__theme__["c" /* ACCENT_COLOR_TWO */],
            accent3Color: __WEBPACK_IMPORTED_MODULE_6__theme__["b" /* ACCENT_COLOR_THREE */]
          },
          appBar: {
            height: 50
          }
        }, {
          userAgent: userAgent
        });
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_head___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, "Contact List - Sina Zand"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
          name: "viewport",
          content: "initial-scale=1.0, width=device-width",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
          href: "https://fonts.googleapis.com/css?family=Lato",
          rel: "stylesheet",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles_MuiThemeProvider___default.a, {
          muiTheme: muiTheme,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(C, _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }))));
      }
    }], [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
          var req, userAgent;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  req = ctx.req;
                  userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
                  return _context.abrupt("return", {
                    userAgent: userAgent
                  });

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }]);

    return HOC;
  }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

  return HOC;
};

/* harmony default export */ __webpack_exports__["a"] = (withMaterialUI);

/***/ }),

/***/ "./pages/create.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_apollo__ = __webpack_require__("./lib/apollo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_AddContact__ = __webpack_require__("./components/AddContact/index.js");
var _jsxFileName = "/Users/sina/Documents/GitHub/react-redux-graphql-contact-list/pages/create.js";





var CreateForm = function CreateForm(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_AddContact__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_2__lib_apollo__["a" /* default */])(CreateForm));

/***/ }),

/***/ "./propTypes/Contact/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return contactType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);

var contactType = {
  id: __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  firstName: __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  lastName: __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  phoneNumber: __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]
};
/* unused harmony default export */ var _unused_webpack_default_export = (contactType);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/create.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "apollo-link-http":
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "graphql-tag":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "material-ui/AppBar":
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),

/***/ "material-ui/Card":
/***/ (function(module, exports) {

module.exports = require("material-ui/Card");

/***/ }),

/***/ "material-ui/Divider":
/***/ (function(module, exports) {

module.exports = require("material-ui/Divider");

/***/ }),

/***/ "material-ui/RaisedButton":
/***/ (function(module, exports) {

module.exports = require("material-ui/RaisedButton");

/***/ }),

/***/ "material-ui/TextField":
/***/ (function(module, exports) {

module.exports = require("material-ui/TextField");

/***/ }),

/***/ "material-ui/styles/MuiThemeProvider":
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),

/***/ "material-ui/styles/getMuiTheme":
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/getMuiTheme");

/***/ }),

/***/ "next-apollo":
/***/ (function(module, exports) {

module.exports = require("next-apollo");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-tap-event-plugin":
/***/ (function(module, exports) {

module.exports = require("react-tap-event-plugin");

/***/ })

/******/ });
//# sourceMappingURL=create.js.map