webpackHotUpdate(4,{

/***/ "./components/AddContact/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag__ = __webpack_require__("./node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Card__ = __webpack_require__("./node_modules/material-ui/Card/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Divider__ = __webpack_require__("./node_modules/material-ui/Divider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_TextField__ = __webpack_require__("./node_modules/material-ui/TextField/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_TextField__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_RaisedButton__ = __webpack_require__("./node_modules/material-ui/RaisedButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_RaisedButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_RaisedButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__state_hoc__ = __webpack_require__("./components/AddContact/state.hoc.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_css__ = __webpack_require__("./components/AddContact/styles.css.js");
var _jsxFileName = "/Users/sina/Documents/GitHub/react-redux-graphql-contact-list/components/AddContact/index.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  mutation createContact(\n    $firstName: String!,\n    $lastName: String!,\n    $phoneNumbers: [PhoneNumber!]!,\n  ) {\n    createContact(\n      firstName: $firstName\n      lastName: $lastName\n      phoneNumbers: $phoneNumbers\n    ) {\n      id\n      firstName\n      lastName\n      phoneNumbers {\n        number\n        label\n      }\n      createdAt\n    }\n  }\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  mutation updateContact($id: ID!, $firstName: String!, $lastName: String!, $PhoneNumbers: [PhoneNumber]!) {\n    updateContact(id: $id, firstName: $firstName, lastName: $lastName, number: $number, label: $label) {\n      id\n      firstName\n      lastName\n      phoneNumber\n      updatedAt\n    }\n  }\n"]);

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
      phoneNumbers = _ref.phoneNumbers;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
    noValidate: true,
    autoComplete: "off",
    onSubmit: function onSubmit(e) {
      e.preventDefault();

      if (id) {
        updateContact(id, firstName, lastName, {
          phoneNumbers: [phoneNumbers]
        });
      } else {
        createContact(firstName, lastName, [phoneNumbers]);
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Card__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Card__["CardHeader"], {
    title: "".concat(id ? 'Edit' : 'Add', " a contact"),
    subtitle: "Here you can ".concat(id ? 'edit' : 'add', " a contact"),
    avatar: placeholders[1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Divider___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Divider___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Divider___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Card__["CardActions"], {
    style: __WEBPACK_IMPORTED_MODULE_9__styles_css__["a" /* styles */].actions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_RaisedButton___default.a, {
    label: "Submit",
    type: "submit",
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
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

var _default = withQuery(AddContact);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(placeholders, "placeholders", "/Users/sina/Documents/GitHub/react-redux-graphql-contact-list/components/AddContact/index.js");
  reactHotLoader.register(AddContact, "AddContact", "/Users/sina/Documents/GitHub/react-redux-graphql-contact-list/components/AddContact/index.js");
  reactHotLoader.register(createContact, "createContact", "/Users/sina/Documents/GitHub/react-redux-graphql-contact-list/components/AddContact/index.js");
  reactHotLoader.register(updateContact, "updateContact", "/Users/sina/Documents/GitHub/react-redux-graphql-contact-list/components/AddContact/index.js");
  reactHotLoader.register(withQuery, "withQuery", "/Users/sina/Documents/GitHub/react-redux-graphql-contact-list/components/AddContact/index.js");
  reactHotLoader.register(_default, "default", "/Users/sina/Documents/GitHub/react-redux-graphql-contact-list/components/AddContact/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.6735a4c7d671218c26b7.hot-update.js.map