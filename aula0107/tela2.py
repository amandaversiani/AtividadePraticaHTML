from tkinter import *
def soma():
    v1 =float(valor1.get())
    v2 = float(valor2.get())
    resp = v1 + v2
    resultado.isert(END, resp)
tela = Tk()
tela.title("Soma")
tela.geometry("500x300")

label1 = Label(tela, text="Valor 1")
label1.pack()

valor1 = Entry(tela, name="v1")
valor1.pack()

label2 = Label(tela, text="Valor 2")
label2.pack()

valor2 = Entry(tela, name="v2")
valor2.pack()

label3 = Label(tela, text="Valor 3")
label3.pack()

valor3 = Entry(tela, name="v3")
valor3.pack()

resultado = Label(tela, text="Resultado")
resultado.pack()

botao = Button(tela, text="Calcular")

botao.pack()

tela.mainloop()