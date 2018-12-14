// returns array of scores
function getScores() {
	gSum1 = 0
	gSum2 = 0

	hTable = document.getElementsByTagName('tbody')[0]
	grades = Array.prototype.slice.call(hTable.getElementsByTagName('tr'))

	for (grade of grades) {
		if (grades.indexOf(grade) == 0) continue;
			nodes = grade.childNodes

			gSum1 += parseInt(nodes[3].innerText)
			gSum2 += parseInt(nodes[7].innerText)

	}

	classes = grades.length - 1
	denom = 0;
	if (classes == 9) {
		denom = 8.5
	}
	else {
		denom = 8
	}
	return [gSum1/denom, gSum2/denom]
}

function textformat(val) {
  return +(Math.round(val+'e+3') + 'e-3');
}
function showScores(gp1, gp2)  {
	hHead = document.getElementsByTagName('thead')[0]
	
	tr1 = document.createElement('tr')
	
	h1 = document.createElement('th')
	h1.setAttribute('class', 'bold center')
	h1.setAttribute('style', 'font-size: 16px')
	h1.innerText = textformat((gp1+gp2)/2)
	
	h2 = document.createElement('th')
	h2.setAttribute('class', 'center')
	h2.setAttribute('style', 'font-weight:400')
	h2.setAttribute('colspan', '4')
	h2.innerText = textformat(gp1)
	
	h3 = document.createElement('th')
	h3.setAttribute('class', 'center')
	h3.setAttribute('style', 'font-weight:400')
	h3.setAttribute('colspan', '4')
	h3.innerText = textformat(gp2)
	
	
	hHead.childNodes[0].before(tr1);
	tr1.appendChild(h1)
	tr1.appendChild(h2)
	tr1.appendChild(h3)
}
s = getScores()
showScores(s[0], s[1])
