module.exports = function toReadable (number) {
    let nums = [
        '', 'one', 'two', 'three', 'four','five', 'six', 'seven', 'eight', 'nine'
    ];

    let teens = [
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen','fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];

    let tens = [
        '', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'
    ];
    
    if (number==0) {
        return 'zero';
    } else if (number<10) {
        return nums[number];
    }    else if (number<20) {
        return teens[number%10];
    } else if (number<100) {
        if (number%10==0) {
            return tens[number/10]
        } else {
            return tens[Math.trunc(number/10)] + ' ' + nums[number%10];
        }
    } else if (number<1000) {
        if (number%100==0) {
            return nums[number/100] + ' hundred';
        } else if ((number%100)<10) {
            return nums[Math.trunc(number/100)] + ' hundred ' + nums[number%100];
        } else if ((number%100)>9 && (number%100)<20) {
            return nums[Math.trunc(number/100)] + ' hundred ' + teens[number%10];
        } else if(number%10==0) {
            return nums[Math.trunc(number/100)] +' hundred ' + tens[Math.trunc(number%100/10)]
        } else {
            return nums[Math.trunc(number/100)] +' hundred ' + tens[Math.trunc(number%100/10)] + ' ' + nums[number%10];
        }
    } 
}
