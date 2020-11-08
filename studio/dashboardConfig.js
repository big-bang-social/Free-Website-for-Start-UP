export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fa85e188d2a1a1803180de4',
                  title: 'Sanity Studio',
                  name: 'free-website-for-start-up-studio',
                  apiId: 'fe0bcfb2-62ea-4ec7-9089-48e18b93d248'
                },
                {
                  buildHookId: '5fa85e18e9ded3f6aa5748bc',
                  title: 'Landing pages Website',
                  name: 'free-website-for-start-up',
                  apiId: 'bc3096bd-d485-4cb8-974a-8cf9190f1cad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/big-bang-social/Free-Website-for-Start-UP',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://free-website-for-start-up.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
