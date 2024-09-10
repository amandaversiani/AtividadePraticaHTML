# atividade 8 pág 156
soma = 0
for i in range(2, 101):
    primo = True
    for x in range(2, int(i / 2)+1):
        if(i % x == 0):
            primo = False
        if(primo):
            soma += i
print(f"Total da soma dos números primos: {soma}")