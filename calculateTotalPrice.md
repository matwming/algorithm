## Find the total purchase Price based on product price and available discounts
* Input parameters:
    * products: it is a two-dimensional array;
        * First parameter in each products[index]: it is the product price
        * The rest are discount codes: if the discount code is 'EMPTY', it
         means this code is not valid, just discard it. You need to find the
          lowest purchase price by comparing all the available codes
    * discounts: it is a two-dimensional array:
        * First parameter in discounts[index] : it is a discount code that
         is associated with each product;
        * Second parameter in discounts[index]: there are three kinds of
         discounts which are '0','1','2';
            * "0": means this product is selling at discounts[index][2];
            * "1": means this product is selling at discounts[index][2] by
             percentage. For instance,in ['mqWkDhF', '1', '29'] '29' means it
              is selling at 29% off. Remember to round it to the nearest integer
            * "2": means this product is selling at discounts[index][2] off
            . For instance, ['hDr', '2', '403'] '403' means it is selling at
             product'price - 403;
Here are the example inputs
 ```javascript
let products = [
 ['99851', 'yjxPwP3QOO', 'EMPTY','mqWkDhF'],
 ['93490', 'PzSHSo'],
 ['57818', 'mqWkDhF'],
 ['57818', 'EMPTY', 'EMPTY'],
]
let discounts = [['hDr', '2', '403'],
['P', '1', '74'],
['mqWkDhF', '1', '29'],
['PzSHSo', '2', '920'],
['yjxPwP3QOO', '0', '99825']]
```
