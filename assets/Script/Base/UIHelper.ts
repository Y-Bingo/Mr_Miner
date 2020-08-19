import BaseUI from "./BaseUI";
import LogUtils from "../core/LogUtils";
import { IUIBinder, UIConstants } from "./UIConstants";
/**
 * UI 
 */
export default class UIHelper {

    /** 绑定组件 */
    public static bindComponent( binder: IUIBinder ): void {
        this.__orderNode( binder, binder.node );
    }

    // 检查命名是否正确
    private static __checkComponentName( nodeName: string ): boolean {
        if ( nodeName && nodeName.charAt( 0 ) === UIConstants.COM_PREFIX ) {
            if ( nodeName.split( UIConstants.COM_SEPARATOR ).length >= 2 ) {
                return true;
            }
        }
        return false;
    }

    // 通过命名获取组件类型
    private static __getComponentType( nodeName: string ): string {
        return nodeName.split( UIConstants.COM_SEPARATOR )[ 0 ];
    }

    // 获取组件
    private static __getComponent<T extends cc.Component | cc.Node>( node: cc.Node, nodeName: string ): T {
        let componentType = this.__getComponentType( nodeName );
        let componentCls = UIConstants.COM_PRE_NAME[ componentType ];

        if ( componentCls ) {
            switch ( componentCls ) {
                case "cc.Node":
                    return node as T;
                default:
                    return node.getComponent( componentCls ) as T;
            }
        } else {
            LogUtils.warn( `没用定义【${ componentType }】对应的组件类型！` );
            return null;
        }
    }

    // 遍历节点
    private static __orderNode( binder: IUIBinder, parentNode: cc.Node ): void {
        let self = binder;
        let children: cc.Node[] = parentNode.children;
        let childCount: number = parentNode.childrenCount;
        let nextNodeSet = [];
        // 广度遍历
        for ( let i = 0; i < childCount; i++ ) {
            let curNode = children[ i ];
            let nodeName = curNode.name;
            if ( this.__checkComponentName( nodeName ) ) {
                if ( self[ nodeName ] == null && self.hasOwnProperty( nodeName ) ) {
                    self[ nodeName ] = this.__getComponent( curNode, nodeName );
                }
            }
            if ( curNode.childrenCount >= 1 ) {
                nextNodeSet.push( curNode );
            }
        }
        // 遍历子节点
        for ( let j = 0; j < nextNodeSet.length; j++ ) {
            this.__orderNode( binder, nextNodeSet[ j ] );
        }
        nextNodeSet.length = 0;
        nextNodeSet = null;
    }
}   