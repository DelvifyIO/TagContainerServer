const widgetJs = (merchantid) => {
    return "/******/ (function(modules) { // webpackBootstrap\n" +
        "/******/ \t// The module cache\n" +
        "/******/ \tvar installedModules = {};\n" +
        "/******/\n" +
        "/******/ \t// The require function\n" +
        "/******/ \tfunction __webpack_require__(moduleId) {\n" +
        "/******/\n" +
        "/******/ \t\t// Check if module is in cache\n" +
        "/******/ \t\tif(installedModules[moduleId]) {\n" +
        "/******/ \t\t\treturn installedModules[moduleId].exports;\n" +
        "/******/ \t\t}\n" +
        "/******/ \t\t// Create a new module (and put it into the cache)\n" +
        "/******/ \t\tvar module = installedModules[moduleId] = {\n" +
        "/******/ \t\t\ti: moduleId,\n" +
        "/******/ \t\t\tl: false,\n" +
        "/******/ \t\t\texports: {}\n" +
        "/******/ \t\t};\n" +
        "/******/\n" +
        "/******/ \t\t// Execute the module function\n" +
        "/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n" +
        "/******/\n" +
        "/******/ \t\t// Flag the module as loaded\n" +
        "/******/ \t\tmodule.l = true;\n" +
        "/******/\n" +
        "/******/ \t\t// Return the exports of the module\n" +
        "/******/ \t\treturn module.exports;\n" +
        "/******/ \t}\n" +
        "/******/\n" +
        "/******/\n" +
        "/******/ \t// expose the modules object (__webpack_modules__)\n" +
        "/******/ \t__webpack_require__.m = modules;\n" +
        "/******/\n" +
        "/******/ \t// expose the module cache\n" +
        "/******/ \t__webpack_require__.c = installedModules;\n" +
        "/******/\n" +
        "/******/ \t// define getter function for harmony exports\n" +
        "/******/ \t__webpack_require__.d = function(exports, name, getter) {\n" +
        "/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n" +
        "/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n" +
        "/******/ \t\t}\n" +
        "/******/ \t};\n" +
        "/******/\n" +
        "/******/ \t// define __esModule on exports\n" +
        "/******/ \t__webpack_require__.r = function(exports) {\n" +
        "/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n" +
        "/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n" +
        "/******/ \t\t}\n" +
        "/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n" +
        "/******/ \t};\n" +
        "/******/\n" +
        "/******/ \t// create a fake namespace object\n" +
        "/******/ \t// mode & 1: value is a module id, require it\n" +
        "/******/ \t// mode & 2: merge all properties of value into the ns\n" +
        "/******/ \t// mode & 4: return value when already ns object\n" +
        "/******/ \t// mode & 8|1: behave like require\n" +
        "/******/ \t__webpack_require__.t = function(value, mode) {\n" +
        "/******/ \t\tif(mode & 1) value = __webpack_require__(value);\n" +
        "/******/ \t\tif(mode & 8) return value;\n" +
        "/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\n" +
        "/******/ \t\tvar ns = Object.create(null);\n" +
        "/******/ \t\t__webpack_require__.r(ns);\n" +
        "/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\n" +
        "/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n" +
        "/******/ \t\treturn ns;\n" +
        "/******/ \t};\n" +
        "/******/\n" +
        "/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n" +
        "/******/ \t__webpack_require__.n = function(module) {\n" +
        "/******/ \t\tvar getter = module && module.__esModule ?\n" +
        "/******/ \t\t\tfunction getDefault() { return module['default']; } :\n" +
        "/******/ \t\t\tfunction getModuleExports() { return module; };\n" +
        "/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n" +
        "/******/ \t\treturn getter;\n" +
        "/******/ \t};\n" +
        "/******/\n" +
        "/******/ \t// Object.prototype.hasOwnProperty.call\n" +
        "/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n" +
        "/******/\n" +
        "/******/ \t// __webpack_public_path__\n" +
        "/******/ \t__webpack_require__.p = \"\";\n" +
        "/******/\n" +
        "/******/\n" +
        "/******/ \t// Load entry module and return exports\n" +
        "/******/ \treturn __webpack_require__(__webpack_require__.s = \"./src/js/widget.js\");\n" +
        "/******/ })\n" +
        "/************************************************************************/\n" +
        "/******/ ({\n" +
        "\n" +
        "/***/ \"./src/js/widget.js\":\n" +
        "/*!**************************!*\\\n" +
        "  !*** ./src/js/widget.js ***!\n" +
        "  \\**************************/\n" +
        "/*! no static exports found */\n" +
        "/***/ (function(module, exports) {\n" +
        "\n" +
        "eval(\"const API_HOST = \\\"http://18.221.221.252:8081:8081/api\\\";\\r\\nconst ALPHAVANTAGE_API_KEY = \\\"2GVBR4NW9VYS1F8D\\\";\\r\\nlet uid = '';\\r\\nlet geo_location = '';\\r\\nlet device = '';\\r\\n\\r\\nconst styles =\\r\\n    \\\"<style>\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\"button {\\\" +\\r\\n    \\\"outline: none !important;\\\" +\\r\\n    \\\"border: none;\\\" +\\r\\n    \\\"background: transparent;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\"button:hover {\\\" +\\r\\n    \\\"cursor: pointer;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\".real-recommendation .of-hidden {overflow: hidden;}\\\" +\\r\\n    \\\".real-recommendation .pos-relative {position: relative;}\\\" +\\r\\n    \\\".real-recommendation a {\\\" +\\r\\n    \\\"  font-weight: 400;\\\" +\\r\\n    \\\"font-size: 15px;\\\" +\\r\\n    \\\"line-height: 1.7;\\\" +\\r\\n    \\\"color: #666666;\\\" +\\r\\n    \\\"margin: 0px;\\\" +\\r\\n    \\\"transition: all 0.4s;\\\" +\\r\\n    \\\"-webkit-transition: all 0.4s;\\\" +\\r\\n    \\\"  -o-transition: all 0.4s;\\\" +\\r\\n    \\\"  -moz-transition: all 0.4s;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation a:focus {\\\" +\\r\\n    \\\"outline: none !important;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation a:hover {\\\" +\\r\\n    \\\"text-decoration: none;\\\" +\\r\\n    \\\"color: #e65540;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\".real-recommendation .animated {\\\" +\\r\\n    \\\"  animation-duration: 1s;\\\" +\\r\\n    \\\"  animation-fill-mode: both;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\".real-recommendation .slick-slider\\\" +\\r\\n    \\\"{\\\" +\\r\\n    \\\"    position: relative;\\\" +\\r\\n    \\\"    display: block;\\\" +\\r\\n    \\\"    box-sizing: border-box;\\\" +\\r\\n    \\\"    -webkit-user-select: none;\\\" +\\r\\n    \\\"       -moz-user-select: none;\\\" +\\r\\n    \\\"        -ms-user-select: none;\\\" +\\r\\n    \\\"            user-select: none;\\\" +\\r\\n    \\\"    -webkit-touch-callout: none;\\\" +\\r\\n    \\\"    -khtml-user-select: none;\\\" +\\r\\n    \\\"    -ms-touch-action: pan-y;\\\" +\\r\\n    \\\"        touch-action: pan-y;\\\" +\\r\\n    \\\"    -webkit-tap-highlight-color: transparent;\\\" +\\r\\n    \\\"    outline: none !important;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\".real-recommendation .slick-list\\\" +\\r\\n    \\\"{\\\" +\\r\\n    \\\"    position: relative;\\\" +\\r\\n    \\\"    display: block;\\\" +\\r\\n    \\\"    overflow: hidden;\\\" +\\r\\n    \\\"    margin: 0;\\\" +\\r\\n    \\\"    padding: 0;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\".real-recommendation .slick-list:focus\\\" +\\r\\n    \\\"{\\\" +\\r\\n    \\\"    outline: none;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\".real-recommendation .slick-list.dragging\\\" +\\r\\n    \\\"{\\\" +\\r\\n    \\\"    cursor: pointer;\\\" +\\r\\n    \\\"    cursor: hand;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\".real-recommendation .slick-slider .slick-track,\\\" +\\r\\n    \\\".real-recommendation .slick-slider .slick-list\\\" +\\r\\n    \\\"{\\\" +\\r\\n    \\\"    -webkit-transform: translate3d(0, 0, 0);\\\" +\\r\\n    \\\"       -moz-transform: translate3d(0, 0, 0);\\\" +\\r\\n    \\\"        -ms-transform: translate3d(0, 0, 0);\\\" +\\r\\n    \\\"         -o-transform: translate3d(0, 0, 0);\\\" +\\r\\n    \\\"            transform: translate3d(0, 0, 0);\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\".real-recommendation .slick-track\\\" +\\r\\n    \\\"{\\\" +\\r\\n    \\\"    position: relative;\\\" +\\r\\n    \\\"    top: 0;\\\" +\\r\\n    \\\"    left: 0;\\\" +\\r\\n    \\\"    display: block;\\\" +\\r\\n    \\\"    margin-left: auto;\\\" +\\r\\n    \\\"    margin-right: auto;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\".real-recommendation .slick-track:before,\\\" +\\r\\n    \\\".real-recommendation .slick-track:after\\\" +\\r\\n    \\\"{\\\" +\\r\\n    \\\"    display: table;\\\" +\\r\\n    \\\"    content: '';\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\".real-recommendation .slick-track:after\\\" +\\r\\n    \\\"{\\\" +\\r\\n    \\\"    clear: both;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\".real-recommendation .slick-loading .slick-track\\\" +\\r\\n    \\\"{\\\" +\\r\\n    \\\"    visibility: hidden;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\".real-recommendation .slick-slide\\\" +\\r\\n    \\\"{\\\" +\\r\\n    \\\"    display: none;\\\" +\\r\\n    \\\"    float: left;\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\"    height: 100%;\\\" +\\r\\n    \\\"    min-height: 1px;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\".real-recommendation [dir='rtl'] .slick-slide\\\" +\\r\\n    \\\"{\\\" +\\r\\n    \\\"    float: right;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\".real-recommendation .slick-slide img\\\" +\\r\\n    \\\"{\\\" +\\r\\n    \\\"    display: block;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\".real-recommendation .slick-slide.slick-loading img\\\" +\\r\\n    \\\"{\\\" +\\r\\n    \\\"    display: none;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\".real-recommendation .slick-slide.dragging img\\\" +\\r\\n    \\\"{\\\" +\\r\\n    \\\"    pointer-events: none;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\".real-recommendation .slick-initialized .slick-slide\\\" +\\r\\n    \\\"{\\\" +\\r\\n    \\\"    display: block;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\".real-recommendation .slick-loading .slick-slide\\\" +\\r\\n    \\\"{\\\" +\\r\\n    \\\"    visibility: hidden;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\".real-recommendation .slick-vertical .slick-slide\\\" +\\r\\n    \\\"{\\\" +\\r\\n    \\\"    display: block;\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\"    height: auto;\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\"    border: 1px solid transparent;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\".real-recommendation .slick-arrow.slick-hidden {\\\" +\\r\\n    \\\"    display: none;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\".real-recommendation .wrap-slick2 {\\\" +\\r\\n    \\\"  position: relative;\\\" +\\r\\n    \\\"  margin-right: -15px;\\\" +\\r\\n    \\\"  margin-left: -15px;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\"/* ------------------------------------ */\\\" +\\r\\n    \\\".real-recommendation .arrow-slick2 {\\\" +\\r\\n    \\\"  position: absolute;\\\" +\\r\\n    \\\"  z-index: 100;\\\" +\\r\\n    \\\"  top: calc((100% - 70px) / 2);\\\" +\\r\\n    \\\"  -webkit-transform: translateY(-50%);\\\" +\\r\\n    \\\"  -moz-transform: translateY(-50%);\\\" +\\r\\n    \\\"  -ms-transform: translateY(-50%);\\\" +\\r\\n    \\\"  -o-transform: translateY(-50%);\\\" +\\r\\n    \\\"  transform: translateY(-50%);\\\" +\\r\\n    \\\"  font-size: 39px;\\\" +\\r\\n    \\\"  color: #cccccc;\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\"  -webkit-transition: all 0.4s;\\\" +\\r\\n    \\\"  -o-transition: all 0.4s;\\\" +\\r\\n    \\\"  -moz-transition: all 0.4s;\\\" +\\r\\n    \\\"  transition: all 0.4s;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .arrow-slick2:hover {\\\" +\\r\\n    \\\"  color: #666666;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .next-slick2 {\\\" +\\r\\n    \\\"  right: -30px;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .prev-slick2 {\\\" +\\r\\n    \\\"  left: -30px;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\"@media (max-width: 1280px) {\\\" +\\r\\n    \\\"  .real-recommendation .next-slick2 {\\\" +\\r\\n    \\\"    right: 0px;\\\" +\\r\\n    \\\"  }\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\"  .real-recommendation .prev-slick2 {\\\" +\\r\\n    \\\"    left: 0px;\\\" +\\r\\n    \\\"  }\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\"@media (max-width: 1610px) {\\\" +\\r\\n    \\\"  .real-recommendation .rs1-slick2 .next-slick2 {\\\" +\\r\\n    \\\"    right: 0px;\\\" +\\r\\n    \\\"  }\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\"  .real-recommendation .rs1-slick2 .prev-slick2 {\\\" +\\r\\n    \\\"    left: 0px;\\\" +\\r\\n    \\\"  }\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\".real-recommendation .recommended-details {\\\" +\\r\\n    \\\"    background-color: white;\\\" +\\r\\n    \\\"    top: 0;\\\" +\\r\\n    \\\"    position: absolute;\\\" +\\r\\n    \\\"    justify-content: center;\\\" +\\r\\n    \\\"    z-index: 101;\\\" +\\r\\n    \\\"    flex-wrap: wrap;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .recommended-details-close {\\\" +\\r\\n    \\\"    position: absolute;\\\" +\\r\\n    \\\"    top: 0;\\\" +\\r\\n    \\\"    right: 0;\\\" +\\r\\n    \\\"    margin: 15px;\\\" +\\r\\n    \\\"    cursor: pointer;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .btn-more-ctn {\\\" +\\r\\n    \\\"    border-radius: 50px;\\\" +\\r\\n    \\\"    background-color: white;\\\" +\\r\\n    \\\"    position: absolute;\\\" +\\r\\n    \\\"    bottom: 0;\\\" +\\r\\n    \\\"    right: 0;\\\" +\\r\\n    \\\"    width: 34px;\\\" +\\r\\n    \\\"    height: 34px;\\\" +\\r\\n    \\\"    margin: 10px;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .recommended-details-image {\\\" +\\r\\n    \\\"    width: 35%;\\\" +\\r\\n    \\\"    flex: 1 1 35%;\\\" +\\r\\n    \\\"    min-width: 200px;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .recommended-details-image img {\\\" +\\r\\n    \\\"    object-fit: contain;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .recommended-details-content {\\\" +\\r\\n    \\\"    flex: 1 1 65%;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\".real-recommendation .trans-0-4 {\\\" +\\r\\n    \\\"-webkit-transition: all 0.4s;\\\" +\\r\\n    \\\"    -o-transition: all 0.4s;\\\" +\\r\\n    \\\"    -moz-transition: all 0.4s;\\\" +\\r\\n    \\\"    transition: all 0.4s;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\".real-recommendation .trans-0-5 {\\\" +\\r\\n    \\\"-webkit-transition: all 0.5s;\\\" +\\r\\n    \\\"    -o-transition: all 0.5s;\\\" +\\r\\n    \\\"    -moz-transition: all 0.5s;\\\" +\\r\\n    \\\"    transition: all 0.5s;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\".real-recommendation .p-t-45 {padding-top: 45px;}\\\" +\\r\\n    \\\".real-recommendation .p-b-50 {padding-bottom: 50px;}\\\" +\\r\\n    \\\".real-recommendation .container {\\\" +\\r\\n    \\\"   max-width: 1200px;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\".real-recommendation .p-b-60 {padding-bottom: 60px;}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .m-text5 {\\\" +\\r\\n    \\\"font-size: 30px;\\\" +\\r\\n    \\\"color: #222222;\\\" +\\r\\n    \\\"line-height: 1.2;\\\" +\\r\\n    \\\"text-transform: uppercase;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .t-center {text-align: center;}\\\"+\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .w-size-0 {\\\" +\\r\\n    \\\"    width: 0;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .op-0-0 {opacity: 0;}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .wrap-pic-w img {width: 100%;}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .p-t-30 {padding-top: 30px;}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .p-b-30 {padding-bottom: 30px;}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .p-l-15 {padding-left: 15px;}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .p-r-15 {padding-right: 15px;}\\\" +\\r\\n    \\\".real-recommendation .p-r-50 {padding-right: 50px;}\\\" +\\r\\n    \\\".real-recommendation .m-text16 {\\\" +\\r\\n    \\\"font-size: 24px;\\\" +\\r\\n    \\\"color: #222222;\\\" +\\r\\n    \\\"line-height: 1.5;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .p-b-13 {padding-bottom: 13px;}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .s-text8, .s-text8 a {\\\" +\\r\\n    \\\"font-size: 13px;\\\" +\\r\\n    \\\"color: #888888;\\\" +\\r\\n    \\\"line-height: 1.8;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .p-t-10 {padding-top: 10px;}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .size9 {\\\" +\\r\\n    \\\"width: 162px;\\\" +\\r\\n    \\\"height: 45px;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .m-t-10 {margin-top: 10px;}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .m-b-10 {margin-bottom: 10px;}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .flex-c-m {\\\" +\\r\\n    \\\"display: -webkit-box;\\\" +\\r\\n    \\\"display: -webkit-flex;\\\" +\\r\\n    \\\"display: -moz-box;\\\" +\\r\\n    \\\"display: -ms-flexbox;\\\" +\\r\\n    \\\"display: flex;\\\" +\\r\\n    \\\"justify-content: center;\\\" +\\r\\n    \\\"-ms-align-items: center;\\\" +\\r\\n    \\\"align-items: center;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .sizefull {\\\" +\\r\\n    \\\"width: 100%;\\\" +\\r\\n    \\\"height: 100%;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .bg1 {background-color: #222222;}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .bo-rad-23 {border-radius: 23px;}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .hov1:hover {\\\" +\\r\\n    \\\"    background-color: #e65540;\\\" +\\r\\n    \\\"  color: white;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .s-text1 {\\\" +\\r\\n    \\\"font-size: 15px;\\\" +\\r\\n    \\\"color: white;\\\" +\\r\\n    \\\"text-transform: uppercase;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .shadow1 {\\\" +\\r\\n    \\\"box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.1);\\\" +\\r\\n    \\\"-moz-box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.1);\\\" +\\r\\n    \\\"-webkit-box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.1);\\\" +\\r\\n    \\\"-o-box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.1);\\\" +\\r\\n    \\\"-ms-box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.1);\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .fs-24 {font-size: 24px;}\\\" +\\r\\n    \\\".real-recommendation .fs-16 {font-size: 16px;}\\\" +\\r\\n    \\\".real-recommendation .fs-32 {font-size: 32px;}\\\" +\\r\\n    \\\"\\\" +\\r\\n    \\\".real-recommendation .flex-row {\\\" +\\r\\n    \\\"display: -webkit-box;\\\" +\\r\\n    \\\"display: -webkit-flex;\\\" +\\r\\n    \\\"display: -moz-box;\\\" +\\r\\n    \\\"display: -ms-flexbox;\\\" +\\r\\n    \\\"display: flex;\\\" +\\r\\n    \\\"-webkit-flex-direction: row;\\\" +\\r\\n    \\\"-moz-flex-direction: row;\\\" +\\r\\n    \\\"-ms-flex-direction: row;\\\" +\\r\\n    \\\"-o-flex-direction: row;\\\" +\\r\\n    \\\"flex-direction: row;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\".real-recommendation .dis-none {display: none;}\\\" +\\r\\n    \\\".real-recommendation .w-size-full {\\\" +\\r\\n    \\\"    width: 100%;\\\" +\\r\\n    \\\"}\\\" +\\r\\n    \\\".real-recommendation .bgwhite {  }\\\" +\\r\\n    \\\"</style>\\\";\\r\\n\\r\\nfunction initSlick2(parent) {\\r\\n    /*[ Slick2 ]\\r\\n        ===========================================================*/\\r\\n    $(`#${parent} .slick2`).slick({\\r\\n        slidesToShow: 4,\\r\\n        slidesToScroll: 4,\\r\\n        infinite: true,\\r\\n        autoplay: false,\\r\\n        autoplaySpeed: 6000,\\r\\n        arrows: true,\\r\\n        appendArrows: $(`#${parent} .wrap-slick2`),\\r\\n        prevArrow:'<button class=\\\"arrow-slick2 prev-slick2\\\"><i class=\\\"fa  fa-angle-left\\\" aria-hidden=\\\"true\\\"></i></button>',\\r\\n        nextArrow:'<button class=\\\"arrow-slick2 next-slick2\\\"><i class=\\\"fa  fa-angle-right\\\" aria-hidden=\\\"true\\\"></i></button>',\\r\\n        responsive: [\\r\\n            {\\r\\n                breakpoint: 1200,\\r\\n                settings: {\\r\\n                    slidesToShow: 4,\\r\\n                    slidesToScroll: 4\\r\\n                }\\r\\n            },\\r\\n            {\\r\\n                breakpoint: 992,\\r\\n                settings: {\\r\\n                    slidesToShow: 3,\\r\\n                    slidesToScroll: 3\\r\\n                }\\r\\n            },\\r\\n            {\\r\\n                breakpoint: 768,\\r\\n                settings: {\\r\\n                    slidesToShow: 2,\\r\\n                    slidesToScroll: 2\\r\\n                }\\r\\n            },\\r\\n            {\\r\\n                breakpoint: 576,\\r\\n                settings: {\\r\\n                    slidesToShow: 1,\\r\\n                    slidesToScroll: 1\\r\\n                }\\r\\n            }\\r\\n        ]\\r\\n    });\\r\\n};\\r\\n\\r\\nfunction getQuery()\\r\\n{\\r\\n    var vars = [], hash;\\r\\n    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');\\r\\n    for(var i = 0; i < hashes.length; i++)\\r\\n    {\\r\\n        hash = hashes[i].split('=');\\r\\n        vars.push(hash[0]);\\r\\n        vars[hash[0]] = hash[1];\\r\\n    }\\r\\n    return vars;\\r\\n}\\r\\n\\r\\nfunction setCookie(name, value, hours) {\\r\\n    const d = new Date();\\r\\n    d.setTime(d.getTime() + (hours * 60 * 60 * 1000));\\r\\n    const expires = \\\"expires=\\\"+ d.toUTCString();\\r\\n    document.cookie = name + \\\"=\\\" + value + \\\";\\\" + expires + \\\";path=/\\\";\\r\\n}\\r\\n\\r\\nfunction getCookie(cname) {\\r\\n    var name = cname + \\\"=\\\";\\r\\n    var decodedCookie = decodeURIComponent(document.cookie);\\r\\n    var ca = decodedCookie.split(';');\\r\\n    for(var i = 0; i <ca.length; i++) {\\r\\n        var c = ca[i];\\r\\n        while (c.charAt(0) == ' ') {\\r\\n            c = c.substring(1);\\r\\n        }\\r\\n        if (c.indexOf(name) == 0) {\\r\\n            return c.substring(name.length, c.length);\\r\\n        }\\r\\n    }\\r\\n    return null;\\r\\n}\\r\\n\\r\\nfunction recordEngagement(type, options = {}) {\\r\\n    const data = {\\r\\n        pid: options.pid,\\r\\n        oid: options.oid,\\r\\n        order: options.order,\\r\\n        geo_location,\\r\\n        uid,\\r\\n        device,\\r\\n        type,\\r\\n        location: options.location || getQuery()['location'],\\r\\n        source: options.source || getQuery()['source'],\\r\\n    };\\r\\n    if (type === 'ADD_CART_FROM_DETAIL' && !getQuery()['redirect_from_recommendation']) return;\\r\\n    switch (type) {\\r\\n        case 'WIDGET_IMPRESSION':\\r\\n        case 'IMPRESSION':\\r\\n        case 'SHOW_OVERLAY':\\r\\n        case 'CLICK':\\r\\n        case 'ADD_CART_FROM_WIDGET':\\r\\n        case 'ADD_CART_FROM_DETAIL':\\r\\n            api('POST', `${API_HOST}/engagement`, data);\\r\\n            break;\\r\\n        case 'PURCHASE':\\r\\n            const promises = data.order.map(item => {\\r\\n                const exchangeRateRequest = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${item.currency}&to_currency=USD&apikey=${ALPHAVANTAGE_API_KEY}`;\\r\\n                return $.get(exchangeRateRequest);\\r\\n            });\\r\\n            Promise.all(promises)\\r\\n                .then((res) => {\\r\\n                    res.forEach((rate, index) => {\\r\\n                        const exchangeRate = rate && rate['Realtime Currency Exchange Rate'] && rate['Realtime Currency Exchange Rate']['5. Exchange Rate'] ?\\r\\n                            rate['Realtime Currency Exchange Rate']['5. Exchange Rate'] : 1;\\r\\n                        data.order[index].exchangeRate = exchangeRate;\\r\\n                    });\\r\\n                    api('POST', `${API_HOST}/order`, data);\\r\\n                });\\r\\n            break;\\r\\n    }\\r\\n}\\r\\n\\r\\nfunction getRecommendations(placement, productDetailUrl, onAddToCart) {\\r\\n    const sku = getQuery()[\\\"sku\\\"] || 1;\\r\\n    const apiConfigs = {\\r\\n        HOME: { url: '/recommendation/featured', param: {}, source: 'FEATURED' },\\r\\n        PRODUCT_DETAILS: { url: `/recommendation/similar/${sku}`, param: {} , source: 'SIMILAR' },\\r\\n        PRODUCT_DETAILS_FEATURED: { url: '/recommendation/featured', param: {}, source: 'FEATURED' },\\r\\n        CART: { url: '/recommendation/cart', param: {}, source: 'FEATURED' }\\r\\n    };\\r\\n    const apiConfig = apiConfigs[placement.location];\\r\\n    recordEngagement('WIDGET_IMPRESSION', { location: placement.location });\\r\\n    api('GET', `${API_HOST}${apiConfig.url}`, { ...apiConfig.param, limit: placement.noOfItems }, function (response) {\\r\\n        let skus = response;\\r\\n        let items = [];\\r\\n        $(`#${placement.tagId}`).addClass(\\\"real-recommendation\\\")\\r\\n        .addClass(\\\"animated\\\")\\r\\n        .append(\\r\\n            styles +\\r\\n            \\\"<section class=\\\\\\\"bgwhite p-t-45 p-b-105\\\\\\\">\\\" +\\r\\n            \\\"  <div class=\\\\\\\"container\\\\\\\">\\\" +\\r\\n            \\\"    <div class=\\\\\\\"sec-title p-b-30\\\\\\\">\\\" +\\r\\n            \\\"      <h3 class=\\\\\\\"m-text5 t-center\\\\\\\">\\\" + placement.heading + \\\"</h3>\\\" +\\r\\n            \\\"    </div>\\\" +\\r\\n            \\\"    <!-- Slide2-->\\\" +\\r\\n            \\\"    <div class=\\\\\\\"wrap-slick2\\\\\\\">\\\" +\\r\\n            \\\"      <div class=\\\\\\\"slick2\\\\\\\" id=\\\\\\\"recommendedProducts\\\\\\\"></div>\\\" +\\r\\n            \\\"      <div class=\\\\\\\"recommended-details trans-0-5 w-size-0 op-0-0 d-none\\\\\\\" id=\\\\\\\"recommendedDetails\\\\\\\">\\\" +\\r\\n            \\\"        <div class=\\\\\\\"recommended-details-image wrap-pic-w p-t-30 p-b-30 p-l-15 p-r-15\\\\\\\" style=\\\\\\\"max-height: 360px\\\\\\\"><img style=\\\\\\\"height: 100%\\\\\\\" id=\\\\\\\"recommendedDetailsImage\\\\\\\"/></div>\\\" +\\r\\n            \\\"        <div class=\\\\\\\"recommended-details-content p-t-30 p-b-30 p-l-15 p-r-50\\\\\\\" id=\\\\\\\"recommendedDetailsContent\\\\\\\">\\\" +\\r\\n            \\\"          <h4 class=\\\\\\\"product-detail-name m-text16 p-b-13\\\\\\\" id=\\\\\\\"recommendedDetailsName\\\\\\\"></h4><span class=\\\\\\\"m-text17\\\\\\\" id=\\\\\\\"recommendedDetailsPrice\\\\\\\"></span>\\\" +\\r\\n            \\\"          <p class=\\\\\\\"s-text8 p-t-10\\\\\\\" id=\\\\\\\"recommendedDetailsDescription\\\\\\\"></p>\\\" +\\r\\n            \\\"          <div class=\\\\\\\"btn-recommended-addcart size9 trans-0-4 m-t-10 m-b-10\\\\\\\" id=\\\\\\\"btn-recommended-addcart\\\\\\\">\\\" +\\r\\n            \\\"            <!-- Button-->\\\" +\\r\\n            \\\"            <button class=\\\\\\\"flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4\\\\\\\">Add to Cart</button>\\\" +\\r\\n            \\\"          </div>\\\" +\\r\\n            \\\"          <div class=\\\\\\\"recommended-details-close\\\\\\\" id=\\\\\\\"recommendedDetailsClose\\\\\\\"><i class=\\\\\\\"fs-32 color1 fa fa-close\\\\\\\" aria-hidden=\\\\\\\"true\\\\\\\"></i></div>\\\" +\\r\\n            \\\"        </div>\\\" +\\r\\n            \\\"      </div>\\\" +\\r\\n            \\\"    </div>\\\" +\\r\\n            \\\"  </div>\\\" +\\r\\n            \\\"</section>\\\"\\r\\n        );\\r\\n\\r\\n        initSlick2();\\r\\n        const promises = skus.map((sku, index) => {\\r\\n            return new Promise((resolve, reject) => {\\r\\n                api('GET', `${API_HOST}/product`, {sku}, function (item) {\\r\\n                    item.source = apiConfigs[placement.location].source === 'FEATURED' ?\\r\\n                        index === 0 ? 'MOST_POPULAR' : index === 1 ? 'LEAST_POPULAR' :\\r\\n                            'CUSTOM' : 'SIMILAR';\\r\\n                    if (item.is_available && item.unit > 0) {\\r\\n                        recordEngagement('IMPRESSION', { pid: item.sku, location: placement.location, source: item.source });\\r\\n                        items.push(item);\\r\\n\\r\\n                        $(`#${placement.tagId} #recommendedProducts`).append(\\r\\n                            \\\"<div class=\\\\\\\"item-slick2 p-l-15 p-r-15\\\\\\\">\\\" +\\r\\n                            \\\"<div class=\\\\\\\"block2\\\\\\\">\\\" +\\r\\n                            \\\"<div class=\\\\\\\"block2-img wrap-pic-w of-hidden pos-relative\\\\\\\">\\\" +\\r\\n                            \\\"<a href=\\\\\\\"\\\" + productDetailUrl({ pid: item.sku, location: placement.location, source: item.source }) + \\\"\\\\\\\" class=\\\\\\\"recommended-product-image\\\\\\\" data-pid=\\\\\\\"\\\" + item.sku + \\\"\\\\\\\" data-source=\\\\\\\"\\\" + item.source +\\\"\\\\\\\">\\\" +\\r\\n                            \\\"<img src=\\\\\\\"\\\" + item.images[0].url + \\\"\\\\\\\" alt=\\\\\\\"IMG-PRODUCT\\\\\\\">\\\" +\\r\\n                            \\\"</a>\\\" +\\r\\n                            \\\"<a href=\\\\\\\"javascript:void(0);\\\\\\\" class=\\\\\\\"block2-btn-more\\\\\\\">\\\" +\\r\\n                            \\\"<div class=\\\\\\\"btn-more-ctn flex-c-m shadow1\\\\\\\" data-pid=\\\\\\\"\\\" + item.sku + \\\"\\\\\\\" >\\\" +\\r\\n                            \\\"<i class=\\\\\\\"fa fa-bars btn-more fs-16\\\\\\\" />\\\" +\\r\\n                            \\\"</div>\\\" +\\r\\n                            \\\"</a>\\\" +\\r\\n                            \\\"</div>\\\" +\\r\\n                            \\\"</div>\\\" +\\r\\n                            \\\"</div>\\\");\\r\\n                    }\\r\\n                    resolve();\\r\\n                });\\r\\n            });\\r\\n        });\\r\\n        Promise.all(promises).then(() => {\\r\\n            $(`#${placement.tagId}>.slick2`).slick('unslick');\\r\\n            initSlick2(placement.tagId);\\r\\n\\r\\n            //On Detail Click\\r\\n            $(`#${placement.tagId} .btn-more-ctn`).click(function () {\\r\\n                const pid = $(this).data('pid');\\r\\n                const item = items.find((t) => t.sku == pid);\\r\\n\\r\\n                $(`#${placement.tagId} #recommendedDetailsName`).text(item.name);\\r\\n                $(`#${placement.tagId} #recommendedDetailsPrice`).text(`${item.currency.sign}${item.price}`);\\r\\n                $(`#${placement.tagId} #recommendedDetailsDescription`).text(item.description);\\r\\n                $(`#${placement.tagId} #recommendedDetailsImage`).attr('src', item.images[0].url);\\r\\n                $(`#${placement.tagId} #recommendedDetails`).removeClass('d-none');\\r\\n                setTimeout(function () {\\r\\n                    $(`#${placement.tagId} #recommendedDetails`).addClass('flex-row').removeClass('w-size-0').removeClass('op-0-0').addClass('w-size-full');\\r\\n                }, 500);\\r\\n\\r\\n                //On Add Cart\\r\\n                $(`#${placement.tagId} #btn-recommended-addcart`).unbind('click').on('click', function(){\\r\\n                    onAddToCart(pid);\\r\\n                    recordEngagement(\\\"ADD_CART_FROM_WIDGET\\\", { pid: pid, location: placement.location, source: item.source });\\r\\n                });\\r\\n                recordEngagement(\\\"SHOW_OVERLAY\\\", { pid: pid, location: placement.location, source: item.source });\\r\\n            });\\r\\n\\r\\n            $(`#${placement.tagId} #recommendedDetailsClose`).click(function () {\\r\\n                $(`#${placement.tagId} #recommendedDetails`).removeClass('w-size-full').addClass('op-0-0').addClass('w-size-0').removeClass('flex-row');\\r\\n                setTimeout(function () {\\r\\n                    $(`#${placement.tagId} #recommendedDetails`).addClass('d-none');\\r\\n                }, 500);\\r\\n            });\\r\\n\\r\\n            //On Product Click\\r\\n            $(`#${placement.tagId} .recommended-product-image`).click(function () {\\r\\n                const pid = $(this).data('pid');\\r\\n                const source = $(this).data('source');\\r\\n                recordEngagement(\\\"CLICK\\\", { pid: pid, location: placement.location, source: source });\\r\\n            });\\r\\n        })\\r\\n    });\\r\\n}\\r\\n\\r\\nconst deviceDetector = (function ()\\r\\n{\\r\\n    var ua = navigator.userAgent.toLowerCase();\\r\\n    var detect = (function(s)\\r\\n    {\\r\\n        if(s===undefined)s=ua;\\r\\n        else ua = s.toLowerCase();\\r\\n        if(/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(ua))\\r\\n            return 'TABLET';\\r\\n        else\\r\\n        if(/(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard)/.test(ua))\\r\\n            return 'MOBILE';\\r\\n        else return 'DESKTOP';\\r\\n    });\\r\\n    return{\\r\\n        device:detect(),\\r\\n        detect:detect,\\r\\n        isMobile:((detect()!='desktop')?true:false),\\r\\n        userAgent:ua\\r\\n    };\\r\\n}());\\r\\n\\r\\nfunction api(method = 'GET', url = '', param = {}, onSuccess) {\\r\\n    const { id, verbal = false, ...params } = param;\\r\\n    if (id) {\\r\\n        url = url + `/${id}`;\\r\\n    }\\r\\n    $.ajax({\\r\\n        type: method,\\r\\n        url: url,\\r\\n        data: params,\\r\\n        success: onSuccess,\\r\\n        headers:{\\r\\n            merchantid: '"+merchantid+"',\\r\\n        }\\r\\n    });\\r\\n}\\r\\n\\r\\nwindow.onload = function () {\\r\\n    let config = {\\r\\n        placements: [],\\r\\n        productDetailUrl: function ({ pid, location, source }) {\\r\\n            return `product-details.html?sku=${pid}&redirect_from_recommendation=true&location=${location}&source=${source}`;\\r\\n        },\\r\\n        onAddToCart: function (sku) {\\r\\n            var nameProduct = $('#recommendedDetailsName').html();\\r\\n            swal(nameProduct, \\\"is added to cart !\\\", \\\"success\\\");\\r\\n            addToCart(sku, 1);\\r\\n        },\\r\\n        featuredItems: [],\\r\\n    };\\r\\n    const rra = getCookie('rra');\\r\\n    if (!rra) {\\r\\n        const rand = Math.floor(Math.random() * 2147483647);\\r\\n        uid = `rra.${rand}.${Date.now()}`;\\r\\n        setCookie('rra', uid);\\r\\n    } else {\\r\\n        uid = rra;\\r\\n    };\\r\\n    device = deviceDetector.device;\\r\\n    $.get('http://ip-api.com/json')\\r\\n        .always((res) => {\\r\\n            geo_location = res.country;\\r\\n            api('GET', `${API_HOST}/config`, {}, (res) => {\\r\\n                    config = {...config, ...res};\\r\\n                    config.placements = config.placements.map(function (placement) {return {\\r\\n                        ...placement,\\r\\n                        tagId: placement.location === 'HOME' ? 'homePageRecommendation' :\\r\\n                            placement.location === 'PRODUCT_DETAILS' ? 'productDetailsRecommendation' :\\r\\n                                placement.location === 'PRODUCT_DETAILS_FEATURED' ? 'productDetailsFeatured' :\\r\\n                                    placement.location === 'CART' ? 'cartRecommendation' : '',\\r\\n                    }});\\r\\n                    config.placements.forEach( function (placement) {\\r\\n                        if ($(`#${placement.tagId}`).length === 1) {\\r\\n                            getRecommendations(placement, config.productDetailUrl, config.onAddToCart);\\r\\n                        }\\r\\n                    })\\r\\n                });\\r\\n        });\\r\\n};\\r\\n\\r\\nwindow.recommendationRecord = recordEngagement;\\n\\n//# sourceURL=webpack:///./src/js/widget.js?\");\n" +
        "\n" +
        "/***/ })\n" +
        "\n" +
        "/******/ });"
}

export default widgetJs;