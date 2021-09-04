(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@fluentui/react"), require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@fluentui/react", "prop-types", "react"], factory);
	else if(typeof exports === 'object')
		exports["PasswordRecoveryBox"] = factory(require("@fluentui/react"), require("prop-types"), require("react"));
	else
		root["PasswordRecoveryBox"] = factory(root["FluentUIReact"], root["PropTypes"], root["React"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__6__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_0__);

var BackButtonPositions = {
  left: lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_0__.BackButtonPositions.left,
  right: lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_0__.BackButtonPositions.right
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackButtonPositions);

/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(4), __webpack_require__(5), __webpack_require__(6));
	else {}
})(self, function(__WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__17__, __WEBPACK_EXTERNAL_MODULE__16__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_869__) => {

"use strict";
__nested_webpack_require_869__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_869__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_869__(3);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_869__.n(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__);

var PasswordChangeBoxMessageType = {
  info: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.info,
  error: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.error,
  blocked: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.blocked,
  severeWarning: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.severeWarning,
  success: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.success,
  warning: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.warning
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordChangeBoxMessageType);

/***/ }),
/* 3 */
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_2167__) => {

"use strict";
__nested_webpack_require_2167__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_2167__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var BackButtonPositions = {
  left: 'left',
  right: 'right'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackButtonPositions);

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_2636__) => {

"use strict";
__nested_webpack_require_2636__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_2636__.d(__webpack_exports__, {
/* harmony export */   "passwordChangeBoxMessageTypeToOfficeUiMessageType": () => (/* binding */ passwordChangeBoxMessageTypeToOfficeUiMessageType),
/* harmony export */   "successMessage": () => (/* binding */ successMessage),
/* harmony export */   "errorMessage": () => (/* binding */ errorMessage),
/* harmony export */   "warningMessage": () => (/* binding */ warningMessage),
/* harmony export */   "infoMessage": () => (/* binding */ infoMessage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_2636__(6);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_2636__(3);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_2636__.n(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PasswordChangeBoxMessageType_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_2636__(2);


var _messageTypeMapping;



var messageTypeMapping = (_messageTypeMapping = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_messageTypeMapping, _PasswordChangeBoxMessageType_js__WEBPACK_IMPORTED_MODULE_2__.default.info, _fluentui_react__WEBPACK_IMPORTED_MODULE_1__.MessageBarType.info), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_messageTypeMapping, _PasswordChangeBoxMessageType_js__WEBPACK_IMPORTED_MODULE_2__.default.error, _fluentui_react__WEBPACK_IMPORTED_MODULE_1__.MessageBarType.error), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_messageTypeMapping, _PasswordChangeBoxMessageType_js__WEBPACK_IMPORTED_MODULE_2__.default.warning, _fluentui_react__WEBPACK_IMPORTED_MODULE_1__.MessageBarType.warning), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_messageTypeMapping, _PasswordChangeBoxMessageType_js__WEBPACK_IMPORTED_MODULE_2__.default.severeWarning, _fluentui_react__WEBPACK_IMPORTED_MODULE_1__.MessageBarType.severeWarning), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_messageTypeMapping, _PasswordChangeBoxMessageType_js__WEBPACK_IMPORTED_MODULE_2__.default.success, _fluentui_react__WEBPACK_IMPORTED_MODULE_1__.MessageBarType.success), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_messageTypeMapping, _PasswordChangeBoxMessageType_js__WEBPACK_IMPORTED_MODULE_2__.default.blocked, _fluentui_react__WEBPACK_IMPORTED_MODULE_1__.MessageBarType.blocked), _messageTypeMapping);
function passwordChangeBoxMessageTypeToOfficeUiMessageType(passwordChangeBoxMessageType) {
  var officeUiMessageType = null;

  if (!!passwordChangeBoxMessageType && messageTypeMapping.hasOwnProperty(passwordChangeBoxMessageType)) {
    officeUiMessageType = messageTypeMapping[passwordChangeBoxMessageType];
  }

  return officeUiMessageType;
}
function successMessage(message) {
  return {
    type: _PasswordChangeBoxMessageType_js__WEBPACK_IMPORTED_MODULE_2__.default.success,
    message: message
  };
}
function errorMessage(message) {
  return {
    type: _PasswordChangeBoxMessageType_js__WEBPACK_IMPORTED_MODULE_2__.default.error,
    message: message
  };
}
function warningMessage(message) {
  return {
    type: _PasswordChangeBoxMessageType_js__WEBPACK_IMPORTED_MODULE_2__.default.warning,
    message: message
  };
}
function infoMessage(message) {
  return {
    type: _PasswordChangeBoxMessageType_js__WEBPACK_IMPORTED_MODULE_2__.default.info,
    message: message
  };
}

/***/ }),
/* 6 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_6428__) => {

"use strict";
__nested_webpack_require_6428__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_6428__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_7004__) => {

"use strict";
__nested_webpack_require_7004__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_7004__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasswordChangeBox)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_7004__(8);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_7004__(9);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_7004__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_7004__(11);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_7004__(13);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_7004__(15);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_7004__(16);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__nested_webpack_require_7004__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_7004__(17);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__nested_webpack_require_7004__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_7004__(3);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__nested_webpack_require_7004__.n(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lvd_fluentui_passwordbox__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_7004__(18);
/* harmony import */ var lvd_fluentui_passwordbox__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__nested_webpack_require_7004__.n(lvd_fluentui_passwordbox__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _PasswordChangeBoxUtility_js__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_7004__(5);
/* harmony import */ var _PasswordChangeBoxDefaults_js__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_7004__(19);
/* harmony import */ var _BackButtonPositions_js__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_7004__(4);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }










var PasswordChangeBox = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(PasswordChangeBox, _React$Component);

  var _super = _createSuper(PasswordChangeBox);

  function PasswordChangeBox(props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, PasswordChangeBox);

    _this = _super.call(this, props);
    _this.state = {
      existingPassword: null,
      newPassword: null,
      confirmNewPassword: null,
      hasInteracted: false
    };
    _this._handleExistingPasswordChanged = _this._handleExistingPasswordChanged.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this._handleNewPasswordChanged = _this._handleNewPasswordChanged.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this._handleConfirmNewPasswordChanged = _this._handleConfirmNewPasswordChanged.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this._handleChangePasswordButtonClicked = _this._handleChangePasswordButtonClicked.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this._handleBackButtonClicked = _this._handleBackButtonClicked.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this._getExistingPasswordFieldErrorMessage = _this._getExistingPasswordFieldErrorMessage.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this._getNewPasswordErrorMessage = _this._getNewPasswordErrorMessage.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this._getConfirmNewPasswordErrorMessage = _this._getConfirmNewPasswordErrorMessage.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(PasswordChangeBox, [{
    key: "_isFormValid",
    value: function _isFormValid() {
      var formValues = this._getFormValues();

      var existingValuesRequired = this._isExistingPasswordRequired();

      return (!existingValuesRequired || !!formValues.existingPassword) && !!formValues.newPassword && !!formValues.confirmNewPassword && formValues.newPassword == formValues.confirmNewPassword;
    }
  }, {
    key: "_getFormValues",
    value: function _getFormValues() {
      return {
        existingPassword: this.state.existingPassword,
        newPassword: this.state.newPassword,
        confirmNewPassword: this.state.confirmNewPassword
      };
    }
  }, {
    key: "_handleExistingPasswordChanged",
    value: function _handleExistingPasswordChanged(event) {
      var _this2 = this;

      event.preventDefault();

      var oldValues = this._getFormValues();

      this.setState({
        existingPassword: event.target.value,
        hasInteracted: true
      }, function () {
        return _this2._raiseValuesChanged(oldValues);
      });
    }
  }, {
    key: "_raiseValuesChanged",
    value: function _raiseValuesChanged(oldValues) {
      var newValues = this._getFormValues();

      if (this.props.onPasswordChangeValuesChanged != null) {
        this.props.onPasswordChangeValuesChanged(oldValues, newValues);
      }
    }
  }, {
    key: "_handleNewPasswordChanged",
    value: function _handleNewPasswordChanged(oldValue, newValue) {
      var _this3 = this;

      var oldValues = this._getFormValues();

      this.setState({
        newPassword: newValue,
        confirmNewPassword: '',
        hasInteracted: true
      }, function () {
        return _this3._raiseValuesChanged(oldValues);
      });
    }
  }, {
    key: "_handleConfirmNewPasswordChanged",
    value: function _handleConfirmNewPasswordChanged(event) {
      var _this4 = this;

      event.preventDefault();

      var oldValues = this._getFormValues();

      this.setState({
        confirmNewPassword: event.target.value,
        hasInteracted: true
      }, function () {
        return _this4._raiseValuesChanged(oldValues);
      });
    }
  }, {
    key: "_handleChangePasswordButtonClicked",
    value: function _handleChangePasswordButtonClicked(event) {
      event.preventDefault();

      var values = this._getFormValues();

      if (this.props.onPasswordChangedRequested != null) {
        this.props.onPasswordChangedRequested(values);
      }
    }
  }, {
    key: "_handleBackButtonClicked",
    value: function _handleBackButtonClicked(event) {
      event.preventDefault();

      var values = this._getFormValues();

      if (this.props.onBackRequested != null) {
        this.props.onBackRequested(values);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.onPasswordChangeBoxInitialized) {
        this.props.onPasswordChangeBoxInitialized();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var values = this._getFormValues();

      if (this.props.onPasswordChangeBoxDisposed) {
        this.props.onPasswordChangeBoxDisposed(values);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        className: this._computeContainerCssClassName(),
        style: this._getStyle()
      }, this._renderTitle(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        className: "lvd-passwordchange-box-fields-container"
      }, this._renderMessage(), this._renderExistingPasswordInputField(), this._renderNewPasswordInputField(), this._renderPasswordConfirmationField()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        className: "lvd-passwordchange-box-button-container"
      }, this._renderPasswordChangeActionButton(), this._renderBackActionButtonButton(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        className: "lvd-passwordchange-box-clear"
      })));
    }
  }, {
    key: "_computeContainerCssClassName",
    value: function _computeContainerCssClassName() {
      var containerClassName = ['lvd-passwordchange-box'];

      if (this._useFramedLayout()) {
        containerClassName.push('lvd-passwordchange-box-framed');
      }

      if (this._useFixedLayout()) {
        containerClassName.push('lvd-passwordchange-box-fixed');
      }

      if (this._useCenteredLayout()) {
        containerClassName.push('lvd-passwordchange-box-centered');
      }

      var className = this._getClassName();

      if (!!className) {
        containerClassName.push(className);
      }

      return containerClassName.join(' ');
    }
  }, {
    key: "_useFramedLayout",
    value: function _useFramedLayout() {
      return this.props.hasOwnProperty('framed') ? !!this.props.framed : true;
    }
  }, {
    key: "_useFixedLayout",
    value: function _useFixedLayout() {
      return this.props.hasOwnProperty('fixed') ? !!this.props.fixed : true;
    }
  }, {
    key: "_useCenteredLayout",
    value: function _useCenteredLayout() {
      return this.props.hasOwnProperty('centered') ? !!this.props.centered : true;
    }
  }, {
    key: "_getClassName",
    value: function _getClassName() {
      return this.props.className || null;
    }
  }, {
    key: "_getStyle",
    value: function _getStyle() {
      return this.props.style || {};
    }
  }, {
    key: "_renderTitle",
    value: function _renderTitle() {
      var titleProps = this._getTitleProps();

      return titleProps.show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h4", {
        className: "lvd-passwordchange-box-header"
      }, titleProps.text);
    }
  }, {
    key: "_getTitleProps",
    value: function _getTitleProps() {
      var titleProps = this.props.titleProps || {};
      return {
        show: titleProps.hasOwnProperty('show') ? !!titleProps.show : true,
        text: titleProps.text || _PasswordChangeBoxDefaults_js__WEBPACK_IMPORTED_MODULE_11__.default.title
      };
    }
  }, {
    key: "_renderMessage",
    value: function _renderMessage() {
      var messageProps = this._getMessageProps();

      return !!messageProps.message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.MessageBar, {
        className: "lvd-passwordchange-box-message",
        messageBarType: messageProps.type,
        isMultiline: true
      }, messageProps.message);
    }
  }, {
    key: "_getMessageProps",
    value: function _getMessageProps() {
      var messageProps = this.props.messageProps || {};
      var messageType = (0,_PasswordChangeBoxUtility_js__WEBPACK_IMPORTED_MODULE_10__.passwordChangeBoxMessageTypeToOfficeUiMessageType)(messageProps.type || null);
      return {
        message: messageProps.message || null,
        type: messageType
      };
    }
  }, {
    key: "_renderExistingPasswordInputField",
    value: function _renderExistingPasswordInputField() {
      if (this._isExistingPasswordRequired()) {
        var existingPasswordProps = this._getExistingPasswordProps();

        var existingPasswordElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.TextField, {
          type: "password",
          value: this.state.existingPassword,
          label: existingPasswordProps.label,
          placeholder: existingPasswordProps.placeholder,
          description: existingPasswordProps.description,
          canRevealPassword: this._canReveal(),
          disabled: this._isDisabled(),
          readOnly: this._isReadOnly(),
          underlined: this._isUnderlined(),
          onChange: this._handleExistingPasswordChanged,
          onGetErrorMessage: this._getExistingPasswordFieldErrorMessage,
          autoComplete: "off",
          required: true
        });
        return this._renderField(existingPasswordElement);
      } else {
        return null;
      }
    }
  }, {
    key: "_getExistingPasswordProps",
    value: function _getExistingPasswordProps() {
      var existingPasswordProps = this.props.existingPasswordProps || {};
      return {
        label: existingPasswordProps.label || _PasswordChangeBoxDefaults_js__WEBPACK_IMPORTED_MODULE_11__.default.existingPassword.label,
        placeholder: existingPasswordProps.hasOwnProperty('placeholder') ? existingPasswordProps.placeholder || null : _PasswordChangeBoxDefaults_js__WEBPACK_IMPORTED_MODULE_11__.default.existingPassword.placeholder,
        description: existingPasswordProps.description || _PasswordChangeBoxDefaults_js__WEBPACK_IMPORTED_MODULE_11__.default.existingPassword.description,
        emptyErrorMessage: existingPasswordProps.emptyErrorMessage || _PasswordChangeBoxDefaults_js__WEBPACK_IMPORTED_MODULE_11__.default.existingPassword.messages.empty
      };
    }
  }, {
    key: "_getExistingPasswordFieldErrorMessage",
    value: function _getExistingPasswordFieldErrorMessage(value) {
      var existingPasswordProps = this._getExistingPasswordProps();

      return this._displayExistingPasswordEmptyErrorMessage(value) ? existingPasswordProps.emptyErrorMessage : '';
    }
  }, {
    key: "_displayExistingPasswordEmptyErrorMessage",
    value: function _displayExistingPasswordEmptyErrorMessage(value) {
      return !this._isExistingPasswordFilledIn(value) && this._displayFieldErrorMessages();
    }
  }, {
    key: "_isExistingPasswordFilledIn",
    value: function _isExistingPasswordFilledIn(existingPassword) {
      return this._isValueFilledIn(existingPassword);
    }
  }, {
    key: "_isValueFilledIn",
    value: function _isValueFilledIn(value) {
      return value != null && value.length > 0;
    }
  }, {
    key: "_displayFieldErrorMessages",
    value: function _displayFieldErrorMessages() {
      return !!this.state.hasInteracted;
    }
  }, {
    key: "_canReveal",
    value: function _canReveal() {
      return this.props.hasOwnProperty('canReveal') ? !!this.props.canReveal : true;
    }
  }, {
    key: "_isDisabled",
    value: function _isDisabled() {
      return !!this.props.disabled;
    }
  }, {
    key: "_isReadOnly",
    value: function _isReadOnly() {
      return !!this.props.readOnly;
    }
  }, {
    key: "_isUnderlined",
    value: function _isUnderlined() {
      return !!this.props.underlined;
    }
  }, {
    key: "_renderField",
    value: function _renderField(element) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        className: "lvd-passwordchange-box-field"
      }, element);
    }
  }, {
    key: "_isExistingPasswordRequired",
    value: function _isExistingPasswordRequired() {
      return !!this.props.requireExistingPassword;
    }
  }, {
    key: "_renderNewPasswordInputField",
    value: function _renderNewPasswordInputField() {
      var newPasswordProps = this._getNewPasswordProps();

      var newPasswordElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(lvd_fluentui_passwordbox__WEBPACK_IMPORTED_MODULE_9__.PasswordBox, {
        label: newPasswordProps.label,
        value: this.state.newPassword,
        placeholder: newPasswordProps.placeholder,
        description: newPasswordProps.description,
        canReveal: this._canReveal(),
        disabled: this._isDisabled(),
        readOnly: this._isReadOnly(),
        underlined: this._isUnderlined(),
        onPasswordChanged: this._handleNewPasswordChanged,
        onGetErrorMessage: this._getNewPasswordErrorMessage,
        passwordStrengthProps: newPasswordProps.passwordStrengthProps,
        passwordRulesProps: newPasswordProps.passwordRulesProps,
        required: true
      });
      return this._renderField(newPasswordElement);
    }
  }, {
    key: "_getNewPasswordProps",
    value: function _getNewPasswordProps() {
      var newPasswordProps = this.props.newPasswordProps || {};
      return {
        label: newPasswordProps.label || _PasswordChangeBoxDefaults_js__WEBPACK_IMPORTED_MODULE_11__.default.newPassword.label,
        placeholder: newPasswordProps.hasOwnProperty('placeholder') ? newPasswordProps.placeholder || null : _PasswordChangeBoxDefaults_js__WEBPACK_IMPORTED_MODULE_11__.default.newPassword.placeholder,
        description: newPasswordProps.description || _PasswordChangeBoxDefaults_js__WEBPACK_IMPORTED_MODULE_11__.default.newPassword.description,
        emptyErrorMessage: newPasswordProps.emptyErrorMessage || _PasswordChangeBoxDefaults_js__WEBPACK_IMPORTED_MODULE_11__.default.newPassword.messages.empty,
        passwordStrengthProps: newPasswordProps.passwordStrengthProps || null,
        passwordRulesProps: newPasswordProps.passwordRulesProps || null
      };
    }
  }, {
    key: "_getNewPasswordErrorMessage",
    value: function _getNewPasswordErrorMessage(value) {
      var newPasswordProps = this._getNewPasswordProps();

      return this._displayNewPasswordEmptyErrorMessage(value) ? newPasswordProps.emptyErrorMessage : '';
    }
  }, {
    key: "_displayNewPasswordEmptyErrorMessage",
    value: function _displayNewPasswordEmptyErrorMessage(value) {
      return !this._isNewPasswordFilledIn(value) && this._displayFieldErrorMessages();
    }
  }, {
    key: "_isNewPasswordFilledIn",
    value: function _isNewPasswordFilledIn(newPassword) {
      return this._isValueFilledIn(newPassword);
    }
  }, {
    key: "_renderPasswordConfirmationField",
    value: function _renderPasswordConfirmationField() {
      var confirmNewPasswordProps = this._getConfirmNewPasswordProps();

      var passwordConfirmationElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.TextField, {
        type: "password",
        value: this.state.confirmNewPassword,
        label: confirmNewPasswordProps.label,
        placeholder: confirmNewPasswordProps.placeholder,
        description: confirmNewPasswordProps.description,
        canRevealPassword: this._canReveal(),
        disabled: this._isDisabled(),
        readOnly: this._isReadOnly(),
        underlined: this._isUnderlined(),
        onChange: this._handleConfirmNewPasswordChanged,
        onGetErrorMessage: this._getConfirmNewPasswordErrorMessage,
        required: true,
        autoComplete: "off"
      });
      return this._renderField(passwordConfirmationElement);
    }
  }, {
    key: "_getConfirmNewPasswordProps",
    value: function _getConfirmNewPasswordProps() {
      var confirmNewPasswordProps = this.props.confirmNewPasswordProps || {};
      return {
        label: confirmNewPasswordProps.label || _PasswordChangeBoxDefaults_js__WEBPACK_IMPORTED_MODULE_11__.default.confirmNewPassword.label,
        placeholder: confirmNewPasswordProps.hasOwnProperty('placeholder') ? confirmNewPasswordProps.placeholder || null : _PasswordChangeBoxDefaults_js__WEBPACK_IMPORTED_MODULE_11__.default.confirmNewPassword.placeholder,
        description: confirmNewPasswordProps.description || _PasswordChangeBoxDefaults_js__WEBPACK_IMPORTED_MODULE_11__.default.confirmNewPassword.description,
        emptyErrorMessage: confirmNewPasswordProps.emptyErrorMessage || _PasswordChangeBoxDefaults_js__WEBPACK_IMPORTED_MODULE_11__.default.confirmNewPassword.messages.empty,
        mismatchErrorMessage: confirmNewPasswordProps.mismatchErrorMessage || _PasswordChangeBoxDefaults_js__WEBPACK_IMPORTED_MODULE_11__.default.confirmNewPassword.messages.mismatch
      };
    }
  }, {
    key: "_getConfirmNewPasswordErrorMessage",
    value: function _getConfirmNewPasswordErrorMessage(value) {
      var errorMessage = '';

      var confirmNewPasswordProps = this._getConfirmNewPasswordProps();

      if (this._displayFieldErrorMessages()) {
        if (this._isConfirmNewPasswordFilledIn(value)) {
          errorMessage = !this._confirmNewPasswordMatchesNewPassword(value) ? confirmNewPasswordProps.mismatchErrorMessage : '';
        } else {
          errorMessage = confirmNewPasswordProps.emptyErrorMessage;
        }
      }

      return errorMessage;
    }
  }, {
    key: "_isConfirmNewPasswordFilledIn",
    value: function _isConfirmNewPasswordFilledIn(confirmNewPassword) {
      return this._isValueFilledIn(confirmNewPassword);
    }
  }, {
    key: "_confirmNewPasswordMatchesNewPassword",
    value: function _confirmNewPasswordMatchesNewPassword(confirmNewPassword) {
      return confirmNewPassword == this.state.newPassword;
    }
  }, {
    key: "_renderPasswordChangeActionButton",
    value: function _renderPasswordChangeActionButton() {
      var enableSubmit = this._isFormValid() && !this._isDisabled();

      var passwordChangeButtonProps = this._getPasswordChangeActionButtonProps();

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.PrimaryButton, {
        disabled: !enableSubmit,
        className: "lvd-passwordchange-box-btn lvd-passwordchange-box-passwordchange-btn",
        text: passwordChangeButtonProps.label,
        onClick: this._handleChangePasswordButtonClicked
      });
    }
  }, {
    key: "_getPasswordChangeActionButtonProps",
    value: function _getPasswordChangeActionButtonProps() {
      var passwordChangeButtonProps = this.props.passwordChangeButtonProps || {};
      return {
        label: passwordChangeButtonProps.label || _PasswordChangeBoxDefaults_js__WEBPACK_IMPORTED_MODULE_11__.default.passwordChangeButton.label
      };
    }
  }, {
    key: "_renderBackActionButtonButton",
    value: function _renderBackActionButtonButton() {
      var backActionButtonProps = this._getBackActionButtonProps();

      return backActionButtonProps.show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.DefaultButton, {
        primary: false,
        className: this._computeBackActionButtonCssClassName(backActionButtonProps),
        text: backActionButtonProps.label,
        disabled: this._isDisabled(),
        onClick: this._handleBackButtonClicked
      });
    }
  }, {
    key: "_getBackActionButtonProps",
    value: function _getBackActionButtonProps() {
      var backActionButtonProps = this.props.backActionButtonProps || {};
      return {
        show: backActionButtonProps.hasOwnProperty('show') ? !!backActionButtonProps.show : true,
        label: backActionButtonProps.label || _PasswordChangeBoxDefaults_js__WEBPACK_IMPORTED_MODULE_11__.default.backActionButton.label,
        position: backActionButtonProps.position || _PasswordChangeBoxDefaults_js__WEBPACK_IMPORTED_MODULE_11__.default.backActionButton.position
      };
    }
  }, {
    key: "_computeBackActionButtonCssClassName",
    value: function _computeBackActionButtonCssClassName(backActionButtonProps) {
      var positionClassName = 'lvd-passwordchange-box-back-btn-left';
      var baseClassName = 'lvd-passwordchange-box-btn lvd-passwordchange-box-back-btn';

      if (backActionButtonProps.position == _BackButtonPositions_js__WEBPACK_IMPORTED_MODULE_12__.default.right) {
        positionClassName = 'lvd-passwordchange-box-back-btn-right';
      }

      return "".concat(baseClassName, " ").concat(positionClassName);
    }
  }]);

  return PasswordChangeBox;
}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));


PasswordChangeBox.propTypes = {
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  readOnly: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  requireExistingPassword: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  canReveal: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  underlined: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  messageProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  framed: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  fixed: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  centered: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  style: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  titleProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  existingPasswordProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  newPasswordProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  confirmNewPasswordProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  passwordChangeButtonProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  backActionButtonProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  onPasswordChangedRequested: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  onBackRequested: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  onPasswordChangeValuesChanged: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  onPasswordChangeBoxInitialized: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  onPasswordChangeBoxDisposed: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
};

/***/ }),
/* 8 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_33742__) => {

"use strict";
__nested_webpack_require_33742__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_33742__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),
/* 9 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_34237__) => {

"use strict";
__nested_webpack_require_34237__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_34237__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),
/* 10 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_35133__) => {

"use strict";
__nested_webpack_require_35133__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_35133__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),
/* 11 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_35652__) => {

"use strict";
__nested_webpack_require_35652__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_35652__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_35652__(12);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(subClass, superClass);
}

/***/ }),
/* 12 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_36552__) => {

"use strict";
__nested_webpack_require_36552__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_36552__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),
/* 13 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_37072__) => {

"use strict";
__nested_webpack_require_37072__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_37072__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_37072__(14);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_37072__(10);


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__.default)(self);
}

/***/ }),
/* 14 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_38050__) => {

"use strict";
__nested_webpack_require_38050__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_38050__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),
/* 15 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_38795__) => {

"use strict";
__nested_webpack_require_38795__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_38795__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),
/* 16 */
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__16__;

/***/ }),
/* 17 */
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__17__;

/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_39533__) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__nested_webpack_require_39533__(3), __nested_webpack_require_39533__(17), __nested_webpack_require_39533__(16));
	else {}
})(self, function(__WEBPACK_EXTERNAL_MODULE__13__, __WEBPACK_EXTERNAL_MODULE__12__, __WEBPACK_EXTERNAL_MODULE__11__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_882__) => {

__nested_webpack_require_882__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_882__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasswordBox)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_882__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_882__(4);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_882__(5);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_882__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_882__(8);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_882__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_882__(11);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__nested_webpack_require_882__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_882__(12);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__nested_webpack_require_882__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_882__(13);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__nested_webpack_require_882__.n(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _PasswordBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_882__(14);
/* harmony import */ var _StrengthIndicatorStyles_js__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_882__(15);
/* harmony import */ var _PasswordStrengthIndicator_jsx__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_882__(16);
/* harmony import */ var _PasswordStatusCallout_jsx__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_882__(22);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }









var PasswordBox = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(PasswordBox, _React$Component);

  var _super = _createSuper(PasswordBox);

  function PasswordBox(props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, PasswordBox);

    _this = _super.call(this, props);
    _this.state = {
      password: '',
      hasInteracted: false,
      showRulesCallout: true,
      canShowRulesCallout: false,
      showStrengthIndicator: true
    };
    _this._handlePasswordFocused = _this._handlePasswordFocused.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this._handlePasswordBlured = _this._handlePasswordBlured.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this._handlePasswordChanged = _this._handlePasswordChanged.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this._getPasswordFieldErrorMessage = _this._getPasswordFieldErrorMessage.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this._handlePasswordStatusCalloutDismiss = _this._handlePasswordStatusCalloutDismiss.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this._passwordBoxContainerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createRef();
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(PasswordBox, [{
    key: "_handlePasswordChanged",
    value: function _handlePasswordChanged(event) {
      var _this2 = this;

      event.preventDefault();
      var oldPassword = this.state.password;
      this.setState({
        password: event.target.value,
        hasInteracted: true
      }, function () {
        return _this2._raisePasswordChanged(oldPassword);
      });
    }
  }, {
    key: "_raisePasswordChanged",
    value: function _raisePasswordChanged(oldValue) {
      var newValue = this.state.password;

      if (this.props.onPasswordChanged != null) {
        this.props.onPasswordChanged(oldValue, newValue);
      }
    }
  }, {
    key: "_getPasswordFieldErrorMessage",
    value: function _getPasswordFieldErrorMessage(value) {
      var message = this._getEmptyErrorMessage();

      return this._displayPasswordErrorMessages(value) ? message : '';
    }
  }, {
    key: "_displayPasswordErrorMessages",
    value: function _displayPasswordErrorMessages(value) {
      return !this._isPasswordFilledIn(value) && this._displayFieldErrorMessages() && this._isRequired();
    }
  }, {
    key: "_isPasswordFilledIn",
    value: function _isPasswordFilledIn(value) {
      return value != null && value.length > 0;
    }
  }, {
    key: "_displayFieldErrorMessages",
    value: function _displayFieldErrorMessages() {
      return !!this.state.hasInteracted;
    }
  }, {
    key: "_getEmptyErrorMessage",
    value: function _getEmptyErrorMessage() {
      return this.props.emptyErrorMessage || _PasswordBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.messages.empty;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        canShowRulesCallout: true
      });

      if (this.props.onPasswordBoxInitialized != null) {
        this.props.onPasswordBoxInitialized();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var value = this.state.password;

      if (this.props.onPasswordBoxDisposed != null) {
        this.props.onPasswordBoxDisposed(value);
      }
    }
  }, {
    key: "_handlePasswordFocused",
    value: function _handlePasswordFocused(event) {
      if (!!this.state.password) {
        this.setState({
          showRulesCallout: true
        });
      }

      this.setState({
        showStrengthIndicator: true
      });

      if (this.props.onFocus != null) {
        this.props.onFocus(event);
      }
    }
  }, {
    key: "_handlePasswordBlured",
    value: function _handlePasswordBlured(event) {
      this.setState({
        showStrengthIndicator: this._shouldShowOnBlur()
      });

      if (this.props.onBlur != null) {
        this.props.onBlur(event);
      }
    }
  }, {
    key: "_shouldShowOnBlur",
    value: function _shouldShowOnBlur() {
      var strengthProps = this._getPasswordStrengthProps();

      return !strengthProps.hideOnBlur;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        className: "lvd-passwordbox-root",
        ref: this._passwordBoxContainerRef
      }, this._renderPasswordInputField(), this._renderPasswordStrengthIndicator(), this._renderPasswordRulesCallout());
    }
  }, {
    key: "_renderPasswordInputField",
    value: function _renderPasswordInputField() {
      var label = this._getLabel();

      var placeholder = this._getPlaceholder();

      var description = this._getDescription();

      var canReveal = this._canReveal();

      var disabled = this._isDisabled();

      var required = this._isRequired();

      var className = this._getClassName();

      var underlined = this._isUnderlined();

      var readOnly = this._isReadOnly();

      var autoComplete = this._isAutoComplete() ? 'on' : 'off';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.TextField, {
        type: "password",
        label: label,
        placeholder: placeholder,
        description: description,
        canRevealPassword: canReveal,
        disabled: disabled,
        required: required,
        onChange: this._handlePasswordChanged,
        onFocus: this._handlePasswordFocused,
        onBlur: this._handlePasswordBlured,
        onGetErrorMessage: this._getPasswordFieldErrorMessage,
        className: className,
        underlined: underlined,
        readOnly: readOnly,
        autoComplete: autoComplete
      });
    }
  }, {
    key: "_getLabel",
    value: function _getLabel() {
      return this.props.label || _PasswordBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.label;
    }
  }, {
    key: "_getPlaceholder",
    value: function _getPlaceholder() {
      return this.props.placeholder || _PasswordBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.placeholder;
    }
  }, {
    key: "_getDescription",
    value: function _getDescription() {
      return this.props.description || _PasswordBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.description;
    }
  }, {
    key: "_canReveal",
    value: function _canReveal() {
      return this.props.hasOwnProperty('canReveal') ? !!this.props.canReveal : true;
    }
  }, {
    key: "_isRequired",
    value: function _isRequired() {
      return !!this.props.required;
    }
  }, {
    key: "_isDisabled",
    value: function _isDisabled() {
      return !!this.props.disabled;
    }
  }, {
    key: "_getClassName",
    value: function _getClassName() {
      return this.props.className || '';
    }
  }, {
    key: "_isUnderlined",
    value: function _isUnderlined() {
      return !!this.props.underlined;
    }
  }, {
    key: "_isReadOnly",
    value: function _isReadOnly() {
      return !!this.props.readOnly;
    }
  }, {
    key: "_isAutoComplete",
    value: function _isAutoComplete() {
      return !!this.props.autoComplete;
    }
  }, {
    key: "_renderPasswordStrengthIndicator",
    value: function _renderPasswordStrengthIndicator() {
      var strengthProps = this._getPasswordStrengthProps();

      var showIndicator = this._shouldShowStrengthIndicator(strengthProps);

      return showIndicator && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_PasswordStrengthIndicator_jsx__WEBPACK_IMPORTED_MODULE_11__.default, {
        style: strengthProps.style,
        strengthPercent: strengthProps.percent,
        strengthLevel: strengthProps.level,
        strengthText: strengthProps.text
      });
    }
  }, {
    key: "_getPasswordStrengthProps",
    value: function _getPasswordStrengthProps() {
      var strengthProps = this.props.passwordStrengthProps || {};
      return {
        style: strengthProps.style || _PasswordBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.strength.style,
        percent: strengthProps.percent || 0,
        level: strengthProps.level || null,
        text: strengthProps.text || null,
        hideOnBlur: strengthProps.hasOwnProperty('hideOnBlur') ? !!strengthProps.hideOnBlur : false
      };
    }
  }, {
    key: "_shouldShowStrengthIndicator",
    value: function _shouldShowStrengthIndicator(strengthProps) {
      return !!strengthProps.style && strengthProps.style != _StrengthIndicatorStyles_js__WEBPACK_IMPORTED_MODULE_10__.default.none && strengthProps.level != null && this.state.showStrengthIndicator;
    }
  }, {
    key: "_renderPasswordRulesCallout",
    value: function _renderPasswordRulesCallout() {
      var passwordRulesProps = this._getPasswordRulesProps();

      var showRulesCallout = this._shouldShowRulesCallout(passwordRulesProps);

      return showRulesCallout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_PasswordStatusCallout_jsx__WEBPACK_IMPORTED_MODULE_12__.default, {
        rules: passwordRulesProps.rules,
        iconProps: passwordRulesProps.icons,
        containerProps: passwordRulesProps.container,
        titleProps: passwordRulesProps.title,
        target: this._passwordBoxContainerRef.current,
        onDismiss: this._handlePasswordStatusCalloutDismiss
      });
    }
  }, {
    key: "_getPasswordRulesProps",
    value: function _getPasswordRulesProps() {
      var passwordRulesProps = this.props.passwordRulesProps || {};
      return {
        rules: passwordRulesProps.rules || [],
        container: Object.assign(_PasswordBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.rules.container, passwordRulesProps.container || {}),
        title: Object.assign(_PasswordBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.rules.title, passwordRulesProps.title || {}),
        icons: Object.assign(_PasswordBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.rules.icons, passwordRulesProps.icons || {})
      };
    }
  }, {
    key: "_shouldShowRulesCallout",
    value: function _shouldShowRulesCallout(passwordRulesProps) {
      return this.state.canShowRulesCallout && this.state.showRulesCallout && passwordRulesProps.rules.length > 0;
    }
  }, {
    key: "_handlePasswordStatusCalloutDismiss",
    value: function _handlePasswordStatusCalloutDismiss() {
      this.setState({
        showRulesCallout: false
      });
    }
  }]);

  return PasswordBox;
}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));


PasswordBox.propTypes = {
  label: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  description: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  canReveal: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  underlined: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  readOnly: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  autoComplete: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  emptyErrorMessage: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  passwordStrengthProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  passwordRulesProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  onPasswordChanged: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  onPasswordBoxInitialized: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  onPasswordBoxDisposed: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  onFocus: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
};

/***/ }),
/* 3 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_16288__) => {

__nested_webpack_require_16288__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_16288__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),
/* 4 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_16769__) => {

__nested_webpack_require_16769__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_16769__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),
/* 5 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_17650__) => {

__nested_webpack_require_17650__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_17650__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),
/* 6 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_18154__) => {

__nested_webpack_require_18154__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_18154__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_18154__(7);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(subClass, superClass);
}

/***/ }),
/* 7 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_19038__) => {

__nested_webpack_require_19038__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_19038__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),
/* 8 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_19543__) => {

__nested_webpack_require_19543__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_19543__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_19543__(9);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_19543__(5);


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__.default)(self);
}

/***/ }),
/* 9 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_20504__) => {

__nested_webpack_require_20504__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_20504__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),
/* 10 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_21235__) => {

__nested_webpack_require_21235__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_21235__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__11__;

/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__12__;

/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__13__;

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_22035__) => {

__nested_webpack_require_22035__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_22035__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_22035__(13);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_22035__.n(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StrengthIndicatorStyles__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_22035__(15);


var PasswordBoxDefaults = {
  label: 'Password:',
  placeholder: 'Please fill in the password',
  description: '',
  messages: {
    empty: 'You must fill in the password'
  },
  strength: {
    style: _StrengthIndicatorStyles__WEBPACK_IMPORTED_MODULE_1__.default.none
  },
  rules: {
    container: {
      calloutMaxWidth: 0,
      calloutMinWidth: 0,
      calloutWidth: 0,
      gapSpace: 5,
      isBeakVisible: true,
      beakWidth: 15,
      directionalHint: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__.DirectionalHint.bottomCenter,
      style: {
        width: 300,
        padding: 10
      }
    },
    title: {
      text: 'Password rules',
      visible: true,
      variant: 'mediumPlus',
      style: {
        marginBottom: 0,
        fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__.FontWeights.semilight
      }
    },
    icons: {
      metIcon: 'CheckMark',
      notMetIcon: 'Cancel'
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordBoxDefaults);

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_23722__) => {

__nested_webpack_require_23722__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_23722__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var StrengthIndicatorStyles = {
  bar: 'bar',
  intermittentBar: 'intermittentBar',
  textOnly: 'textOnly',
  none: 'none'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StrengthIndicatorStyles);

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_24244__) => {

__nested_webpack_require_24244__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_24244__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasswordStrengthIndicator)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_24244__(17);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_24244__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_24244__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_24244__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_24244__(8);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_24244__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_24244__(11);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__nested_webpack_require_24244__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_24244__(12);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__nested_webpack_require_24244__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _StrengthIndicatorStyles__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_24244__(15);
/* harmony import */ var _strengthIndicatorStyles_Bar_jsx__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_24244__(18);
/* harmony import */ var _strengthIndicatorStyles_IntermittentBar_jsx__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_24244__(20);
/* harmony import */ var _strengthIndicatorStyles_TextOnly_jsx__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_24244__(19);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var PasswordStrengthIndicator = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(PasswordStrengthIndicator, _React$Component);

  var _super = _createSuper(PasswordStrengthIndicator);

  function PasswordStrengthIndicator(props) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, PasswordStrengthIndicator);

    return _super.call(this, props);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(PasswordStrengthIndicator, [{
    key: "render",
    value: function render() {
      var style = this._getStyle();

      var strengthText = this._getStrengthText();

      var strengthLevel = this._getStrengthLevel();

      var strengthPercent = this._getStrengthPercent(strengthLevel);

      var StrengthIndicatorStyleRenderer = this._getStyleRenderer(style);

      if (!StrengthIndicatorStyleRenderer) {
        throw new Error("No renderer found for style ".concat(style));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(StrengthIndicatorStyleRenderer, {
        strengthPercent: strengthPercent,
        strengthText: strengthText,
        strengthLevel: strengthLevel
      });
    }
  }, {
    key: "_getStyle",
    value: function _getStyle() {
      return this.props.style || _StrengthIndicatorStyles__WEBPACK_IMPORTED_MODULE_8__.default.textOnly;
    }
  }, {
    key: "_getStrengthText",
    value: function _getStrengthText() {
      return this.props.strengthText;
    }
  }, {
    key: "_getStrengthPercent",
    value: function _getStrengthPercent(currentStrengthLevel) {
      return Math.ceil(this.props.strengthPercent || currentStrengthLevel.defaultPercent);
    }
  }, {
    key: "_getStrengthLevel",
    value: function _getStrengthLevel() {
      return this.props.strengthLevel;
    }
  }, {
    key: "_getStyleRenderer",
    value: function _getStyleRenderer(style) {
      var _mapping;

      var mapping = (_mapping = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_mapping, _StrengthIndicatorStyles__WEBPACK_IMPORTED_MODULE_8__.default.textOnly, _strengthIndicatorStyles_TextOnly_jsx__WEBPACK_IMPORTED_MODULE_11__.default), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_mapping, _StrengthIndicatorStyles__WEBPACK_IMPORTED_MODULE_8__.default.bar, _strengthIndicatorStyles_Bar_jsx__WEBPACK_IMPORTED_MODULE_9__.default), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_mapping, _StrengthIndicatorStyles__WEBPACK_IMPORTED_MODULE_8__.default.intermittentBar, _strengthIndicatorStyles_IntermittentBar_jsx__WEBPACK_IMPORTED_MODULE_10__.default), _mapping);
      return mapping.hasOwnProperty(style) ? mapping[style] : null;
    }
  }]);

  return PasswordStrengthIndicator;
}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));


PasswordStrengthIndicator.propTypes = {
  style: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  strengthPercent: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number),
  strengthLevel: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object.isRequired),
  strengthText: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string)
};

/***/ }),
/* 17 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_30492__) => {

__nested_webpack_require_30492__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_30492__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_31055__) => {

__nested_webpack_require_31055__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_31055__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StrengthIndicatorBar)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_31055__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_31055__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_31055__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_31055__(8);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_31055__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_31055__(11);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_31055__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_31055__(12);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__nested_webpack_require_31055__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _TextOnly_jsx__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_31055__(19);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var StrengthIndicatorBar = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(StrengthIndicatorBar, _React$Component);

  var _super = _createSuper(StrengthIndicatorBar);

  function StrengthIndicatorBar(props) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, StrengthIndicatorBar);

    return _super.call(this, props);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(StrengthIndicatorBar, [{
    key: "render",
    value: function render() {
      var strengthText = this._getStrengthText();

      var strengthLevel = this._getStrengthLevel();

      var strengthPercent = this._getStrengthPercent(strengthLevel);

      var cssWidth = "".concat(strengthPercent, "%");

      var className = this._getContainerCssClassNameFromStrengtLevel(strengthLevel);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
        className: className
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
        className: "lvd-passwordbox-strength-bar-meter",
        style: {
          width: cssWidth
        }
      })), !!strengthText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_TextOnly_jsx__WEBPACK_IMPORTED_MODULE_7__.default, {
        strengthText: strengthText,
        strengthLevel: strengthLevel,
        strengthPercent: strengthPercent
      }));
    }
  }, {
    key: "_getStrengthText",
    value: function _getStrengthText() {
      return this.props.strengthText || null;
    }
  }, {
    key: "_getStrengthPercent",
    value: function _getStrengthPercent(currentLevel) {
      return Math.ceil(this.props.strengthPercent || currentLevel.defaultPercent);
    }
  }, {
    key: "_getStrengthLevel",
    value: function _getStrengthLevel() {
      return this.props.strengthLevel || null;
    }
  }, {
    key: "_getContainerCssClassNameFromStrengtLevel",
    value: function _getContainerCssClassNameFromStrengtLevel(strengthLevel) {
      var className = 'lvd-passwordbox-strength lvd-passwordbox-strength-bar';

      if (strengthLevel) {
        className = "".concat(className, " ").concat(strengthLevel.id);
      }

      return className;
    }
  }]);

  return StrengthIndicatorBar;
}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));


StrengthIndicatorBar.propTypes = {
  strengthPercent: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number),
  strengthLevel: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object.isRequired),
  strengthText: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)
};

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_36319__) => {

__nested_webpack_require_36319__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_36319__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StrengthIndicatorTextOnly)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_36319__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_36319__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_36319__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_36319__(8);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_36319__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_36319__(11);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_36319__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_36319__(12);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__nested_webpack_require_36319__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var StrengthIndicatorTextOnly = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(StrengthIndicatorTextOnly, _React$Component);

  var _super = _createSuper(StrengthIndicatorTextOnly);

  function StrengthIndicatorTextOnly(props) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, StrengthIndicatorTextOnly);

    return _super.call(this, props);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(StrengthIndicatorTextOnly, [{
    key: "render",
    value: function render() {
      var strengthLevel = this._getStrengthLevel();

      var strengthText = this._getStrengthText(strengthLevel);

      var className = this._getContainerCssClassNameFromStrengtLevel(strengthLevel);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
        className: className
      }, strengthText);
    }
  }, {
    key: "_getStrengthLevel",
    value: function _getStrengthLevel() {
      return this.props.strengthLevel || null;
    }
  }, {
    key: "_getStrengthText",
    value: function _getStrengthText(currentLevel) {
      return this.props.strengthText || currentLevel.defaultLabel;
    }
  }, {
    key: "_getContainerCssClassNameFromStrengtLevel",
    value: function _getContainerCssClassNameFromStrengtLevel(strengthLevel) {
      var className = 'lvd-passwordbox-strength lvd-passwordbox-strength-text';

      if (strengthLevel) {
        className = "".concat(className, " ").concat(strengthLevel.id);
      }

      return className;
    }
  }]);

  return StrengthIndicatorTextOnly;
}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));


StrengthIndicatorTextOnly.propTypes = {
  strengthPercent: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number),
  strengthLevel: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object.isRequired),
  strengthText: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)
};

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_40678__) => {

__nested_webpack_require_40678__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_40678__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StrengthIndicatorIntermittentBar)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_40678__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_40678__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_40678__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_40678__(8);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_40678__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_40678__(11);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_40678__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_40678__(12);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__nested_webpack_require_40678__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _TextOnly_jsx__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_40678__(19);
/* harmony import */ var _PasswordStrengthLevels_js__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_40678__(21);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var StrengthIndicatorIntermittentBar = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(StrengthIndicatorIntermittentBar, _React$Component);

  var _super = _createSuper(StrengthIndicatorIntermittentBar);

  function StrengthIndicatorIntermittentBar(props) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, StrengthIndicatorIntermittentBar);

    return _super.call(this, props);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(StrengthIndicatorIntermittentBar, [{
    key: "render",
    value: function render() {
      var strengthText = this._getStrengthText();

      var strengthLevel = this._getStrengthLevel();

      var strengthPercent = this._getStrengthPercent(strengthLevel);

      var className = this._getContainerCssClassNameFromStrengtLevel(strengthLevel);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
        className: className
      }, this._renderSegments(strengthLevel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
        className: "clear"
      })), !!strengthText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_TextOnly_jsx__WEBPACK_IMPORTED_MODULE_7__.default, {
        strengthText: strengthText,
        strengthLevel: strengthLevel,
        strengthPercent: strengthPercent
      }));
    }
  }, {
    key: "_getStrengthText",
    value: function _getStrengthText() {
      return this.props.strengthText;
    }
  }, {
    key: "_getStrengthPercent",
    value: function _getStrengthPercent(currentLevel) {
      return Math.ceil(this.props.strengthPercent || currentLevel.defaultPercent);
    }
  }, {
    key: "_getStrengthLevel",
    value: function _getStrengthLevel() {
      return this.props.strengthLevel || null;
    }
  }, {
    key: "_getContainerCssClassNameFromStrengtLevel",
    value: function _getContainerCssClassNameFromStrengtLevel(strengthLevel) {
      var className = 'lvd-passwordbox-strength lvd-passwordbox-strength-intermittent-bar';

      if (strengthLevel) {
        className = "".concat(className, " ").concat(strengthLevel.id);
      }

      return className;
    }
  }, {
    key: "_renderSegments",
    value: function _renderSegments(currentLevel) {
      var segments = this._getAllAvailableLevels();

      return segments.map(function (strengthLevel) {
        var className = "lvd-passwordbox-strength-intermittent-bar-segment ".concat(strengthLevel.id);

        if (strengthLevel.value <= currentLevel.value) {
          className = "".concat(className, " is-active");
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
          key: strengthLevel.id,
          className: className
        });
      });
    }
  }, {
    key: "_getAllAvailableLevels",
    value: function _getAllAvailableLevels() {
      return (0,_PasswordStrengthLevels_js__WEBPACK_IMPORTED_MODULE_8__.getAllAvailableLevels)();
    }
  }]);

  return StrengthIndicatorIntermittentBar;
}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));


StrengthIndicatorIntermittentBar.propTypes = {
  strengthPercent: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number),
  strengthLevel: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object.isRequired),
  strengthText: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)
};

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_46867__) => {

__nested_webpack_require_46867__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_46867__.d(__webpack_exports__, {
/* harmony export */   "PasswordStrengthLevels": () => (/* binding */ PasswordStrengthLevels),
/* harmony export */   "getAllAvailableLevels": () => (/* binding */ getAllAvailableLevels),
/* harmony export */   "getAvailableLevelCount": () => (/* binding */ getAvailableLevelCount)
/* harmony export */ });
var PasswordStrengthLevels = {
  veryWeak: {
    id: 'very-weak',
    value: 1,
    defaultThreshold: 0.1,
    defaultLabel: 'Very weak',
    defaultPercent: 20,
    next: function next() {
      return PasswordStrengthLevels.weak;
    }
  },
  weak: {
    id: 'weak',
    value: 2,
    defaultThreshold: 0.25,
    defaultLabel: 'Weak',
    defaultPercent: 40,
    next: function next() {
      return PasswordStrengthLevels.medium;
    }
  },
  medium: {
    id: 'medium',
    value: 3,
    defaultThreshold: 0.5,
    defaultLabel: 'Medium',
    defaultPercent: 60,
    next: function next() {
      return PasswordStrengthLevels.strong;
    }
  },
  strong: {
    id: 'strong',
    value: 4,
    defaultThreshold: 0.75,
    defaultLabel: 'Strong',
    defaultPercent: 80,
    next: function next() {
      return PasswordStrengthLevels.veryStrong;
    }
  },
  veryStrong: {
    id: 'very-strong',
    value: 5,
    defaultThreshold: 0.9,
    defaultLabel: 'Very strong',
    defaultPercent: 100,
    next: function next() {
      return PasswordStrengthLevels.veryStrong;
    }
  }
};

function getAllAvailableLevels() {
  return [PasswordStrengthLevels.veryWeak, PasswordStrengthLevels.weak, PasswordStrengthLevels.medium, PasswordStrengthLevels.strong, PasswordStrengthLevels.veryStrong];
}

function getAvailableLevelCount() {
  return getAllAvailableLevels().length;
}



/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_48763__) => {

__nested_webpack_require_48763__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_48763__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasswordStatusCallout)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_48763__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_48763__(4);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_48763__(5);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_48763__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_48763__(8);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_48763__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_48763__(11);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__nested_webpack_require_48763__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_48763__(12);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__nested_webpack_require_48763__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_48763__(13);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__nested_webpack_require_48763__.n(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _PasswordBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_48763__(14);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var PasswordStatusCallout = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(PasswordStatusCallout, _React$Component);

  var _super = _createSuper(PasswordStatusCallout);

  function PasswordStatusCallout(props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, PasswordStatusCallout);

    _this = _super.call(this, props);
    _this._handleCalloutDismiss = _this._handleCalloutDismiss.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(PasswordStatusCallout, [{
    key: "_handleCalloutDismiss",
    value: function _handleCalloutDismiss() {
      if (this.props.onDismiss != null) {
        this.props.onDismiss();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var target = this._getTarget();

      var containerProps = this._getContainerProps();

      var rules = this._getRules();

      return rules.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.Callout, {
        target: target,
        gapSpace: containerProps.gapSpace,
        calloutWidth: containerProps.calloutWidth,
        calloutMaxWidth: containerProps.calloutMaxWidth,
        calloutMinWidth: containerProps.calloutMinWidth,
        isBeakVisible: containerProps.isBeakVisible,
        beakWidth: containerProps.beakWidth,
        directionalHint: containerProps.directionalHint,
        setInitialFocus: true,
        style: containerProps.style,
        onDismiss: this._handleCalloutDismiss
      }, this._renderTitle(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        className: "lvd-passwordbox-rules-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("ul", null, this._renderPassowrdRules(rules))));
      ;
    }
  }, {
    key: "_getTarget",
    value: function _getTarget() {
      return this.props.target;
    }
  }, {
    key: "_getContainerProps",
    value: function _getContainerProps() {
      var containerProps = this.props.containerProps || {};
      return Object.assign(_PasswordBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.rules.container, containerProps);
    }
  }, {
    key: "_getRules",
    value: function _getRules() {
      return this.props.rules || [];
    }
  }, {
    key: "_renderTitle",
    value: function _renderTitle() {
      var titleProps = this._getTitleProps();

      var showTitle = titleProps.visible && !!titleProps.text;
      return showTitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {
        variant: titleProps.variant,
        style: titleProps.style
      }, titleProps.text);
    }
  }, {
    key: "_getTitleProps",
    value: function _getTitleProps() {
      var titleProps = this.props.title;
      return Object.assign(_PasswordBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.rules.title, titleProps);
    }
  }, {
    key: "_renderPassowrdRules",
    value: function _renderPassowrdRules(rules) {
      var _this2 = this;

      var ruleIndex = 0;

      var iconProps = this._getIconProps();

      return rules.map(function (rule) {
        var ruleKey = _this2._computeRuleKey(ruleIndex++);

        var ruleDisplayProps = _this2._computeRuleItemDisplayProps(rule, iconProps);

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("li", {
          key: ruleKey,
          className: ruleDisplayProps.className
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("i", {
          className: ruleDisplayProps.ruleIconClassName
        }), rule.text);
      });
    }
  }, {
    key: "_getIconProps",
    value: function _getIconProps() {
      var iconProps = this.props.iconProps || {};
      return Object.assign(_PasswordBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.rules.icons, iconProps);
    }
  }, {
    key: "_computeRuleKey",
    value: function _computeRuleKey(ruleIndex) {
      return "rule-".concat(ruleIndex);
    }
  }, {
    key: "_computeRuleItemDisplayProps",
    value: function _computeRuleItemDisplayProps(rule, iconProps) {
      var className = 'lvd-passwordbox-rule';
      var ruleIconName = iconProps.notMetIcon;

      if (rule.ruleMet) {
        className = "".concat(className, " is-rule-met");
        ruleIconName = iconProps.metIcon;
      } else {
        className = "".concat(className, " is-not-rule-met");
      }

      var ruleIconClassName = this._computeRuleIconClassName(ruleIconName);

      return {
        className: className,
        ruleIconClassName: ruleIconClassName
      };
    }
  }, {
    key: "_computeRuleIconClassName",
    value: function _computeRuleIconClassName(ruleIconName) {
      return "lvd-passwordbox-rule-icon ms-Icon ms-Icon--".concat(ruleIconName);
    }
  }]);

  return PasswordStatusCallout;
}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));


PasswordStatusCallout.propTypes = {
  target: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object.isRequired),
  rules: prop_types__WEBPACK_IMPORTED_MODULE_7___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_7___default().object)).isRequired,
  iconProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  containerProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  titleProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  onDismiss: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
};

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_57350__) => {

__nested_webpack_require_57350__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_57350__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasswordCallbackRule)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_57350__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_57350__(4);



var PasswordCallbackRule = /*#__PURE__*/function () {
  function PasswordCallbackRule(callback, name) {
    var allowEmpty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, PasswordCallbackRule);

    this._callback = callback;
    this._name = name;
    this._allowEmpty = allowEmpty;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(PasswordCallbackRule, [{
    key: "evaluate",
    value: function evaluate(input) {
      if (!input) {
        return this._allowEmpty;
      }

      return this._callback(input);
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }]);

  return PasswordCallbackRule;
}();



/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_58699__) => {

__nested_webpack_require_58699__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_58699__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasswordRegexRule)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_58699__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_58699__(4);



var PasswordRegexRule = /*#__PURE__*/function () {
  function PasswordRegexRule(regex, name) {
    var allowEmpty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, PasswordRegexRule);

    this._regex = regex;
    this._name = name;
    this._allowEmpty = allowEmpty;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(PasswordRegexRule, [{
    key: "evaluate",
    value: function evaluate(input) {
      if (!input) {
        return this._allowEmpty;
      }

      return !!input.match(this._regex);
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }]);

  return PasswordRegexRule;
}();



/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_60026__) => {

__nested_webpack_require_60026__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_60026__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasswordLengthRule)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_60026__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_60026__(4);



var PasswordLengthRule = /*#__PURE__*/function () {
  function PasswordLengthRule(minimumLength) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, PasswordLengthRule);

    this._minimumLength = minimumLength;
    this._name = name;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(PasswordLengthRule, [{
    key: "evaluate",
    value: function evaluate(input) {
      if (!input || !input.length) {
        return this._minimumLength == 0;
      }

      return input.length >= this._minimumLength;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name || "Must be at least ".concat(this._minimumLength, " character(s) in length");
    }
  }]);

  return PasswordLengthRule;
}();



/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_61448__) => {

__nested_webpack_require_61448__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_61448__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasswordEvaluator)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_61448__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_61448__(4);
/* harmony import */ var _PasswordStrengthLevels_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_61448__(21);




var PasswordEvaluator = /*#__PURE__*/function () {
  function PasswordEvaluator(rules) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, PasswordEvaluator);

    this._rules = rules || [];
    this._maxLevelScore = _PasswordStrengthLevels_js__WEBPACK_IMPORTED_MODULE_2__.PasswordStrengthLevels.veryStrong.value;
    this._ruleScore = this._computeRuleScore();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(PasswordEvaluator, [{
    key: "_computeRuleScore",
    value: function _computeRuleScore() {
      return this._rules.length > 0 ? Math.round(this._maxLevelScore / this._rules.length * 10) / 10 : this._maxLevelScore;
    }
  }, {
    key: "evaluatePassword",
    value: function evaluatePassword(password) {
      var _this = this;

      if (!password) {
        return {
          level: null,
          rules: []
        };
      }

      if (this._rules.length == 0) {
        return {
          level: _PasswordStrengthLevels_js__WEBPACK_IMPORTED_MODULE_2__.PasswordStrengthLevels.veryStrong,
          rules: []
        };
      }

      var score = 0;
      var rulesResult = [];

      this._rules.forEach(function (rule) {
        var ruleMet = rule.evaluate(password);

        if (ruleMet) {
          score = Math.min(_this._ruleScore + score, _this._maxLevelScore);
        }

        rulesResult.push({
          ruleMet: ruleMet,
          text: rule.name
        });
      });

      var level = _PasswordStrengthLevels_js__WEBPACK_IMPORTED_MODULE_2__.PasswordStrengthLevels.veryWeak;

      while (level.value < score && level.value < this._maxLevelScore) {
        level = level.next();
      }

      return {
        level: level,
        rules: rulesResult
      };
    }
  }]);

  return PasswordEvaluator;
}();



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_64079__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_64079__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_64079__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__nested_webpack_require_64079__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_64079__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_64079__.o(definition, key) && !__nested_webpack_require_64079__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_64079__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_64079__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__nested_webpack_require_64079__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_64079__.d(__webpack_exports__, {
/* harmony export */   "PasswordBox": () => (/* reexport safe */ _PasswordBox_jsx__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "PasswordCallbackRule": () => (/* reexport safe */ _rules_PasswordCallbackRule_js__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "PasswordRegexRule": () => (/* reexport safe */ _rules_PasswordRegexRule_js__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "PasswordEvaluator": () => (/* reexport safe */ _rules_PasswordEvaluator_js__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "PasswordLengthRule": () => (/* reexport safe */ _rules_PasswordLengthRule_js__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "PasswordStrengthIndicator": () => (/* reexport safe */ _PasswordStrengthIndicator_jsx__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "StrengthIndicatorStyles": () => (/* reexport safe */ _StrengthIndicatorStyles_js__WEBPACK_IMPORTED_MODULE_6__.default),
/* harmony export */   "PasswordStrengthLevels": () => (/* reexport safe */ _PasswordStrengthLevels_js__WEBPACK_IMPORTED_MODULE_7__.PasswordStrengthLevels),
/* harmony export */   "getAllAvailableLevels": () => (/* reexport safe */ _PasswordStrengthLevels_js__WEBPACK_IMPORTED_MODULE_7__.getAllAvailableLevels),
/* harmony export */   "getAvailableLevelCount": () => (/* reexport safe */ _PasswordStrengthLevels_js__WEBPACK_IMPORTED_MODULE_7__.getAvailableLevelCount)
/* harmony export */ });
/* harmony import */ var _PasswordBox_jsx__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_64079__(2);
/* harmony import */ var _rules_PasswordCallbackRule_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_64079__(23);
/* harmony import */ var _rules_PasswordRegexRule_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_64079__(24);
/* harmony import */ var _rules_PasswordLengthRule_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_64079__(25);
/* harmony import */ var _rules_PasswordEvaluator_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_64079__(26);
/* harmony import */ var _PasswordStrengthIndicator_jsx__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_64079__(16);
/* harmony import */ var _StrengthIndicatorStyles_js__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_64079__(15);
/* harmony import */ var _PasswordStrengthLevels_js__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_64079__(21);









})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_110701__) => {

"use strict";
__nested_webpack_require_110701__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_110701__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BackButtonPositions_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_110701__(4);

var PasswordChangeBoxDefaults = {
  title: 'Change password',
  existingPassword: {
    label: 'Current password:',
    placeholder: 'Please enter your current password',
    description: '',
    messages: {
      empty: 'You must fill in your current password'
    }
  },
  newPassword: {
    label: 'New password:',
    placeholder: 'Please enter your new password',
    description: '',
    messages: {
      empty: 'You must fill in your new password'
    }
  },
  confirmNewPassword: {
    label: 'Password confirmation:',
    placeholder: 'Please confirm new password',
    description: '',
    messages: {
      empty: 'You must confirm your new password',
      mismatch: 'The new password confirmation does not match the new password'
    }
  },
  passwordChangeButton: {
    label: 'Change password'
  },
  backActionButton: {
    show: true,
    label: 'Back',
    position: _BackButtonPositions_js__WEBPACK_IMPORTED_MODULE_0__.default.left
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordChangeBoxDefaults);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_112332__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_112332__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_112332__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__nested_webpack_require_112332__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_112332__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_112332__.o(definition, key) && !__nested_webpack_require_112332__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_112332__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_112332__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__nested_webpack_require_112332__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_112332__.d(__webpack_exports__, {
/* harmony export */   "PasswordCallbackRule": () => (/* reexport safe */ lvd_fluentui_passwordbox__WEBPACK_IMPORTED_MODULE_4__.PasswordCallbackRule),
/* harmony export */   "PasswordRegexRule": () => (/* reexport safe */ lvd_fluentui_passwordbox__WEBPACK_IMPORTED_MODULE_4__.PasswordRegexRule),
/* harmony export */   "PasswordEvaluator": () => (/* reexport safe */ lvd_fluentui_passwordbox__WEBPACK_IMPORTED_MODULE_4__.PasswordEvaluator),
/* harmony export */   "PasswordLengthRule": () => (/* reexport safe */ lvd_fluentui_passwordbox__WEBPACK_IMPORTED_MODULE_4__.PasswordLengthRule),
/* harmony export */   "PasswordStrengthIndicator": () => (/* reexport safe */ lvd_fluentui_passwordbox__WEBPACK_IMPORTED_MODULE_4__.PasswordStrengthIndicator),
/* harmony export */   "StrengthIndicatorStyles": () => (/* reexport safe */ lvd_fluentui_passwordbox__WEBPACK_IMPORTED_MODULE_4__.StrengthIndicatorStyles),
/* harmony export */   "PasswordStrengthLevels": () => (/* reexport safe */ lvd_fluentui_passwordbox__WEBPACK_IMPORTED_MODULE_4__.PasswordStrengthLevels),
/* harmony export */   "getAllAvailableLevels": () => (/* reexport safe */ lvd_fluentui_passwordbox__WEBPACK_IMPORTED_MODULE_4__.getAllAvailableLevels),
/* harmony export */   "getAvailableLevelCount": () => (/* reexport safe */ lvd_fluentui_passwordbox__WEBPACK_IMPORTED_MODULE_4__.getAvailableLevelCount),
/* harmony export */   "successMessage": () => (/* reexport safe */ _PasswordChangeBoxUtility_js__WEBPACK_IMPORTED_MODULE_2__.successMessage),
/* harmony export */   "errorMessage": () => (/* reexport safe */ _PasswordChangeBoxUtility_js__WEBPACK_IMPORTED_MODULE_2__.errorMessage),
/* harmony export */   "warningMessage": () => (/* reexport safe */ _PasswordChangeBoxUtility_js__WEBPACK_IMPORTED_MODULE_2__.warningMessage),
/* harmony export */   "infoMessage": () => (/* reexport safe */ _PasswordChangeBoxUtility_js__WEBPACK_IMPORTED_MODULE_2__.infoMessage),
/* harmony export */   "BackButtonPositions": () => (/* reexport safe */ _BackButtonPositions_js__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "PasswordChangeBoxMessageType": () => (/* reexport safe */ _PasswordChangeBoxMessageType_js__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "PasswordChangeBox": () => (/* reexport safe */ _PasswordChangeBox_jsx__WEBPACK_IMPORTED_MODULE_3__.default)
/* harmony export */ });
/* harmony import */ var _PasswordChangeBoxMessageType_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_112332__(2);
/* harmony import */ var _BackButtonPositions_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_112332__(4);
/* harmony import */ var _PasswordChangeBoxUtility_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_112332__(5);
/* harmony import */ var _PasswordChangeBox_jsx__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_112332__(7);
/* harmony import */ var lvd_fluentui_passwordbox__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_112332__(18);
/* harmony import */ var lvd_fluentui_passwordbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_112332__.n(lvd_fluentui_passwordbox__WEBPACK_IMPORTED_MODULE_4__);






})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});

/***/ }),
/* 4 */
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_0__);

var PasswordRecoveryBoxMessageType = {
  info: lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_0__.PasswordChangeBoxMessageType.info,
  error: lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_0__.PasswordChangeBoxMessageType.error,
  blocked: lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_0__.PasswordChangeBoxMessageType.blocked,
  severeWarning: lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_0__.PasswordChangeBoxMessageType.severeWarning,
  success: lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_0__.PasswordChangeBoxMessageType.success,
  warning: lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_0__.PasswordChangeBoxMessageType.warning
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordRecoveryBoxMessageType);

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "passwordRecoveryBoxMessageTypeToOfficeUiMessageType": () => (/* binding */ passwordRecoveryBoxMessageTypeToOfficeUiMessageType),
/* harmony export */   "passwordRecoveryBoxMessageTypePasswordChangeBoxMessageType": () => (/* binding */ passwordRecoveryBoxMessageTypePasswordChangeBoxMessageType),
/* harmony export */   "successMessage": () => (/* binding */ successMessage),
/* harmony export */   "errorMessage": () => (/* binding */ errorMessage),
/* harmony export */   "warningMessage": () => (/* binding */ warningMessage),
/* harmony export */   "infoMessage": () => (/* binding */ infoMessage),
/* harmony export */   "passwordRecoveryBoxBackButtonPositionToPasswordChangeBoxBackButtonPosition": () => (/* binding */ passwordRecoveryBoxBackButtonPositionToPasswordChangeBoxBackButtonPosition)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PasswordRecoveryBoxMessageType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _BackButtonPositions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);


var _officeUiMessageTypeM, _passwordChangeBoxMes, _passwordChangeBoxBac;






var officeUiMessageTypeMapping = (_officeUiMessageTypeM = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_officeUiMessageTypeM, _PasswordRecoveryBoxMessageType__WEBPACK_IMPORTED_MODULE_3__.default.info, _fluentui_react__WEBPACK_IMPORTED_MODULE_1__.MessageBarType.info), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_officeUiMessageTypeM, _PasswordRecoveryBoxMessageType__WEBPACK_IMPORTED_MODULE_3__.default.error, _fluentui_react__WEBPACK_IMPORTED_MODULE_1__.MessageBarType.error), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_officeUiMessageTypeM, _PasswordRecoveryBoxMessageType__WEBPACK_IMPORTED_MODULE_3__.default.warning, _fluentui_react__WEBPACK_IMPORTED_MODULE_1__.MessageBarType.warning), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_officeUiMessageTypeM, _PasswordRecoveryBoxMessageType__WEBPACK_IMPORTED_MODULE_3__.default.severeWarning, _fluentui_react__WEBPACK_IMPORTED_MODULE_1__.MessageBarType.severeWarning), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_officeUiMessageTypeM, _PasswordRecoveryBoxMessageType__WEBPACK_IMPORTED_MODULE_3__.default.success, _fluentui_react__WEBPACK_IMPORTED_MODULE_1__.MessageBarType.success), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_officeUiMessageTypeM, _PasswordRecoveryBoxMessageType__WEBPACK_IMPORTED_MODULE_3__.default.blocked, _fluentui_react__WEBPACK_IMPORTED_MODULE_1__.MessageBarType.blocked), _officeUiMessageTypeM);
var passwordChangeBoxMessageTypeMapping = (_passwordChangeBoxMes = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_passwordChangeBoxMes, _PasswordRecoveryBoxMessageType__WEBPACK_IMPORTED_MODULE_3__.default.info, lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_2__.PasswordChangeBoxMessageType.info), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_passwordChangeBoxMes, _PasswordRecoveryBoxMessageType__WEBPACK_IMPORTED_MODULE_3__.default.error, lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_2__.PasswordChangeBoxMessageType.error), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_passwordChangeBoxMes, _PasswordRecoveryBoxMessageType__WEBPACK_IMPORTED_MODULE_3__.default.warning, lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_2__.PasswordChangeBoxMessageType.warning), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_passwordChangeBoxMes, _PasswordRecoveryBoxMessageType__WEBPACK_IMPORTED_MODULE_3__.default.severeWarning, lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_2__.PasswordChangeBoxMessageType.severeWarning), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_passwordChangeBoxMes, _PasswordRecoveryBoxMessageType__WEBPACK_IMPORTED_MODULE_3__.default.success, lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_2__.PasswordChangeBoxMessageType.success), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_passwordChangeBoxMes, _PasswordRecoveryBoxMessageType__WEBPACK_IMPORTED_MODULE_3__.default.blocked, lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_2__.PasswordChangeBoxMessageType.blocked), _passwordChangeBoxMes);
function passwordRecoveryBoxMessageTypeToOfficeUiMessageType(passwordRecoveryBoxMessageType) {
  var officeUiMessageType = null;

  if (!!passwordRecoveryBoxMessageType && officeUiMessageTypeMapping.hasOwnProperty(passwordRecoveryBoxMessageType)) {
    officeUiMessageType = officeUiMessageTypeMapping[passwordRecoveryBoxMessageType];
  }

  return officeUiMessageType;
}
function passwordRecoveryBoxMessageTypePasswordChangeBoxMessageType(passwordRecoveryBoxMessageType) {
  var passwordChangeBoxMessageType = null;

  if (!!passwordRecoveryBoxMessageType && passwordChangeBoxMessageTypeMapping.hasOwnProperty(passwordRecoveryBoxMessageType)) {
    passwordChangeBoxMessageType = passwordChangeBoxMessageTypeMapping[passwordRecoveryBoxMessageType];
  }

  return passwordChangeBoxMessageType;
}
function successMessage(message) {
  return {
    type: _PasswordRecoveryBoxMessageType__WEBPACK_IMPORTED_MODULE_3__.default.success,
    message: message
  };
}
function errorMessage(message) {
  return {
    type: _PasswordRecoveryBoxMessageType__WEBPACK_IMPORTED_MODULE_3__.default.error,
    message: message
  };
}
function warningMessage(message) {
  return {
    type: _PasswordRecoveryBoxMessageType__WEBPACK_IMPORTED_MODULE_3__.default.warning,
    message: message
  };
}
function infoMessage(message) {
  return {
    type: _PasswordRecoveryBoxMessageType__WEBPACK_IMPORTED_MODULE_3__.default.info,
    message: message
  };
}
var passwordChangeBoxBackButtonPositionsMapping = (_passwordChangeBoxBac = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_passwordChangeBoxBac, _BackButtonPositions_js__WEBPACK_IMPORTED_MODULE_4__.default.left, lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_2__.BackButtonPositions.left), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_passwordChangeBoxBac, _BackButtonPositions_js__WEBPACK_IMPORTED_MODULE_4__.default.right, lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_2__.BackButtonPositions.right), _passwordChangeBoxBac);
function passwordRecoveryBoxBackButtonPositionToPasswordChangeBoxBackButtonPosition(passwordRecoveryBoxBackButtonPosition) {
  var passwordChangeBoxBackButtonPosition = null;

  if (!!passwordRecoveryBoxBackButtonPosition && passwordChangeBoxBackButtonPositionsMapping.hasOwnProperty(passwordRecoveryBoxBackButtonPosition)) {
    passwordChangeBoxBackButtonPosition = passwordChangeBoxBackButtonPositionsMapping[passwordRecoveryBoxBackButtonPosition];
  }

  return passwordChangeBoxBackButtonPosition;
}

/***/ }),
/* 9 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasswordRecoveryBox)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _PasswordRecoverySteps_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20);
/* harmony import */ var _PasswordRecoveryStep1_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(21);
/* harmony import */ var _PasswordRecoveryStep2_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var PasswordRecoveryBox = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(PasswordRecoveryBox, _React$Component);

  var _super = _createSuper(PasswordRecoveryBox);

  function PasswordRecoveryBox(props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, PasswordRecoveryBox);

    _this = _super.call(this, props);
    _this._handlePasswordRecoveryInitiationRequested = _this._handlePasswordRecoveryInitiationRequested.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));
    _this._handlePasswordRecoveryInitiationValuesChanged = _this._handlePasswordRecoveryInitiationValuesChanged.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));
    _this._handleBackFromPasswordRecoveryInitiationRequested = _this._handleBackFromPasswordRecoveryInitiationRequested.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));
    _this._handlePasswordChangeValuesChanged = _this._handlePasswordChangeValuesChanged.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));
    _this._handleBackFromPasswordChangeRequested = _this._handleBackFromPasswordChangeRequested.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));
    _this._handlePasswordChangedRequested = _this._handlePasswordChangedRequested.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(PasswordRecoveryBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.onPasswordRecoveryBoxInitiatlized != null) {
        this.props.onPasswordRecoveryBoxInitiatlized();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.onPasswordRecoveryBoxDisposed != null) {
        this.props.onPasswordRecoveryBoxDisposed();
      }
    }
  }, {
    key: "_handlePasswordRecoveryInitiationRequested",
    value: function _handlePasswordRecoveryInitiationRequested(values) {
      if (this.props.onPasswordRecoveryInitiationRequested != null) {
        this.props.onPasswordRecoveryInitiationRequested(values);
      }
    }
  }, {
    key: "_handlePasswordRecoveryInitiationValuesChanged",
    value: function _handlePasswordRecoveryInitiationValuesChanged(oldValues, newValues) {
      if (this.props.onPasswordRecoveryInitiationValuesChanged != null) {
        this.props.onPasswordRecoveryInitiationValuesChanged(oldValues, newValues);
      }
    }
  }, {
    key: "_handleBackFromPasswordRecoveryInitiationRequested",
    value: function _handleBackFromPasswordRecoveryInitiationRequested(values) {
      if (this.props.onBackFromPasswordRecoveryInitiationRequested != null) {
        this.props.onBackFromPasswordRecoveryInitiationRequested(values);
      }
    }
  }, {
    key: "_handlePasswordChangeValuesChanged",
    value: function _handlePasswordChangeValuesChanged(oldValues, newValues) {
      if (this.props.onPasswordChangeValuesChanged != null) {
        this.props.onPasswordChangeValuesChanged(oldValues, newValues);
      }
    }
  }, {
    key: "_handleBackFromPasswordChangeRequested",
    value: function _handleBackFromPasswordChangeRequested(values) {
      if (this.props.onBackFromPasswordChangeRequested != null) {
        this.props.onBackFromPasswordChangeRequested(values);
      }
    }
  }, {
    key: "_handlePasswordChangedRequested",
    value: function _handlePasswordChangedRequested(values) {
      if (this.props.onPasswordChangedRequested != null) {
        this.props.onPasswordChangedRequested(values);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("div", {
        className: this._computeContainerCssClassName(),
        style: this._getStyle()
      }, this._renderCurrentStep());
    }
  }, {
    key: "_computeContainerCssClassName",
    value: function _computeContainerCssClassName() {
      var containerClassName = ['lvd-passwordrecovery-box'];

      if (this._useFramedLayout()) {
        containerClassName.push('lvd-passwordrecovery-box-framed');
      }

      if (this._useFixedLayout()) {
        containerClassName.push('lvd-passwordrecovery-box-fixed');
      }

      if (this._useCenteredLayout()) {
        containerClassName.push('lvd-passwordrecovery-box-centered');
      }

      var className = this._getClassName();

      if (!!className) {
        containerClassName.push(className);
      }

      return containerClassName.join(' ');
    }
  }, {
    key: "_useFramedLayout",
    value: function _useFramedLayout() {
      return this.props.hasOwnProperty('framed') ? !!this.props.framed : true;
    }
  }, {
    key: "_useFixedLayout",
    value: function _useFixedLayout() {
      return this.props.hasOwnProperty('fixed') ? !!this.props.fixed : true;
    }
  }, {
    key: "_useCenteredLayout",
    value: function _useCenteredLayout() {
      return this.props.hasOwnProperty('centered') ? !!this.props.centered : true;
    }
  }, {
    key: "_getClassName",
    value: function _getClassName() {
      return this.props.className || null;
    }
  }, {
    key: "_getStyle",
    value: function _getStyle() {
      return this.props.style || {};
    }
  }, {
    key: "_renderCurrentStep",
    value: function _renderCurrentStep() {
      var stepName = this._getStep();

      if (stepName == _PasswordRecoverySteps_js__WEBPACK_IMPORTED_MODULE_9__.default.EnterNewPassword) {
        return this._renderStep2();
      } else {
        return this._renderStep1();
      }
    }
  }, {
    key: "_getStep",
    value: function _getStep() {
      return this.props.step || _PasswordRecoverySteps_js__WEBPACK_IMPORTED_MODULE_9__.default.CollectUserIdentifier;
    }
  }, {
    key: "_renderStep1",
    value: function _renderStep1() {
      var step1Props = this._getStep1Props();

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_PasswordRecoveryStep1_jsx__WEBPACK_IMPORTED_MODULE_10__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, step1Props, {
        onPasswordRecoveryInitiationRequested: this._handlePasswordRecoveryInitiationRequested,
        onPasswordRecoveryInitiationValuesChanged: this._handlePasswordRecoveryInitiationValuesChanged,
        onBackRequested: this._handleBackFromPasswordRecoveryInitiationRequested
      }));
    }
  }, {
    key: "_getStep1Props",
    value: function _getStep1Props() {
      var step1Props = this.props.step1Props || {};
      return Object.assign(this._getCommonProps(), step1Props);
    }
  }, {
    key: "_getCommonProps",
    value: function _getCommonProps() {
      return {
        disabled: this._isDisabled(),
        messageProps: this._getMessageProps(),
        backActionButtonProps: this._getBackActionButtonProps()
      };
    }
  }, {
    key: "_isDisabled",
    value: function _isDisabled() {
      return !!this.props.disabled;
    }
  }, {
    key: "_getMessageProps",
    value: function _getMessageProps() {
      return this.props.messageProps || {};
    }
  }, {
    key: "_getBackActionButtonProps",
    value: function _getBackActionButtonProps() {
      return this.props.backActionButtonProps || {};
    }
  }, {
    key: "_renderStep2",
    value: function _renderStep2() {
      var step2Props = this._getStep2Props();

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_PasswordRecoveryStep2_jsx__WEBPACK_IMPORTED_MODULE_11__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, step2Props, {
        onPasswordChangedRequested: this._handlePasswordChangedRequested,
        onPasswordChangeValuesChanged: this._handlePasswordChangeValuesChanged,
        onBackRequested: this._handleBackFromPasswordChangeRequested
      }));
    }
  }, {
    key: "_getStep2Props",
    value: function _getStep2Props() {
      var step2Props = this.props.step2Props || {};
      return Object.assign(this._getCommonProps(), step2Props);
    }
  }]);

  return PasswordRecoveryBox;
}((react__WEBPACK_IMPORTED_MODULE_7___default().Component));


PasswordRecoveryBox.propTypes = {
  className: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  style: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
  step: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  messageProps: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  step1Props: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  step2Props: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  backActionButtonProps: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  onPasswordRecoveryInitiationRequested: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  onPasswordRecoveryInitiationValuesChanged: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  onBackFromPasswordRecoveryInitiationRequested: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  onPasswordChangedRequested: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  onPasswordChangeValuesChanged: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  onBackFromPasswordChangeRequested: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  onPasswordRecoveryBoxInitiatlized: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  onPasswordRecoveryBoxDisposed: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func)
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),
/* 12 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),
/* 13 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),
/* 14 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),
/* 15 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(subClass, superClass);
}

/***/ }),
/* 16 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),
/* 17 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__.default)(self);
}

/***/ }),
/* 18 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),
/* 19 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var PasswordRecoverySteps = {
  CollectUserIdentifier: 'collect-user-identifier',
  EnterNewPassword: 'enter-new-password'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordRecoverySteps);

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasswordRecoveryStep1)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _BackButtonPositions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2);
/* harmony import */ var _PasswordRecoveryStep1Defaults_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(22);
/* harmony import */ var _StepTitle_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23);
/* harmony import */ var _PasswordRecoveryBoxUtility_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }










var PasswordRecoveryStep1 = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(PasswordRecoveryStep1, _React$Component);

  var _super = _createSuper(PasswordRecoveryStep1);

  function PasswordRecoveryStep1(props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, PasswordRecoveryStep1);

    _this = _super.call(this, props);
    _this.state = {
      userIdentifier: '',
      hasInteracted: false
    };
    _this._handleUserIdentifierChanged = _this._handleUserIdentifierChanged.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this._getUserIdentifierErrorMessage = _this._getUserIdentifierErrorMessage.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this._handlePasswordRecoveryInitiationButtonClicked = _this._handlePasswordRecoveryInitiationButtonClicked.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this._handleBackButtonClicked = _this._handleBackButtonClicked.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(PasswordRecoveryStep1, [{
    key: "_getFormValues",
    value: function _getFormValues() {
      return {
        userIdentifier: this.state.userIdentifier
      };
    }
  }, {
    key: "_isFormValid",
    value: function _isFormValid() {
      var formValues = this._getFormValues();

      return !!formValues.userIdentifier;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.onStep1BoxInitialized != null) {
        this.props.onStep1BoxInitialized();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var values = this._getFormValues();

      if (this.props.onStep1BoxDisposed != null) {
        this.props.onStep1BoxDisposed(values);
      }
    }
  }, {
    key: "_handleUserIdentifierChanged",
    value: function _handleUserIdentifierChanged(event) {
      var _this2 = this;

      event.preventDefault();

      var oldValues = this._getFormValues();

      this.setState({
        userIdentifier: event.target.value,
        hasInteracted: true
      }, function () {
        return _this2._raiseValuesChanaged(oldValues);
      });
    }
  }, {
    key: "_raiseValuesChanaged",
    value: function _raiseValuesChanaged(oldValues) {
      var newValues = this._getFormValues();

      if (this.props.onPasswordRecoveryInitiationValuesChanged != null) {
        this.props.onPasswordRecoveryInitiationValuesChanged(oldValues, newValues);
      }
    }
  }, {
    key: "_handlePasswordRecoveryInitiationButtonClicked",
    value: function _handlePasswordRecoveryInitiationButtonClicked(event) {
      event.preventDefault();

      var values = this._getFormValues();

      if (this.props.onPasswordRecoveryInitiationRequested != null) {
        this.props.onPasswordRecoveryInitiationRequested(values);
      }
    }
  }, {
    key: "_handleBackButtonClicked",
    value: function _handleBackButtonClicked(event) {
      event.preventDefault();

      var values = this._getFormValues();

      if (this.props.onBackRequested != null) {
        this.props.onBackRequested(values);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        className: "lvd-passwordrecovery-step1",
        style: this._getStyle()
      }, this._renderTitle(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        className: "lvd-passwordrecovery-box-fields-container"
      }, this._renderMessage(), this._renderUserIdentifierField()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        className: "lvd-passwordrecovery-box-button-container"
      }, this._renderPasswordRecoveryInitiationActionButton(), this._renderBackActionButtonButton(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        className: "lvd-passwordrecovery-box-clear"
      })));
    }
  }, {
    key: "_getStyle",
    value: function _getStyle() {
      return this.props.style || {};
    }
  }, {
    key: "_renderTitle",
    value: function _renderTitle() {
      var titleProps = this._getTitleProps();

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_StepTitle_jsx__WEBPACK_IMPORTED_MODULE_11__.default, titleProps);
    }
  }, {
    key: "_getTitleProps",
    value: function _getTitleProps() {
      var titleProps = this.props.titleProps || {};
      return {
        show: titleProps.hasOwnProperty('show') ? !!titleProps.show : true,
        text: titleProps.text || _PasswordRecoveryStep1Defaults_js__WEBPACK_IMPORTED_MODULE_10__.default.title
      };
    }
  }, {
    key: "_renderMessage",
    value: function _renderMessage() {
      var messageProps = this._getMessageProps();

      return !!messageProps.message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.MessageBar, {
        className: "lvd-passwordrecovery-box-message",
        messageBarType: messageProps.type,
        isMultiline: true
      }, messageProps.message);
    }
  }, {
    key: "_getMessageProps",
    value: function _getMessageProps() {
      var messageProps = this.props.messageProps || {};
      var messageType = (0,_PasswordRecoveryBoxUtility_js__WEBPACK_IMPORTED_MODULE_12__.passwordRecoveryBoxMessageTypeToOfficeUiMessageType)(messageProps.type || null);
      return {
        message: messageProps.message || null,
        type: messageType
      };
    }
  }, {
    key: "_renderUserIdentifierField",
    value: function _renderUserIdentifierField() {
      var userIdentifierProps = this._getUserIdentifierProps();

      var userIdentifierField = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.TextField, {
        type: "text",
        value: this.state.userIdentifier,
        label: userIdentifierProps.label,
        placeholder: userIdentifierProps.placeholder,
        description: userIdentifierProps.description,
        disabled: this._isDisabled(),
        readOnly: this._isReadOnly(),
        underlined: this._isUnderlined(),
        onChange: this._handleUserIdentifierChanged,
        onGetErrorMessage: this._getUserIdentifierErrorMessage,
        required: true
      });
      return this._renderField(userIdentifierField);
    }
  }, {
    key: "_getUserIdentifierProps",
    value: function _getUserIdentifierProps() {
      var userIdentifierProps = this.props.userIdentifierProps || {};
      return {
        label: userIdentifierProps.label || _PasswordRecoveryStep1Defaults_js__WEBPACK_IMPORTED_MODULE_10__.default.userIdentifier.label,
        placeholder: userIdentifierProps.hasOwnProperty('placeholder') ? userIdentifierProps.placeholder || null : _PasswordRecoveryStep1Defaults_js__WEBPACK_IMPORTED_MODULE_10__.default.userIdentifier.placeholder,
        description: userIdentifierProps.description || _PasswordRecoveryStep1Defaults_js__WEBPACK_IMPORTED_MODULE_10__.default.userIdentifier.description,
        emptyErrorMessage: userIdentifierProps.emptyErrorMessage || _PasswordRecoveryStep1Defaults_js__WEBPACK_IMPORTED_MODULE_10__.default.userIdentifier.messages.empty
      };
    }
  }, {
    key: "_isDisabled",
    value: function _isDisabled() {
      return !!this.props.disabled;
    }
  }, {
    key: "_isReadOnly",
    value: function _isReadOnly() {
      return !!this.props.readOnly;
    }
  }, {
    key: "_isUnderlined",
    value: function _isUnderlined() {
      return !!this.props.underlined;
    }
  }, {
    key: "_getUserIdentifierErrorMessage",
    value: function _getUserIdentifierErrorMessage(value) {
      var userIdentifierProps = this._getUserIdentifierProps();

      return this._displayUserNameFieldErrorMessage(value) ? userIdentifierProps.emptyErrorMessage : '';
    }
  }, {
    key: "_displayUserNameFieldErrorMessage",
    value: function _displayUserNameFieldErrorMessage(value) {
      return !this._isValueFilledIn(value) && this._displayFieldErrorMessages();
    }
  }, {
    key: "_isValueFilledIn",
    value: function _isValueFilledIn(value) {
      return value != null && value.length > 0;
    }
  }, {
    key: "_displayFieldErrorMessages",
    value: function _displayFieldErrorMessages() {
      return !!this.state.hasInteracted;
    }
  }, {
    key: "_renderField",
    value: function _renderField(element) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        className: "lvd-passwordrecovery-box-field"
      }, element);
    }
  }, {
    key: "_renderPasswordRecoveryInitiationActionButton",
    value: function _renderPasswordRecoveryInitiationActionButton() {
      var enableSubmit = this._isFormValid() && !this._isDisabled();

      var passwordRecoveryInitiationButtonProps = this._getPasswordRecoveryInitiationActionButtonProps();

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.PrimaryButton, {
        disabled: !enableSubmit,
        className: "lvd-passwordrecovery-box-btn lvd-passwordrecovery-box-passwordchange-btn",
        text: passwordRecoveryInitiationButtonProps.label,
        onClick: this._handlePasswordRecoveryInitiationButtonClicked
      });
    }
  }, {
    key: "_getPasswordRecoveryInitiationActionButtonProps",
    value: function _getPasswordRecoveryInitiationActionButtonProps() {
      var passwordRecoveryInitiationButtonProps = this.props.passwordRecoveryInitiationButtonProps || {};
      return {
        label: passwordRecoveryInitiationButtonProps.label || _PasswordRecoveryStep1Defaults_js__WEBPACK_IMPORTED_MODULE_10__.default.passwordRecoveryInitiationButton.label
      };
    }
  }, {
    key: "_renderBackActionButtonButton",
    value: function _renderBackActionButtonButton() {
      var backActionButtonProps = this._getBackActionButtonProps();

      return backActionButtonProps.show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.DefaultButton, {
        primary: false,
        className: this._computeBackActionButtonCssClassName(backActionButtonProps),
        text: backActionButtonProps.label,
        disabled: this._isDisabled(),
        onClick: this._handleBackButtonClicked
      });
    }
  }, {
    key: "_getBackActionButtonProps",
    value: function _getBackActionButtonProps() {
      var backActionButtonProps = this.props.backActionButtonProps || {};
      return {
        show: backActionButtonProps.hasOwnProperty('show') ? !!backActionButtonProps.show : true,
        label: backActionButtonProps.label || _PasswordRecoveryStep1Defaults_js__WEBPACK_IMPORTED_MODULE_10__.default.backActionButton.label,
        position: backActionButtonProps.position || _PasswordRecoveryStep1Defaults_js__WEBPACK_IMPORTED_MODULE_10__.default.backActionButton.position
      };
    }
  }, {
    key: "_computeBackActionButtonCssClassName",
    value: function _computeBackActionButtonCssClassName(backActionButtonProps) {
      var positionClassName = 'lvd-passwordrecovery-box-back-btn-left';
      var baseClassName = 'lvd-passwordrecovery-box-btn lvd-passwordrecovery-box-back-btn';

      if (backActionButtonProps.position == _BackButtonPositions_js__WEBPACK_IMPORTED_MODULE_9__.default.right) {
        positionClassName = 'lvd-passwordrecovery-box-back-btn-right';
      }

      return "".concat(baseClassName, " ").concat(positionClassName);
    }
  }]);

  return PasswordRecoveryStep1;
}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));


PasswordRecoveryStep1.propTypes = {
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  readOnly: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  style: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  underlined: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  messageProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  titleProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  userIdentifierProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  passwordRecoveryInitiationButtonProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  backActionButtonProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  onPasswordRecoveryInitiationRequested: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  onBackRequested: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  onPasswordRecoveryInitiationValuesChanged: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  onStep1BoxInitialized: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  onStep1BoxDisposed: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
};

/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BackButtonPositions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

var PasswordRecoveryStep1Defaults = {
  title: 'Password recovery',
  userIdentifier: {
    label: 'E-mail address:',
    placeholder: 'Please fill in your e-mail address',
    description: '',
    messages: {
      empty: 'You must fill in your e-mail address'
    }
  },
  passwordRecoveryInitiationButton: {
    label: 'Recover my password'
  },
  backActionButton: {
    show: true,
    label: 'Back to log-in',
    position: _BackButtonPositions_js__WEBPACK_IMPORTED_MODULE_0__.default.left
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordRecoveryStep1Defaults);

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StepTitle)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var StepTitle = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(StepTitle, _React$Component);

  var _super = _createSuper(StepTitle);

  function StepTitle(props) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, StepTitle);

    return _super.call(this, props);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(StepTitle, [{
    key: "render",
    value: function render() {
      return this._shouldShow() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h4", {
        className: "lvd-passwordrecovery-box-header"
      }, this._getText());
    }
  }, {
    key: "_shouldShow",
    value: function _shouldShow() {
      return !!this.props.show;
    }
  }, {
    key: "_getText",
    value: function _getText() {
      return this.props.text || null;
    }
  }]);

  return StepTitle;
}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));


StepTitle.propTypes = {
  show: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  text: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)
};

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasswordRecoveryStep2)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
/* harmony import */ var lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _PasswordRecoveryStep2Defaults_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25);
/* harmony import */ var _PasswordRecoveryBoxUtility_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var PasswordRecoveryStep2 = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(PasswordRecoveryStep2, _React$Component);

  var _super = _createSuper(PasswordRecoveryStep2);

  function PasswordRecoveryStep2(props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, PasswordRecoveryStep2);

    _this = _super.call(this, props);
    _this._handlePasswordChangeValuesChanged = _this._handlePasswordChangeValuesChanged.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this._handleBackRequested = _this._handleBackRequested.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this._handlePasswordChangedRequested = _this._handlePasswordChangedRequested.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(PasswordRecoveryStep2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.onStep2BoxInitialized != null) {
        this.props.onStep2BoxInitialized();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.onStep2BoxDisposed != null) {
        this.props.onStep2BoxDisposed();
      }
    }
  }, {
    key: "_handlePasswordChangeValuesChanged",
    value: function _handlePasswordChangeValuesChanged(oldValues, newValues) {
      if (this.props.onPasswordChangeValuesChanged != null) {
        this.props.onPasswordChangeValuesChanged(oldValues, newValues);
      }
    }
  }, {
    key: "_handleBackRequested",
    value: function _handleBackRequested(values) {
      if (this.props.onBackRequested != null) {
        this.props.onBackRequested(values);
      }
    }
  }, {
    key: "_handlePasswordChangedRequested",
    value: function _handlePasswordChangedRequested(values) {
      if (this.props.onPasswordChangedRequested != null) {
        this.props.onPasswordChangedRequested(values);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_8__.PasswordChangeBox, {
        framed: false,
        centered: false,
        fixed: false,
        disabled: this._isDisabled(),
        readOnly: this._isReadOnly(),
        underlined: this._isUnderlined(),
        canReveal: this._canReveal(),
        requireExistingPassword: false,
        messageProps: this._getMessagProps(),
        titleProps: this._getTitleProps(),
        newPasswordProps: this._getNewPasswordProps(),
        confirmNewPasswordProps: this._getConfirmNewPasswordProps(),
        passwordChangeButtonProps: this._getPasswordChangeButtonProps(),
        backActionButtonProps: this._getBackActionButtonProps(),
        onPasswordChangeValuesChanged: this._handlePasswordChangeValuesChanged,
        onBackRequested: this._handleBackRequested,
        onPasswordChangedRequested: this._handlePasswordChangedRequested
      });
    }
  }, {
    key: "_isDisabled",
    value: function _isDisabled() {
      return !!this.props.disabled;
    }
  }, {
    key: "_isReadOnly",
    value: function _isReadOnly() {
      return !!this.props.readOnly;
    }
  }, {
    key: "_isUnderlined",
    value: function _isUnderlined() {
      return !!this.props.underlined;
    }
  }, {
    key: "_canReveal",
    value: function _canReveal() {
      return this.props.hasOwnProperty('canReveal') ? !!this.props.canReveal : true;
    }
  }, {
    key: "_getMessagProps",
    value: function _getMessagProps() {
      var messageProps = this.props.messageProps || {};
      var messageType = (0,_PasswordRecoveryBoxUtility_js__WEBPACK_IMPORTED_MODULE_10__.passwordRecoveryBoxMessageTypePasswordChangeBoxMessageType)(messageProps.type || null);
      return {
        message: messageProps.message || null,
        type: messageType
      };
    }
  }, {
    key: "_getTitleProps",
    value: function _getTitleProps() {
      var titleProps = this.props.titleProps || {};
      return {
        show: titleProps.hasOwnProperty('show') ? !!titleProps.show : true,
        text: titleProps.text || _PasswordRecoveryStep2Defaults_js__WEBPACK_IMPORTED_MODULE_9__.default.title
      };
    }
  }, {
    key: "_getNewPasswordProps",
    value: function _getNewPasswordProps() {
      return this.props.newPasswordProps || {};
    }
  }, {
    key: "_getConfirmNewPasswordProps",
    value: function _getConfirmNewPasswordProps() {
      return this.props.confirmNewPasswordProps || {};
    }
  }, {
    key: "_getPasswordChangeButtonProps",
    value: function _getPasswordChangeButtonProps() {
      var passwordChangeButtonProps = this.props.passwordChangeButtonProps || {};
      return {
        label: passwordChangeButtonProps.label || _PasswordRecoveryStep2Defaults_js__WEBPACK_IMPORTED_MODULE_9__.default.passwordChangeButton.label
      };
    }
  }, {
    key: "_getBackActionButtonProps",
    value: function _getBackActionButtonProps() {
      var backActionButtonProps = this.props.backActionButtonProps || {};
      var backButtonPosition = backActionButtonProps.position || _PasswordRecoveryStep2Defaults_js__WEBPACK_IMPORTED_MODULE_9__.default.backActionButton.position;
      return {
        show: backActionButtonProps.hasOwnProperty('show') ? !!backActionButtonProps.show : true,
        label: backActionButtonProps.label || _PasswordRecoveryStep2Defaults_js__WEBPACK_IMPORTED_MODULE_9__.default.backActionButton.label,
        position: (0,_PasswordRecoveryBoxUtility_js__WEBPACK_IMPORTED_MODULE_10__.passwordRecoveryBoxBackButtonPositionToPasswordChangeBoxBackButtonPosition)(backButtonPosition)
      };
    }
  }]);

  return PasswordRecoveryStep2;
}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));


PasswordRecoveryStep2.propTypes = {
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  readOnly: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  style: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  underlined: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  canReveal: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  messageProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  titleProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  confirmNewPasswordProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  newPasswordProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  passwordChangeButtonProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  backActionButtonProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  onPasswordChangedRequested: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  onBackRequested: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  onPasswordChangeValuesChanged: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  onStep2BoxInitialized: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  onStep2BoxDisposed: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
};

/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BackButtonPositions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

var PasswordRecoveryStep2Defaults = {
  title: 'Password Recovery - Set New Password',
  passwordChangeButton: {
    label: 'Recover my password'
  },
  backActionButton: {
    show: true,
    label: 'Back to log-in',
    position: _BackButtonPositions_js__WEBPACK_IMPORTED_MODULE_0__.default.left
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordRecoveryStep2Defaults);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordCallbackRule": () => (/* reexport safe */ lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_5__.PasswordCallbackRule),
/* harmony export */   "PasswordRegexRule": () => (/* reexport safe */ lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_5__.PasswordRegexRule),
/* harmony export */   "PasswordEvaluator": () => (/* reexport safe */ lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_5__.PasswordEvaluator),
/* harmony export */   "PasswordLengthRule": () => (/* reexport safe */ lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_5__.PasswordLengthRule),
/* harmony export */   "PasswordStrengthIndicator": () => (/* reexport safe */ lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_5__.PasswordStrengthIndicator),
/* harmony export */   "StrengthIndicatorStyles": () => (/* reexport safe */ lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_5__.StrengthIndicatorStyles),
/* harmony export */   "PasswordStrengthLevels": () => (/* reexport safe */ lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_5__.PasswordStrengthLevels),
/* harmony export */   "getAllAvailableLevels": () => (/* reexport safe */ lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_5__.getAllAvailableLevels),
/* harmony export */   "getAvailableLevelCount": () => (/* reexport safe */ lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_5__.getAvailableLevelCount),
/* harmony export */   "successMessage": () => (/* reexport safe */ _PasswordRecoveryBoxUtility_js__WEBPACK_IMPORTED_MODULE_2__.successMessage),
/* harmony export */   "errorMessage": () => (/* reexport safe */ _PasswordRecoveryBoxUtility_js__WEBPACK_IMPORTED_MODULE_2__.errorMessage),
/* harmony export */   "warningMessage": () => (/* reexport safe */ _PasswordRecoveryBoxUtility_js__WEBPACK_IMPORTED_MODULE_2__.warningMessage),
/* harmony export */   "infoMessage": () => (/* reexport safe */ _PasswordRecoveryBoxUtility_js__WEBPACK_IMPORTED_MODULE_2__.infoMessage),
/* harmony export */   "BackButtonPositions": () => (/* reexport safe */ _BackButtonPositions_js__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "PasswordRecoveryBoxMessageType": () => (/* reexport safe */ _PasswordRecoveryBoxMessageType_js__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "PasswordRecoverySteps": () => (/* reexport safe */ _PasswordRecoverySteps_js__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "PasswordRecoveryBox": () => (/* reexport safe */ _PasswordRecoveryBox_jsx__WEBPACK_IMPORTED_MODULE_3__.default)
/* harmony export */ });
/* harmony import */ var _BackButtonPositions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _PasswordRecoveryBoxMessageType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _PasswordRecoveryBoxUtility_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _PasswordRecoveryBox_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _PasswordRecoverySteps_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lvd_fluentui_passwordchangebox__WEBPACK_IMPORTED_MODULE_5__);







})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});