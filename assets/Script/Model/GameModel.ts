
/** 游戏数据 */
class GameModel {

    private _bMusic: boolean = true;        // 是否播放音乐
    private _bSound: boolean = true;        // 是否有音效

    get bMusic() { return this._bMusic; }
    set bMusic( value: boolean ) {
        this._bMusic = value;
    }

    get bSound() { return this._bSound; }
    set bSound( value: boolean ) {
        this._bSound = value;
    }
}

/** 玩家数据 */
class PlayerModel {

}

/** 关卡数据 */
class LevelModel {

}

const vo = {
    GameVo: new GameModel,
    PlayerVo: new PlayerModel,
    LevelVo: new LevelModel,
};

export default vo; 