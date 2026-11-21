import (
    "cmp"
    "slices"
)

func topKFrequent(nums []int, k int) []int {

    hashMap := make(map[int]int)
    
    for i:=0; i < len(nums); i++ {
        hashMap[nums[i]] ++
    }
    
    type FreqData struct {
        num int
        count int
    }

    var freqData []FreqData

    for num, count := range hashMap{
        freqData = append(freqData, FreqData{num: num, count:count})
    }
    

    slices.SortFunc(freqData, func(a,b FreqData) int{
        return cmp.Compare(b.count, a.count)
    })

    var results []int
    for i:=0; i<k; i++ {
        results = append(results, freqData[i].num)
    }
    return results
}
