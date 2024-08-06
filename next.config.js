module.exports = {
    env: {
        IS_PRODUCTION : process.env.NODE_ENV === "production",
        PACHIM_MAIN_SITE : process.env.PACHIM_MAIN_SITE,
        PACHIM_USER_APP_SITE : process.env.PACHIM_USER_APP_SITE,
        PACHIM_DOCS_SITE : process.env.PACHIM_DOCS_SITE,
    },
    redirects() {
        return [
            {
                source: '/',
                destination: '/getting-started/introduction',
                permanent: true,
            },
        ]
    },
}
