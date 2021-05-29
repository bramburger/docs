const { path } = require('@vuepress/utils')

module.exports = {
  // https://v1.vuepress.vuejs.org/config/#title
  title: "HUNT Cloud Documentation",
  // https://v1.vuepress.vuejs.org/config/#description
  description: "HUNT Cloud Documentation",
  // https://v1.vuepress.vuejs.org/config/#dest
  dest: "build",
  // https://v1.vuepress.vuejs.org/config/#base
  base: "/",
  // https://v1.vuepress.vuejs.org/config/#head
  head: [
    [
      "link",
      {
        rel: "shortcut icon",
        href: "https://www.ntnu.no/assets/images/favicon.ico"
      }
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#00509e"
      }
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      }
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black"
      }
    ]
  ],
  // https://v1.vuepress.vuejs.org/theme/default-theme-config.html
  themeConfig: {
    // https://v1.vuepress.vuejs.org/theme/default-theme-config.html#git-repo-and-edit-links
    repo: "https://github.com/huntdatacenter/docs",
    repoLabel: "Contribute!",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    lastUpdated: true,
    // test if possible to switch to light
    prefersTheme: 'light',
    // https://v1.vuepress.vuejs.org/theme/default-theme-config.html#navbar
    navbar: [{
        text: "Home",
        link: "/"
      },
      {
        text: "Getting started",
        link: "/getting-started/"
      }
    ],
    // https://v1.vuepress.vuejs.org/theme/default-theme-config.html#sidebar
    sidebar: {
      "/": [
        "/README.md",
        "/system-status.md",
        "/contribute.md",
        "/contact.md",
        {
          text: "About",
          isGroup: true,
          children: [
            "/about/ting-week.md",
            "/about/policies.md",
            "/about/certificates.md",
            "/about/journey.md"
          ]
        },
        {
          text: "Coordination",
          isGroup: true,
          children: [
            "/coordination/",
            {
              text: "Agreements",
              isGroup: true,
              children: [
                "/coordination/agreements/downloads.md",
                "/coordination/agreements/overview.md"
              ]
            },
            {
              text: "Services",
              isGroup: true,
              children: [
                "/coordination/services/machine-types.md",
                "/coordination/services/specifications.md"
              ]
            }
          ]
        },
        {
          text: "Getting started",
          isGroup: true,
          children: [
            "/getting-started/",
            "/getting-started/1-collect-keys.md",
            "/getting-started/2-configure-vpn.md",
            "/getting-started/3-configure-ssh.md"
          ]
        },
        {
          text: "Working in your lab",
          isGroup: true,
          children: [
            "/working-in-your-lab/",
            {
              text: "Technical tools",
              isGroup: true,
              children: [
                "/working-in-your-lab/technical-tools/",
                "/working-in-your-lab/technical-tools/git.md",
                "/working-in-your-lab/technical-tools/gpu.md",
                "/working-in-your-lab/technical-tools/htop.md",
                "/working-in-your-lab/technical-tools/mobaxterm.md",
                "/working-in-your-lab/technical-tools/singularity.md",
                "/working-in-your-lab/technical-tools/ssl.md",
                "/working-in-your-lab/technical-tools/terminal-multiplexers.md",
                "/working-in-your-lab/technical-tools/vnc.md",
                "/working-in-your-lab/technical-tools/x2go.md"
              ]
            },
            {
              text: "Analytical tools",
              isGroup: true,
              children: [
                "/working-in-your-lab/analytical-tools/",
                "/working-in-your-lab/analytical-tools/bluebox.md",
                "/working-in-your-lab/analytical-tools/conda.md",
                "/working-in-your-lab/analytical-tools/epacts.md",
                "/working-in-your-lab/analytical-tools/fsl.md",
                "/working-in-your-lab/analytical-tools/freesurfer.md",
                "/working-in-your-lab/analytical-tools/jupyter-lab.md",
                "/working-in-your-lab/analytical-tools/matlab.md",
                "/working-in-your-lab/analytical-tools/plink.md",
                "/working-in-your-lab/analytical-tools/pycharm.md",
                "/working-in-your-lab/analytical-tools/r-studio.md",
                "/working-in-your-lab/analytical-tools/regenie.md",
                "/working-in-your-lab/analytical-tools/saige.md",
                "/working-in-your-lab/analytical-tools/spyder-ide.md",
                "/working-in-your-lab/analytical-tools/stata.md"
              ]
            },
            {
              text: "Transfer tools",
              isGroup: true,
              children: [
                "/working-in-your-lab/transfer-tools/",
                "/working-in-your-lab/transfer-tools/7z.md",
                "/working-in-your-lab/transfer-tools/rsync.md",
                "/working-in-your-lab/transfer-tools/sshfs.md",
                "/working-in-your-lab/transfer-tools/winscp.md"
              ]
            }
          ]
        },
        {
          text: "Data transfers",
          isGroup: true,
          children: [
            "/data-transfers/",
            "/data-transfers/internal-kista.md",
            "/data-transfers/external-kista.md"
          ]
        },
        {
          text: "Troubleshooting",
          isGroup: true,
          children: [
            "/troubleshooting/",
            "/troubleshooting/connection.md",
            "/troubleshooting/compute.md",
            "/troubleshooting/labreports.md"
          ]
        },
        {
          text: "FAQ",
          isGroup: true,
          children: [
            "/faq/",
            "/faq/users.md",
            "/faq/storage.md",
            "/faq/compute.md",
            "/faq/internal-transfer.md",
            "/faq/external-transfer.md",
            "/faq/security.md",
            "/faq/upgrade-of-operating-system.md"
          ]
        }
      ]
    },
    sidebarDepth: 0
  },
  clientAppEnhanceFiles: path.resolve(__dirname, './enhanceApp.js'),
  // https://v1.vuepress.vuejs.org/plugin/
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/active-header-links",
    [
      "vuepress-plugin-sitemap", {
        hostname: "https://docs.hdc.ntnu.no"
      }
    ],
    [
      "vuepress-plugin-reading-time", {
        excludes: ['/about', '/system-status', '/contribute', '/contact', '/faq']
      }
    ],
    [
      "seo", {
        // siteTitle: (_, $site) => $site.title,
        title: $page => $page.frontmatter.category ? ($page.frontmatter.category + ': ' + $page.title) : $page.title,
        description: $page => $page.frontmatter.description,
        twitterCard: _ => 'summary',
        type: $page => [
          'getting-started', 'working-in-your-lab', 'data-transfer'
        ].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
        url: (_, $site, path) => ($site.themeConfig.domain || 'https://docs.hdc.ntnu.no') + path,
        customMeta: (add, context) => {
          const {
            $site, // Site configs provided by Vuepress
            $page, // Page configs provided by Vuepress

            // All the computed options from above:
            // siteTitle,
            title, description, type, url,
          } = context

          add('twitter:label1', ($page.readingTime && type === 'article') ? 'Reading time' : null)
          add('twitter:data1', ($page.readingTime && type === 'article') ? '🕑 ' + $page.readingTime.text : null)
          add('twitter:label2', type === 'article' ? 'Latest updates' : null)
          add('twitter:data2', type === 'article' ? 'https://docs.hdc.ntnu.no/news/' : null)
        },
      }
    ]
  ]
};
