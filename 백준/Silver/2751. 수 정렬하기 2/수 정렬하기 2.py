import sys  # 변수와 함수 직접 제어 모듈
N = int(input())

input = sys.stdin.readline  #stdin_standard input =>input()포함

a = []
for i in range(N):
    a.append(int(input()))
    # a_li = sorted(a)
for i in sorted(a): 
    print(i)