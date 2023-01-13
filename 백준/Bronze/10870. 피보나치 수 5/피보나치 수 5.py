n = int(input())

def fib(n):
    if n == 0:
        s = n 
        return s
    elif n == 1:
        s = n 
        return s
    else:
        s = fib(n-1) + fib(n-2)
        return s

print(fib(n))       