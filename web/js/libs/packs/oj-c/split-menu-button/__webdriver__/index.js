"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findSplitMenuButton = exports.SplitMenuButtonWebElement = void 0;
var oraclejet_webdriver_1 = require("@oracle/oraclejet-webdriver");
var SplitMenuButtonWebElement_1 = require("./SplitMenuButtonWebElement");
Object.defineProperty(exports, "SplitMenuButtonWebElement", { enumerable: true, get: function () { return SplitMenuButtonWebElement_1.SplitMenuButtonWebElement; } });
/**
 * Retrieve an instance of [[SplitMenuButtonWebElement]].
 * @example
 * ```javascript
 * import { findSplitMenuButton } from '@oracle/oraclejet-core-pack/webdriver';
 * const el = await findSplitMenuButton(driver, By.id('my-oj-c-split-menu-button'));
 * ```
 * @param driver A WebDriver/WebElement instance from where the element will be
 * searched. If WebDriver is passed, the element will be searched globally in the
 * document. If WebElement is passed, the search will be relative to this element.
 * @param by The locator with which to find the element
 */
async function findSplitMenuButton(driver, by) {
    const webEl = await driver.findElement(by);
    // Check that the element is of type SplitMenuButtonWebElement
    if (!(webEl instanceof SplitMenuButtonWebElement_1.SplitMenuButtonWebElement)) {
        const tagName = await webEl.getTagName();
        throw Error(`findSplitMenuButton(${by}) created ${webEl.constructor.name} for <${tagName}>, but expected ${SplitMenuButtonWebElement_1.SplitMenuButtonWebElement.name}`);
    }
    return webEl;
}
exports.findSplitMenuButton = findSplitMenuButton;
(0, oraclejet_webdriver_1.register)('oj-c-split-menu-button', SplitMenuButtonWebElement_1.SplitMenuButtonWebElement);
//# sourceMappingURL=index.js.map