import { personalInfo } from "./data";
import { descriptor } from "./dataDefine";
import { useStrictObject } from "./defineObject";

;
(() => {
    const _personalInfo = useStrictObject(personalInfo, descriptor);
    console.log(_personalInfo);

    _personalInfo[0].job = '前端工程师';
    _personalInfo[1].setConfig('age', 'writable', true);
    _personalInfo[1].age = 30;

    for (let item of _personalInfo) {
        for (let k in item) {
            console.log(k, item[k]);
        }
    }
})();