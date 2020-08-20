import LogUtils from "../Util/LogUtils";
import { SingletonClass } from './SingletonClass';

enum EBundleName {
    UI_FORM = 'UIBundle',
    RESOURCE = 'ResourceBundle'
}

export interface IOnProgress {
    ( finish: number, total: number, item: cc.AssetManager.RequestItem ): void;
}

export class ResMrg extends SingletonClass {


    // prefab 资源bundle
    private uiBundle: cc.AssetManager.Bundle;
    // resource 资源bundle
    private resBundle: cc.AssetManager.Bundle;

    // 加载资源文件
    public loadResource( onProcess?: ( finish: number, total: number, item: cc.AssetManager.RequestItem ) => void ): Promise<void> {
        const self = this;
        return new Promise( ( resolve, reject ) => {
            cc.assetManager.loadBundle( EBundleName.RESOURCE, ( err: Error, bundle: cc.AssetManager.Bundle ) => {
                err && reject();
                self.resBundle = bundle;
                bundle.loadDir( './', cc.Asset, onProcess, ( err, items ) => {
                    err && reject();
                    resolve();
                } );
            } );
        } );

    }

    // 加载 UI 资源
    public loadUIForm( onProcess?: ( finish: number, total: number, item: cc.AssetManager.RequestItem ) => void ): Promise<void> {
        const self = this;
        return new Promise( ( resolve, reject ) => {
            cc.assetManager.loadBundle( EBundleName.UI_FORM, ( err: Error, bundle: cc.AssetManager.Bundle ) => {
                err && reject();
                self.uiBundle = bundle;
                bundle.loadDir( './', cc.Asset, onProcess, ( err, items ) => {
                    err && reject();
                    resolve();
                } );
            } );
        } );
    }

    // 获取 UI 资源
    public getUIForm( path: string ): Promise<cc.Prefab> {
        return new Promise( ( resolve, reject ) => {
            this.uiBundle.load( path, cc.Prefab, ( err, res: cc.Prefab ) => {
                if ( err ) {
                    LogUtils.error( `加载UI ${ path } 文件失败` );
                    reject( null );
                }
                resolve( res );
            }
            );
        } );
    }
}