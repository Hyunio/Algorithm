N = int(input())
a = []
for i in range(N):
    a.append(int(input()))
    a_li = sorted(a)
for j in range(len(a_li)):
    print(a_li[j])