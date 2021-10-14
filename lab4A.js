function makePhrases() {
  var adjective  = ["amused", "brainy", "cautious", "dark", "exuberant", 
                    "funny", "grotesque", "kind", "open", "powerful"];
  var noun       = ["cat", "park", "phone", "water", "beach",
                    "Six Flags", "Squid Games", "basketball", "sneakers", "toilet paper"]; 
  var pluralNoun = ["boxes", "toys", "teachers", "languages", "students",
                    "brothers", "dogs", "stores", "cacti", "volcanoes"];
  var verb       = ["run", "play", "laugh", "program", "drive",
                    "skip", "hustle", "teach", "succeed", "grind"];
  var adverb     = ["bashfully", "calmly", "punctually", "wildly", "wisely",
                    "generally", "gladly", "almost", "mortally", "truthfully"];

  var phrase = adjective[Math.floor(Math.random() * adjective.length)] + " teachers always give out " + adjective[Math.floor(Math.random() * adjective.length)] + " assignments.\n" +
               "But as everyone knows, if you want to pass all your classes so you can go \n" + 
               "to a/an " + noun[Math.floor(Math.random() * noun.length)] + " and become president of a big internatonal\n" +
               noun[Math.floor(Math.random() * noun.length)] + " and have millions of " + pluralNoun[Math.floor(Math.random() * pluralNoun.length)] + " in the \n" +
               "bank, you must do your homework and study " + adverb[Math.floor(Math.random() * adverb.length)] + ". If you \n" +
               "just sit around and " + verb[Math.floor(Math.random() * verb.length)] + ", you won't get ahead in life. You \n" +
               "must learn to pay attention to every " + adjective[Math.floor(Math.random() * adjective.length)] + " thing your teacher \n" +
               "says. Do not interrupt or whisper to other " + pluralNoun[Math.floor(Math.random() * pluralNoun.length)] + " during class.\n" +
               "Be sure to have a nice, " + adjective[Math.floor(Math.random() * adjective.length)] + " notebook in which you can \n" +
               "write down anything the teacher says that seems " + adjective[Math.floor(Math.random() * adjective.length)] + ". Then \n" +
               "go home and memorize all of those " + adjective[Math.floor(Math.random() * adjective.length)] + " notes. When your \n" +
               "teacher gives a surprise quize, you will know all the " + pluralNoun[Math.floor(Math.random() * pluralNoun.length)] + ".";
  document.write(phrase);
}
makePhrases();