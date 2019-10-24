var nodes = document.getElementsByTagName('button');
for (let i = 0; i < nodes.length; i++) {
   nodes[i].addEventListener('click', function() {
      console.log('Kliknuo sa na dugme #' + i);
   });
}