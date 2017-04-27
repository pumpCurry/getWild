
function getWildAndTough(){
    var Do;
    try {
        Do = getWild() && getTough();
    } catch (OnlyOnePerson  i) {
        return i;  // [ = puzzle. ]
    }
    return void;
}

function getChanceAndLuck(){
    var Do;
    try {
        Do = getChance() && getLuck();
    } catch (OnlyOnePerson  e) {
        return getDream("Wounded");
    }
    return getDream("Wounded");
}

