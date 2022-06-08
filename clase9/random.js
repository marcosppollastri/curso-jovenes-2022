module.exports = {
    randomInt: (n) => {
        if(n<0){
            n*=-1;
        }
        return Math.floor(Math.random() * n);
    },
    randomIntBetween: (min, max) => {
        if (min < 0 ) {
            min*= -1;
        }
        if (max < 0 ) {
            max*= -1;
        }
        let factor = max + 1 - min;
        if (factor < 0) {
            factor *= -1;
        }
        let res = Math.floor(Math.random() * factor);
        return res + min;
    }
}