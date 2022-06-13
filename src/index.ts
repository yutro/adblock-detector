type BannerIdType = string

/**
 * Micro library for detect adblock on user page
 *
 * @class AdblockDetector
 */
export class AdblockDetector {
    bannerIds: ReadonlyArray<BannerIdType>;

    constructor() {
        this.bannerIds = [
            'AdHeader',
            'AdContainer',
            'AD_Top',
            'homead',
            'ad-lead'
        ];
        this.init()
    }
    
    /**
     * Init library - add some tags to page with ads ids
     *
     * @returns {void} create detector instance
     * @memberof AdblockDetector
     */
    private init() {
        const dataContainer = document.createElement('div');
        dataContainer.innerHTML = this.generatesBannersString();

        document.body.appendChild(dataContainer);
    }

    /**
     * Check enabling adblock
     *
     * @returns {Boolean} Status adblock enabling
     * @memberof AdblockDetector
     */
    detect() {
        return !this.bannerIds.every(bannerId => this.checkVisibility(bannerId))
    }

    /**
     * Generate all ads blocks from ids dictionary
     *
     * @returns {String} Ads blocks
     * @private
     * @memberof AdblockDetector
     */
    private generatesBannersString() {
        return this
            .bannerIds
            .map(bannerId => `<div id="${bannerId}"></div>`)
            .join('');
    }

    /**
     * Check visibility by banner id
     *
     * @param {Number} bannerId
     * @returns {HTMLElement|null} Return banners if adblock is not enabled
     * @private
     * @memberof AdblockDetector
     */
    checkVisibility(bannerId: BannerIdType) {
        const el = document.querySelector<HTMLDivElement>(`#${bannerId}`);

        if (el) return el.offsetParent;
        
        return null;
    }

}

export default new AdblockDetector();
