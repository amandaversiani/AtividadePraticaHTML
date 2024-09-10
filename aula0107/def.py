from tkinter import *

tela = Tk()


label = Label(tela, text="Usuario")
label.pack()
usuario = Entry(tela, name="usuario")
usuario.pack()

label2 = Label(tela, text="Senha")
label2.pack()
senha = Entry(tela, name="senha")
senha.pack()

tela.mainloop()