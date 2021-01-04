function boop () {
  const radius = document.getElementById('radius').value
  const radiussquared = radius * radius
  const areatotal = radiussquared * 3.14
  document.getElementById('area').innerHTML = areatotal
  const circumfrence = 6.28318530718 * radius
  const circumfrencetotal = circumfrence.toFixed(2)
  document.getElementById('circumfrence').innerHTML = circumfrencetotal
}

document.getElementById('submitbutton').addEventListener('click', boop)
