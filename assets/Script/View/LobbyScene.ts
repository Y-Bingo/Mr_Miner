import BaseUI from "../Base/BaseUI";
import { EWorldType } from "../Model/Constant";

const { ccclass, property } = cc._decorator;

/**
 * 大厅场景脚本 
 */
@ccclass
export default class LobbyScene extends BaseUI {

    /************ 组件 ************/
    private _Layout$bg: cc.Layout = null;
    private _Sprite$worldGlobal0: cc.Sprite = null;
    private _Sprite$worldGlobal1: cc.Sprite = null;
    private _Sprite$worldGlobal2: cc.Sprite = null;
    private _Sprite$worldGlobal3: cc.Sprite = null;
    private _Sprite$worldGlobal4: cc.Sprite = null;
    private _Button$pre: cc.Button = null;
    private _Button$next: cc.Button = null;
    private _Button$play: cc.Button = null;
    private _Button$rare: cc.Button = null;
    private _Button$speaker: cc.Button = null;
    private _Button$buyLevel: cc.Button = null;

    /************ 属性 ************/
    private _curWorld: EWorldType = EWorldType.GRASS;

    protected _initUI(): void {

    }

    protected _addEvent(): void {

    }

    // 场景开始前
    start(): void {

    }

    onNext(): void {
    }

    onPre(): void {
        // this._Button$rare.normalMaterial = cc.resources.get('path')
        // this._Button$rare.getComponent(cc.Button).normalSprite = cc.resources.getAssetInfo(uuid)
    }

    private _switchWorld( curWorld: number ): void {

    }

    // 更新
    protected update( dt: number ): void {

    }

    protected onDestroy(): void {

    }
}