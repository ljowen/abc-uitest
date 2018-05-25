const ARTICLE_TYPES =  Object.freeze({
    VIDEO:   Symbol("video"),
    GALLERY:  Symbol("gallery"),
});


const NEWS_ARTICLE_SAMPLES = {
    ebolaVideo: {
        "url": "2018-05-22/ebola-outbreak-treatment-from-qld-could-help-contain-virus/9784290",
        "type": ARTICLE_TYPES.VIDEO,
    },
    picOfTheWeek: {
        "url": "2018-05-22/ebola-outbreak-treatment-from-qld-could-help-contain-virus/9784290",
        "type": ARTICLE_TYPES.GALLERY
    }
};
export default NEWS_ARTICLE_SAMPLES;