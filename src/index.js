module.exports = function toReadable (number) {

    number = number.toString().split('').reverse();

    let first = '';
    let second = '';
    let third = '';
    switch(number[0]) {
        case '0':
        first = 'zero';
        break;

        case '1':  
        first = 'one';
        break;
        
        case '2':  
        first ='two';
        break;

        case '3':  
        first ='three';
        break;

        case '4':  
        first ='four';
        break;

        case '5':  
        first ='five';
        break;

        case '6':  
        first ='six';
        break;

        case '7':  
        first ='seven';
        break;

        case '8':  
        first ='eight';
        break;

        case '9':  
        first ='nine';
        break;
    }
    switch(number[1]) {
        case '1':
        switch(number[0]) {
            case '0':
            second = 'ten'
            break;

            case '1':  
            second = 'eleven'
            break;

            case '2':  
            second = 'twelve'
            break;

            case '3':  
            second = 'thirteen'
            break;

            case '4':  
            second = 'fourteen'
            break;

            case '5':  
            second = 'fifteen'
            break;

            case '6':  
            second = 'sixteen'
            break;

            case '7':  
            second = 'seventeen'
            break;

            case '8':  
            second = 'eighteen'
            break;

            case '9':  
            second = 'nineteen'
            break;
        }

        break;
        case '2':  
        second ='twenty';
        break;

        case '3':  
        second ='thirty';
        break;

        case '4':  
        second ='forty';
        break;

        case '5':  
        second ='fifty';
        break;

        case '6':  
        second ='sixty';
        break;

        case '7':  
        second ='seventy';
        break;

        case '8':  
        second ='eighty';
        break;

        case '9':  
        second ='ninety';
        break;

    }
    switch(number[2]) {
        case '1':  
        third = 'one hundred';
        break;

        case '2':  
        third ='two hundred';
        break;

        case '3':  
        third ='three hundred';
        break;

        case '4':  
        third ='four hundred';
        break;

        case '5':  
        third ='five hundred';
        break;

        case '6':  
        third ='six hundred';
        break;

        case '7':  
        third ='seven hundred';
        break;

        case '8':  
        third ='eight hundred';
        break;

        case '9':  
        third ='nine hundred';
        break;

    }
    if (number.length === 1) {
        return first;
    } else if(number.length === 2) {
        if(number[0] === '0' ||number[1] === '1') {
            return second;
        } else {
            return second + ' ' + first;
        }
    } else if (number.length === 3 ) {
        if (number[1] === '0' && number[0] === '0') {
            return third;
        } else if (number[1] === '0') {
            return third + ' ' + first;
        } else if (number[0] === "0" || number[1] === '1') {
            return third + ' ' + second;
        } else {
            return third + ' ' + second + ' ' + first;
        }
    } else {
        return ''
    }
}

// Made by Matsvei Osobov after 2 hours
