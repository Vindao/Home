export const initLangState = (lang) => {
    const userLang = initUserLang();
    const language = lang[userLang];
    return {
        userLang: userLang,
        language: language
    };
};
export const initUserLang = () => {
    //@ts-ignore
    if (process.browser) {
        if (localStorage) {
            if (localStorage.userLanguage &&
                ['de', 'en', 'nl'].includes(localStorage.userLanguage)) {
                console.log(localStorage.userLang);
                return localStorage.userLanguage;
            }
            else {
                const lang = navigator.language.substring(0, 2);
                console.log(lang);
                if (lang === 'nl' || lang === 'de') {
                    localStorage.setItem('userLanguage', lang);
                    return lang;
                }
                else {
                    localStorage.setItem('userLanguage', 'en');
                    return 'en';
                }
            }
        }
    }
    return 'en';
};
//# sourceMappingURL=initializer.js.map