const navigation = [
    { name: 'آموزش ویدیویی', href: 'https://roocket.ir/series/server-managment-with-pachim' },
    {
        name: 'شروع مستندات',
        open : true,
        children: [
            { name: 'معرفی پچیم', href: '/getting-started/introduction' },
        ],
    },
    {
        name: 'حساب کاربری',
        children: [
            { name: 'حساب کاربری شما', href: '/accounts/your-account' },
            { name: 'حلقه همکاران', href: '/accounts/circles' },
            { name: 'ارائه دهنده‌های سرور', href: '/accounts/server-providers' },
            { name: 'مدیریت مخزن‌ها', href: '/accounts/source-control' },
            { name: 'کلید‌های SSH', href: '/accounts/ssh' },
            { name: 'مخزن‌های پشتیبان‌گیری', href: '/accounts/backup-configurations' },
            { name: 'دستورالعمل‌های کمکی', href: '/accounts/help-instructions' },
        ],
    },
    {
        name: 'سرورها',
        children: [
            { name: 'تهیه سرور', href: '/servers/providers' },
            { name: 'انواع سرورها', href: '/servers/types' },
            { name: 'مدیریت', href: '/servers/managment' },
            { name: 'وضعیت سرویس‌ها', href: '/servers/server-services-status' },
            { name: 'ارسال و دریافت ایمیل', href: '/servers/send-and-receive-mail' },
            { name : 'دستورالعمل‌ها' , href: '/servers/recipes'  } ,
            { name: 'دسترسی ROOT / امنیت', href: '/servers/root-access-and-security' },
            { name: 'کلید‌های SSH / دسترسی Git', href: '/servers/ssh' },
            { name: 'دیتابیس‌ها', href: '/servers/databases' },
            { name: 'پشتیبانی گیری', href: '/servers/backups' },
            { name: 'PHP', href: '/servers/php' },
            { name: 'پکیج‌های PHP', href: '/servers/php-packages' },
            { name: 'توزیع بار', href: '/servers/load-balancing' },
            { name: 'قالب Nginx', href: '/servers/nginx-templates' },
            { name: 'ماینتور سرور', href: '/servers/monitoring' },
            { name: 'سرپرست', href: '/servers/supervisor' },
            { name: 'کش‌ها', href: '/servers/caches' },
            { name: 'شبکه', href: '/servers/network' },
            { name: 'زمانبدی (Scheduler)', href: '/servers/scheduler' },
            { name: 'دستورالعمل‌های کمکی', href: '/servers/help-instructions' },
        ],
    },
    {
        name: 'سایت‌ها',
        children: [
            {
                name: 'راه اندازی سایت',
                children: [
                    { name : 'انواع برنامه‌ها' , href : '/sites/setup-site/project-types'},
                    { name: 'ایجاد سایت' , href : '/sites/setup-site/create-site'},
                    { name : 'اتصال دامنه به سایت' , href : '/sites/setup-site/connect-domain-to-site'},
                    { name : 'راه‌اندازی پروژه' , href : '/sites/setup-site/setup-application'},
                    { name : 'توضیحات تکمیلی' , href : '/sites/setup-site/tips'},
                ]
            },
            {
                name: 'برنامه‌های اصلی'
                , children: [
                    { name: 'PHP', href: '/sites/app-deploy/php' },
                    {
                        name: 'لاراول ',
                        children: [
                            { name : 'راه‌‌اندازی' , href : '/sites/app-deploy/laravel/setup'},
                            { name: 'صف‌ها' , href : '/sites/app-deploy/laravel/queues'}
                        ]
                    },
                    { name: 'Node.js', href: '/sites/app-deploy/nodejs' },
                    { name: 'Next.js', href: '/sites/app-deploy/nextjs' },
                    { name: 'Nuxt.js', href: '/sites/app-deploy/nuxtjs' },
                    { name: 'Django', href: '/sites/app-deploy/django' },
                    { name: 'Static', href: '/sites/app-deploy/static' },
                    { name: 'Vue', href: '/sites/app-deploy/vue' },
                    { name: 'React', href: '/sites/app-deploy/react' },
                ],
            },
            {
                name: 'برنامه‌های آماده'
                , children: [
                    { name: 'وردپرس', href: '/sites/pre-ready-app/wordpress' },
                    { name: 'phpMyAdmin', href: '#' },
                ],
            },
            { name: 'استقرارها', href: '/sites/deployments' },
            { name: 'اجرای کامند', href: '/sites/commands' },
            { name: 'پکیج‌های PHP', href: '/sites/php-packages' },
            { name: 'قوانین امنیتی', href: '/sites/security-rules' },
            { name: 'تغییر مسیرها', href: '/sites/redirects' },
            { name: 'گواهی SSL', href: '/sites/ssl' },
            { name: 'ایزوله سازی سایت', href: '/sites/user-isolation' },
            { name: 'لاگ سایت', href: '/sites/logs' },
            { name: 'دستورالعمل‌های کمکی', href: '/sites/help-instructions' },
        ],
    },
]

export default navigation;
