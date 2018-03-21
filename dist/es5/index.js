define(['exports', 'babel-runtime/helpers/classCallCheck', 'babel-runtime/helpers/createClass'], function (exports, _classCallCheck2, _createClass2) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

    var _createClass3 = _interopRequireDefault(_createClass2);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var AdblockDetector = function () {
        function AdblockDetector() {
            (0, _classCallCheck3.default)(this, AdblockDetector);

            this._bannerIds = ['AdHeader', 'AdContainer', 'AD_Top', 'homead', 'ad-lead'];
        }

        (0, _createClass3.default)(AdblockDetector, [{
            key: 'init',
            value: function init() {
                var dataContainer = document.createElement('div');
                dataContainer.innerHTML = this._generatesBannersString();
                return document.body.appendChild(dataContainer);
            }
        }, {
            key: 'detect',
            value: function detect() {
                return !this._bannerIds.every(AdblockDetector._checkVisibility);
            }
        }, {
            key: '_generatesBannersString',
            value: function _generatesBannersString() {
                var testBanners = this._bannerIds.map(function (bannerId) {
                    return '<div id="' + bannerId + '"></div>';
                });
                return testBanners.join('');
            }
        }], [{
            key: '_checkVisibility',
            value: function _checkVisibility(bannerId) {
                var el = document.querySelector('#' + bannerId);
                if (el) {
                    return el.offsetParent;
                } else {
                    console.warn('adblock-detector: can\'t detect ad blocker');
                }
            }
        }]);
        return AdblockDetector;
    }();

    exports.default = new AdblockDetector();
});