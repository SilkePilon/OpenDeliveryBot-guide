let { useRouter } = require('next/router');
let { useConfig } = require('nextra-theme-docs');

const config = {
  logoLink: '/',
  logo: (
    <>
      <img src='./prismarine_js.svg'/>
      <span style={{ marginLeft: '.4em', fontWeight: 800, color: '#52a58e' }}>
        Prismarine
      </span>
      <sup style={{ fontWeight: 800, color: '#2c5a4c', top: '-0.4em' }}>
      JS
      </sup>
    </>// // this double slash stops IDE from freaking out
  ),
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
 
    return (
      <>
        <meta property="og:title" content={frontMatter.title || '🦃'} />
        <meta property="og:description" content={frontMatter.description || 'A beginner friendly guide for mineflayer written by users for users.'}
        />
      </>
    )
  },
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
