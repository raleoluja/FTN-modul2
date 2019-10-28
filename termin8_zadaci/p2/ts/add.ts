/// <reference path="email.ts" />
/// <reference path="SMS_poruka.ts" />

let sms1: SMSPoruka = new SMSPoruka("Pera", "Djole", "Pozdrav Djole", "060222333", "0606222333");
let email1: Email = new Email("Ivan", "Zdravko", "Pozdrav Zdravko!!!", "neki@gmail.com", "drugi@gmail.com");

sms1.stampaj();
email1.stampaj();

console.log(sms1.stampaj());
console.log(email1.stampaj());



