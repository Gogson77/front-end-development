onmessage = function() {

  var data = [];

  for (let i = 0; i < 50000; i++) {
    let random = Math.random().toString().split("0");
    data = data.concat(random);
  }

  postMessage(data);

}