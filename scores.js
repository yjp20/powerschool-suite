console.log('powerschool-suite');

function getcData() {

}

function calcScores() {
  out = {};

  return out;
}

function update() {
  cData = getcData();
  if ( cData == null ) return false;
  calcScores(cData);
}

function checkUntilInit() {
  timer = setInterval(function() {
    if (update()) clearInterval(this);
  }, 100);
}

checkUntilInit();


