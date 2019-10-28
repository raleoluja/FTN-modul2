/// <reference path="VideoKamera.ts" />

let kamera1: Kamera = new Kamera(800, 2000, 0);
let videoKam1: VideoKamera = new VideoKamera(0, 800, 10000, 0);

videoKam1.snimaj(2);
console.log("Memorija VK: " + videoKam1.$freeSpace);
console.log("Broj videa: " + videoKam1.$videoCounter);

videoKam1.slikaj();
videoKam1.snimaj(3);
console.log("Memorija VK: " + videoKam1.$freeSpace);
console.log("Broj fotografija: " + videoKam1.$photoCounter);
console.log("Broj videa: " + videoKam1.$videoCounter);
console.log(" ");

console.log("Memorija K: " + kamera1.$freeSpace);
console.log("Broj fotografija: " + kamera1.$photoCounter);
kamera1.slikaj();
kamera1.slikaj();
kamera1.slikaj();
console.log("Memorija: " + kamera1.$freeSpace);
console.log("Broj fotografija: " + kamera1.$photoCounter);



