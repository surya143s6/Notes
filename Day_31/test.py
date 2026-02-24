# emoji(2, "🍓")
#
# def emoji(count):
#     return "🍓" * count
#
# print(emoji(1))
# print(emoji(2))

# emoji(6, "🍍")
# def emoji():
#     for i in range(1, 6):
#         print("🍍" * i)
#
# emoji()

# emoji(4, "🥕")

def emoji(rows,symbol="🔥"):
    for i in range(rows+1):
        print(i* symbol)

emoji(2, "🍓")
emoji(6, "🍍")
emoji(4, "🥕")
emoji(3)



