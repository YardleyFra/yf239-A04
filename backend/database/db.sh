#!/bin/bash
# Check if the db.sql file exists in the current directory
if [ -f "db.sql" ]; then
    # Run the db.sql file
    sudo mysql < db.sql
    echo "The SQL script has been executed."
else
    echo "Error: db.sql file does not exist in the current directory."
fi