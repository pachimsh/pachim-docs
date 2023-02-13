---
title : "پشتیبان‌گیری دیتابیس‌ها"
---

# پشتیبان‌گیری دیتابیس‌ها


### جدول محتوا

## بررسی اجمالی

پشتیبان گیری از دیتابیس‌ها همیشه برای هر پروژه‌ای بسیار مهم بوده چون به هر دلیلی ممکن است اطلاعات فعلی دیتابیس شما حذف شود و داشتن یک پشتیبان از دیتابیس‌ها می‌تواند همیشه نجات دهنده شما باشد. ما در پَچیم ویژگی پشتیبان‌گیری اتوماتیک را به پروژه اضافه کرد‌ه‌ایم که با استفاده از آن می‌توانید با چند کلیک و بدون انجام کار اضافه‌ای از دیتابیس‌های خود به شکل اتوماتیک پشتیبانی تهیه کنید.

:::note{.tip}

توجه کنید که قابلیت پشتیبان‌گیری تنها برای پلن شرکتی در دسترس است و شما برای بهرمندی از این ویژگی باید اشتراک پلن شرکتی را در پَچیم تهیه کنید.

:::

## ایجاد پیکربندی پشتیبان‌گیری

برای آنکه پَچیم بتواند از دیتابیس‌های شما پشتیبانی تهیه کند نیاز است شما پیکربندی را برای پشتیبان‌گیری به پَچیم اضافه کنید، با ورود به بخش پشتیبان‌گیری از پنل سرور در پَچیم و با کلیک بر روی پیکربندی جدید می‌توانید چنین اقدامی را به راحتی انجام دهید.

هر پیکربندی پشتیبان‌گیری نیازمند یک سری اطلاعات است که سعی می‌کنیم در اینجا این اطلاعات را به شما توضیح دهیم تا بدون هیچ مشکلی بتوانید پشتیبان‌گیری از دیتابیس‌های خود را در پَچیم اضافه کنید.

### اطلاعات دیتابیس‌‌ها

در حال حاضر ما در پَچیم پشتیبان گیری از دیتابیس‌های Mysql/MariaDB و PostgresSQL را انجام می‌دهیم و شما برای ایجاد پشتیبان‌گیری نیاز است ابتدا نوع دیتابیس و دیتابیس‌های که قصد پشتیبان‌گیری از آن‌ها دارید را در قسمت اطلاعات دیتابیس مشخص کنید. 

توجه کنید بدون مشخص کردن اطلاعات دیتابیس عملا قادر به ایجاد کردن هیچگونه پیکربندی دیتابیس‌ها نخواهید بود.

### زمان پشتیبان گیری

در این قسمت شما مشخص می‌کنید در چه بازه زمانی از دیتابیس‌های مشخص شده شما، پشتیبانی تهیه شود. شما به سادگی با وارد کردن زمان‌بندی در قالب کرون (cron) می‌توانید حالت‌های مختلف زمان‌بندی را برای پشتیبان‌گیری خود تعیین کنید.

اگر با cron آشنایی ندارید می‌توانید با استفاده از وبسایت [**crontab.guru**](https://crontab.guru) به سادگی حالت‌های مختلف زمانی که مورد نظرتان است را پیدا کرده و مورد استفاده قرار دهید.

### مکان ذخیره‌سازی

ما در پَچیم فایل پشتیان‌های که از دیتابیس‌های شما تهیه می‌شود را نگه‌داری نمی‌کنیم و مکان ذخیره‌سازی ‌آن‌ها را بر عهده خود شما می‌گذاریم چون برای ما امنیت شما بسیار مهم است، در حال حاضر برای ذخیره‌سازی پشتیبانی‌ها ما از پروتکل S3 استفاده می‌کنیم که شما با یک جستجو ساده می‌توانید وبسایت‌های که این نوع پروتکل را برای فضای ذخیره‌سازی در اختیار شما قرار میدهند را پیدا کنید و از آن‌ها بهره ببرید.

### تعداد نگه‌داری پشتیبان

از آنجای که هر فضای ذخیره‌سازی محدودیت‌های را دارد و شما هم نیاز ندارید همه نسخه‌های پشتبان قبلی را نگه دارید، می‌توانید تعداد نگه‌داری نسخه‌های پشتیبان در زمانی که یک پشتیبان‌گیری را پیکربندی می‌کنید را مشخص کنید.

به این شکل شما می‌توانید به سادگی به پَچیم بگویید که تنها ۲۰ پشتیبانی آخر یا هر مقداری که مایل هستید را در فضای ذخیره‌سازی شما نگه‌داری کند.

## مدیریت پیکربندی پشتیبان‌گیری

جدا از آنکه شما می‌توانید پیکربندی را برای پشتیبان‌گیری اضافه کنید، شما می‌توانید پیکربندی‌های قبلی را حذف یا ویرایش کنید که در زیر در مورد آن‌ها صحبت خواهیم کرد.

### ویرایش  پیکربندی پشتیبان‌گیر

ممکن است هر زمانی شما نیاز به تغییر اطلاعات یک پیکربندی را احساس کنید، برای اینکار شما می‌توانید از بخش مدیریت پشتیبان‌گیری‌ها بر روی دکمه ویرایش پشتیبان‌گیر مورد نظر خود کلیک کنید و اطلاعاتی که نیاز دارید را تغییر دهید و بعد از آن با ثبت تغییرات، پشتیبان‌گیری‌های جدید با استفاده از تنظیمات جدید شما اتفاق خواهد افتاد.

### حذف پیکربندی پشتیبان‌گیر

شما هر زمان که مایل باشید می‌توانید یک پیکربندی پشتیبان‌گیری را از پَچیم حذف کنید و با حذف شدن یک پیکربندی تمام پشتیبانی‌های که به واسطه آن پشتیبان‌گیر تهیه شده بودند هم حذف خواهند شد. 

:::note{.warning}

::title[نکته مهم]

توجه کنید زمانی که شما یک پیکربندی را حذف می‌کنید تمام پشتیبانی‌های که در سیستم پَچیم برای آن پیکربندی وجود داشت نیز حذف خواهند شد، اما این به معنی حذف شدن اطلاعات از مکان ذخیره‌سازی معرفی شده نیست و آن اطلاعات کماکان بر روی سرویس ذخیره‌سازی شما باقی خواهند ماند.

:::

## مدیریت پشتیبانی‌ها

شما می‌توانید لیست پشتیبانی‌های که به واسطه پیکربندی‌های پشتیبان‌گیر در پَچیم تهیه می‌شود را در صفحه پشتیبان‌گیری دیتابیس‌ها مشاهده کنید و آن‌ها را دانلود، بازیابی و یا حذف کنید.

### بازیابی پشتیبانی

شما هر زمان که مایل باشید می‌توانید نسخه‌ای از پشتیبانی که توسط پَچیم تهیه شده را بر روی دیتابیس خود بازیابی کنید برای اینکار تنها کافیست وارد لیست پشتیبانی‌ها شوید و بر روی بازیابی کلید کنید و مابقی کار را ما برایتان انجام خواهیم داد. 

:::note{.tip}

::title[بازیابی دیتابیس از سیستم‌های خانگی]

اوقات زیادی سوال می‌شود که چطور می‌توانیم دیتابیس‌هایمان را از سرورهای دیگر یا حتی از سیستم خانگی خود بازیابی کنیم. برای این کار شما می‌توانید از نرم افزار TablePlus استفاده کنید و همانطور که در مستندات [`اتصال به دیتابیس از طریق خارج از سرور`](/servers/databases#اتصال-به-دیتابیس-از-طریق-خارج-از-سرور) توضیح دادیم از دیتابیس‌های مورد نظر پشتیبانی تهیه کنید یا دیتابیسی را بر روی سرور خود بازیابی کنید.

:::

### حذف پشتیبانی

اگر زمانی مایل به نگه‌داری پشتیبانی خاصی از دیتابیس خود نیستید به سادگی می‌توانید بر روی حذف پشتیبانی کلیک کنید با این کار پشتیبانی مورد نظر از روی پَچیم حذف خواهد شد.

:::note{.danger}
::title[حذف پشتیبانی از مکان ذخیره‌سازی]

زمانی که درخواست حذف یک پشتیبان را در پَچیم ثبت می‌کنید، پَچیم، پشتیبانی مورد نظر را هم از روی سایت و هم از روی فضای ذخیره‌سازی که معرفی کردید کاملا حذف خواهد کرد.
:::

### مشاهده خروجی پشتیبانی

اگر زمانی پشتیبان‌گیری به هر دلیلی درست انجام نشود، شما می‌توانید از طریق لیست پشتیبانی‌ها بر روی دکمه مشاهده خروجی پشتیبانی کلیک کنید و لاگ مورد نظر آن پشتیبانی را مشاهده بفرمایید.