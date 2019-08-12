function webworker(txt) {
    return txt<3 ? 1 : webworker(txt-2) + webworker(txt-1);
}
onmessage = function (event) {
    var result = webworker(event.data);
    return postMessage(result);
}
//这里的this指的跟window指的不是一个对象