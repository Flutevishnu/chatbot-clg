import sqlite3
import pandas as pd

# Connect to the SQLite database
conn = sqlite3.connect('Users.db')

# Retrieve data from the "users" table
query = "SELECT name, email, mobile FROM users"
cursor = conn.cursor()
cursor.execute(query)
data = cursor.fetchall()

# Create a DataFrame from the retrieved data
df = pd.DataFrame(data, columns=['name', 'email', 'mobile'])

# Save the DataFrame to an Excel file
df.to_excel('Users.xlsx', index=False)

# Close the database connection
conn.close()
