const sidebars = {
  tutorialSidebar: [
    'intro',
    'faq',
    'troubleshoot',
    'genuine-installation-media',
    {
      type: 'category',
      label: 'Docs',
      collapsed: false,
      items: ['check_activation_status'],
    },
    {
      type: 'category',
      collapsed: false,
      label: 'KinovRise Activation',
      items: ['kms_server', 'supported_unsupported']
    },
    'guide_links',
    'news',
    'changelog',
    'contribute',
    'credits',
    'contactus',
  ],
};

export default sidebars;
