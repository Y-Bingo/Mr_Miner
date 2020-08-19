/**
 * UI定义
 */

/** UI 绑定者*/
export interface IUIBinder extends cc.Component {
    [ componentName: string ]: any;
}


/**
 * 窗体类型
 */
export enum EUIType {
    /** 普通窗口 */
    NORMAL,
    /** 弹出窗口 */
    POPUP,
    /** 固定窗口 */
    FIXED,
    /** 独立窗口 */
    INDEPENDENT,
}

/** UI 常亮 */
export class UIConstants {

    /** 组件命名前缀 */
    public static COM_PREFIX: string = "_";
    /** 组件命名分割符 */
    public static COM_SEPARATOR: string = "$";

    /** 组件命名前缀 */
    public static COM_PRE_NAME: { [ name: string ]: string; } = {
        "_Node": "cc.Node",
        "_Label": "cc.Label",
        "_Layout": "cc.Layout",
        "_Button": "cc.Button",
        "_Sprite": "cc.Sprite",
        "_RichText": "cc.RichText",
        "_Mask": "cc.Mask",
        "_MotionStreak": "cc.MotionStreak",
        "_TiledMap": "cc.TiledMap",
        "_TiledTile": "cc.TiledTile",
        "_Spine": "sp.Spine",
        "_Graphics": "cc.Graphics",
        "_Animation": "cc.Animation",
        "_WebView": "cc.WebView",
        "_EditBox": "cc.EditBox",
        "_ScrollView": "cc.ScrollView",
        "_VideoPlayer": "cc.VideoPlayer",
        "_ProgressBar": "cc.ProgressBar",
        "_PageView": "cc.PageView",
        "_Slider": "cc.Slider",
        "_Toggle": "cc.Toggle",
    };
}