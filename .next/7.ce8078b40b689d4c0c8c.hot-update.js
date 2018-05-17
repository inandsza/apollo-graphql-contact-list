webpackHotUpdate(7,{

/***/ "./pages/view.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag__ = __webpack_require__("./node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__("./components/Layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Contact__ = __webpack_require__("./components/Contact/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_apollo__ = __webpack_require__("./lib/apollo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__propTypes_Contact__ = __webpack_require__("./propTypes/Contact/index.js");
var _jsxFileName = "/Users/sina/Documents/GitHub/react-redux-graphql-contact-list/pages/view.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query ContactQuery($id: ID) {\n    Contact(id: $id) {\n      id\n      firstName\n      lastName\n      phoneNumbers {\n        number\n        label\n      }\n    }\n  }\n"]);

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










var ContactPage = function ContactPage(_ref) {
  var contactQuery = _ref.contactQuery;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Contact__["a" /* default */], _extends({
    viewPage: true,
    isLoading: contactQuery.loading
  }, contactQuery.Contact, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  })));
};

ContactPage.propTypes = {
  contactQuery: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["shape"])({
    isLoading: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"].isRequired,
    Contact: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["shape"])(__WEBPACK_IMPORTED_MODULE_7__propTypes_Contact__["a" /* contactType */])
  }).isRequired
};
var contactQuery = __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(_templateObject);

var _default = Object(__WEBPACK_IMPORTED_MODULE_6__lib_apollo__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(contactQuery, {
  name: 'contactQuery',
  options: function options(_ref2) {
    var url = _ref2.url;
    return {
      fetchPolicy: 'network-only',
      variables: {
        id: url.query.id
      }
    };
  }
})(ContactPage));

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ContactPage, "ContactPage", "/Users/sina/Documents/GitHub/react-redux-graphql-contact-list/pages/view.js");
  reactHotLoader.register(contactQuery, "contactQuery", "/Users/sina/Documents/GitHub/react-redux-graphql-contact-list/pages/view.js");
  reactHotLoader.register(_default, "default", "/Users/sina/Documents/GitHub/react-redux-graphql-contact-list/pages/view.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/view")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.ce8078b40b689d4c0c8c.hot-update.js.map