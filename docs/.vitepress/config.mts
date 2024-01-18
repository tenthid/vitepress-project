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
            { text: 'Case', link: 'coba/meeting-5/case' },
          ]
        },
      ]
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
