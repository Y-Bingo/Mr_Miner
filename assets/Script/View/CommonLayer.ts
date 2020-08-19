import vo from "../Model/GameModel";
import BaseUI from "../Base/BaseUI";

/**
 * 首页面
 * 公共页面
 * 存放公用组件
 */
const { ccclass, property } = cc._decorator;

@ccclass
export default class CommonLayer extends BaseUI {

    _Button$speaker: cc.Button = null;      // 声音播放按钮
    _Button$speakerOff: cc.Button = null;   // 声音关闭按钮

    protected _initUI(): void {
        this._Button$speaker.node.active = vo.GameVo.bMusic;
        this._Button$speakerOff.node.active = !vo.GameVo.bMusic;
    }

    onBtnSpeak(): void {
        vo.GameVo.bMusic = false;
        this._Button$speaker.node.active = vo.GameVo.bMusic;
        this._Button$speakerOff.node.active = !vo.GameVo.bMusic;
    }

    onBtnSpeakOff(): void {
        vo.GameVo.bMusic = true;
        this._Button$speaker.node.active = vo.GameVo.bMusic;
        this._Button$speakerOff.node.active = !vo.GameVo.bMusic;
    }

    resetInEditor(): void {
        // cc.js.isChildClassOf(subclass, superclass)
    }
}