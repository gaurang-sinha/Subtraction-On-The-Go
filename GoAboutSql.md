Sql schema will be like


table name - subtraction_details

id - auto-incremental (indexed)
minuend - tinyint(10)
subtrahend - tinyint(10)
is_borrowed - tinyint(1) default(0)
correct_answer - int
options - varchar(200)
is_active - boolean
is_delete - boolean
created_at - timestamp (current)


I will handle the data-type in the api as per need. With one network call , it will be hanlded.
