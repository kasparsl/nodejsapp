var os=require('os');
var message = 'Here is some cool info about your your system';

var sysarr = new Array('Type: '+os.type(), 
						'Node version: ' + process.version,
						'Platform: ' + os.platform(),
						'Hostname: ' + os.hostname(),
						'Total mem: ' +os.totalmem(),
						'Free mem: ' +os.freemem(),
						'Uptime: ' +os.uptime()
						);
console.log(message);
var alen2 = sysarr.length;
//console.log(sysarr);
//console.log('alen = ' + alen2);
i = 0;
while (i < alen2) {
	
	console.log(sysarr[i]);
	i++;
}
						
