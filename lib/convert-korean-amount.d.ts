export declare type Options = {
    wordSpacing?: boolean;
    withWonSuffix?: boolean;
};
declare const convertKoreanAmount: (value: number, { wordSpacing, withWonSuffix }?: Options) => string;
export default convertKoreanAmount;
