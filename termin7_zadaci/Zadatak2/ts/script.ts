let nodes= document.getElementsByTagName('button');
for (let i = 0; i < nodes.length; i++) {
   nodes[i].addEventListener('click', function():void {
      console.log('Kliknuo sa na dugme #' + i);
   });
}