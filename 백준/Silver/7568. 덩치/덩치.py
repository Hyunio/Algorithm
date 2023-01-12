N = int(input())

person = []  #사람정보넣어두고 정렬 예정

for _ in range(N):
    x, y = map(int, input().split(' '))
    person.append((x, y))
    
ans = [1 for i in range(N)]  #1을 N개만큼 만들어두고

for i in range(N):
    cnt = 0 
    for j in range(N):
        if i == j:
            continue
        if person[i][0]< person[j][0] and person[i][1] < person[j][1]:
            cnt += 1
    ans[i] += cnt
for i in ans:
    print(i)