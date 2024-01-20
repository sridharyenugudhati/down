"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findButton = exports.ButtonWebElement = void 0;
var oraclejet_webdriver_1 = require("@oracle/oraclejet-webdriver");
var ButtonWebElement_1 = require("./ButtonWebElement");
Object.defineProperty(exports, "ButtonWebElement", { enumerable: true, get: function () { return ButtonWebElement_1.ButtonWebElement; } });
/**
 * Retrieve an instance of [[ButtonWebElement]].
 * @example
 * ```javascript
 * import { findButton } from '@oracle/oraclejet-core-pack/webdriver';
 * const el = await findButton(driver, By.id('my-oj-c-button'));
 * ```
 * @param driver A WebDriver/WebElement instance from where the element will be
 * searched. If WebDriver is passed, the element will be searched globally in the
 * document. If WebElement is passed, the search will be relative to this element.
 * @param by The locator with which to find the element
 */
async function findButton(driver, by) {
    const webEl = await driver.findElement(by);
    // Check that the element is of type ButtonWebElement
    if (!(webEl instanceof ButtonWebElement_1.ButtonWebElement)) {
        const tagName = await webEl.getTagName();
        throw Error(`findButton(${by}) created ${webEl.constructor.name} for <${tagName}>, but expected ${ButtonWebElement_1.ButtonWebElement.name}`);
    }
    return webEl;
}
exports.findButton = findButton;
(0, oraclejet_webdriver_1.register)('oj-c-button', ButtonWebElement_1.ButtonWebElement);
//# sourceMappingURL=index.js.map