import { ResMrg } from "./ResMrg";
import { SoundMrg } from './SoundMrg';

export default class App {
    /**
     * 资源管理器
     */
    static get ResMrg(): ResMrg {
        return ResMrg.getIns();
    }
    /**
     * 声音管理器
     */
    static get soundMrg(): SoundMrg {
        return SoundMrg.getIns();
    }

}