---
title : "توضیحات تکمیلی راه اندازی سایت"
---

# توضیحات تکمیلی راه اندازی سایت

### جدول محتوا

## بررسی اجمالی

در این صفحه بخشی از توضیحات و نکات تکمیلی که مورد راه اندازی کردن یک وبسایت نیاز است را برای شما توضیح داده‌ایم تا بتوانید به شکل کامل‌تری وبسایت خود را راه اندازی کنید. 

## پیکربندی nginx

پیکربندی nginx بر اساس نوع برنامه شما در سایت متفاوت خواهد بود و خود پچیم به شکل خودکار آن را در سیستم قرار می‌دهد اما گاهی اوقات نیاز داریم از پیکربندی شخصی سازی شده استفاده کنیم برای همین شما می‌توانید پیکربندی مورد نظر خود را در قسمت قالب nginx سرور ثبت کنید و در زمان ایجاد سایت، برنامه سفارشی را انتخاب کرده و قالب nginx مورد نظر خود را انتخاب کنید.

قالب nginx زیر، یک قالب پیش فرض nginx است که می‌توانید بر اساس نیاز خود آن را تغییر دهید و در قسمت قالب‌های nginx ثبت کنید.

```nginx
# PACHIM CONFIG (DO NOT REMOVE!)
include pachim-conf/{{ SITE }}/before/*;

server {
    listen {{ PORT }};
    listen {{ PORT_V6 }};
    server_name {{ DOMAINS }};
    server_tokens off;
    root {{ PATH }};

    # PACHIM SSL (DO NOT REMOVE!)
    # ssl_certificate;
    # ssl_certificate_key;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_dhparam /etc/nginx/dhparams.pem;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";

    index index.html index.htm index.php;

    charset utf-8;

    # PACHIM CONFIG (DO NOT REMOVE!)
    include pachim-conf/{{ SITE }}/server/*;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    access_log off;
    error_log  /var/log/nginx/{{ SITE }}-error.log error;

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass {{ PROXY_PASS }};
        fastcgi_index index.php;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}

# PACHIM CONFIG (DO NOT REMOVE!)
include pachim-conf/{{ SITE }}/after/*;
```
توجه کنید مواردی که `(DO NOT REMOVE!)` برای آن ثبت شده است را به هیچ وجه حذف نکنید.

## ورژن PHP

اگر بر روی سرور خود چندین ورژن از PHP را راه اندازی کرده‌اید می‌توانید هر زمانی که نیاز داشتید وارد بخش تنظیمات سایت خود شوید و ورژن مورد نظر PHP را بر اساس نیاز خود تغییر دهید.

اگر ورژن php سایت را تغییر دادید دقت کنید که اگر در کد استقرار سایت از ورژن خاصی از PHP استفاده کردید، نیاز است آن را بر اساس نیاز خود نیز تغییر دهید.
