
export class SingletonClass {
    private static _ins;
    public static getIns() {
        const clz = this;
        if ( !clz._ins )
            clz._ins = new clz();
        return clz._ins;
    }
}