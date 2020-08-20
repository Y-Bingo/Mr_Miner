import App from "../Mrg/APP";

const { ccclass, property } = cc._decorator;

/**
 * 主场景
 */
@ccclass
export default class MainScene extends cc.Component {

    @property( cc.Node )
    mainLayer: cc.Node = null;            // 场景层

    @property( cc.Node )
    gameLayer: cc.Node = null;            // 游戏层

    @property( cc.Node )
    popupLayer: cc.Node = null;           // 弹窗层

    @property( cc.Node )
    topLayer: cc.Node = null;             // 最顶层

    async onLoad(): Promise<void> {
        // await App.ResMrg.loadResource();
        await App.ResMrg.loadUIForm();
        let start = Date.now();
        const res = await App.ResMrg.getUIForm( "Scene/LobbyScenePb" );
        console.log( "time: ", Date.now() - start );
        this.mainLayer.addChild( cc.instantiate( res ) );
    }

}