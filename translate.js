// Translation made with github.com/andreasremdt/simple-translator
// for https://such.blue | https://github.com/SuchBlue/such.blue

let english = {
    rgb: {
        "mode": "rgb mode: ",
        "button-on": "on",
        "button-off": "off"
    },
    footer: {
        "first": "Made with love in",
        "second": " - See source at",
        "third": "Any suggestions? Submit an issue or pull request to contribute to this site!",
        "views": "This site has been visited for ",
        "times": " times",
        "load": "Loaded in ",
        "seconds": " seconds"
    }
}

let malti = {
    rgb: {
        "mode": "rgb: ",
        "button-on": "mixgħul",
        "button-off": "mitfi"
    },
    footer: {
        "first": "Magħmul mill-qalb minn",
        "second": " - Ara kif dan is-sit sar billi żżur",
        "third": "Għandek xi suġġeriment? Agħmel Issue jew Pull Request sabiex tgħin fl-iżvilupp ta' dan is-sit elettroniku!",
        "views": "Dan is-sit elettroniku ġie miżjur għal ",
        "times": " darba",
        "load": "Dan is-sit dam ",
        "seconds": " sekondi biex jittella' fuq l-apparat elettroniku tiegħek"
    }
}

let deutsch = {
    rgb: {
        "mode": "rgb-modus: ",
        "button-on": "an",
        "button-off": "aus"
    },
    footer: {
        "first": "Hergestellt mit Liebe aus",
        "second": " - Siehe Quelle unter",
        "third": "Hast du Vorschläge? Reichen ein Issue oder eine Pull-Request ein, um zu dieser Website beizutragen!",
        "views": "Diese Website wurde ",
        "times": " mal besucht",
        "load": "Geladen in ",
        "seconds": " Sekunden"
    }
}

let nederlands = {
    rgb: {
        "mode": "rgb-modus: ",
        "button-on": "aan",
        "button-off": "uit"
    },
    footer: {
        "first": "Met liefde gemaakt in",
        "second": " - Zie bron op",
        "third": "Suggesties? Maak een issue of pull request om met deze site te helpen!",
        "views": "Deze site is ",
        "times": " keer bezocht",
        "load": "Geladen in ",
        "seconds": " seconden"
    }
}

let translator = new Translator();

translator.add('en', english);
translator.add('de', deutsch);
translator.add('nl', nederlands);
translator.add('mt', malti);

function translateTo(lang) {
    translator.translatePageTo(lang);
}

function refreshTranslation() { translator.translatePageTo(translator.currentLanguage) }