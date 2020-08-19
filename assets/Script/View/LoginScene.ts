import BaseUI from "../Base/BaseUI";
const { ccclass } = cc._decorator;

/**
 * 登录界面
 */
@ccclass
export default class LoginScene extends BaseUI {

    private _Button$play: cc.Button = null;         // 按钮 - 开始
    private _Button$info: cc.Button = null;         // 按钮 - 信息
    private _Button$moreGame: cc.Button = null;     // 按钮 - 更多游戏

    protected _initUI(): void {
       
    }

    protected _addEvent(): void {
        this._Button$info.node.on( cc.Node.EventType.TOUCH_END, this.onBtnInfo );
        this._Button$play.node.on( cc.Node.EventType.TOUCH_END, this.onBtnPlay );
        this._Button$moreGame.node.on( cc.Node.EventType.TOUCH_END, this.onBtnMoreGame );
    }

    protected _removeEvent(): void {
        this._Button$info.node.off( cc.Node.EventType.TOUCH_END, this.onBtnInfo );
        this._Button$play.node.off( cc.Node.EventType.TOUCH_END, this.onBtnPlay );
        this._Button$moreGame.node.off( cc.Node.EventType.TOUCH_END, this.onBtnMoreGame );
    }

    private onBtnPlay(): void {
        console.log( "click game " );
    }

    private onBtnInfo(): void {
        console.log( 'click info' );
    }

    private onBtnMoreGame(): void {
        console.log( 'click ，moreGame' );
    }
}
