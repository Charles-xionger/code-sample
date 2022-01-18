import { personalInfo } from "./data";
import { personalInfoDefine } from "./dataDefine";
import { useStrictObject } from './defineObject';

; (() => {
  const _personalInfo = useStrictObject(personalInfo, personalInfoDefine);
  console.log(_personalInfo)
  _personalInfo[0].job = "前端工程师"
  _personalInfo[2].setConfig('publicKey', 'enumerable', true)
  _personalInfo.forEach(item => {
    for (let k in item) {
      console.log(k)
    }
  })
})();