export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e06c1a48eeaca40c4c14c4c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-qe5s67rm',
                  apiId: 'ad5596a2-dd8f-4761-bf88-e1692ed6d656'
                },
                {
                  buildHookId: '5e06c1a430331e25a07dbb2c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-riqcm2b4',
                  apiId: '5cffd6a8-44e0-47fc-b891-3d6a1d91d039'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/justinluke/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-riqcm2b4.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
