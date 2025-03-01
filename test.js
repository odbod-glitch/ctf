fetch('/flag')
  .then(resp => resp.text())
  .then(flag => {
    document.body.innerHTML = '<h1>Flag: ' + flag + '</h1>';
  });
