/**
 * Micro library for detect adblock on user page
 *
 * @class AdblockDetector
 */
class AdblockDetector {
    constructor() {
        this._bannerIds = [
            'AdHeader',
            'AdContainer',
            'AD_Top',
            'homead',
            'ad-lead'
        ];
    }
    
    /**
     * Init library - add some tags to page with ads ids
     *
     * @returns {Void} Init detection
     * @memberof AdblockDetector
     */
    init() {
        const dataContainer = document.createElement('div');
        dataContainer.innerHTML = this._generatesBannersString();

        document.body.appendChild(dataContainer);
    }

    /**
     * Check enabling adblock
     *
     * @returns {Boolean} Status adblock enabling
     * @memberof AdblockDetector
     */
    detect() {
        return !this._bannerIds.every(bannerId => this._checkVisibility(bannerId))
    }

    /**
     * Generate all ads blocks from ids disctionary
     *
     * @returns {String} Ads blocks
     * @private
     * @memberof AdblockDetector
     */
    _generatesBannersString() {
        return this
            ._bannerIds
            .map(bannerId => `<div id="${bannerId}"></div>`)
            .join('');
    }

    /**
     * Check visibility by banner id
     *
     * @param {Number} bannerId
     * @returns {HTMLElement|null} Return banners if adblocke is not enabled
     * @private
     * @memberof AdblockDetector
     */
    _checkVisibility(bannerId) {
        const el = document.querySelector(`#${bannerId}`);

        if (el) {
            return el.offsetParent;
        }

        console.warn('adblock-detector: can\'t detect ad blocker');
        
        return null;
    }

}

export default new AdblockDetector();