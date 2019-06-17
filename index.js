function theBeatlesPlay(musicians, instruments) {
   let arrayx = [];
    for (let i=0; i < musicians.length; i++ ) {
      arrayx.push( musicians[i] + " plays " + instruments[i]);
      
  }
    return arrayx;
}

function johnLennonFacts(jlfacts) {
  var facts = [
    "foo",
    "bar",
   
  ];
  var newfacts = [];
  var i = 0;
  while (i < facts.length) {
    newfacts.push(facts[i] +"!!!");
    i++;
  }
    return newfacts;
}
