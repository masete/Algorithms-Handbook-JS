//An algorithm to identify if a word is a palindrome or not could be

function IsPalindrome(word){
    let left = 0
    let right = word.length-1

    while(left<right){
        if(word[left]!==word[right])
        return false
        left++
        right--
    }
    return true
    }
