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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/**\n * BLOCK: flip-block3\n */\n\n\n\n\nvar __ = wp.i18n.__;\nvar _wp$blocks = wp.blocks,\n    registerBlockType = _wp$blocks.registerBlockType,\n    getBlockDefaultClassName = _wp$blocks.getBlockDefaultClassName;\nvar _wp$editor = wp.editor,\n    InspectorControls = _wp$editor.InspectorControls,\n    RichText = _wp$editor.RichText,\n    MediaUpload = _wp$editor.MediaUpload;\n\n\nregisterBlockType(\"cgb/block-flip-block3\", {\n\ttitle: __(\"flip-block3 - CGB Block\"),\n\ticon: \"smiley\",\n\tcategory: \"common\",\n\tattributes: {\n\t\tbodyContent: {\n\t\t\tsource: \"html\",\n\t\t\tselector: \".copy-bd\"\n\t\t},\n\t\theading: {\n\t\t\tsource: \"html\",\n\t\t\tselector: \"h2\"\n\t\t},\n\t\timgUrlFront: {\n\t\t\ttype: \"string\",\n\t\t\tdefault: \"http://placehold.it/200\"\n\t\t},\n\t\timgUrlBack: {\n\t\t\ttype: \"string\",\n\t\t\tdefault: \"http://placehold.it/200\"\n\t\t}\n\t},\n\n\tedit: function edit(props) {\n\t\tvar className = props.className,\n\t\t    setAttributes = props.setAttributes;\n\t\tvar attributes = props.attributes;\n\n\n\t\tfunction changeBodyContent(changes) {\n\t\t\tsetAttributes({\n\t\t\t\tbodyContent: changes\n\t\t\t});\n\t\t}\n\n\t\tfunction changeHeading(heading) {\n\t\t\tsetAttributes({ heading: heading });\n\t\t}\n\n\t\tfunction selectImageFront(value) {\n\t\t\tconsole.log(value);\n\t\t\tsetAttributes({\n\t\t\t\timgUrlFront: value.sizes.full.url\n\t\t\t});\n\t\t}\n\t\tfunction selectImageBack(value) {\n\t\t\tconsole.log(value);\n\t\t\tsetAttributes({\n\t\t\t\timgUrlBack: value.sizes.full.url\n\t\t\t});\n\t\t}\n\t\treturn [wp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{\n\t\t\t\t\tstyle: {\n\t\t\t\t\t\tpadding: \"1em 0\"\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t'Options'\n\t\t\t)\n\t\t), wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'media-front' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Select the front image'\n\t\t\t\t),\n\t\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\t\tonSelect: selectImageFront,\n\t\t\t\t\trender: function render(_ref) {\n\t\t\t\t\t\tvar open = _ref.open;\n\n\t\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t\t'button',\n\t\t\t\t\t\t\t{ onClick: open },\n\t\t\t\t\t\t\twp.element.createElement('img', { src: attributes.imgUrlFront })\n\t\t\t\t\t\t);\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'media-back' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Select the back image'\n\t\t\t\t),\n\t\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\t\tonSelect: selectImageBack,\n\t\t\t\t\trender: function render(_ref2) {\n\t\t\t\t\t\tvar open = _ref2.open;\n\n\t\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t\t'button',\n\t\t\t\t\t\t\t{ onClick: open },\n\t\t\t\t\t\t\twp.element.createElement('img', { src: attributes.imgUrlBack })\n\t\t\t\t\t\t);\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'copy' },\n\t\t\t\twp.element.createElement(RichText, {\n\t\t\t\t\tclassName: 'copy-hd',\n\t\t\t\t\ttagName: 'h2',\n\t\t\t\t\tplaceholder: 'Enter your heading',\n\t\t\t\t\tvalue: attributes.heading,\n\t\t\t\t\tonChange: changeHeading\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(RichText, {\n\t\t\t\t\tclassName: 'copy-bd',\n\t\t\t\t\ttagName: 'div',\n\t\t\t\t\tplaceholder: 'Enter your text here',\n\t\t\t\t\tvalue: attributes.bodyContent,\n\t\t\t\t\tonChange: changeBodyContent\n\t\t\t\t})\n\t\t\t)\n\t\t)];\n\t},\n\n\tsave: function save(props) {\n\t\tvar className = getBlockDefaultClassName(\"guty/media-block\");\n\t\tvar attributes = props.attributes;\n\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'flip-card' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'flip-card-inner' },\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'flip-card-front' },\n\t\t\t\t\t\twp.element.createElement('img', { src: attributes.imgUrlFront })\n\t\t\t\t\t),\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'flip-card-back' },\n\t\t\t\t\t\twp.element.createElement('img', { src: attributes.imgUrlBack })\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'media' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'copy' },\n\t\t\t\t\twp.element.createElement(RichText.Content, {\n\t\t\t\t\t\t'class': 'copy-hd',\n\t\t\t\t\t\ttagName: 'h2',\n\t\t\t\t\t\tvalue: attributes.heading\n\t\t\t\t\t}),\n\t\t\t\t\twp.element.createElement(RichText.Content, {\n\t\t\t\t\t\tclassName: 'copy-bd',\n\t\t\t\t\t\ttagName: 'div',\n\t\t\t\t\t\tvalue: attributes.bodyContent\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IGZsaXAtYmxvY2szXG4gKi9cblxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxudmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciBfd3AkYmxvY2tzID0gd3AuYmxvY2tzLFxuICAgIHJlZ2lzdGVyQmxvY2tUeXBlID0gX3dwJGJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZSxcbiAgICBnZXRCbG9ja0RlZmF1bHRDbGFzc05hbWUgPSBfd3AkYmxvY2tzLmdldEJsb2NrRGVmYXVsdENsYXNzTmFtZTtcbnZhciBfd3AkZWRpdG9yID0gd3AuZWRpdG9yLFxuICAgIEluc3BlY3RvckNvbnRyb2xzID0gX3dwJGVkaXRvci5JbnNwZWN0b3JDb250cm9scyxcbiAgICBSaWNoVGV4dCA9IF93cCRlZGl0b3IuUmljaFRleHQsXG4gICAgTWVkaWFVcGxvYWQgPSBfd3AkZWRpdG9yLk1lZGlhVXBsb2FkO1xuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKFwiY2diL2Jsb2NrLWZsaXAtYmxvY2szXCIsIHtcblx0dGl0bGU6IF9fKFwiZmxpcC1ibG9jazMgLSBDR0IgQmxvY2tcIiksXG5cdGljb246IFwic21pbGV5XCIsXG5cdGNhdGVnb3J5OiBcImNvbW1vblwiLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0Ym9keUNvbnRlbnQ6IHtcblx0XHRcdHNvdXJjZTogXCJodG1sXCIsXG5cdFx0XHRzZWxlY3RvcjogXCIuY29weS1iZFwiXG5cdFx0fSxcblx0XHRoZWFkaW5nOiB7XG5cdFx0XHRzb3VyY2U6IFwiaHRtbFwiLFxuXHRcdFx0c2VsZWN0b3I6IFwiaDJcIlxuXHRcdH0sXG5cdFx0aW1nVXJsRnJvbnQ6IHtcblx0XHRcdHR5cGU6IFwic3RyaW5nXCIsXG5cdFx0XHRkZWZhdWx0OiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMjAwXCJcblx0XHR9LFxuXHRcdGltZ1VybEJhY2s6IHtcblx0XHRcdHR5cGU6IFwic3RyaW5nXCIsXG5cdFx0XHRkZWZhdWx0OiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMjAwXCJcblx0XHR9XG5cdH0sXG5cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXHRcdHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG5cdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzO1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcztcblxuXG5cdFx0ZnVuY3Rpb24gY2hhbmdlQm9keUNvbnRlbnQoY2hhbmdlcykge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdGJvZHlDb250ZW50OiBjaGFuZ2VzXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBjaGFuZ2VIZWFkaW5nKGhlYWRpbmcpIHtcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBoZWFkaW5nOiBoZWFkaW5nIH0pO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHNlbGVjdEltYWdlRnJvbnQodmFsdWUpIHtcblx0XHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRpbWdVcmxGcm9udDogdmFsdWUuc2l6ZXMuZnVsbC51cmxcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRmdW5jdGlvbiBzZWxlY3RJbWFnZUJhY2sodmFsdWUpIHtcblx0XHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRpbWdVcmxCYWNrOiB2YWx1ZS5zaXplcy5mdWxsLnVybFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJldHVybiBbd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjFlbSAwXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdPcHRpb25zJ1xuXHRcdFx0KVxuXHRcdCksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdtZWRpYS1mcm9udCcgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdwJyxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdCdTZWxlY3QgdGhlIGZyb250IGltYWdlJ1xuXHRcdFx0XHQpLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoTWVkaWFVcGxvYWQsIHtcblx0XHRcdFx0XHRvblNlbGVjdDogc2VsZWN0SW1hZ2VGcm9udCxcblx0XHRcdFx0XHRyZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihfcmVmKSB7XG5cdFx0XHRcdFx0XHR2YXIgb3BlbiA9IF9yZWYub3BlbjtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0J2J1dHRvbicsXG5cdFx0XHRcdFx0XHRcdHsgb25DbGljazogb3BlbiB9LFxuXHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgc3JjOiBhdHRyaWJ1dGVzLmltZ1VybEZyb250IH0pXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ21lZGlhLWJhY2snIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQncCcsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHQnU2VsZWN0IHRoZSBiYWNrIGltYWdlJ1xuXHRcdFx0XHQpLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoTWVkaWFVcGxvYWQsIHtcblx0XHRcdFx0XHRvblNlbGVjdDogc2VsZWN0SW1hZ2VCYWNrLFxuXHRcdFx0XHRcdHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKF9yZWYyKSB7XG5cdFx0XHRcdFx0XHR2YXIgb3BlbiA9IF9yZWYyLm9wZW47XG5cblx0XHRcdFx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdCdidXR0b24nLFxuXHRcdFx0XHRcdFx0XHR7IG9uQ2xpY2s6IG9wZW4gfSxcblx0XHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7IHNyYzogYXR0cmlidXRlcy5pbWdVcmxCYWNrIH0pXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ2NvcHknIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuXHRcdFx0XHRcdGNsYXNzTmFtZTogJ2NvcHktaGQnLFxuXHRcdFx0XHRcdHRhZ05hbWU6ICdoMicsXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI6ICdFbnRlciB5b3VyIGhlYWRpbmcnLFxuXHRcdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLmhlYWRpbmcsXG5cdFx0XHRcdFx0b25DaGFuZ2U6IGNoYW5nZUhlYWRpbmdcblx0XHRcdFx0fSksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuXHRcdFx0XHRcdGNsYXNzTmFtZTogJ2NvcHktYmQnLFxuXHRcdFx0XHRcdHRhZ05hbWU6ICdkaXYnLFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyOiAnRW50ZXIgeW91ciB0ZXh0IGhlcmUnLFxuXHRcdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLmJvZHlDb250ZW50LFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBjaGFuZ2VCb2R5Q29udGVudFxuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdCldO1xuXHR9LFxuXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcblx0XHR2YXIgY2xhc3NOYW1lID0gZ2V0QmxvY2tEZWZhdWx0Q2xhc3NOYW1lKFwiZ3V0eS9tZWRpYS1ibG9ja1wiKTtcblx0XHR2YXIgYXR0cmlidXRlcyA9IHByb3BzLmF0dHJpYnV0ZXM7XG5cblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAnZmxpcC1jYXJkJyB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdmbGlwLWNhcmQtaW5uZXInIH0sXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ2ZsaXAtY2FyZC1mcm9udCcgfSxcblx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJywgeyBzcmM6IGF0dHJpYnV0ZXMuaW1nVXJsRnJvbnQgfSlcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdmbGlwLWNhcmQtYmFjaycgfSxcblx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJywgeyBzcmM6IGF0dHJpYnV0ZXMuaW1nVXJsQmFjayB9KVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAnbWVkaWEnIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ2NvcHknIH0sXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LkNvbnRlbnQsIHtcblx0XHRcdFx0XHRcdCdjbGFzcyc6ICdjb3B5LWhkJyxcblx0XHRcdFx0XHRcdHRhZ05hbWU6ICdoMicsXG5cdFx0XHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy5oZWFkaW5nXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LkNvbnRlbnQsIHtcblx0XHRcdFx0XHRcdGNsYXNzTmFtZTogJ2NvcHktYmQnLFxuXHRcdFx0XHRcdFx0dGFnTmFtZTogJ2RpdicsXG5cdFx0XHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy5ib2R5Q29udGVudFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdClcblx0XHQpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);