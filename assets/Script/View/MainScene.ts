
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

    onLoad(): void {
        let start = Date.now();
        cc.assetManager.loadBundle( 'UIBundle', ( err: Error, bundle: cc.AssetManager.Bundle ) => {
            bundle.load<cc.Prefab>( "Scene/LobbyScenePb", cc.Prefab, ( err, res: cc.Prefab ) => {
                console.log( "time: ", Date.now() - start );
                if ( err ) {
                    console.log( err );
                    return;
                }
                res = bundle.get( "Scene/LobbyScenePb", cc.Prefab) as cc.Prefab;
                console.log( res);
                this.mainLayer.addChild( cc.instantiate( res ) );
            } );
        } );
    }

}