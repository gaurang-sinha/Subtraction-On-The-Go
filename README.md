# Subtraction-On-The-Go

Make a Node.js service/server which exposes these APIs:

• Subtraction API:
o Inputs:
▪ Number of questions
▪ Number of digits in minuend (first number in subtraction) and number of
  digits in subtrahend (second number in subtraction)
▪ A Boolean flag which tells each question should have some borrowing or not


o Output:
▪ List of questions, with each question containing:
• Minuend
• Subtrahend
• Correct Answer
• List of 4 possible options

Example:
• Input:
o Number of questions: 1
o Number of digits in minuend (4) and number of digits in subtrahend (3)
o A Boolean flag, true
• Output:
o Question 1:
▪ Minuend: 7568
▪ Subtrahend: 896
▪ Correct Answer: 6672
▪ Options: [6987, 6672, 7672, 9947]


Since in this input, the Boolean flag is true, all the questions definitely involve some borrowing.
On the other hand, if the flag was false then no question should involve borrowing.
Note: Everything should be non-negative (all options, minuend, subtrahend etc.)
Input number of digits can go all the way from 1 to 10.
