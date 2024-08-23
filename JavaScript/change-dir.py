import os

# Get the current working directory
current_dir = os.getcwd()

# Get the new working directory from the user
new_dir = "/home/ubuntu/Git/JsObjects/JavaScript/Firebase/ElfExpressSignIn"

# Change the current working directory to the new one
os.chdir(new_dir)

# Print the new working directory
print("The new working directory is:", new_dir)
