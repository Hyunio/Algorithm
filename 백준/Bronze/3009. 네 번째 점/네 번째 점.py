list_x = []
list_y = []

x1, y1 = map(int, input().split(" "))
x2, y2 = map(int, input().split(" "))
x3, y3 = map(int, input().split(" "))
list_x.extend([x1,x2,x3])
list_y.extend([y1,y2,y3])

x4 = 0
y4 = 0

for i in list_x:
    if list_x.count(i) == 1:
        x4 = i

for i in list_y:
    if list_y.count(i) == 1:
        y4 = i   

print(x4, y4)    