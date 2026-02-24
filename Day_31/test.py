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

# def emoji(rows,symbol="🔥"):
#     for i in range(rows+1):
#         print(i* symbol)

# emoji(2, "🍓")
# emoji(6, "🍍")
# emoji(4, "🥕")
# emoji(3)


    

# Task 1.1 - Print all the flower using for loop
# Hint - range, len


# flowers = ["💐", "🌷", "🌼", "🌷", "🌺"]

# for i in range(len(flowers)):
#     print("flower", i+1, "-", flowers[i])
    

# Expected output
# Flower 1 - 💐
# Flower 2 - 🌷
# Flower 3 - 🌼
# Flower 4 - 🌷
# Flower 5 - 🌺


# # Task 1.2: Double all the numbers
# marks = [80, 90, 100, 60, 85]

# for i in range(len(marks)):
#     marks[i]=marks[i]*2

# print(marks)

# for mark in marks:
#     print(mark)

# Task 1.3: Double the power
# marks = [80, 90, 100, 60, 85]

# marks[1] = 60  
# for i in marks:
#     print(i * 2)
# print(marks)

# powers = [2000, 3000, 4000, 1500]
# doubled_powers = []

# for power in powers:
#     doubled_powers.append(power * 2)
#     print(power)
# ''
# print(doubled_powers)
# print(powers)

# Output
# doubled_powers -> [4000, 6000, 8000, 3000]
# powers -> [2000, 3000, 4000, 1500]


# ## Task 1.4
# Find longer names (>= 6 letter)

# characters = ["Hello kitty", "Goku", "Pikachu", "Luffy", "Yuji Itadori", "Levi"]
# big_names=[]

# for i in range(len(characters)):
#     if len(characters[i]) >= 6:
#         big_names.append(characters[i])

# print(big_names)



    
# ### Expected Output
# ['Hello kitty', 'Pikachu', 'Yuji Itadori']


# Mix Data types
pirate = {
    "name": "Moneky D. Luffy",
    "age": 25,
    "crew_name": "Straw hat pirates",
    "crew_members": ["Zoro", "Sanji", "Nami", "Chopper"],
    "position": "captain",
}

print(pirate["crew_members"][1])


pirate["age"] += 1
print(pirate["age"])
print(pirate)

# Increase age by 1