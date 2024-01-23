import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "apa coba",
  description: "my first vitepress learn",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: 'example/markdown-examples' },
      { text: 'Vitepress Curriculum', link: 'coba/meeting-1/programing'}
    ],
    sidebar: {
      '/example': [
        {
          text: 'Examples',
          collapsed: true,
          items: [
            { text: 'Markdown Examples', link: 'example/markdown-examples' },
            { text: 'Runtime API Examples', link: 'example/api-examples' }
          ]
        }
      ],
      '/coba': [
        {
          text: 'Meeting 1 - Introduction',
          collapsed:true,
          items: [
            { text: 'What is Programing?', link: 'coba/meeting-1/programing' },
            { text: 'History of Programing', link: 'coba/meeting-1/programinghistory' },
            { text: 'The Scope of Programing', link: 'coba/meeting-1/programingscope' },
            { text: 'Products', link: 'coba/meeting-1/products' },
            { text: 'What is Algorithms?', link: 'coba/meeting-1/algorithms' },
            { text: 'Problem Solving in Programing', link: 'coba/meeting-1/programingproblemsolve' },
            { text: 'Practice', link: 'coba/meeting-1/practice' },
          ]
        },
        {
          text: 'Meeting 2 - Data Types and Variables',
          collapsed:true,
          items: [
            { text: 'Introduction', link: 'coba/meeting-2/introduction' },
            { text: 'Types of Data', link: 'coba/meeting-2/typesofdata' },
            { text: 'Variables', link: 'coba/meeting-2/variables' },
            { text: 'Constant', link: 'coba/meeting-2/constant' },
          ]
        },
        {
          text: 'Meeting 3 - Input, Output, and, String',
          collapsed:true,
          items: [
            { text: 'Introduction', link: 'coba/meeting-3/introduction' },
            { text: 'Input and Output', link: 'coba/meeting-3/inputoutput' },
            { text: 'Format Output', link: 'coba/meeting-3/outputformat' },
            { text: 'String', link: 'coba/meeting-3/string' },
            { text: 'Exercise', link: 'coba/meeting-3/exercise' },
          ]
        },
        {
          text: 'Meeting 4 - Arithmetic Operators',
          collapsed:true,
          items: [
            { text: 'Introduction', link: 'coba/meeting-4/introduction' },
            { text: 'Addition and Subtraction', link: 'coba/meeting-4/addandsub' },
            { text: 'Multiplication and Division', link: 'coba/meeting-4/multifydivide' },
            { text: 'Modulo', link: 'coba/meeting-4/modulo' },
            { text: 'Increment and Decrement', link: 'coba/meeting-4/incrementdecrement' },
            { text: 'Operator Precendence', link: 'coba/meeting-4/operatorprecedence' },
            { text: 'Exercise', link: 'coba/meeting-4/exercise' },
          ]
        },
        {
          text: 'Meeting 5 - Selection',
          collapsed:true,
          items: [
            { text: 'Introduction', link: 'coba/meeting-5/introduction' },
            { text: 'Operator', link: 'coba/meeting-5/operator' },
            { text: 'If-else', link: 'coba/meeting-5/ifelse' },
            { text: 'Ternary', link: 'coba/meeting-5/ternary' },
            { text: 'Switch Case', link: 'coba/meeting-5/switchcase' },
            { text: 'Exercise', link: 'coba/meeting-5/exercise' },
          ]
        },
        {
          text: 'Meeting 6 - Repetition',
          collapsed:true,
          items: [
            { text: 'Introduction', link: 'coba/meeting-6/introduction' },
            { text: 'Example', link: 'coba/meeting-6/example' },
            { text: 'While Loop', link: 'coba/meeting-6/whileloop' },
            { text: 'Do-While Loop', link: 'coba/meeting-6/dowhileloop' },
            { text: 'For Loop', link: 'coba/meeting-6/forloop' },
            { text: 'Forever Loop', link: 'coba/meeting-6/foreverloop' },
            { text: 'Continue and Break', link: 'coba/meeting-6/continuebreak' },
            { text: 'Exercise', link: 'coba/meeting-6/exercise' },
          ]
        },  
        {
          text: 'Meeting 7 - Static Array',
          collapsed:true,
          items: [
            { text: 'Introduction', link: 'coba/meeting-7/introduction' },
            { text: 'Example Use', link: 'coba/meeting-7/exampleuse' },
            { text: 'Types of Array', link: 'coba/meeting-7/typesofarray' },
            { text: 'Initialize Array', link: 'coba/meeting-7/initializearray' },
            { text: 'Access Array', link: 'coba/meeting-7/accessarray' },
            { text: 'Show the Value in Array', link: 'coba/meeting-7/showarrayvalue' },
            { text: 'Update Array', link: 'coba/meeting-7/updatearray' },
            { text: 'Multidimensional Array', link: 'coba/meeting-7/multiarray' },
            { text: 'Exercise', link: 'coba/meeting-7/exercise' },
          ]
        },
        {
          text: 'Meeting 8 - Mid Test',
          collapsed:true,
          items: [
            { text: 'Case', link: 'coba/meeting-8/case' },
          ]
        },
        {
          text: 'Meeting 9 - Dynamic Array',
          collapsed:true,
          items: [
            { text: 'Introduction', link: 'coba/meeting-9/introduction' },
            { text: 'Initialize Array', link: 'coba/meeting-9/initialize' },
            { text: 'Access or Show the Value in Array', link: 'coba/meeting-9/showaccessarray' },
            { text: 'Update Array', link: 'coba/meeting-9/updatearray' },
            { text: 'Clear or Empty Array', link: 'coba/meeting-9/clearemptyarray' },
            { text: 'Example', link: 'coba/meeting-9/example' },
            { text: 'Exercise', link: 'coba/meeting-9/exercise' },
          ]
        },
        {
          text: 'Meeting 10 - Function',
          collapsed:true,
          items: [
            { text: 'Introduction', link: 'coba/meeting-10/introduction' },
            { text: 'Example of Use', link: 'coba/meeting-10/exampleuse' },
            { text: 'Types of Function', link: 'coba/meeting-10/functiontype' },
            { text: 'Built-in Function', link: 'coba/meeting-10/builtinfunction' },
            { text: 'User-defined Function', link: 'coba/meeting-10/userdefinedfunction' },
            { text: 'Defining Function', link: 'coba/meeting-10/definingfunction' },
            { text: 'Local vs Global Variables in Function', link: 'coba/meeting-10/localglobalvariable' },
            { text: 'Exercise', link: 'coba/meeting-10/exercise' },
          ]
        },
        {
          text: 'Meeting 11 - Sort',
          collapsed:true,
          items: [
            { text: 'Introduction', link: 'coba/meeting-11/introduction' },
            { text: 'Types of Sorting', link: 'coba/meeting-11/typesofsorting' },
            { text: 'Examples of Sorting', link: 'coba/meeting-11/examples' },
            { text: 'Bubble Sort', link: 'coba/meeting-11/bubblesort' },
            { text: 'Quick Sort', link: 'coba/meeting-11/quicksort' },
            { text: 'Bubble Sort vs Quick Sort', link: 'coba/meeting-11/bubblevsquick' },
          ]
        },
        {
          text: 'Meeting 12 - Searching',
          collapsed:true,
          items: [
            { text: 'Introduction', link: 'coba/meeting-12/introduction' },
            { text: 'Types of Searching', link: 'coba/meeting-12/typesofsearching' },
            { text: 'Examples of Searching', link: 'coba/meeting-12/examples' },
            { text: 'Linear Search', link: 'coba/meeting-12/linearsearch' },
            { text: 'Binary Search', link: 'coba/meeting-12/binarysearch' },
            { text: 'Exercise', link: 'coba/meeting-12/exercise' },
          ]
        },
        {
          text: 'Meeting 13 - OOP Part 1',
          collapsed:true,
          items: [
            { text: 'Introduction', link: 'coba/meeting-13/introduction' },
            { text: 'Advantages of OOP', link: 'coba/meeting-13/oopadvantages' },
            { text: 'Example', link: 'coba/meeting-13/example' },
            { text: 'Class', link: 'coba/meeting-13/class' },
            { text: 'Object', link: 'coba/meeting-13/object' },
            { text: 'Final Exercise', link: 'coba/meeting-13/exercise' },
          ]
        },
        {
          text: 'Meeting 14 - OOP Part 2',
          collapsed:true,
          items: [
            { text: 'Introduction', link: 'coba/meeting-14/introduction' },
            { text: 'Encapsulation', link: 'coba/meeting-14/encapsulation' },
            { text: 'Inheritance', link: 'coba/meeting-14/inheritance' },
            { text: 'Abstraction', link: 'coba/meeting-14/abstraction' },
            { text: 'Polymorphism', link: 'coba/meeting-14/polymorphism' },
            { text: 'Final Exercise', link: 'coba/meeting-14/exercise' },
          ]
        },
        {
          text: 'Meeting 15 and 16 - Project',
          collapsed:true,
          items: [
            { text: 'Project Making', link: 'coba/meeting-15and16/projectmaking' },
            { text: 'Project Guide', link: 'coba/meeting-15and16/projectguide' },
            { text: 'Project Submission', link: 'coba/meeting-15and16/projectsubmission' },
          ]
        },
      ]
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
