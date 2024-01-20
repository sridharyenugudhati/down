"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findFilePicker = exports.FilePickerWebElement = void 0;
var oraclejet_webdriver_1 = require("@oracle/oraclejet-webdriver");
var FilePickerWebElement_1 = require("./FilePickerWebElement");
Object.defineProperty(exports, "FilePickerWebElement", { enumerable: true, get: function () { return FilePickerWebElement_1.FilePickerWebElement; } });
/**
 * Retrieve an instance of [[FilePickerWebElement]].
 * @example
 * ```javascript
 * import { findFilePicker } from '@oracle/oraclejet-core-pack/webdriver';
 * const el = await findFilePicker(driver, By.id('my-oj-c-file-picker'));
 * ```
 * @param driver A WebDriver/WebElement instance from where the element will be
 * searched. If WebDriver is passed, the element will be searched globally in the
 * document. If WebElement is passed, the search will be relative to this element.
 * @param by The locator with which to find the element
 */
async function findFilePicker(driver, by) {
    const webEl = await driver.findElement(by);
    // Check that the element is of type FilePickerWebElement
    if (!(webEl instanceof FilePickerWebElement_1.FilePickerWebElement)) {
        const tagName = await webEl.getTagName();
        throw Error(`findFilePicker(${by}) created ${webEl.constructor.name} for <${tagName}>, but expected ${FilePickerWebElement_1.FilePickerWebElement.name}`);
    }
    return webEl;
}
exports.findFilePicker = findFilePicker;
(0, oraclejet_webdriver_1.register)('oj-c-file-picker', FilePickerWebElement_1.FilePickerWebElement);
//# sourceMappingURL=index.js.map