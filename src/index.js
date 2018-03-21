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

    init() {
        const dataContainer = document.createElement('div');
        dataContainer.innerHTML = this._generatesBannersString();
        return document.body.appendChild(dataContainer);
    }

    detect() {
        return !this._bannerIds.every(AdblockDetector._checkVisibility)
    }

    _generatesBannersString() {
        const testBanners = this._bannerIds.map(bannerId => `<div id="${bannerId}"></div>`);
        return testBanners.join('');
    }
    static _checkVisibility(bannerId) {
        const el = document.querySelector(`#${bannerId}`);
        if(el) {
            return el.offsetParent;
        } else {
            console.warn('adblock-detector: can\'t detect ad blocker');
        }
    }

}

export default new AdblockDetector();