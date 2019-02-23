// doczrc.js
export default {
  public: '/public',
  htmlContext: {
    favicon: 'public/favicon.png',
  },
  themeConfig: {
    logo: {
      src: 'https://i.ibb.co/KL5bxHs/design-ui-logo.png',
      width: '200px',
    },
    colors: {
      sidebarBg: '#2a52fb',
      sidebarText: '#fff',
      footerText: '#666',
      link: '#ccc',
      primary: '#ff00fb',
    },
    styles: {
      body: {
        fontFamily:
          '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      },
      container: {
        width: ['100%', '100%', 920],
        padding: ['20px', '0 40px 40px'],
      },
    },
  },
};
