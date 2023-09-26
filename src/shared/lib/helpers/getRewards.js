 export const getRewards = (arr) => {
    let rewardsPoints = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].total > 100) {
            rewardsPoints = rewardsPoints + (arr[i].total - 100) * 2;

        } else if(arr[i].total > 50) {
            rewardsPoints = rewardsPoints + (arr[i].total - 50);
        }
    }

    return rewardsPoints
}
