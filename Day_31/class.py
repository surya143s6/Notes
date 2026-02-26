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


# task:1.1

# class Car:
#     def __init__(self,wheels,engnine,model,doors):
#         self.wheels = wheels
#         self.engnine = engnine
#         self.model = model
#         self.doors = doors

# surya=Car(4,"v4","tata",4)
# print(surya)


# task1.2


# ## Task 1.1
# Create blueprint

# ### Account
# 1. acc_no
# 2. name
# 3. balance


## Task 1.2
# Create 3 account
# 1. nk - 50_000
# 2. rishi - 3_00_000
# 3. puspha - 10_00_000

class Account:
    interest_rate=0.02
    def __init__(self, acc_no, name, balance):
        self.acc_no = acc_no
        self.name = name
        self.balance = balance
        
    def display_balance(self):
        return f"Your balance is: ₹{self.balance:,.2f}"
    
    def withdraw(self, amount):
        if amount < 0:
            return "Invalid amount"
        if amount > self.balance:
            return f"Insufficient balance. Your balance is ₹{self.balance:,.2f}"
        
        self.balance = self.balance - amount
        return f"Success. Your balance is: ₹{self.balance:,.2f}"
    
    def deposit(self,amount):
        if amount < 0:
            return "Invalid amount"
        self.balance = self.balance + amount
        return f"Success. Your balance is: ₹{self.balance:,.2f}"
    
    def apply_interest(self): 
        self.balance= self.balance * Account.interest_rate + self.balance 
        return f"Success : Applied interest rate of {Account.interest_rate:.2%}. {self.display_balance()}"
    
    @classmethod
    def update_interest_rate(cls, new_interest_rate):
        cls.interest_rate=new_interest_rate /100
        return f"Sucess. Interest rate "
    
        


surya= Account(101, "surya", 50000)
rio = Account(102,"rio",70000)
james=Account(103,"james",60000)
mohan=Account(104,"mohan",40000)
jim=Account(105,"jim",30000)
david=Account(106,"david",25000)

print(surya.withdraw(5000))
print(surya.display_balance())
print(surya.deposit(10000))
print(surya.deposit)
print(surya.apply_interest)

# print(rio.withdraw(3000))
# print(rio.display_balance())

# print(james.withdrawithdraw(2000))
# print(james.display_balance())

















