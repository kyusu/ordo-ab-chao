declare module "@kyusu/ordo-ab-chao" {
    type StringPredicate = (input: string) => boolean;

    type runWith = { runWith: StringPredicate };

    type IsMetal = {
        isMetal: runWith;
    };

    export const isMetal: IsMetal;

    export const isBlackMetal: runWith;
    export const isDeathMetal: runWith;
    export const isDoomMetal: runWith;
    export const isHeavyMetal: runWith;
    export const isPowerMetal: runWith;
    export const isSpeedMetal: runWith;
    export const isThrashMetal: runWith;
}
