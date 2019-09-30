# Question: Given an array of integers,
#          find if the array contains any duplicates.

nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]


def removeDuplicate(nums):
    return list(dict.fromkeys(nums))


print(removeDuplicate(nums))
