// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import UIHelp from "../Base/UIHelper";
import LogUtils from "../Util/LogUtils";
import { IUIBinder } from "./UIConstants";

const { ccclass, property } = cc._decorator;

/**
 * 基础类
 */
@ccclass
export default class BaseUI extends cc.Component implements IUIBinder {

    protected _view: cc.Node;       // 当前视图节点

    protected onLoad() {
        UIHelp.bindComponent( this );

        this._view = this.node;
        this._initUI();
        LogUtils.log( `【${ this.name }】 加载完成` );
    }

    protected onEnable() {
        this._addEvent();
        LogUtils.log( `【${ this.name }】 被启用` );
    }

    protected onDestroy(): void {
        this._removeEvent();
        LogUtils.log( `【${ this.name }】 被销毁了` );
    }

    protected onDisable(): void {
        this._removeEvent();
        LogUtils.log( `【${ this.name }】 被禁用了` );
    }

    /** 初始化UI */
    protected _initUI(): void { }
    /** 绑定事件 */
    protected _addEvent(): void { }
    /** 移除事件 */
    protected _removeEvent(): void {
        console.log( "移除" );
    }
    /** 显示出来的时候的动画 */
    protected _onShow(): void { }
    /** 关闭动画 */
    protected _onClose(): void { }

    protected _onDestroy(): void {

    }

}
