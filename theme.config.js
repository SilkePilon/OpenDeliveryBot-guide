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
  useNextSeoProps: function() {
    return {
      titleTemplate: '%s'
    }
  }
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
