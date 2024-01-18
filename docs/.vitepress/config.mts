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
          ]
        },
      ]
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
