/**
 * 日志系统
 * 方便以后扩展使用
 */
export default class LogUtils {

    /**
     * 日志打印
     * @param msg       日志信息
     */
    public static log( msg: string ): void {
        cc.log( msg );
    }

    /**
     * 警告日志
     * @param msg       警告信息
     */
    public static warn( msg: string ): void {
        cc.warn( msg );
    }

    /**
     * 错误日志
     * @param msg       错误信息
     * @param err       Error对象
     */
    public static error( msg: string, err?: Error ): void {
        if ( err )
            cc.error( msg );
        else
            cc.error( err );
    }
}