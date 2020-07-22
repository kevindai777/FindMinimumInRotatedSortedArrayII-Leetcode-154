//Objective is to find the minimum value in a rotated sorted array that may have duplicates

let nums = [2,2,2,0,1]


//O(logn) solution that uses a modified binary search

let low = 0
let high = nums.length - 1

while (low < high) {
    let mid = Math.floor((low + high) / 2)
    
    //This means the right side has the lower values
    if (nums[mid] > nums[high]) {
        low = mid + 1
    //We include this extra statement to make sure we skip duplicates
    } else if (nums[mid] == nums[high]) {
        high--
    }  else {
        high = mid
    }
}

return nums[low]