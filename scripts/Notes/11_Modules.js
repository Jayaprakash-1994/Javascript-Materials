// Modules  28/06/2023
/*
  Javascript doesn't have biuld-in support for modules.
  Basicully if you want to resue the functions and fields from one javascript file to another javascript file
  you should use modules by using Export import  keywords  & require() function in Node js.
    Ex:-
     Employee.js
      export function getFullEmployeenamebyID(id) {
        console.log(`Getting Employee Details by using his ID ${id}`);

      }

      function getSalaryDetails(id) {
        console.log(`Getting Employee Details by using his ID ${id}`);

      }
       
       export let someValue= "jayaprakash";

      If i want to resue the getFullEmployeenamebyID & somevalue fields in another JS file You can export & import those values in ES6.
      or Simple you can export the whole js like this "let emplyee =  require('./Employee.js);"
       getSalaryDetails is private to Employee Js file untill you explicitly exports

  Modules in ES6 :-
    JavaScript modules allow you to break up your code into separate files.
    This makes it easier to maintain a code-base.
    Modules are imported from external files with the import statement.
    Modules also rely on type="module" in the <script> tag.

     

*/