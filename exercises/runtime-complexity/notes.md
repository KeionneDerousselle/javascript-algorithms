# Constant Time: O(1)
No matter how many elements we're working with, the operation will always take the same amount of time

# Logarithmic Time O(log(n))
Doubling the amount of elements you're working with doesn't double the amount of work. Always assume that **searching** operations are log(n)

# Linear Time O(n)
This occurs when the number of elements = the # of iterations or work. Iterating through all elements in a collection of data. (loops, filters, reduce, map, find)

# Quaslinear Time O(n * log(n))
You have this if doubling the number of elements you are iterating over doesn't double the amount of work. Always assume that **sorting** operations is n*log(n)

# Quadratic Time O(n^2)
Every element in the collection has to be compared to every other element. (The handshake problem)

# Exponential Time O(2^n)
If you add a 'single' element to a collection, the processing power required doubles.