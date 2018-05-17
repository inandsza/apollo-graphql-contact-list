webpackHotUpdate(7,{

/***/ "./components/Contact/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Card__ = __webpack_require__("./node_modules/material-ui/Card/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_RaisedButton__ = __webpack_require__("./node_modules/material-ui/RaisedButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_RaisedButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_RaisedButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_graphql_tag__ = __webpack_require__("./node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_Button__ = __webpack_require__("./components/shared/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__propTypes_Contact__ = __webpack_require__("./propTypes/Contact/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_withMUI__ = __webpack_require__("./lib/withMUI.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_css__ = __webpack_require__("./components/Contact/styles.css.js");
var _jsxFileName = "/Users/sina/Documents/GitHub/react-redux-graphql-contact-list/components/Contact/index.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  mutation deleteContact($id: ID!) {\n    deleteContact(id: $id) {\n      id\n    }\n  }\n"]);

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var placeholders = ['https://semantic-ui.com/images/avatar2/large/elyse.png', 'https://semantic-ui.com/images/avatar2/large/matthew.png', 'https://semantic-ui.com/images/avatar2/large/kristy.png'];

var Contact = function Contact(_ref) {
  var firstName = _ref.firstName,
      lastName = _ref.lastName,
      phoneNumbers = _ref.phoneNumbers,
      id = _ref.id,
      viewPage = _ref.viewPage,
      deleteContact = _ref.deleteContact;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_Card__["Card"], {
    style: __WEBPACK_IMPORTED_MODULE_8__styles_css__["a" /* styles */].card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_Card__["CardHeader"], {
    title: "".concat(firstName, " ").concat(lastName),
    subtitle: phoneNumbers.map(function (p) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, p.number, " / ", p.label);
    }),
    avatar: placeholders[Math.floor(Math.random() * placeholders.length)] // for presentational purposes
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_Card__["CardActions"], {
    style: __WEBPACK_IMPORTED_MODULE_8__styles_css__["a" /* styles */].actions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, !viewPage && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__shared_Button__["a" /* default */], {
    link: "/view?id=".concat(id),
    as: "/view/".concat(id),
    label: "View",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__shared_Button__["a" /* default */], {
    link: "/edit?id=".concat(id),
    as: "/edit/".concat(id),
    label: "Edit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_RaisedButton___default.a, {
    label: "Delete",
    primary: true,
    onClick: function onClick() {
      return deleteContact(id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  })));
};

Contact.propTypes = _objectSpread({}, __WEBPACK_IMPORTED_MODULE_6__propTypes_Contact__["a" /* contactType */]);
var deleteContact = __WEBPACK_IMPORTED_MODULE_4_graphql_tag___default()(_templateObject);
var withQuery = Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["graphql"])(deleteContact, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      deleteContact: function deleteContact(id) {
        return mutate({
          variables: {
            id: id
          },
          updateQueries: {
            allContacts: function allContacts(previousResult, _ref3) {
              var mutationResult = _ref3.mutationResult;
              var deletedContact = mutationResult.data.deleteContact;
              var allContacts = previousResult.allContacts;
              var deletedIndex = previousResult.allContacts.findIndex(function (p) {
                return p.id === deletedContact.id;
              });

              var newAllContact = _toConsumableArray(allContacts.slice(0, deletedIndex)).concat(_toConsumableArray(allContacts.slice(deletedIndex + 1, allContacts.length)));

              return _objectSpread({}, previousResult, {
                allContacts: newAllContact
              });
            }
          }
        });
      }
    };
  }
});

var _default = withQuery(Object(__WEBPACK_IMPORTED_MODULE_7__lib_withMUI__["a" /* default */])(Contact));

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(placeholders, "placeholders", "/Users/sina/Documents/GitHub/react-redux-graphql-contact-list/components/Contact/index.js");
  reactHotLoader.register(Contact, "Contact", "/Users/sina/Documents/GitHub/react-redux-graphql-contact-list/components/Contact/index.js");
  reactHotLoader.register(deleteContact, "deleteContact", "/Users/sina/Documents/GitHub/react-redux-graphql-contact-list/components/Contact/index.js");
  reactHotLoader.register(withQuery, "withQuery", "/Users/sina/Documents/GitHub/react-redux-graphql-contact-list/components/Contact/index.js");
  reactHotLoader.register(_default, "default", "/Users/sina/Documents/GitHub/react-redux-graphql-contact-list/components/Contact/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.2d021d8ea83b983c3a3a.hot-update.js.map