function toggleMe(e) {
    var t = document.getElementById(e);
    return t ? ("none" == t.style.display ? t.style.display = "block" : t.style.display = "none", !0) : !0
}

function speak(e, t) {
    var a = new SpeechSynthesisUtterance;
    a.text = e, a.onend = function() {
        t && t()
    }, a.onerror = function(e) {
        t && t(e)
    }, speechSynthesis.speak(a)
}

function generate() {
    var e = Math.random() * Math.random() / Math.random() - Math.random() + Math.random(),
        t = Math.floor(verbs.length * e),
        a = tenses.random(),
        n = subjects.random(),
        o = verbs[t],
        r = complementsForVerbs[t],
        s = a.format;
    return s = s.replace("|subject|", n.name), s = s.replace("|be|", n.be), s = s.replace("|verb|", o[n.singular ? a.singular : a.plural]), s = s.replace("|complement|", r.random())
}

function ask() {
    return 0 == aks ? (speak("Listining"), void(aks = 1)) : 1 == aks ? (speak(generate()), void(aks = 0)) : void 0
}

function credits() {
    speak("I was created by nuclear sientists to hack into computers... Task Completed ")
}
var aks = 0,
    img = document.getElementById("img"),
    verbs = [
        ["go to", "goes to", "going to", "went to", "gone to"],
        ["look at", "looks at", "looking at", "looked at", "looked at"],
        ["choose", "chooses", "choosing", "chose", "chosen", "was", "left", "happy", "ate"],
        ["eat","will eat","going to eat","has eaten","has eaten"]
    ],
    tenses = [{
        name: "Present",
        singular: 1,
        plural: 0,
        format: "|subject| |verb| |complement|"
    }, {
        name: "Past",
        singular: 3,
        plural: 3,
        format: "|subject| |verb| |complement|"
    }, {
        name: "Present Continues",
        singular: 2,
        plural: 2,
        format: "|subject| |be| |verb| |complement|"
    }],
    subjects = [{
        name: "I",
        be: "am",
        singular: 0
    }, {
        name: "You",
        be: "are",
        singular: 0
    }, {
        name: "He",
        be: "is",
        singular: 1
    }],
    complementsForVerbs = [
        ["the cinema", "Egypt", "the house", "the concert","asteroid ring"],
        ["for a map", "them", "the stars", "the lake"],
        ["a book for reading", "a dvd for tonight","a pizza to eat"]
    ];
Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)]
};
