enum SupportedLanguage {
    pl, // Polish
    em, // English
    cs, // Czech
    bg, // Bulgarian
    da, // Danish
    de, // German
    es, // Spanish
    et, // Estonian
    fr, // French
    hu, // Hungarian
    it, // Italian
    ro, // Romanian
    sk, // Slovak
}

//
// Widget support is limited
// see: http://developers.payu.com/en/overview.html#languages
//
enum NotSupportedLanguage {
    el, // Greek
    fi, // Finnish
    hr, // Croatian
    lt, // Lithuanian
    lv, // Latvian
    nl, // Dutch
    pt, // Portuguese
    ru, // Russian
    sl, // Slovenian
    sr, // Serbian
    sv, // Swedish
    tr, // Turkish
    uk, // Ukrainian
}

export {
    SupportedLanguage,
    NotSupportedLanguage,
}