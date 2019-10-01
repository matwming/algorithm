# Question: Given an array of integers,
#          find if the array contains any duplicates.

nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]


def removeDuplicate(nums):
    numDict = {}
    for el in nums:
        if el in numDict:
            numDict[el] = numDict[el]+1
        else:
            numDict[el] = 0
    isDuplicate = bool(False)
    for el in numDict.values():
        if el > 0:
            isDuplicate = bool(True)
            return isDuplicate
            break


print(removeDuplicate(nums))
