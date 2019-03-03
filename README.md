# randomness_test

This is a repo for test of randomness.


## Entropy measurement

This could give one measurement of the randomness. We have normalized the entropy. So the value is always between 0 and 1. The larger the entropy is, the more random it is. To get more information about entropy you can refer https://en.wikipedia.org/wiki/Entropy_(information_theory)

## How to run
`node entropy/entropy.js ./data/random.json`

The output is :

The input file length is : 15000

The unique number count is: 13414

The entropy is: 0.9843445072616206

## Chi-Squared test

The output for chi-squared is :

The input file length is : 15000

The chi-squared output is : 65399.5648

The normalized chi squared value(which can be compared with standard normal distribution): 0.37685255903337017

![chi Squared](chiSquared.png)

The Area is 0.3557.







