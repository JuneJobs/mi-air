//https://github.com/aholstenson/miio
const miio = require('miio');
let air;
miio.device({ address: '192.168.4.147', token: 'a74ac22c3a70a995f409f2e9052b928f' })
.then(device => {
    console.log('Connected to', device)
    air = device;
}).catch(err => console.log(err));


setInterval(() => {
   console.log(JSON.stringify(air._properties));
}, 1000)
