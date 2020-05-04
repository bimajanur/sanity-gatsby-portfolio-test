export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eafd1e750cfcdcf43345b3e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-test-studio-3jby69ye',
                  apiId: 'f141b4a8-9968-4f38-9a8a-1f5ac8666875'
                },
                {
                  buildHookId: '5eafd1e7e0d6146c1f3ed471',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-test-web-c2n8m24e',
                  apiId: 'f401dcf4-0bee-4304-8ee2-ac957962e52d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bimajanur/sanity-gatsby-portfolio-test',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-test-web-c2n8m24e.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
