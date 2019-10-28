var nodes = document.getElementsByTagName('button');
var _loop_1 = function (i) {
    nodes[i].addEventListener('click', function () {
        console.log('Kliknuo sa na dugme #' + i);
    });
};
for (var i = 0; i < nodes.length; i++) {
    _loop_1(i);
}
//# sourceMappingURL=script.js.map