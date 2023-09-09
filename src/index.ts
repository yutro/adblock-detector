'use client'

type BannerIdType = string

/**
 * Micro library for detecting adblock on user page
 *
 * @class AdblockDetector
 */
export class AdblockDetector {
    bannerIds: readonly BannerIdType[]

    constructor() {
        this.bannerIds = ['AdHeader', 'AdContainer', 'AD_Top', 'homead', 'ad-lead']
        this.init()
    }

    /**
     * Init library - add some tags to page with ads ids
     *
     * @returns {void} create detector instance
     * @memberof AdblockDetector
     */
    private init(): void {
        if (!this.isBrowser()) {
            console.error('Detection on server side is not supported. Please use library only on client side.')

            return
        }

        const dataContainer = document.createElement('div')

        dataContainer.innerHTML = this.generatesBannersString()

        document.body.append(dataContainer)
    }

    /**
     * Check enabling adblock
     *
     * @returns {Boolean} Status adblock enabling
     * @memberof AdblockDetector
     */
    detect(): boolean {
        return !this.isBrowser() ? false : !this.bannerIds.every((bannerId) => this.checkVisibility(bannerId))
    }

    /**
     * Generate all ads blocks from ids dictionary
     *
     * @returns {String} Ads blocks
     * @private
     * @memberof AdblockDetector
     */
    private generatesBannersString(): string {
        return this.bannerIds.map((bannerId) => `<div id="${bannerId}"></div>`).join('')
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
        const element = document.querySelector<HTMLDivElement>(`#${bannerId}`)

        if (element) {
            return element.offsetParent
        }

        return null
    }

    private isBrowser() {
        return typeof window !== 'undefined'
    }
}
