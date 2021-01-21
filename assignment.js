//  https://github.com/kafiabdullah/JsAssignment

/**
 * kilometer to meter calculation
 */
function kilometerToMeter(kilometer){
    // check input validation
    if(kilometer < 0){
        return "Kilometer can not ber 0 and negetive"
    }
    else if(typeof kilometer == 'string'){
        return "Kilometer can not be string"
    }

    // kilometer to meter calculation
    var resultOfKilometerToMeter = kilometer * 1000;
    return resultOfKilometerToMeter;
}