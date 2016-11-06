function toggleMe(a){
        var e=document.getElementById(a);
        if(!e)return true;
        if(e.style.display=="none"){
        e.style.display="block"
        }
        else{
        e.style.display="none"
        }
        return true;
        }

function speak(text, callback) {

var u = new SpeechSynthesisUtterance();

u.text = text;

u.onend = function () {
    if (callback) {
        callback();
    }
};

u.onerror = function (e) {
    if (callback) {
        callback(e);
    }
};

speechSynthesis.speak(u);
}



    var aks = 0;



    var img = document.getElementById('img');


    var verbs = [
        ["go to", "goes to", "going to", "went to", "gone to"],
        ["look at", "looks at", "looking at", "looked at", "looked at"],
        ["choose", "chooses", "choosing", "chose", "chosen", "was", "left", "happy", "ate"]
    ];
    var tenses = [{
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
    }];
    var subjects = [{
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
    }];
    var complementsForVerbs = [
        ["the cinema", "Egypt", "the house", "the concert"],
        ["for a map", "them", "the stars", "the lake"],
        ["a book for reading", "a dvd for tonight"]
    ]
    Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)];
    };

    function generate() {
      var randomInt = Math.random() * Math.random() / Math.random() - Math.random() + Math.random();
        var index = Math.floor(verbs.length * randomInt);
        var tense = tenses.random();
        var subject = subjects.random();
        var verb = verbs[index];
        var complement = complementsForVerbs[index];
        var str = tense.format;
        str = str.replace("|subject|", subject.name);
        str = str.replace("|be|", subject.be);
        str = str.replace("|verb|", verb[subject.singular ? tense.singular : tense.plural]);
        str = str.replace("|complement|", complement.random());
        return str;
    }

    function ask() {
        if (aks == 0) {
            speak("Listining");
            aks = 1;
            return;
        }
        if (aks == 1) {
            speak(generate());
            aks = 0;
            return;
        }
    }

    function credits() {
        speak("I was created by My Creator;");
    }