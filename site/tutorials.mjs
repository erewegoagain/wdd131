const lessons = {
    csharp: [
        {
            lessonNumber: 1,
            title: "Introduction to C#, Hello World",
            description: `
                Here we will start with learning the basics of C#, 
                and how to make your first program, Hello World. 
            Compared to Python, the other language we will learn here, 
            C# is a more complex language often used in enterprise environments, 
            as well as desktop applications and video games. This language is a bit more complex than Python,
            but there are plenty of benefits to learning it.
        `,
        lesson: `Our first lesson is to make a simple program that prints "Hello, World!" to the console.
        Hello World is a common first program in many languages. Doing so in C# is a bit more of a complicated process than in
        Python or other languages, but it still remains a good start in introducting you to C#, and the basic structure of a C# program.
        As you can see, we have a class called Program, which contains a method called Main.
        The Main method is the entry point of the program, and is where the program starts executing.
        Inside of main is the code we have to run the hello world program, written as below:`,
        picture1: './lessonImages/lessonCSharp1.png',
        lesson2: `Running a C# program is not a straighforward process. It needs to be compiled before it can be run.
        To do this, you will need to use the command terminal. If you are using VSCode, you can access the terminal by clicking
         on "Terminal" in the top menu and selecting "New Terminal". Once the terminal is open, you can run the following command:
         \`dotnet new console -n TestProgram\ (TestProgram being the name of the program, you can change it to what you need). This
         compile the program and create a new folder with the name you specified. You can then go to TestProgram (or what
         you named it) navigate to that folder with cd, and
         then run the program with the command \`dotnet run\`. This will execute the program and print "Hello, World!" to the console.`,
        picture2: './lessonImages/lessonCSharpTerminal1.png',
        postlesson: `With that, congratulations! You have made your first C# program!`
    },

{
    lessonNumber: 2,
    title: "Variables and Data Types",
    description: `In this lesson, we will learn about variables and data types in C#.`,
    lesson:`Like other programing langauges, C# has a variety of data types tha are used for different purposes. They are as follows:
        - int: Used for integers, whole numbers without decimal points such as 100 or 42.
        - float: Used for floating point numbers, numbers with decimal points such as 100.00 or 42.0.
        - double: Also used for floating point numbers, numbers with decimal points such as 100.00 or 42.0
          doubles are more precise than floats but are slower and take up more memory.
        - char: Used for single characters, things like 'a' or 'b' or '1'
        - string: Used for text, a sequence of characters. the Hello World program we made in lesson 1 used a string.
        - bool: Used for boolean values, which are used for true/false values
    to declare variables in c#, use the following syntax:
        "\`dataType variableName = value;\`"
    where dataType is the variable type, variableName is the name of the variable, and value is what value you want to assign to it.
    the picture below shows an example of how to declare variables in C#. Note that you need to make sure they are declared inside the Main method, 
    as that is where the program starts executing.`,
    picture1: './lessonImages/lessonCSharp2.png',
    lesson2:`You can also change the value of a variable after it has been declared, by using the same syntax as above.
    For example, if you had a variable called "x" that was an int, you could change its value like this:
    "\`x = 5;\`"
    This would change the value of x to 5. You can do this with any variable type as seen below`,
    picture2:'./lessonImages/lessonCSharpTerminal2.png',
    postlesson: `Once again, remember that you need to include everything inside the Main method. Another good thing to keep in mind
    `
    

},
{
    lessonNumber: 3,
    title: "If Statements and Loops",
    description: `In this lesson, we will learn about if statements and loops in C#.`,
    lesson:`First off we will learn about if statements. If statements are used to execute code depending on if certain conditions
    are met They come in two forms: If else statements, and switch statements. If else statements are dependent on executing a code based
    on if something is true. If its not true, it will go to the next condition, and so on until it finds a true condition or reaches the end.
    Switch statements are used to execute code based on the value of a variable, and are often used when there are multiple conditions to check.
    The picture below shows an example of both an if else statement and a switch statementin C#`,
    picture1: './lessonImages/lessonCSharp3.png',
    lesson2:`Next, we will learn about loops. Loops are used to execute a block of code multiple times. There are several types of loops in C#,
    including for loops, while loops, and do while loops. Each type of loop has its own use cases and syntax.
    For loops are used to execute a block of code a certain number of times, 
    While loops are used to execute a block of code while a certain condition is true,
    Do While loops are used to execute a block of code at least once, and then 
    continue executing it while a certain condition is true. Pictured below is an example of each loop type in C#`,
    picture2:'./lessonImages/lessonCSharp3-2.png',
    postlesson: `These are used to control the flow of a program, and are essential for making programs
     that can make decisions and repeat actions. You will use them frequently in C# programming, and they are a key part of the language.`

},
{
    lessonNumber: 4,
    title: "Functions and Methods",
    description: `In this lesson, we will learn about functions and methods in C#.`,
    lesson:`A method in C# is a block of code than runs when it is called by the program. Methods take the place of functions in C#,
    and for all intents and purposes, they serve the same purpose. They are used to organize code and make it more readable, 
    as well as to reuse code. You may recall our use of Main in the various programs we have made so far. Main is also a method, 
    specifically the entry point of the program. We can make other methods in C# and then call them from Main or other methods.
    To call a method, you simply use the name of the method followed by parentheses, like this:`,
    picture1: './lessonImages/lessonCSharp4.png',
    lesson2:`As you can see in the picture above, we have a method called "testMethod" that prints a statement,
     and then is called from Main. You can also pass parameters to methods, which are values that are passed to the method
     for it to use. Methods can also be overloaded, meaning they can have the same name but different parameters. In the picture below we
     have an example of both passing parameters and overloading methods.`,
    picture2:'./lessonImages/lessonCSharp4-2.png',
    postlesson: `Methods serve the same function (pun intended) as functions in other languages, and are a key part of C# programming.
    As you continue to learn C#, you will use methods with increasing frequency for all sorts of projects.`

}],



python: [
    {
        lessonNumber: 1,
        title: "Introduction to Python, Hello World",
        description: `
            Here we will start with learning the basics of Python, 
            and how to make your first program, Hello World. 
            Compared to C#, the other language we will learn here, 
            Python is a fairly simple language used by both those new to coding and professionals. 
            It has a variety of applications but is mainly used in web development, data analysis, 
            artificial intelligence, and scientific computing. It'll be easier to learn than C#,
            though at the end of the day, both languages have things they are better at,
        `,
        lesson: `Our first lesson is to make a simple program that prints "Hello, World!" to the console.
        Hello World is a common first program in many languages, Python included. and will be a good start
        in introducting you to python. To do this, we will use the print function, which is used to output text to the console.`,
        picture1: './lessonImages/lessonPython1.png',
        lesson2: `To run the program, you use the command terminal. If you are using VSCode, you can access the terminal by clicking
         on "Terminal" in the top menu and selecting "New Terminal".`,
        picture2: './lessonImages/lessonPythonTerminal1.png',
        postlesson: `With that, congratulations! You have made your first Python program!`
    },
    {
    lessonNumber: 2,
    title: "Variables and Data Types",
    description: `In this lesson, we will learn about variables and data types in Python.`,
    lesson:`Unlike most languages, Python does not have a strict type system; 
    you do not need to declare the type of a variable when you create it, and they can even change types after
    being set. You can however use cast the type to a specific kind of variable, such as int, float, str, or bool. See the below picture.`,
    picture1: './lessonImages/lessonPython2.png',
    lesson2:`You can also get the type of a variable by using the type() function, which will return the type of the variable. See below:`,
    picture2:'',
    postlesson:`You do need to be a bit careful with how you declare your variables. While quotation marks for strings are a bit lenitent,
    with both single and double quotes working, variable names are case-sensitive. Keep these in mind as you declare your variables.`

},
{
    lessonNumber: 3,
    title: "If Statements and Loops",
    description: `In this lesson, we will learn about if statements and loops in Python.`,
    lesson:`First off we will learn about if statements. If statements are used to execute code depending on if certain conditions
    are met. There are 3 parts to an if statement: the if, elif, and else statements. 
    The if statement is used to check a condition,
    the elif statement is used to check another condition if the first one is false, 
    and the else statement is used to execute code if all previous conditions are false.`,
    picture1: './lessonImages/lessonPython3.png',
    lesson2:`Next, we will learn about loops. Loops are used to execute a block of code multiple times. in Python, there are two main types of loops: for loops and while loops.
    For loops are used to iterate over a sequence, such as a list or a string, and execute a block of code for each item in the sequence.
    While loops are used to execute a block of code while a certain condition is true. Pictured below is an example of each loop type in Python.`,
    picture2:'./lessonImages/lessonPython3-2.png'

},
{
    lessonNumber: 4,
    title: "Functions and Methods",
    description: `In this lesson, we will learn about functions and methods in Python.`,
    lesson:`Functions are blocks of code that only run when they are called. You can pass data, known as parameters, into a function. A function can return data as a result. In Python, you define a function using the def keyword, followed by the function name and parentheses. See the picture below for an example.`,
    picture1: './lessonImages/lessonPython4.png',
    lesson2:`Methods are similar to functions, but they are associated with objects. In Python, everything is an object, and methods are functions that belong to an object. You can call a method on an object using the dot notation. See the picture below for an example.`,
    picture2:'./lessonImages/lessonPython4-2.png'

}
]
};


export default lessons;