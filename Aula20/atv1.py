VALORES = []
continuar = "s"
while continuar == "s":
    VALORES.append(int(input("Digite um valor: ")))
    continuar = input ("Deseja dijitar outro valor? ")
print(VALORES)
maior = max(VALORES)
menor = min(VALORES)
print(maior - menor)