# Blueprint
# self, this - context word

# this is my book - context (book)
# this is my pen - context (pen)
# class Car:
#     # function =  method (class function)
#     def __init__(self, wheels, engine, model, doors):
#         # instance variables
#         self.wheels = wheels
#         self.engine = engine
#         self.model = model
#         self.doors = doors

#     # instance methods - objects share them
#     def horn(self):
#         return "Vroom Vroom!!!"


# Share

# Object
# self -> Object
# hindustan = Car(4, "v4", "Ambassador", 4)
# jeep = Car(4, "v6", "Wrangler", 4)

# print(hindustan)  # Car object
# print(jeep)

# # Dot syntax - Class objects
# print(jeep.model)
# print(jeep.doors)

# print(jeep.horn())
# print(hindustan.horn())

# ## Tata
# - Wheels - 4
# - Engine - v4
# - Model - Harrier
# - Doors - 4


# task:1

class Car:
    def __init__(self,wheels,engnine,model,doors):
        self.wheels = wheels
        self.engnine = engnine
        self.model = model
        self.doors = doors

surya=Car(4,"v4","tata",4)
print(surya)