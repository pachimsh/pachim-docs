---
title : "راه اندازی پروژه لاراول"
---

# راه اندازی پروژه لاراول

### جدول محتوا

## بررسی اجمالی 

## حالت تعمیر و نگه‌داری

If you have deployed a Laravel application, Forge allows you to make use of Laravel's maintenance mode feature. Clicking the Enable Maintenance Mode button within the site's App tab will run the php artisan down Artisan command within your application, which will make your site unavailable. When the site is in maintenance mode, you can then click the Disable Maintenance Mode button to make your site available again.

### کلید مخفی حالت تعمیر و نگه داری

Laravel 8.0+ applications can make use of the "secret" option to bypass maintenance mode. Using this option with older versions of Laravel is not supported.
