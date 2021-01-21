//  https://github.com/kafiabdullah/JsAssignment

/**
 * kilometer to meter calculation
 */
function kilometerToMeter(kilometer) {
    // check input validation
    if (kilometer < 0) {
        return "Kilometer can not ber 0 and negetive"
    }
    else if (typeof kilometer == 'string') {
        return "Kilometer can not be string"
    }

    // kilometer to meter calculation
    var resultOfKilometerToMeter = kilometer * 1000;
    return resultOfKilometerToMeter;
}

/**
 * calculate budget amount of buying devices
 */

function budgetCalculator(watch, mobile, laptop) {
    // check input validation
    if (watch < 0 || mobile < 0 || laptop < 0) {
        return "input amount cant't be less than 0"
    }

    // product price
    const watchPrice = 50;
    const mobilePrice = 100;
    const laptopPrice = 500;

    // price calculate
    const totalWatchCost = watchPrice * watch;
    const totalMobileCost = mobilePrice * mobile;
    const totalLaptopCost = laptopPrice * laptop;

    // total budget price
    const totalBudgetPrice = totalWatchCost + totalMobileCost + totalLaptopCost;

    return totalBudgetPrice;
}

/**
 * hotel stay cost calculation
 */

function hotelCost(stayAmountDay) {
    // check input validation
    if (stayAmountDay < 0) {
        return "input stay amount of day cant't be less than 0"
    }

    let totalStayCost = 0;

    // stay amount of day if 10 days
    if (stayAmountDay <= 10) {
        totalStayCost = stayAmountDay * 100;
    }
    // stay amount day if 11-20 days
    else if (stayAmountDay >= 11 && stayAmountDay <= 20) {
        const tenDaysStayCost = 10 * 100;
        const remainingStayDays = stayAmountDay - 10;
        const remainingStayCost = remainingStayDays * 80;

        totalStayCost = tenDaysStayCost + remainingStayCost;
    }
    // stay amount of days is more than 21 days
    else if (stayAmountDay >= 21) {
        const tenDaysStayCost = 10 * 100;
        const twentyDaysStayCost = 10 * 80;
        const remainingStayDays = stayAmountDay - 20;
        const remainingStayCost = remainingStayDays * 50;

        totalStayCost = tenDaysStayCost + twentyDaysStayCost + remainingStayCost;
    }
    return totalStayCost;
}

/**
 * find max name of the array
 */

function megaFriend(friendsNames) {
    let maxLengthOfArray = 0;
    let maxNameOfArray = 0;

    for (let i = 0; i < friendsNames.length; i++) {
        if (friendsNames[i].length > maxLengthOfArray) {
            maxLengthOfArray = friendsNames[i].length;
            maxNameOfArray = i;
        }
    }
    return friendsNames[maxNameOfArray];
}  