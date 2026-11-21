func hasDuplicate(nums []int) bool {
    appeared := make(map[int]bool)
    for _,n := range nums{
        if appeared[n] == true {
            return true
        }
        appeared[n] = true
    }
    return false
}
