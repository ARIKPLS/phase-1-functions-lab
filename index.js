// Code your solution in this file!

function distanceFromHqInBlocks(blocks){
   let totalDistance = Math.abs(blocks - 42);
    return totalDistance; 
}

function distanceFromHqInFeet(blocks){
    let smellyFeet = distanceFromHqInBlocks(blocks) * 264;
    return smellyFeet
}

function distanceTravelledInFeet(pointA, pointB){
    let footDistance = Math.abs(pointA - pointB) * 264;
    return footDistance;
}

function calculatesFarePrice(start,destination){
    let totalFare = Math.abs(distanceTravelledInFeet(start,destination))

    if (totalFare > 2500){
        return 'cannot travel that far'
    }   else if(totalFare > 2000){
        return 25
    }   else if(totalFare > 400){
        return (totalFare -400) *.02
    } else if (totalFare < 400){
        return 0
    }
}