var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "preact/compat", "../utils/UNSAFE_vizUtils/TemplateHandler", "../hooks/UNSAFE_useDataProvider/useDataProvider", "ojs/ojflattenedtreedataproviderview", "ojs/ojkeyset"], function (require, exports, compat_1, TemplateHandler_1, useDataProvider_1, ojflattenedtreedataproviderview_1, ojkeyset_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useSectionData = void 0;
    ojflattenedtreedataproviderview_1 = __importDefault(ojflattenedtreedataproviderview_1);
    function useSectionData(dataProvider, addBusyState, sectionTemplate, itemTemplate) {
        const dpRef = (0, compat_1.useRef)(dataProvider);
        const flatDpRef = (0, compat_1.useRef)(new ojflattenedtreedataproviderview_1.default(dataProvider, {
            expanded: new ojkeyset_1.AllKeySetImpl()
        }));
        if (dpRef.current != dataProvider) {
            dpRef.current = dataProvider;
            flatDpRef.current = new ojflattenedtreedataproviderview_1.default(dpRef.current, {
                expanded: new ojkeyset_1.AllKeySetImpl()
            });
        }
        const { data } = (0, useDataProvider_1.useDataProvider)({
            data: flatDpRef.current,
            addBusyState
        });
        const sections = [];
        if (data.length > 0) {
            let currentSection;
            for (const item of data) {
                const context = {
                    key: item.metadata?.key,
                    data: item.data,
                    index: item.metadata.indexFromParent
                };
                const isSection = item?.metadata?.treeDepth === 0;
                if (isSection) {
                    currentSection = item;
                    let sectionData = item.data;
                    const items = [];
                    if (sectionTemplate) {
                        sectionData = (0, TemplateHandler_1.processNodeTemplate)(item, sectionTemplate, context, 'oj-c-legend-section');
                    }
                    sections.push({ ...sectionData, items });
                }
                else {
                    const itemContext = {
                        ...context,
                        parentKey: item.metadata?.parentKey,
                        parentData: currentSection?.data
                    };
                    const processedItem = itemTemplate
                        ? (0, TemplateHandler_1.processNodeTemplate)(item, itemTemplate, itemContext, 'oj-c-legend-item')
                        : item.data;
                    sections[sections.length - 1]['items'].push({
                        key: item.metadata?.key,
                        ...processedItem
                    });
                }
            }
        }
        return sections;
    }
    exports.useSectionData = useSectionData;
});
