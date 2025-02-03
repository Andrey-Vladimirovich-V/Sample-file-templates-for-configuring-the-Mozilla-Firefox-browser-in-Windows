// 
// UTF-8 Unix (LF)
// 
// 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
// 
// ПРЕДУПРЕЖДЕНИЕ!
// 
// 1. Предполагается использование ESR версии браузера.
// 2. Перед использованием данного файла необходимо проверить все настройки, т.к. я это 
// делал для себя и часть настроек вам может быть не нужна или даже вредна. К тому же, 
// с моей стороны могут быть допущены ошибки, хотя я сам пользуюсь этими файлами и 
// пока проблем не было.
// 3. Настоятельно рекомендую предварительно поэкспериментировать на виртуальной машине.
// 4. Настоятельно рекомендую использовать резервное копирование для приведения ситуации в 
// исходное состояние на случай повреждения или удаления данных.
// 5. Для подстраховки можно предварительно снять копию настроек браузера: about:config - 
// "Показать все" - выделяем содержимое всей страницы (Ctrl + a), копируем (Ctrl + с), 
// вставляем в текстовый файл и сохраняем. В дальнейшем, если будет необходимость, 
// можно сравнить текущие настройки с исходными, например, при помощи программы WinMerge.
// 6. Изначально предполагается, что данный файл будет использоваться в Windows. Но, полагаю,
// что без серьёзных изменений его можно будет использовать в Lin и в MacOS.
// 7. Обращайте внимание на то, что означает параметр, а не только на то, как поставлена фраза его 
// описывающая. Например, два параметра: 
// Открывать Firefox автоматически при загрузке компьютера.
//   (Open Firefox automatically when your computer starts up.).
//   user_pref("browser.startup.windowsLaunchOnLogin.disableLaunchOnLoginPrompt", true);
// Всегда проверять, является ли Firefox вашим браузером по умолчанию.
//   (Always check if Firefox is your default browser).
//   user_pref("browser.shell.checkDefaultBrowser", true);
// В первом случае, ответ "Нет", а во втором "Да". Хотя в обоих случаях установлено значение "true".
// 
// 
// 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
// 
// 
// Справка.
// 
// Расположение данного файла.
// Для Windows:
// "%UserProfile%\AppData\Roaming\Mozilla\Firefox\Profiles\????????.default" или 
// "%UserProfile%\AppData\Roaming\Mozilla\Firefox\Profiles\????????.default-esr" (для ESR версии браузера).
// 
// 
// 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
// 
// 
// О кодировке файла и последовательности конца строки.
// 
// В этом файле можно использовать кодировку UTF-8, что я и делаю. Для подстраховки использую
// последовательность конца строки "Unix (LF)". Не знаю, нужно ли это в этом файле, но в Win
// это работает корректно. Про последовательность конца строки для файла "autoconfig.js" в офиц. 
// справке "Customizing Firefox Using AutoConfig" ( 
// https://support.mozilla.org/en-US/kb/customizing-firefox-using-autoconfig ) написано
// "The autoconfig.js file must use Unix end-of-line (LF), even on Windows systems with 
// Firefox 60 or higher.". Перевод: "Файл autoconfig.js должен использовать конец строки Unix (LF) 
// даже в системах Windows с Firefox 60 или более поздней версии.". Есть ещё статья 
// "Модификация Firefox с помощью AutoConfig" ( 
// https://support.mozilla.org/ru/kb/modifikaciya-firefox-s-pomoshyu-autoconfig ), но там почему-то
// об этом ничего не сказано.
// 
// На странице "Editing configuration/Manual editing" ( 
// https://kb.mozillazine.org/Editing_configuration/Manual_editing ) в разделе "File type" написано 
// "In this case, ensure that your editor saves configuration files as plain text (and preferably 
// with Unix line endings).". Перевод: "В этом случае убедитесь, что ваш редактор сохраняет файлы 
// конфигурации в виде обычного текста (и желательно с окончаниями строк Unix).". 
// В разделе "Character encoding" написано "Configuration files use the UTF-8 character encoding 
// (also known as character set or charset), but you do not always need to use a text editor that 
// supports UTF-8.". Перевод: "В файлах конфигурации используется кодировка символов UTF-8 (также 
// известная как набор символов или кодировка), но не всегда требуется использовать текстовый редактор, 
// поддерживающий UTF-8.".
// Правда, в статье говорится только о файлах .css and .js.
// 
// В Win при использовании в конфигурационных файлах FireFox UTF-8-BOM Unix (LF) я получил ряд
// плавающих проблем (в том числе сносящих все или часть настроек браузера) и так и не смог установить 
// закономерность. Поэтому, решил вовсе отказаться от использования BOM в Юникодовой кодировке файлов.
// BOM ("Byte Order Mark"): "Для указания, что файл или поток содержит символы Юникода, в начале файла 
// или потока может быть вставлен маркер последовательности байтов (англ. Byte order mark, 
// BOM), который в случае кодирования в UTF-8 принимает форму трёх байтов: EF BB BF." ( 
// https://ru.wikipedia.org/wiki/UTF-8 ).
// Данная ситуация с BOM очень плохая, ведь BOM позволяет программе-редактору гарантированно 
// открывать файл в правильной кодировке.
// 
// 
// 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
// 
// 
// Различные источники информации по файлам автоматизации и командам.
// 
// Модификация Firefox с помощью AutoConfig
// https://support.mozilla.org/ru/kb/modifikaciya-firefox-s-pomoshyu-autoconfig
// Customizing Firefox Using AutoConfig
// https://support.mozilla.org/en-US/kb/customizing-firefox-using-autoconfig
// 
// https://kb.mozillazine.org/User.js_file
// 
// Информацию о параметрах можно получить через адрес 
// https://kb.mozillazine.org/название_параметра. Например, 
// https://kb.mozillazine.org/Accessibility.typeaheadfind.flashBar .
// 
// Список параметров имеется на странице "About:config entries" ( https://kb.mozillazine.org/About:config_entries ).
// 
// 
// 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
// 
// 
// Перечень доступных функций в файле user.js.
// 
// Вот тут засада. Если я правильно смог определить, то в файле user.js работает только функция user_pref.
// Но, она при каждом запуске браузера будет выставлять указанное значение, а это не всегда хорошо.
// Придётся ряд значений и вовсе не выставлять при помощи этого файла (т.е. комментировать эти строки). 
// 
// Точно не знаю, но полагаю, что user_pref и pref по смыслу одинаковы. Ниже описания для pref.
// 
// Англоязычные описания вяты со страницы
// https://support.mozilla.org/en-US/kb/customizing-firefox-using-autoconfig
// Русскоязычные описания взяты со страницы
// https://support.mozilla.org/ru/kb/modifikaciya-firefox-s-pomoshyu-autoconfig
// 
// pref(prefName, value) – sets the user value of a preference. This function explicitly sets the 
// preference as a user preference. That means that if the user has changed the value, it will get 
// reset every time the browser is started.
// pref(prefName, value) – устанавливает параметру пользовательское значение. Эта фукнция явно 
// устанавливает параметр как пользовательский параметр. Это означает, что если пользователь изменил 
// значение, оно будет сбрасываться при каждом запуске браузера. 
// 
// defaultPref(prefName, value) – sets the default value of a preference. This is the value that a 
// preference has when the user has not set any value or the user resets the preference. It can be 
// permanently changed by the user.
// defaultPref(prefName, value) – устанавливает параметру значение по умолчанию. Это то значение, 
// которое параметр имеет, когда пользователь не устанавливает никакое значение. 
// 
// 000000000000000000000000000000
// 
// Шаблоны.
// 
// user_pref("", "" true false);
// Да (вкл.) - true false, нет (откл.) - true false.
// Не включённое в настройки через GUI.
// Ещё значения, имеющие отношения к , но не отображённые в настройках через GUI.
// 
// 
// 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
// 
// 
// При написании названий функций и их значений (за некоторым исключением) учитываетя регистр. Привет 
// от Unix/Linux.
// 
// Путь в файловой системе указывается с двойными слэшами и в двойных кавычках ("%UserProfile%\\Downloads").
// В Интернет адресах исользуются одинарные слэши (кроме исключений).
// 
// GUI (graphical user interface), ГИП (Графический интерфейс пользователя), 
// ГПИ (графический пользовательский интерфейс).
// 
// pbmode - Private Browsing mode.
// 
// При смене булевого параметра через GUI, в ряде случаев, он просто исчезает из списка 
// расширенной настройки, т.е. удаляется. Но, в файле настройки я всегда выставляю конкретное 
// значение (т.е. "true" или "false").
// 
// При ручной смене некоторых параметров через список расширенной настройки 
// параметры вступают в силу только после перезапуска браузера.
// 
// Если справа от общего названия параметра написано "ПЕРЕКЛЮЧАТЕЛЬ" или "РАСКРЫВАЮЩИЙСЯ СПИСОК", 
// значит в данной настройке предполагается использовать только один из указанных вариантов, 
// а остальные закомментировать, т.к. браузер читает данный файл сверху вниз (если не используется 
// дополнительный код с переходами, а у меня его нет) и значения указанные выше будут перезаписаны 
// значениями указанными ниже. Раскрывающийся список я не всегда помечаю, т.к. если там только цифры,
// то нет смысла записывать несколько вариантов.
// 
// 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
// 
// 
// Cookie.
// https://kb.mozillazine.org/Network.cookie.cookieBehavior - не полная информация.
// Настраивается только через защиту от отслеживания или прямо параметром "network.cookie.cookieBehavior".
// 0 - принимать все файлы Cookie по умолчанию.
// 1 - принимать файлы Cookie только от определенного сайта (блокировать сторонние файлы Cookie).
// 2 - блокировать все файлы Cookie по умолчанию.
// 3 - блокировать файлы Cookie от ранее не знакомых сайтов.
// 4 - новая политика хранения файлов Cookie (предотвращение доступа к хранилищу для трекеров).
// 5 - блокировать межсайтовые отслеживающие куки, а также изолировать другие межсайтовые куки.
//     (Cross-site tracking cookies, and isolate other cross-site cookies).
// 
// 
// 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000


//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

// Настройки браузера - about:preferences .

// Названия настроек взяты из браузера Mozilla Firefox 115.9.1 (частично с 128.5.2) ESR x64 Ru 
// установленного в Windows 10 x64 Pro 22H2 Ru. Указанные версии условны, т.к. изменения в файл 
// вносились на протяжении многих месяцев и продолжают иногда вноситься.
// Английские названия настроек взяты из этого же браузера с установленным языком English (US).
// Английские названия нужны исключительно для упрощения нахождения названия параметров для смены настроек.

// Основные (General). Адрес - about:preferences#general .
// 
  // Основные (General).

    // Запуск (Startup).
    // 
    // Открыть предыдущие окна и вкладки (Open previous windows and tabs).
    // https://kb.mozillazine.org/Browser.startup.page
    // browser.startup.page (int) - What is displayed when Browser starts: 0 = blank page; 1 = homepage; 
    // 2 = last visited page; 3 = previous session. Default is 1.
    user_pref("browser.startup.page", 3);
    // 
    // Открывать Firefox автоматически при загрузке компьютера.
    // (Open Firefox automatically when your computer starts up.).
    user_pref("browser.startup.windowsLaunchOnLogin.disableLaunchOnLoginPrompt", true);
    // 
    // Всегда проверять, является ли Firefox вашим браузером по умолчанию.
    // (Always check if Firefox is your default browser).
    //user_pref("browser.shell.checkDefaultBrowser", true);

    // Вкладки (Tabs).
    // 
    // Ctrl+Tab переключает между вкладками в порядке недавнего использования.
    // (Ctrl+Tab cycles through tabs in recently used order).
    user_pref("browser.ctrlTab.sortByRecentlyUsed", false);
    // 
    // Открывать ссылки во вкладках вместо новых окон (Open links in tabs instead of new windows).
    // https://kb.mozillazine.org/Browser.link.open_newwindow
    // 1 - Open links, that would normally open in a new window, in the current tab/window.
    //     Открыть ссылки, которые обычно открываются в новом окне, в текущей вкладке/окне.
    // 2 - Open links, that would normally open in a new window, in a new window (Default in Firefox 1.5 and older). 
    //     Открыть ссылки, которые обычно открываются в новом окне, в новом окне (по умолчанию в Firefox 1.5 и более ранних версиях).
    // 3 - Open links, that would normally open in a new window, in a new tab in the current window (Default in Firefox 2.0 and newer). 
    //     Открыть ссылки, которые обычно открываются в новом окне, в новой вкладке в текущем окне (по умолчанию в Firefox 2.0 и более поздних версиях).
    user_pref("browser.link.open_newwindow", 3);
    // 
    // Предупреждать, когда открытие нескольких вкладок может замедлить Firefox.
    // (Warn you when opening multiple tabs might slow down Firefox).
    // Этого параметра может не быть.
    user_pref("browser.tabs.warnOnOpen", true);
    // 
    // Переключаться на открываемую ссылку, изображение или медиа.
    // (When you open a link, image or media in a new tab, switch to it immediately).
    // Да - false, Нет - true.
    //user_pref("browser.tabs.loadInBackground", true);
    // 
    // Подтвердить перед закрытием нескольких вкладок.
    // (Confirm before closing multiple tabs).
    user_pref("browser.tabs.warnOnClose", true);
    // 
    // Отображать эскизы вкладок на панели задач Windows.
    // (Show tab previews in the Windows taskbar).
    user_pref("browser.taskbar.previews.enable", false);
      // Ещё я отключаю список задач (переходов) в меню кнопки браузера на панели задач Windows. 
      // В настройках через GUI этого параметра нет.
      user_pref("browser.taskbar.lists.tasks.enabled", false);

  //______________________________________________________________________________________

  // Язык и внешний вид (Language and Appearance).

    // Внешний вид сайтов (Website appearance). ПЕРЕКЛЮЧАТЕЛЬ.
    // 
    // Некоторые сайты изменяют свою цветовую схему в зависимости от ваших предпочтений. 
    // Выберите цветовую схему, которую вы хотите использовать для этих сайтов.
    // (Some websites adapt their color scheme based on your preferences. 
    // Choose which color scheme you’d like to use for those sites.).
    // 
    // 1-е положение ПЕРЕКЛЮЧАТЕЛЯ.
    // 
    //user_pref("layout.css.prefers-color-scheme.content-override", 2); // Автоматически (Automatic).
    // 
    // 2-е положение ПЕРЕКЛЮЧАТЕЛЯ.
    // 
    //user_pref("layout.css.prefers-color-scheme.content-override", 1); // Светлая (Light).
    // 
    // 3-е положение ПЕРЕКЛЮЧАТЕЛЯ.
    // 
    //user_pref("layout.css.prefers-color-scheme.content-override", 0); // Тёмная (Dark).

    // Цвета (Colors).
    // 
    // Переопределяйте цвета Firefox по умолчанию для текста, фона сайтов и ссылок.
    // (Override Firefox’s default colors for text, website backgrounds, and links.).
    // Кнопка "Управление цветами..." (Manage Colors...).
    // Окно "Цвета" (Colors).
      // 
      // Текст и фон (Text and Background).
      // 
      // Текст (Text).
      //user_pref("", "" true false);
      // 
      // Фон (Background).
      //user_pref("", "" true false);
    //
      // Цвет ссылок (Link Colors).
      // 
      // Непосещённые ссылки (Unvisited Links).
      //user_pref("", "" true false);
      // 
      // Посещённые ссылки (Unvisited Links).
      //user_pref("", "" true false);
    // 
    // Использовать системные цвета (Use system colors).
    //user_pref("", "" true false);
    // 
    // Заменять цвета, указанные страницей, на выбранные выше цвета.
    // (Override the colors specified by the page with your selections above).
    // Всегда (Always).
    //user_pref("", "" true false);
    // Только с высококонтрастными темами (Only with High Contrast themes).
    //user_pref("", "" true false);
    // Никогда (Never).
    //user_pref("", "" true false);

    // Шрифты (Fonts).
    // 
    // Шрифт по умолчанию (Default font).
    //user_pref("", true false); Пока не понял закономерностей.
    // Если выбрать Arial, то параметр font.name.serif.x-western станет равным Arial. При шрифте по 
    // умолчанию этого параметра не будет или он будет пустым. 
    // 
    // Размер (Size).
    // С размером тут тоже не всё понятно.
    //user_pref("font.size.variable.x-cyrillic", 18);
    // 
    // Кнопка "Дополнительно..." ("Advanced...").
    // Окно "Шрифты" (Fonts).
      // 
      // Шрифты для (Fonts for).
      //user_pref("", "" true false);
      // 
      // Пропорциональный (Proportional). РАСКРЫВАЮЩИЙСЯ СПИСОК.
      // 
      // 1-е значение РАСКРЫВАЮЩЕГОСЯ СПИСКА.
      // 
      // С засечками (Serif).
      //user_pref pref lockPref("", "" true false);
      // 
      // 2-е значение РАСКРЫВАЮЩЕГОСЯ СПИСКА.
      // 
      // Без засечек (Sans Serif).
      //user_pref("", "" true false);
      // 
      // Размер (Size).
      //user_pref("", "" true false);
      // 
      // С засечками (Serif).
      //user_pref("", "" true false);
      // 
      // Без засечек (Sans-serif).
      //user_pref("", "" true false);
      // 
      // Моноширинный (Monospace).
      //user_pref("", "" true false);
      // 
      // Размер (Size).
      //user_pref("", "" true false);
      // 
      // Минимальный размер шрифта: (Minimum font size:).
      // Нет (None).
      //user_pref("", "" true false);
      // Выставленное число.
      //user_pref("", "" true false);
      // 
    // Разрешить веб-сайтам использовать свои шрифты вместо установленных выше.
    // (Allow pages to choose their own fonts, instead of your selections above).
    //user_pref("", "" true false);

    // Масштаб (Zoom).
    // 
    // Масштаб по умолчанию (Default zoom). Пока не меняю. Странно, я не нашёл параметра для смены значения.
    //user_pref("", true false);
    // 
    // Только текст (Zoom text only).  Да (вкл.) - false, нет (откл.) - true.
    //user_pref("browser.zoom.full", true);
    // 
    // Ещё значения, имеющие отношения к масштабу, но не отображённые в настройках через GUI.
    // Минимальный масштаб.
    //user_pref("zoom.minPercent", 30);
    // 
    // Максимальный масштаб.
    //user_pref("zoom.maxPercent", 500);

    // Язык (Language).
    // 
    // Выберите язык отображения меню, сообщений и уведомлений от Firefox.
    // (Choose the languages used to display menus, messages, and notifications from Firefox.).
    // "Русский".
    // Эти два параметра связаны. При изменении одного, меняется и другой.
    //user_pref("font.language.group", "x-cyrillic");
    //user_pref("intl.locale.requested", "ru,en-US");
    // "English (US)".
    // Эти два параметра связаны. При изменении одного, меняется и другой.
    // user_pref("font.language.group", "x-western");
    // user_pref("intl.locale.requested", "en-US,ru");
    // 
    // Выберите язык, предпочитаемый вами для отображения страниц.
    // (Choose your preferred language for displaying pages).
    // Настройка под кнопкой "Выбрать..." ("Choose...").
    // Окно "Настройка языка страниц" ("Webpage Language Settings").
    // Некоторые страницы могут быть доступны более чем на одном языке. Укажите порядок выбора языка страницы.
    // (Web pages are sometimes offered in more than one language. Choose languages for displaying 
    // these web pages, in order of preference.).
    // Русский [ru-ru] (Russian [ru-ru]) - ru-RU или ru-ru . ???
    // Русский [ru] (Russian [ru]) - ru .
    // Английский США [en-us] (English (United States [en-us])) - en-US или en-us . ???
    // Английский [en] (English [en]) - en .
    // Тут какая-то странность с регистром в параметрах. При смене выбора порядка языка страницы
    // параметры могут записываться с изменением регистра. Например: 
    // Язык отображения меню, сообщений и уведомлений - Русский; Порядок выбора языка страниц - 
    // Английский США [en-us], Русский [ru], Русский [ru-ru], Английский [en].
    // intl.accept_languages	en-us,ru,ru-ru,en .
    // Язык отображения меню, сообщений и уведомлений - Русский; Порядок выбора языка страниц - 
    // Русский [ru-ru], Русский [ru], Английский США [en-us], Английский [en].
    // intl.accept_languages	ru-RU, ru, en-US, en .
    // И тут возникает вопрос, браузер в этих значениях учитывает регистр или нет?
    // Если используем Русский язык как основной.
    //user_pref("intl.accept_languages", "ru-RU, ru");
    user_pref("intl.accept_languages", "ru-RU, ru, en-US, en");
    // Если используем Английский язык как основной.
    // user_pref("intl.accept_languages", "en-US,en");
    // user_pref("intl.accept_languages", "en-US,en,ru-RU,ru");
    // 
    // Использовать настройки «Русский (Россия)» вашей операционной системы для форматирования даты, времени, чисел и единиц измерения.
    // (Use your operating system settings for “Русский (Россия)” to format dates, times, numbers, and measurements.).
    user_pref("intl.regional_prefs.use_os_locales", true);
    // 
    // Проверять орфографию при наборе текста (Check your spelling as you type).
    user_pref("layout.spellcheckDefault", 1); // Да (вкл.) - 1, нет (откл.) - 0.

    // Переводы (Translations).
    // . (Enable fullpage translations).
    // user_pref("", );
    // . (Prompt to translate pages that aren’t in the browser’s configured language).
    // user_pref("", );
    // Задайте настройки языка и перевода сайта и управляйте языками, установленными для автономного перевода.
    // (Set your language and site translation preferences and manage languages installed for offline translation.).

  //______________________________________________________________________________________

  // Файлы и приложения (Files and Applications).

    // Загрузки (Downloads).
    // В путях должно быть два слэша!!!
    // Настраиваю так, чтобы torrent-файлы сохранялись в "%UserProfile%\Downloads", 
    // при этом это не мешало мне сохранять файлы в папку "D:\Downloads".
    // 
    // Путь для сохранения файлов (Save files to).
    user_pref("browser.download.dir", "%UserProfile%\\Downloads");
    // 
    // Последняя папка куда сохранялись файлы. Интересно, если её заблокировать, она будет меняться
    // во время сеанса браузера? Ведь одно дело, можем ли мы её менять и совсем другое, 
    // будет ли её менять браузер.
    user_pref("browser.download.lastDir", "D:\\Downloads");
    // 
    // Всегда выдавать запрос на сохранение файлов (Always ask you where to save files).
    // Да - false, нет - true.
    user_pref("browser.download.useDownloadDir", false);
    // 
    // В общем, так вроде всё нормально, хотя браузер может показывать несколько иное.
    // 
    // 
    // Ещё значения, имеющие отношения к "browser.download.", но не отображённые в настройках через GUI
    // в окне "about:preferences#home".
    // 
    // https://support.mozilla.org/gl/questions/1255179
    // browser.download.panel.shown	true - этот параметр не нужен.
    // 
    // Инструмент "Загрузки" ("Downloads") на панели инструментов. При наведении на него курсора мыши пишет 
    // "Показать ход текущих загрузок (Ctrl + J)" ("Display the progress of ongoing downloads (Ctrl + J)"). 
    // Если значение "false", то инструмент всегда будет виден, иначе, если очищен список загрузок или 
    // их не было в последней сессии браузера, то, он будет скрыт до начала скачивания файла.
    // Этот параметр можно менять через настройку панели инструментов.
    //user_pref("browser.download.autohideButton", false);
    // 
    // The format to save web pages in: 0: Web Page (Complete), 1: Web Page (HTML Only), 2: Text.
    // Формат сохранения веб-страниц: 0: Веб-страница (полная), 1: Веб-страница (только HTML), 2: Текст.
    user_pref("browser.download.save_converter_index", 0);

    // Приложения (Applications).
    // 
    // Выберите, как Firefox будет обрабатывать файлы, загружаемые из Интернета, или приложения, используемые при работе в Интернете.
    // Choose how Firefox handles the files you download from the web or the applications you use while browsing.
    // * 
    // * 
    // Что Firefox должен делать с другими файлами? (What should Firefox do with other files?). ПЕРЕКЛЮЧАТЕЛЬ.
    // 
    // 1-е положение ПЕРЕКЛЮЧАТЕЛЯ.
    // 
    // Сохранять файлы (Save files).
    // user_pref("browser.download.always_ask_before_handling_new_types", false);
    // 
    // 2-е положение ПЕРЕКЛЮЧАТЕЛЯ.
    // 
    // Спрашивать, открывать или сохранять файлы (Ask whether to open or save files).
    user_pref("browser.download.always_ask_before_handling_new_types", true);

    // Содержимое, использующее средства защиты авторских прав (DRM)
    // (Digital Rights Management (DRM) Content).
    // 
    // Воспроизводить защищённое DRM содержимое (Play DRM-controlled content).
    // Если включено через GUI, параметра media.eme.enabled может не быть или он равен true, но, имеются 
    // "media.gmp-widevinecdm.abi"="x86_64-msvc-x64" и "media.gmp-widevinecdm.version"="Номер_версии" и 
    // ещё парочка схожих параметоров со "случайными" значениями. Вроде, можно просто оперировать 
    // параметром media.eme.enabled, а остальное появится автоматически.
    //user_pref("media.eme.enabled", true);
    // 
    // Ещё значения, имеющие отношения к DRM, но не отображённые в настройках через GUI.
    // 
    //user_pref("media.gmp-widevinecdm.enabled", false);
    // 
    // https://support.mozilla.org/en-US/kb/enable-drm#w_opt-out-of-cdm-playback-uninstall-cdms-and-stop-all-cdm-downloads
    // 

  //______________________________________________________________________________________

  // Обновления Firefox (Firefox Updates).
  // 
  // Тут теперь всё сложно. В Win параметры "app.update.auto" ( "Автоматически устанавливать 
  // обновления (желательно)" ("Automatically install updates (recommended)") или "Проверять наличие 
  // обновлений, но позволять вам решать, устанавливать ли их" ("Check for updates but let you choose 
  // to install them") )
  // и 
  // "app.update.background.enabled" ("Когда Firefox не запущен" ("When Firefox is not running")) 
  // меняются только через файл "%ProgramData%\Mozilla-????????-????-????-????-????????????\updates\
  // ????????????????\update-config.json". Он в свою очередь меняется через GUI, но можно менять и прямо
  // содержимое этого файла (или просто заменять сам файл). Проблема в том, что через GUI любой 
  // пользователь любой учётной записи Win может менять эти настройки и нет возможности это запретить
  // средствами браузера. Поэтому, придётся настраивать безопасность файла и папки в которой он расположен
  // таким образом, чтобы нельзя было менять настройки.
  // 
  // В общем, пока пришёл к следующему варианту.
  // 
  // Моя задача установить в принудительном порядке следующие настройки обновления:
  // "Автоматически устанавливать обновления (желательно)" ("Automatically install updates (recommended)") - да.
  // "Когда Firefox не запущен" ("When Firefox is not running") - нет.
  // "Использовать фоновую службу для установки обновлений" ("Use a background service to install updates") - да.
  // 
  // Последний параметр без проблем устанавливается через файл "firefox.cfg" (поправка, в FF 128.4.0 ESR x64 
  // этот параметр включён, заблокирован и убран из настроек через визуальный интерфейс), поэтому в файле 
  // "update-config.json" я оперирую только первыми двумя (правда, я не знаю, можно ли тут ещё 
  // что-либо менять).
  // 
  // В файл "update-config.json" записываю строку (без пробела и точки в конце. Тут их я поставил только 
  // для того, чтобы обозначить, что дальше записи нет):
  // {"__DEFAULTS__":{"app.update.auto":true,"app.update.background.enabled":false}} .
  // По умолчанию этот файл имеет только строку:
  // {"__DEFAULTS__":{"app.update.auto":true,"app.update.background.enabled":true}} .
  // Если оба параметра будут выключены через GUI, строка примет вид:
  // {"__DEFAULTS__":{"app.update.auto":true,"app.update.background.enabled":true},"app.update.background.enabled":false,"app.update.auto":false} .
  // 
  // Исходя из названий тут может быть некоторая путаница, но, проверка показала, что 
  // "app.update.background.enabled" действительно имеет отношение к параметру "Когда Firefox не запущен" 
  // ("When Firefox is not running").
  // 
  // Сам браузер в Win использует в файле "update-config.json" кодировку UTF-8 и последовательность конца 
  // строки Win (CR LF). Но, для подстраховки я использую последовательность конца строки Unix (LF).
  // 
  // Будем настраивать безопасность файла и директории в которой он находится так, чтобы нельзя было менять и
  // удалять этот файл. Правильно было бы настраивать и две другие родительские директории, но пока лень
  // это делать. Может, потом сделаю. Для настройки безопасности используйте файл 
  // "FF_Setting_permissions_for_update-config.json_and_its_parent_folder.cmd", в нём более подробно 
  // описано, что и как будет настроено.
  // 
  // 
  // Кстати, вроде можно запускать обновление и через команду 
  // "C:\Program Files\Mozilla Firefox\firefox.exe" --backgroundtask backgroundupdate
  // https://firefox-source-docs.mozilla.org/toolkit/mozapps/update/docs/BackgroundUpdates.html

  // Разрешить Firefox (Allow Firefox to). ПЕРЕКЛЮЧАТЕЛЬ.
    // 
    // 1-е положение ПЕРЕКЛЮЧАТЕЛЯ.
    // 
    // Автоматически устанавливать обновления (желательно) (Automatically install updates (recommended)).
    // Этот параметр я меняю через файл update-config.json. Описание выше.
    //user_pref("app.update.auto", true);
      // Когда Firefox не запущен (When Firefox is not running).
      // По умолчанию, параметр включён.
      // В https://kb.mozillazine.org/ описания этого параметра нет.
      // https://firefox-source-docs.mozilla.org/toolkit/mozapps/update/docs/BackgroundUpdates.html
      // https://support.mozilla.org/ru/kb/vklyuchenie-fonovyh-obnovlenij-v-firefox-dlya-wind#firefox:win10:fx115
      // Что-то я запутался в этом параметре, так и не поняв на что именно он влияет и как это работает.
      // Этот параметр я меняю через файл update-config.json. Описание выше.
      // Да (включён) - true, нет (выключен) - false.
      //user_pref("app.update.background.enabled", false);
    // 
    // 1-е положение ПЕРЕКЛЮЧАТЕЛЯ.
    // 
    // Проверять наличие обновлений, но позволять вам решать, устанавливать ли их.
    // (Check for updates but let you choose to install them).
    // Этот параметр я меняю через файл update-config.json. Описание выше.
    // user_pref("app.update.auto", false);
    // 
    // Использовать фоновую службу для установки обновлений (Use a background service to install updates).
    // Если включено, то параметра нет, если выключено, то параметр равен false. Но, 
    // можно установить и true, это работает.
    // В FF 128.4.0 ESR x64 этот параметр включён, заблокирован и убран из настроек через визуальный интерфейс.
    user_pref("app.update.service.enabled", true);
    // *
  // Ещё значения, имеющие отношения к обновлению, но не отображённые в настройках через GUI.
  // Интервал проверки на обновление в секундах. По умолчанию составляет 7 часов (25200 секунд), 
  // 10800 - 3 часа.
  user_pref("app.update.background.interval", 10800);
  // 
  user_pref("app.update.BITS.enabled", true);
  // 
  // Использовать ESR-версию браузера (Extended Support Releases) и соответственно обновления для неё.
  // https://kb.mozillazine.org/App.update.channel
  user_pref("app.update.channel", "esr");
  // Этого параметра нет. Раньше был. Стоит ли его оставлять? Пусть пока будет.
  user_pref("app.update.enabled", true);
  // 
  // user_pref("app.update.checkInstallTime", true);
  // user_pref("app.update.background.rolledout", true);
  user_pref("app.update.auto.migrated", false); // Видимо, речь идёт о переходе на новую основную версию.
  // user_pref("app.update.download.attempts", 0);
  // user_pref("app.update.elevate.attempts", 0);
  // user_pref("app.update.staging.enabled", true);
  // 
  // Must be false, or otherwise there must be no langpacks installed. Background tasks cannot 
  // update addons such as langpacks, because they are installed into a profile, and langpacks 
  // that are not precisely matched with the version of Firefox that is installed can cause YSOD 
  // failures (see bug 1647443), so background updating in the presence of langpacks is too risky.
  // Должно быть ложным, иначе не должно быть установленных языковых пакетов. Фоновые задачи 
  // не могут обновлять аддоны, такие как лангпаки, поскольку они устанавливаются в профиль, 
  // а лангпаки, которые не совсем соответствуют установленной версии Firefox, могут вызвать сбои YSOD 
  // (см. ошибку 1647443 ), поэтому фоновое обновление при наличии лангпаков слишком рискованно.
  // https://firefox-source-docs.mozilla.org/toolkit/mozapps/update/docs/BackgroundUpdates.html
  // Странно, а по-умолчанию параметр имеет значение true. Не буду изменять. 
  //user_pref("app.update.langpack.enabled", false); 
  //
  // user_pref("app.update.link.updateAvailableWhatsNew", update-available-whats-new);	
  // user_pref("app.update.link.updateManualWhatsNew", update-manual-whats-new);	
  // user_pref("app.update.notifyDuringDownload", false);
  // app.update.silent ???
  // app.update.timerMinimumDelay // задает сколько секунд ожидать простоя (неактивности) браузера 
  // перед проверкой обновления, но после. ???

  //______________________________________________________________________________________
  
  // Производительность (Performance).
  // 
  // Использовать рекомендуемые настройки производительности (Use recommended performance settings).
  // Эти настройки рассчитаны для вашего компьютера и операционной системы.
  // (These settings are tailored to your computer’s hardware and operating system).
  user_pref("browser.preferences.defaultPerformanceSettings.enabled", true);
    // По возможности использовать аппаратное ускорение.
    // (Use hardware acceleration when available).
    // ! В GUI этот параметр доступен для изменения только, если выключен верхний.
    user_pref("layers.acceleration.disabled", false);

  //______________________________________________________________________________________

  // Просмотр сети (Browsing).
  // 
  // Использовать автоматическую прокрутку (Use autoscrolling).
  //user_pref("general.autoScroll", true);
  // 
  // Использовать плавную прокрутку (Use smooth scrolling).
  //user_pref("general.smoothScroll", true);
  // 
  // При необходимости показывать сенсорную клавиатуру (Show a touch keyboard when necessary).
  //user_pref("ui.osk.enabled", true);
  // 
  // Всегда использовать клавиши курсора для навигации по страницам.
  // (Always use the cursor keys to navigate within pages).
  //user_pref("accessibility.browsewithcaret", false);
  // 
  // Искать текст на странице по мере его набора (Search for text when you start typing).
  //user_pref("accessibility.typeaheadfind", false);
  // 
  // Включить элементы управления видео «Картинка в картинке» (Enable picture-in-picture video controls).
  //user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false); // Именно этот параметр
  // включает данную настройку, а не "media.videocontrols.picture-in-picture.enabled".
  // 
  // Управлять воспроизведением звука или видео с помощью клавиатуры, гарнитуры или виртуального интерфейса.
  // (Control media via keyboard, headset, or virtual interface).
  //user_pref("media.hardwaremediakeys.enabled", true);
  // 
  // Рекомендовать расширения при просмотре (Recommend extensions as you browse).
  //user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addon", true);
  // 
  // Рекомендовать функции при просмотре (Recommend features as you browse).
  //user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", true);

  //______________________________________________________________________________________

  // Настройка сети (Network Settings).
  // 
  // Настроить, как Firefox соединяется с Интернетом. (Configure how Firefox connects to the internet.).
  // Кнопка "Настроить..." (Settings...).
  // Окно "Параметры соединения" (Connection Settings).
    // 
    // Настройка прокси для доступа в Интернет (Configure Proxy Access to the Internet). ПЕРЕКЛЮЧАТЕЛЬ.
    // 
    // 1-е положение ПЕРЕКЛЮЧАТЕЛЯ.
    // 
    // Без прокси (No proxy).
    //user_pref("", "" true false);
    // 
    // 2-е положение ПЕРЕКЛЮЧАТЕЛЯ.
    // 
    // Автоматически определять настройки прокси для этой сети (Auto-detect proxy settings for this network).
    //user_pref("", "" true false);
    // 
    // 3-е положение ПЕРЕКЛЮЧАТЕЛЯ.
    // 
    // Использовать системные настройки прокси (Use system proxy settings).
    //user_pref("", "" true false);
    // 
    // 4-е положение ПЕРЕКЛЮЧАТЕЛЯ.
    // 
    // Ручная настройка прокси (Manual proxy configuration).
    //user_pref("", "" true false);
      // 
      // HTTP прокси (HTTP Proxy).
      //user_pref("", "" true false);
      // 
      // Порт (Port).
      //user_pref("", "" true false);
      // 
      // Также использовать этот прокси для HTTPS (Also use this proxy for HTTPS).
      //user_pref("", "" true false);
      // 
      // 
      // HTTPS прокси (HTTPS Proxy).
      //user_pref("", "" true false);
      // 
      // Порт (Port).
      //user_pref("", "" true false);
      // 
      // 
      // Узел SOCKS (SOCKS Host).
      //user_pref("", "" true false);
      // 
      // Порт (Port).
      //user_pref("", "" true false);
      // 
      // 
      // SOCKS
      // 
      // 1-е положение ПЕРЕКЛЮЧАТЕЛЯ.
      // 
      // SOCKS 4 (SOCKS v4).
      //user_pref("", "" true false);
      // 
      // 2-е положение ПЕРЕКЛЮЧАТЕЛЯ.
      // 
      // SOCKS 5 (SOCKS v5).
      //user_pref("", "" true false);
    // 
    // 5-е положение ПЕРЕКЛЮЧАТЕЛЯ.
    // 
    // URL автоматической настройки прокси (Automatic proxy configuration URL).
    //user_pref("", "" true false);
      // 
      // Не использовать прокси для (No proxy for).
      //user_pref("", "" true false);
      // Пример: .mozilla-russia.org, .net.nz, 192.168.1.0/24 (Example: .mozilla.org, .net.nz, 192.168.1.0/24)
      // Соединения с localhost, 127.0.0.1/8 и ::1 никогда не проксируются.
      // (Connections to localhost, 127.0.0.1/8, and ::1 are never proxied.)
    // 
    // Не запрашивать аутентификацию (если был сохранён пароль)
    // (Do not prompt for authentication if password is saved).
    // user_pref("", "" true false);
    // 
    // Отправлять DNS-запросы через прокси при использовании SOCKS v4
    // (Proxy DNS when using SOCKS v4).
    //user_pref("", "" true false);
    // 
    // Отправлять DNS-запросы через прокси при использовании SOCKS 5
    // (Proxy DNS when using SOCKS v5).
    // user_pref("", "" true false);

//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

// Начало (Home). Адрес - about:preferences#home .
// 
  // Начало (Home).

    // Новые окна и вкладки (New Windows and Tabs).
    // Выберите, что вы хотите увидеть, когда откроете домашнюю страницу, новые окна и новые вкладки.
    // (Choose what you see when you open your homepage, new windows, and new tabs.).
    // 
    // Домашняя страница и новые окна (New Windows and Tabs). РАСКРЫВАЮЩИЙСЯ СПИСОК.
      // 
      // 1-е значение РАСКРЫВАЮЩЕГОСЯ СПИСКА.
      // 
      // Домашняя страница Firefox (По умолчанию) (Firefox Home (Default)).
      user_pref("browser.startup.homepage", "about:home");
      // 
      // 2-е значение РАСКРЫВАЮЩЕГОСЯ СПИСКА.
      // 
      // Мой сетевой адрес... (Custom URLs...).
      //user_pref("browser.startup.homepage", "https://www.wikipedia.org/");
      // 
      // 3-е значение РАСКРЫВАЮЩЕГОСЯ СПИСКА.
      // 
      // Пустая страница (Blank Page).
      //user_pref("browser.startup.homepage", "chrome://browser/content/blanktab.html");
    // 
    // Новые вкладки (New tabs). РАСКРЫВАЮЩИЙСЯ СПИСОК.
      // 
      // 1-е значение РАСКРЫВАЮЩЕГОСЯ СПИСКА.
      // 
      // Домашняя страница Firefox (По умолчанию) (Firefox Home (Default)).
      user_pref("browser.newtabpage.enabled", true);
      // 
      // 2-е значение РАСКРЫВАЮЩЕГОСЯ СПИСКА.
      // 
      // Пустая страница (Blank Page).
      //user_pref("browser.newtabpage.enabled", false);

    // Содержимое Домашней страницы Firefox (Firefox Home Content).
    // 
    // Выберите, какое содержимое вы хотите видеть на экране Домашней страницы Firefox.
    // (Choose what content you want on your Firefox Home screen.).
    // 
    // Поиск в Интернете (Web Search).
    //user_pref("browser.newtabpage.activity-stream.showSearch", false);
    // 
    // Ярлыки (Shortcuts).
    user_pref("browser.newtabpage.activity-stream.feeds.topsites", true);
      // 
      // Сохранённые или посещаемые сайты (Sites you save or visit).
      //user_pref("browser.newtabpage.activity-stream.topSitesRows", 4); // 4 строки.
      // 
      // Пока я так и не понял, можно ли выставить количество ярлыков в строке или нет?
      // Вроде, должно сработать browser.newtabpage.activity-stream.topSitesCount (тут должно быть 
      // произведение строк на столбцы) https://support.mozilla.org/en-US/questions/1177133 но, 
      // не работает. И данного параметра по умолчанию нет.
      // browser.newtabpage.columns - не работает.
      // browser.newtabpage.rows - не работает.
      // browser.newtabpage.activity-stream.topSitesCount - не работает.
      // 
      // Спонсируемые ярлыки (Sponsored shortcuts).
      user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", true);
    // 
    // Последние действия (Recent activity).
    user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
      // 
      // Подборка недавних сайтов и контента (A selection of recent sites and content).
      //user_pref("browser.newtabpage.activity-stream.section.highlights.rows", 1);
      // 
      // Посещённые страницы (Visited Pages).
      //user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", true);
      // 
      // Закладки (Bookmarks).
      //user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", true);
      // 
      // Недавние загрузки (Most Recent Download).
      //user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", true);
      // 
      // Страницы, сохранённые в Pocket (Pages Saved to Pocket).
      //user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", true);
      
      // Заметки (Snippets). Советы и новости от Mozilla и Firefox (Tips and news from Mozilla and Firefox).
      user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
      // Этого параметра нет в GUI в FF 128.6.0 ESR x64 Ru. Не знаю, его убрали или переместили, 
      // но тут пока пусть будет.

//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

// Поиск (Search). Адрес - about:preferences#search .
// 
  // Поиск (Search).

    // Строка поиска (Search Bar). В FireFox 128.5.2 ESR в GUI этого параметра нет.
    // 
    // Использовать адресную строку для поиска и навигации (Use the address bar for search and navigation).
    user_pref("browser.search.widget.inNavBar", false);
    // Добавить строку поиска на панель инструментов (Add search bar in toolbar). Это я не использую.
    //user_pref("browser.search.widget.inNavBar", true);

    // Поисковая система по умолчанию (Default Search Engine). РАСКРЫВАЮЩИЙСЯ СПИСОК.
    // 
    // Это ваша поисковая система по умолчанию в адресной строке и строке поиска. 
    // Вы можете сменить её в любое время.
    // (This is your default search engine in the address bar and search bar. 
    // You can switch it at any time.).
    // Так и не понял, что и как тут менять.
    // 
    // 1-е значение РАСКРЫВАЮЩЕГОСЯ СПИСКА.
    // 
    //user_pref("", true false); // Яндекс.
    // Может, вот это или и это тоже?
    // browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.havePinned	Ya.ru
    // browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines	Ya
    // Для Википедии:
    //user_pref("browser.urlbar.placeholderName", "Википедия (ru)");
    //user_pref("browser.urlbar.placeholderName.private", "Википедия (ru)");

    // Поисковые предложения (Search Suggestions).
    // 
    // Выберите, где будут появляться предложения от поисковых систем.
    // (Choose how suggestions from search engines appear).
    // 
    // Показывать поисковые предложения (Show search suggestions).
    // (Раньше называлось - Отображать поисковые предложения (Provide search suggestions)).
    user_pref("browser.search.suggest.enabled", true);
      // 
      // Отображать поисковые предложения перед историей просмотра сети при использовании адресной строки.
      // (Show search suggestions ahead of browsing history in address bar results).
      user_pref("browser.urlbar.showSearchSuggestionsFirst", true);
      // 
      // Отображать поисковые предложения в приватных окнах (Show search suggestions in Private Windows).
      user_pref("browser.search.suggest.enabled.private", false);
      // 
      // Отображать популярные поисковые предложения (Show trending search suggestions).
      user_pref("browser.urlbar.suggest.trending", true);
      // 
      // Отображать поисковые предложения при использовании адресной строки.
      // (Show search suggestions in address bar results).
      // В FireFox 128.5.2 ESR в GUI этого параметра нет. 
      user_pref("browser.urlbar.suggest.searches", true);
      // 
    // Показать недавние поисковые запросы (Show recent searches).
    user_pref("browser.urlbar.suggest.recentsearches", true);

    // Адресная строка (Address Bar).
    // 
    // При использовании адресной строки предлагать ссылки.
    // (When using the address bar, suggest).
    // 
    // из журнала посещений (Browsing history).
    user_pref("browser.urlbar.suggest.history", true);
    // 
    // из закладок (Bookmarks).
    user_pref("browser.urlbar.suggest.bookmark", true);
    // 
    // из открытых вкладок (Open tabs).
    user_pref("browser.urlbar.suggest.openpage", true);
    // 
    // из ярлыков (Shortcuts).
    user_pref("browser.urlbar.suggest.topsites", true);
    // 
    // из поисковых систем (Search engines).
    user_pref("browser.urlbar.suggest.engines", true);

    // Значки поисковых систем (Search Shortcuts).
    // 
    // Выберите иные поисковые системы, которые появятся под адресной строкой и строкой поиска, 
    // когда вы начнёте вводить ключевое слово.
    // (Choose the alternative search engines that appear below the address bar and search bar 
    // when you start to enter a keyword.).
    // 
    // Не знаю, как это настраивать. Путь пока будет заготовка.
    // 
    //user_pref("", true false);
    //user_pref("", true false);
    //user_pref("", true false);

  // 
  // Ещё значения, имеющие отношения к поиску, но не отображённые в настройках через GUI.
  user_pref("browser.search.region", "RU");

//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

// Приватность и защита (Privacy & Security). Адрес - about:preferences#privacy .
// 
  // Приватность браузера (Browser Privacy).

    // Улучшенная защита от отслеживания (Enhanced Tracking Protection). ПЕРЕКЛЮЧАТЕЛЬ.
    // 
    // Трекеры отслеживают вас в Интернете, чтобы собирать сведения о ваших привычках и интересах. 
    // Firefox блокирует многие из этих трекеров и других вредоносных скриптов.
    // (Trackers follow you around online to collect information about your browsing habits and interests. 
    // Firefox blocks many of these trackers and other malicious scripts.).
	  // Кнопка "Управление исключениями..." (Manage Exceptions...).
    // Окно "Исключения для улучшенной защиты от отслеживания" (Exceptions for Enhanced Tracking Protection).
      // Вы можете указать, на каких сайтах отключить "Улучшенную защиту от отслеживания". Введите 
      // точный адрес сайта, которым вы хотите управлять, и нажмите "Добавить исключение".
      // (You can specify which websites have Enhanced Tracking Protection turned off. Type 
      // the exact address of the site youwant to manage and then click Add Exception.).
      // 
      // Я не понял, как это настраивать, но заготовка пусть пока будет.
    
    // Resist Fingerprinting (RFP) (почему-то этого параметра в настройках может не быть).
    // С этим параметром какая-то лажа. Если его выставить в true, то при запуске FF окно не будет 
    // развёрнуто на весь рабочий стол (как было при его закрывании) и выставленная тёмная тема 
    // не работает. Может, есть и другие проблемы. По умолчанию значение false.
    // Если параметр включён, то будет нижерасположенная надпись: 
    // Вы используете функцию защиты от сборщиков цифровых отпечатков (RFP), которая заменяет 
    // некоторые настройки защиты от сборщиков цифровых отпечатков Firefox. Это может привести к 
    // неработоспособности некоторых сайтов.
    // (You’re using Resist Fingerprinting (RFP), which replaces some of Firefox’s fingerprinting 
    // protection settings. This might cause some sites to break.).
    // user_pref("privacy.resistFingerprinting", false);
    // 
    // Ещё значения, имеющие отношения к Fingerprinting, но не отображённые в настройках через GUI.
    // user_pref("privacy.fingerprintingProtection", false); // По умолчанию false.
    // user_pref("privacy.fingerprintingProtection.pbmode", false);	// По умолчанию false.
    // user_pref("privacy.trackingprotection.fingerprinting.enabled", true); // По умолчанию true.
    // user_pref("browser.contentblocking.fingerprinting.preferences.ui.enabled", true); // По умолчанию true.
    // user_pref("browser.contentblocking.cryptomining.preferences.ui.enabled", true); // По умолчанию true.
    // 
    // Защита Firefox от сборщиков цифровых отпечатков.
    // https://support.mozilla.org/ru/kb/zashita-firefox-ot-sborshikov-cifrovyh-otpechatkov

    // 1-е положение ПЕРЕКЛЮЧАТЕЛЯ.
    // 
    // Стандартная (Standard).
    user_pref("browser.contentblocking.category", "standard");
      // Золотая середина: защита и производительность. Страницы будут загружаться нормально.
      // (Balanced for protection and performance. Pages will load normally.).
      // Firefox блокирует следующее: (Firefox blocks the following:)
        // Трекеры соцсетей (Social media trackers).
        // Межсайтовые куки во всех окнах (Cross-site cookies in all windows).
        // Отслеживающее содержимое в приватных окнах (Tracking content in Private Windows).
        // Криптомайнеры (Cryptominers).
        // Сборщики цифровых отпечатков (Fingerprinters).
      // Включает Полную защиту от кук, нашу самую мощную функцию защиты приватности.
      // Полная защита от кук ограничивает работу кук сайтом, на котором вы находитесь, 
      // чтобы трекеры не могли использовать их для слежки за вами от сайта к сайту.
      // (Includes Total Cookie Protection, our most powerful privacy feature ever
      // Total Cookie Protection contains cookies to the site you’re on, 
      // so trackers can’t use them to follow you between sites.).
    // 
    // 2-е положение ПЕРЕКЛЮЧАТЕЛЯ.
    // 
    // Строгая (Strict).
    //user_pref("browser.contentblocking.category", "strict");
      // Усиленная защита может вызывать проблемы с некоторыми сайтами и их содержимым.
      // (Stronger protection, but may cause some sites or content to break.).
      // Firefox блокирует следующее: (Firefox blocks the following:)
        // Трекеры соцсетей (Social media trackers).
        // Межсайтовые куки во всех окнах (Cross-site cookies in all windows).
        // Отслеживающее содержимое во всех окнах (Tracking content in all windows).
        // Криптомайнеры (Cryptominers).
        // Сборщики цифровых отпечатков (Known and suspected fingerprinters).
      // Осторожно!
      // Эта настройка может вызвать ошибки отображения содержимого или нарушение правильной работы 
      // некоторых сайтов. Если кажется, что сайт не работает, вам, возможно, понадобится отключить 
      // защиту от отслеживания на этом сайте, чтобы загрузить всё его содержимое.
      // (Heads up!
      // This setting may cause some websites to not display content or work correctly. If a site 
      // seems broken, you may want to turn off tracking protection for that site to load all content.).
    // 
    // 3-е положение ПЕРЕКЛЮЧАТЕЛЯ.
    // 
    // Персональная (Custom).
    //user_pref("browser.contentblocking.category", "custom");
      // Выберите, какие трекеры и скрипты необходимо блокировать.
      // (Choose which trackers and scripts to block.).
      // Куки (Cookies).
        // user_pref("network.cookie.cookieBehavior", 0); // Параметр выключен, разрешены любые куки.
        // Межсайтовые отслеживающие куки (Cross-site tracking cookies).
        // user_pref("network.cookie.cookieBehavior", 4);
        // Межсайтовые отслеживающие куки, а также изолировать другие межсайтовые куки
        // (Cross-site tracking cookies, and isolate other cross-site cookies).
        // user_pref("network.cookie.cookieBehavior", 5);
        // Куки с непосещённых сайтов (Cookies from unvisited websites).
        // user_pref("network.cookie.cookieBehavior", 3);
        // Все межсайтовые куки (может нарушить работу сайтов).
        // (All cross-site cookies (may cause websites to break)).
        // user_pref("network.cookie.cookieBehavior", 1);
        // Все куки (нарушит работу веб-сайтов) (All cookies (will cause websites to break)).
        // user_pref("network.cookie.cookieBehavior", 2);
      // 
      // Отслеживающее содержимое (Tracking content).
      // Тут настройка происходит сразу 5-ю параметрами.
      // Если этот параметр выключен, то все ниже расположенные параметры имеют значение "false".
      // user_pref("privacy.trackingprotection.enabled", false);
      // user_pref("privacy.trackingprotection.pbmode.enabled", false);
      // user_pref("privacy.trackingprotection.emailtracking.enabled", false);
      // user_pref("privacy.trackingprotection.emailtracking.pbmode.enabled", false);
      // user_pref("privacy.trackingprotection.socialtracking.enabled", false);
      // Параметра socialtracking для приватных окон нет.
        // Только в приватных окнах (Only in Private Windows).
        // user_pref("privacy.trackingprotection.enabled", false);
        // user_pref("privacy.trackingprotection.pbmode.enabled", true);
        // user_pref("privacy.trackingprotection.emailtracking.enabled", false);
        // user_pref("privacy.trackingprotection.emailtracking.pbmode.enabled", true);
        // user_pref("privacy.trackingprotection.socialtracking.enabled", false);
        // Параметра socialtracking для приватных окон нет.
        // 
        // Во всех окнах (In all windows).
        // user_pref("privacy.trackingprotection.enabled", true);
        // user_pref("privacy.trackingprotection.pbmode.enabled", true);
        // user_pref("privacy.trackingprotection.emailtracking.enabled", true);
        // user_pref("privacy.trackingprotection.emailtracking.pbmode.enabled", true);
        // user_pref("privacy.trackingprotection.socialtracking.enabled", true);
        // Параметра socialtracking для приватных окон нет.
      // 
      // Криптомайнеры (Cryptominers).
      // user_pref("privacy.trackingprotection.cryptomining.enabled", true);
      // 
      // Известные цифровые отпечатки (Known fingerprinters).
      // user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
      // 
      // Подозреваемые цифровые отпечатки (Suspected fingerprinters). // ТУТ СТРАННОСТИ!
      // user_pref("privacy.trackingprotection.pbmode.enabled", true);
      // Странно, но при изменении этого параметра меняется только "privacy.trackingprotection.pbmode.enabled".
      // Что-то тут не то.
        // Только в приватных окнах (Only in Private Windows).
        // user_pref("privacy.fingerprintingProtection", false);
        // 
        // Во всех окнах (In all windows).
        // user_pref("privacy.fingerprintingProtection", true);
        // И тут тоже странность. Может, это просто я чего-то не понимаю?
      // 
      // Осторожно!
      // Эта настройка может вызвать ошибки отображения содержимого или нарушение правильной работы 
      // некоторых сайтов. Если кажется, что сайт не работает, вам, возможно, понадобится отключить 
      // защиту от отслеживания на этом сайте, чтобы загрузить всё его содержимое.
      // (Heads up!
      // This setting may cause some websites to not display content or work correctly. If a site seems 
      // broken, you may want to turn off tracking protection for that site to load all content.).

    // Настройки конфиденциальности веб-сайта (Website Privacy Preferences).
    // 
    // Сообщать веб-сайтам, чтобы они не продавали и не разглашали мои данные.
    // (Tell websites not to sell or share my data).
    user_pref("privacy.globalprivacycontrol.enabled", true);
    // 
    // Отправлять веб-сайтам запрос «Не отслеживать». (В недалёком будущем эта функциональность будет убрана.)
    // (Send websites a “Do Not Track” request).
      // Всегда (Always).
      //user_pref("privacy.donottrackheader.enabled", true);
      // Только когда Firefox настроен на блокировку известных трекеров 
      // (Only when Firefox is set to block known trackers).
      user_pref("privacy.donottrackheader.enabled", false);

    // Куки и данные сайтов (Cookies and Site Data).
    // 
    // Удалять куки и данные сайтов при закрытии Firefox.
    // (Delete cookies and site data when Firefox is closed).
    // Тут меняются сразу 4 параметра (надеюсь, я определил все).
    // Эти параметры продублированы в "История (History) - Firefox (Firefox will) - 
    // будет использовать ваши настройки хранения истории (Use custom settings for history) -  
    // Удалять историю при закрытии Firefox (Clear history when Firefox closes) - 
    // Параметры... (Settings...)".
    user_pref("privacy.clearOnShutdown.cookies", false);
    user_pref("privacy.sanitize.sanitizeOnShutdown", false);
    user_pref("privacy.clearOnShutdown.offlineApps", false);
    user_pref("privacy.clearOnShutdown.cache", false);
    //user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", false); ??? Сам не знаю, откуда это.
    // 
	  // Кнопка "Управление исключениями..." ("Manage Exceptions..."").
    // Окно "Исключения - Куки и данные сайтов" ("Exceptions for Enhanced Tracking Protection").
	    // Вы можете указать, каким веб-сайтам разрешено всегда или никогда использовать куки и данные сайтов. 
      // Введите точный адрес сайта и нажмите кнопку "Блокировать", "Разрешить на сессию" или "Разрешить".
      // (You can specify which websites are always or never allowed to use cookies and site data. Type the 
      // exact address of the site you want to manage and then click Block, Alow for Session, or Allow.).
      // 
      // Я не понял, как это настраивать, но заготовка пусть пока будет.

    // Пароли (Passwords). Раньше называлось - Логины и пароли (Logins and Passwords).
    // 
    // Просить сохранить пароли (Ask to save passwords). 
    // Раньше называлось - Запрашивать сохранение логинов и паролей для веб-сайтов. (Ask to save logins and passwords for websites).
    user_pref("signon.rememberSignons", true);
      // Кнопка "Исключения..." ("Exceptions..."").
      // Окно "Исключения - Сохранённые пароли" ("Exceptions - Saved Passwords").
        // Firefox не сохраняет пароли для перечисленных здесь сайтов.
        // (Firefox won't save passwords for sites listed here.).
        // 
        // Я не понял, как это настраивать, но заготовка пусть пока будет.
      // 
      // 
      // Автоматически заполнять имена пользователей и пароли (Fill usernames and passwords automatically)
      user_pref("signon.autofillForms", true);
      // 
      // Предлагать надежные пароли (Suggest strong passwords).
      // Раньше называлось - Предлагать и генерировать надежные пароли (Suggest and generate strong passwords).
      user_pref("signon.generation.enabled", false);
      // 
      // Предлагать псевдонимы электронной почты Firefox Relay для защиты вашего адреса электронной почты 
      // (Suggest Firefox Relay email masks to protect your email address).
      user_pref("signon.firefoxRelay.feature", "disabled"); // Вкл. - available, выкл. - disabled.
    // 
    // Показывать уведомления о паролях для взломанных сайтов.
    // (Show alerts about passwords for breached websites).
    // Уточнение. Визуально этот параметр зависит от заглавного, но проверка показывает, 
    // что это не так, т.е. если выключить заглавный, то данный не теряет активность.
    user_pref("signon.management.page.breach-alerts.enabled", true);
    // 
    // Требовать вход на устройстве для заполнения и управления паролями.
    // (Require device sign in to fill and manage passwords).
    // https://support.mozilla.org/ru/kb/zaschitite-paroli-firefox-s-pomoschju-vhoda-na-ustroistvo
    // user_pref("signon.management.page.os-auth.optout", "");
    // Тут я не понял. Если параметр включен, то переменной "signon.management.page.os-auth.optout" нет.
    // Если выключен, то её значение "MDIEEPgAAAAAAAAAAAAAAAAAAAEwFAYIKoZIhvcNAwcECMUWEMTHR1bMBAhsEcxrlM3Ysw==".
    // При использовании этой настройки при вводе пароля не используется безопасный рабочий стол, что плохо.
    // 
    // Использовать основной пароль (Use a Primary Password).
    // Ранее — мастер-пароль. (Formerly known as Master Password).
    // user_pref("", true false); // Не нашёл этого параметра. Видимо, его так не выставить.
    // 
    // Разрешить единый вход Windows для учётных записей Microsoft, учётных записей на работе и в учебных заведениях.
    // (Allow Windows single sign-on for Microsoft, work, and school accounts).
    // Управление аккаунтами в настройках вашего устройства. (Manage accounts in your device settings).
    user_pref("network.http.windows-sso.enabled", false);

    // История (History).
    // 
    // Firefox (Firefox will): РАСКРЫВАЮЩИЙСЯ СПИСОК.
      // 
      // 1-е значение РАСКРЫВАЮЩЕГОСЯ СПИСКА.
      // 
      // будет запоминать историю (Remember history).
      // Firefox будет помнить историю посещений, загрузок, поиска и сохранять данные форм.
      // (Firefox will remember your browsing, download, form, and search history.).
      // user_pref("privacy.history.custom", false);
      // user_pref("browser.privatebrowsing.autostart", false);
      // 
      // 2-е значение РАСКРЫВАЮЩЕГОСЯ СПИСКА.
      // 
      // не будет запоминать историю (Never remember history).
      // Firefox будет использовать те же настройки, что и в приватном режиме, и не будет помнить историю вашей работы с сайтами.
      // (Firefox will use the same settings as private browsing, and will not remember any history as you browse the Web.).
      // user_pref("privacy.history.custom", false);
      // user_pref("browser.privatebrowsing.autostart", true);
        // При этом выборе в GUI автоматически включается параметр "Удалять куки и данные сайтов при 
        // закрытии Firefox" (Delete cookies and site data when Firefox is closed), но, при этом 
        // значения параметров "privacy.clearOnShutdown.cookies", "privacy.sanitize.sanitizeOnShutdown",
        // "privacy.clearOnShutdown.offlineApps" и "privacy.clearOnShutdown.cache" могут изменится, а
        // могут и нет. Всё зависит от настроек "История (History) - Firefox (Firefox will) - 
        // будет использовать ваши настройки хранения истории (Use custom settings for history) -  
        // Удалять историю при закрытии Firefox (Clear history when Firefox closes) - 
        // Параметры... (Settings...)". Какое-то не логичное решение.
      // 
      // 3-е значение РАСКРЫВАЮЩЕГОСЯ СПИСКА.
      // 
      // будет использовать ваши настройки хранения истории (Use custom settings for history).
      user_pref("privacy.history.custom", true);
        // Всегда работать в приватном режиме (Always use private browsing mode). Нет - false.
        // При выборе "Да" автоматически включается параметр "Удалять куки и данные сайтов при 
        // закрытии Firefox" и всё происходит так же, как описано выше.
        user_pref("browser.privatebrowsing.autostart", false);
          // 
          // Помнить историю посещений и загрузок (Remember browsing and download history). Да - true.
          user_pref("places.history.enabled", true);
          // 
          // Помнить историю поиска и данных форм (Remember search and form history). Да - true.
          user_pref("browser.formfill.enable", true);
          // 
          // Удалять историю при закрытии Firefox (Clear history when Firefox closes). Нет - false.
          user_pref("privacy.sanitize.sanitizeOnShutdown", false);
            // Кнопка "Параметры..." ("Settings...").
            // Окно "Удаление данных веб-сёрфинга и куков" ("Clear browsing data and cookies").
	          // Раньше называлось - Настройки удаления истории (Settings for Clearing History).
              // Автоматически удалять все отмеченные элементы при закрытии Firefox.
              // (Automatically clear all checked items when Firefox closes.).
              // Ранше называлось - При закрытии Firefox должен автоматически удалять. (When closed, Firefox should automatically clear all).
              // 
              // Журнал (History).
              // Удаляет историю сайтов и загрузок, информацию сохранённых форм и поисковые запросы.
              // (Clears site and download history, saved form info, and searches).
              user_pref("privacy.clearOnShutdown.history", false);
              user_pref("privacy.clearOnShutdown.downloads", false);
              // 
              // Куки и данные сайтов. (Cookies and site data).
              // Может привести к разлогину из сайтов или опустошению корзины покупок
              // (May sign you out of sites or empty shopping carts).
              user_pref("privacy.clearOnShutdown.cookies", false);
              // 
              // Временные кешированные файлы и страницы. (Temporary cached files and pages)
              // Удаляет элементы, что помогает сайтам загружаться быстрее.
              // (Clears items that helps sites load faster).
              user_pref("privacy.clearOnShutdown.cache", false);
              // 
              // Настройки сайтов. (Site settings).
              // Сбрасывает ваши разрешения и настройки сайтов на исходные настройки  
              // (Resets your permissions and site preferences to original settings).
              user_pref("privacy.clearOnShutdown.siteSettings", false);
              // Раньше здесь был ещё такой параметр. Теперь, не знаю, куда его отнести. Пусть будет здесь.
              // Данные автономных сайтов (Offline website data).
              user_pref("privacy.clearOnShutdown.offlineApps", false);
              // 
              // Раньше здесь были ещё и такие параметры. Теперь, не знаю, куда их отнести. Искать нужно,
              // но мне лень. Надоели разработчики со своими изменениями. Пусть пока будут здесь.
                // Текущие сеансы (Active logins).
                user_pref("privacy.clearOnShutdown.sessions", false);
                // 
                // Журнал форм и поиска (Form & search history).
                // Я полагал, что тут будет два параметра, но отдельного по поиску я не нашёл.
                user_pref("privacy.clearOnShutdown.formdata", false);
    // 
    // Ещё значения, имеющие отношение к "privacy.clearOnShutdown.", но не отображённые в настройках 
    // через GUI или в данном разделе (или я не нашёл где это в GUI).
    user_pref("privacy.clearOnShutdown.openWindows", false); // Не знаю, к чему относится, пусть пока будет здесь.

  //______________________________________________________________________________________

  // Разрешения (Permissions).
  // 
  // Пока не понял, где всё это находится, поэтому оставлю только заготовку.
  // 
  // Местоположение (Location).
  // user_pref("", true false);
  // 
  // Камера (Camera).
  // user_pref("", true false);
  // 
  // Микрофон (Microphone).
  // user_pref("", true false);
  // 
  // Уведомления (Notifications).
  // user_pref("", true false);
  // 
  // Автовоспроизведение (Autoplay).
  // user_pref("", true false);
  // 
  // Виртуальная реальность (Virtual Reality).
  // user_pref("", true false);
  // *
  // Блокировать всплывающие окна (Block pop-up windows).
  user_pref("dom.disable_open_during_load", true);
  // 
  // Предупреждать при попытке сайтов установить дополнения (Warn you when websites try to install add-ons).
  user_pref("xpinstall.whitelist.required", true);

  //______________________________________________________________________________________

  // Сбор и использование данных Firefox (Firefox Data Collection and Use).
  // 
  // Мы стремимся предоставить вам выбор и собирать только то, что нам нужно, для выпуска и улучшения 
  // Firefox для всех и каждого. Мы всегда спрашиваем разрешения перед получением личных сведений.
  // (We strive to provide you with choices and collect only what we need to provide and improve 
  // Firefox for everyone. We always ask permission before receiving personal information.).
  // 
  // Разрешить Firefox отправлять технические данные и данные взаимодействия в Mozilla.
  // (Allow Firefox to send technical and interaction data to Mozilla).
  user_pref("nimbus.syncdefaultsstore.upgradeDialog.enabled", false); // Этот параметр под вопросом.
  // Там ещё есть у него напарник 
  // user_pref("nimbus.syncdefaultsstore.upgradeDialog", "{\"slug\":\"upgrade-spotlight-rollout\",\"branch\":{\"slug\":\"treatment\",\"ratio\":1,\"feature\":{\"value\":null,\"enabled\":true,\"featureId\":\"upgradeDialog\"},\"features\":null},\"active\":true,\"enrollmentId\":\"7adafb6c-e4c5-46b5-82c7-4f981b57dc7e\",\"experimentType\":\"rollout\",\"source\":\"rs-loader\",\"userFacingName\":\"Upgrade Spotlight Rollout\",\"userFacingDescription\":\"Experimenting on onboarding content when you upgrade Firefox.\",\"lastSeen\":\"2024-04-11T14:26:00.580Z\",\"featureIds\":[\"upgradeDialog\"],\"prefs\":[],\"isRollout\":true}");
  // но не понятно, как с ним быть.
    // Разрешить Firefox давать персональные рекомендации расширений.
    // (Allow Firefox to make personalized extension recommendations).
    user_pref("datareporting.healthreport.uploadEnabled", true);
  // 
  // Разрешить Firefox устанавливать и проводить исследования (Allow Firefox to install and run studies).
  user_pref("app.shield.optoutstudies.enabled", false);
  // 
  // Разрешить Firefox отправлять от вашего имени накопившиеся сообщения о его падениях.
  // (Allow Firefox to send backlogged crash reports on your behalf).
  user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", true);

  //______________________________________________________________________________________

  // Настройки рекламы для веб-сайтов (Website Advertising Preferences).
  // 
  // Разрешить веб-сайтам проводить измерение рекламы с сохранением приватности (Ф).
  // (Allow websites to perform privacy-preserving ad measurement).
  user_pref("dom.private-attribution.submission.enabled", true);
  // Это помогает сайтам понять, как работает их реклама, без сбора данных о вас.
  // (This helps sites understand how their ads perform without collecting data about you.).

  //______________________________________________________________________________________

  // Защита (Security).

    // Поддельное содержимое и защита от вредоносных приложений.
    // (Deceptive Content and Dangerous Software Protection).
    // 
    // Блокировать опасное и обманывающее содержимое (Block dangerous and deceptive content).
    user_pref("browser.safebrowsing.malware.enabled", true);
    user_pref("browser.safebrowsing.phishing.enabled", true);
      // 
      // Блокировать опасные загрузки (Block dangerous downloads).
      user_pref("browser.safebrowsing.downloads.enabled", true);
      // 
      // Предупреждать о нежелательных и редко загружаемых приложениях.
      // (Warn you about unwanted and uncommon software).
      user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", true);
      user_pref("browser.safebrowsing.downloads.remote.block_uncommon", true);

    // Сертификаты (Certificates).
    // 
    // Запрашивать у OCSP-серверов подтверждение текущего статуса сертификатов.
    // (Query OCSP responder servers to confirm the current validity of certificates).
    user_pref("security.OCSP.enabled", 1); // Выкл. - 0, вкл. - 1.
    // 
    // Разрешить Firefox автоматически доверять установленным вами сторонним корневым сертификатам.
    // (Allow Firefox to automatically trust third-party root certificates you install).
    user_pref("security.enterprise_roots.enabled", true);

    // Режим «Только HTTPS» (HTTPS-Only Mode). ПЕРЕКЛЮЧАТЕЛЬ.
    // 
    // HTTPS обеспечивает безопасное и зашифрованное соединение между Firefox и сайтами, которые 
    // вы посещаете. Большинство сайтов поддерживают HTTPS, и если включён режим «Только HTTPS», 
    // то Firefox переключит все соединения на HTTPS.
    // (HTTPS provides a secure, encrypted connection between Firefox and the websites you visit. 
    // Most websites support HTTPS, and if HTTPS-Only Mode is enabled, then Firefox will upgrade all 
    // connections to HTTPS.).
    // 
    // 1-е положение ПЕРЕКЛЮЧАТЕЛЯ.
    // 
    // Включить режим «Только HTTPS» во всех окнах (Enable HTTPS-Only Mode in all windows).
    // Тут меняются сразу два параметра.
    // user_pref("dom.security.https_only_mode", true);
    // user_pref("dom.security.https_only_mode_pbm", false);
  	// 
    // Не смог понять, к какому пункту переключателя относятся исключения, поэтому пусть эта 
    // запись будет там, где визуально находится соответствующая кнопка.
    // Кнопка "Управление исключениями..." ("Manage Exceptions...").
    // Окно "Исключения - Режим "Только HTTPS"" ("Exceptions - HTTPS-Only Mode").
	    // 
      // Вы можете отключить режим "Только HTTPS" для определённых веб-сайтов. Firefox не будет пытаться 
      // переключать соединение на защищённый HTTPS для этих сайтов.
      // (You can turn off HTTPS-Only Mode for specific websites. Firefox won't attempt to upgrade the 
      // connection to secure HTTPS for those sites.).
      // 
      // Не знаю, как это настраивать. Путь пока будет заготовка.
      // 
      //user_pref("", true false);
      //user_pref("", true false);
      //user_pref("", true false);
    // 
    // 2-е положение ПЕРЕКЛЮЧАТЕЛЯ.
    // 
    // Включить режим «Только HTTPS» только в приватных окнах (Enable HTTPS-Only Mode in private windows only).
    // Тут меняются сразу два параметра.
    // user_pref("dom.security.https_only_mode", false);
    // user_pref("dom.security.https_only_mode_pbm", true);
    // 
    // 3-е положение ПЕРЕКЛЮЧАТЕЛЯ.
    // 
    // Не включать режим «Только HTTPS» (Don’t enable HTTPS-Only Mode).
    // Тут меняются сразу два параметра.
    user_pref("dom.security.https_only_mode", false);
    user_pref("dom.security.https_only_mode_pbm", false);
    // 
    // Тут используется куча параметров типа dom.security.https_only_mode . Всё это нужно изучать.
    // 
    // Ещё значения, имеющие отношения к https, но не отображённые в настройках через GUI.
    // 
    // Во всех 3-х вариантах, эти значения равны true:
    // Так и не смог найти информации о том, что именно это за параметры.
    // Тут меняются сразу два параметра.
    user_pref("dom.security.https_only_mode_ever_enabled", true);
    user_pref("dom.security.https_only_mode_ever_enabled_pbm", true);
    // 
    // dom.security.https_first	false
    // dom.security.https_first_pbm	true
    // 
    //browser.fixup.fallback-to-https	true
    //dom.security.https_only_check_path_upgrade_downgrade_endless_loop	true
    //dom.security.https_only_fire_http_request_background_timer_ms	3000
    //dom.security.https_only_mode.upgrade_local	false
    //dom.security.https_only_mode.upgrade_onion	false
    //dom.security.https_only_mode_break_upgrade_downgrade_endless_loop	true
    //dom.security.https_only_mode_error_page_user_suggestions	false
    //dom.security.https_only_mode_send_http_background_request	true
    //network.dns.disablePrefetchFromHTTPS	true
    //network.dns.force_use_https_rr	false
    //network.dns.force_waiting_https_rr	false
    //network.dns.httpssvc.http3_fast_fallback_timeout	50
    //network.dns.httpssvc.reset_exclustion_list	true
    //network.dns.port_prefixed_qname_https_rr	false
    //network.dns.upgrade_with_https_rr	true
    //network.dns.use_https_rr_as_altsvc	true
    //network.http.encoding.trustworthy_is_https	true
    //network.websocket.allowInsecureFromHTTPS	false
    //security.disallow_privileged_https_script_loads	true
    //security.disallow_privileged_https_stylesheet_loads	true
    //security.disallow_privileged_https_subdocuments_loads	true

  //______________________________________________________________________________________

  // DNS через HTTPS (DNS over HTTPS). ПЕРЕКЛЮЧАТЕЛЬ.
  // 
  // Тут разработчик так же поменял часть фраз и описаний. Не буду пока менять, лень мне. 
  // Может, потом сделаю. В целом и так всё понятно. !!!
  // 
  // Печально, но в Win 10 Pro 22H2 x64 FF 128.6.0 ESR x64 при включении защиты по умолчанию, 
  // как минимум один сайт перестал открываться. "Ошибка при установлении защищённого соединения". 
  // "Код ошибки: PR_CONNECT_RESET_ERROR". Пришлось выключить эту приблуду.
  // 
  // Система доменных имён (DNS) через HTTPS отправляет ваш запрос доменного имени через зашифрованное 
  // соединение, создавая безопасный DNS и затрудняя другим возможность увидеть, к какому сайту вы 
  // собираетесь получить доступ.
  // (Domain Name System (DNS) over HTTPS sends your request for a domain name through an encrypted 
  // connection, creating a secure DNS and making it harder for others to see which website you’re 
  // about to access.).
  // 
	// Кнопка "Управление исключениями..." ("Manage Exceptions...").
  // Окно "Исключения сайтов для DNS через HTTPS" ("Website Exceptions for DNS over HTTPS").
	  // 
    // Firefox не будет использовать безопасный DNS для этих сайтов и их поддоменов.
    // (Firefox won't use secure DNS on these sites and their subdomains.).
    // 
    // Не знаю, как это настраивать. Путь пока будет заготовка.
    // 
    //user_pref("", true false);
    //user_pref("", true false);
    //user_pref("", true false);
  // 

    // Включить безопасный DNS, используя: (Enable secure DNS using:). ПЕРЕКЛЮЧАТЕЛЬ.
    // 
    // 1-е положение ПЕРЕКЛЮЧАТЕЛЯ.
    // 
    // Защиту по умолчанию (Default Protection).
    // Тут меняются сразу 4-е параметра.
    //user_pref("network.trr.mode", 0);
    //user_pref("doh-rollout.self-enabled", true);
    //user_pref("doh-rollout.mode", 2);
    //user_pref("doh-rollout.disable-heuristics", false); // На самом деле параметра не будет, но я ставлю false.
      // Firefox решает, когда использовать безопасный DNS для защиты вашей конфиденциальности.
      // (Firefox decides when to use secure DNS to protect your privacy.).
        // Использовать безопасный DNS в регионах, где он доступен.
        // (Use secure DNS in regions where it’s available).
        // Использовать разрешение DNS по умолчанию, если имеется проблема с поставщиком безопасного DNS.
        // (Use your default DNS resolver if there is a problem with the secure DNS provider).
        // Использовать местного поставщика, если это возможно.
        // (Use a local provider, if possible).
        // Отключить, когда активны VPN, родительский контроль или корпоративные политики.
        // (Turn off when VPN, parental control, or enterprise policies are active).
        // Отключить, когда сеть сообщает Firefox, что она не должна использовать безопасный DNS.
        // (Turn off when a network tells Firefox it shouldn’t use secure DNS).
    // 
    // 2-е положение ПЕРЕКЛЮЧАТЕЛЯ.
    // 
    // Повышенную защиту (Increased Protection).
    // Тут меняются сразу 4-е параметра.
    //user_pref("network.trr.mode", 2);
    //user_pref("doh-rollout.disable-heuristics", true);
    //user_pref("doh-rollout.self-enabled", false); // На самом деле параметра не будет, но я ставлю false.
    //user_pref("doh-rollout.mode", false); // На самом деле параметра не будет, но я ставлю false.
      // Вы сами решаете, когда использовать безопасный DNS, и выбираете своего поставщика.
      // (You control when to use secure DNS and choose your provider.).
        // Использовать выбранного вами поставщика (Use the provider you select).
        // Использовать разрешение DNS по умолчанию только в том случае, если есть проблема с безопасным DNS.
        // (Only use your default DNS resolver if there is a problem with secure DNS).
      // 
        // Выбрать поставщика: (Choose provider:).
          //
          // Cloudflare (По умолчанию) (Cloudflare (Default)).
          // user_pref("doh-rollout.uri", "https://mozilla.cloudflare-dns.com/dns-query");
          // 
          // Другой URL
          // user_pref("doh-rollout.uri", "");
    // 
    // 3-е положение ПЕРЕКЛЮЧАТЕЛЯ.
    // 
    // Максимальную защиту (Max Protection).
    // Тут меняются сразу 4-е параметра.
    //user_pref("doh-rollout.disable-heuristics", true);
    //user_pref("network.trr.mode", 3);
    //user_pref("doh-rollout.self-enabled", false); // На самом деле параметра не будет, но я ставлю false.
    //user_pref("doh-rollout.mode", false); // На самом деле параметра не будет, но я ставлю false.
      // Firefox всегда будет использовать безопасный DNS. Вы увидите предупреждение об угрозе безопасности, 
      // прежде чем мы будем использовать DNS вашей системы.
      // (Firefox will always use secure DNS. You’ll see a security risk warning before we use your system DNS.).
        // Использовать только выбранного вами поставщика
        // (Only use the provider you select).
        // Всегда предупреждать, если безопасный DNS недоступен
        // (Always warn if secure DNS isn’t available).
        // Если безопасный DNS недоступен, сайты не будут загружаться или работать должным образом.
        // (If secure DNS is not available sites will not load or function properly).
      // 
        // Выбрать поставщика: (Choose provider:).
          //
          // Cloudflare (По умолчанию) (Cloudflare (Default)).
          // user_pref("doh-rollout.uri", "https://mozilla.cloudflare-dns.com/dns-query");
          // 
          // Другой URL (Custom).
          // user_pref("doh-rollout.uri", "");
    // 
    // 4-е положение ПЕРЕКЛЮЧАТЕЛЯ.
    // 
    // Отключить (Off).
    // Тут меняются сразу 4-е параметра.
    user_pref("network.trr.mode", 5);
    user_pref("doh-rollout.disable-heuristics", true);
    user_pref("doh-rollout.self-enabled", false); // На самом деле параметра не будет, но я ставлю false.
    user_pref("doh-rollout.mode", false); // На самом деле параметра не будет, но я ставлю false.
      // Использовать разрешение DNS по умолчанию (Use your default DNS resolver).
  // 
  // Ещё значения, имеющие отношения к DNS over HTTPS, но не отображённые в настройках через GUI.
  user_pref("doh-rollout.home-region", "RU");
  user_pref("doh-rollout.clearModeOnShutdown", false);
  // 

  // 
  // Ещё значения, имеющие отношение к безопасности, но не отображённые в настройках через GUI.
  // 
  // general.aboutConfig.enable   true
  // 

//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

// Синхронизация (Sync). Адрес - about:preferences#sync .


//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

// Не знаю, к чему это относится. Пусть пока будет здесь.


// Отключение создания миниатюр страниц сайтов в папке 
// "%UserProfile%\AppData\Local\Mozilla\Firefox\Profiles\????????.default-esr\thumbnails" или
// "%UserProfile%\AppData\Local\Mozilla\Firefox\Profiles\????????.default\thumbnails"
// How to disable/remove thumbnails?
// https://support.mozilla.org/en-US/questions/973320
// 
// Запрет создания эскизов страниц для страницы "новая вкладка".
user_pref("browser.pagethumbnails.capturing_disabled", true);
// ???
// Странно, на одном из сайтов написано browser.pageThumbs.enabled. Так как всё-таки правильно?
// Пока не буду использовать этот параметр.
// user_pref("pageThumbs.enabled", false);
// user_pref("browser.pageThumbs.enabled", false);


//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

// Тут данные, с которыми нужно разобраться.


// Это взято из настроек браузера. Нужно с этим разобраться.
// *
// Новая вкладка (new tab page).
//user_pref("browser.newtabpage.activity-stream.impressionId", "{30088db2-0003-49c6-8c3c-5a98e7b64c92}");
//user_pref("browser.newtabpage.activity-stream.showSearch", false);
//user_pref("browser.newtabpage.activity-stream.topSitesRows", 2);
//user_pref("browser.newtabpage.blocked", "{\"5Bizup6/PjFjQQg4pWFIyg==\":1,\"1BQ1UXclakw4M/xLJXsenA==\":1,\"9ACx3L2Oa8KZfqy7ut8wIA==\":1,\"WqnE25Yf0hUFfvN2lwsM/w==\":1,\"CZog642XMVnSH2mCB7bSHQ==\":1,\"XSflfYFvY/u9hnwo+wTsWA==\":1,\"J2k0Im/ylNsy7PYRKUgRcA==\":1,\"6YaEA39kmCyQaPSO7Y8zyA==\":1,\"l7EvDKDBygpQzNuDw2RlBw==\":1,\"CCqX5E0XkxeTGK/Kae0bag==\":1,\"d6P7u91W73bjJOcA6dJzeA==\":1,\"Rb5L4W5D5ySoRGNX5GSMNg==\":1,\"Vdux/UBg3DZxOeR2mC7UFw==\":1,\"/rOW11o7jCa3O82QmV1NYg==\":1,\"A2klKJm534g98BjiJsbjmw==\":1,\"3qon12cQfj/mmBDhcNz/Cw==\":1,\"MhTk5eVOcwQDCC+iMh98+g==\":1,\"KoIJA24dRSfnuHxzNIRihQ==\":1,\"8M14I5GfmCF0rrIQCpq1TQ==\":1,\"aYG2Yv2hX5tCUzCHsmBTkw==\":1,\"S7rMKXWIiqjdNxqN1n+pEA==\":1,\"zKrEiZrPHVoeX+/YhUCP3w==\":1,\"a3PClbXS1QXdCL//yZ4TNQ==\":1,\"t/LJFzlEFI6UccbWkrI+5Q==\":1,\"Tg3r5AnpLCx21eo/7uA8qA==\":1,\"5pWkO2Aja5fdGTD60M33iw==\":1,\"pxxN1kwRxuukTjjUXR5W3g==\":1,\"BAM0bxS1UVKKcDcFBVwarQ==\":1,\"jc5Nr5yJCUOraNcYYy8ShQ==\":1,\"QwaZFbhAAN2QEM8wk45YDw==\":1,\"Bo/k2Q4m5v7StcNkGKF+aw==\":1,\"N4eMoF496RbBtKZBmz2hhA==\":1}");
//user_pref("browser.newtabpage.pinned", "[{\"url\":\"https://www.virustotal.com/gui/home/upload\",\"label\":\"VirusTotal\",\"baseDomain\":\"virustotal.com\"},{\"url\":\"https://www.ozon.ru/\",\"label\":\"ozon\",\"baseDomain\":\"ozon.ru\"},{\"url\":\"https://www.youtube.com/\",\"label\":\"YouTube\",\"baseDomain\":\"youtube.com\"},{\"url\":\"https://market.yandex.ru/\",\"label\":\"market.yandex\",\"baseDomain\":\"market.yandex.ru\"},{\"url\":\"https://spb.vseinstrumenti.ru/\",\"label\":\"Р’СЃРµ РРЅСЃС‚СЂСѓРјРµРЅС‚С‹ РЎРџР±\",\"baseDomain\":\"spb.vseinstrumenti.ru\"},{\"url\":\"https://www.avito.ru/\",\"label\":\"avito\",\"baseDomain\":\"avito.ru\"},{\"url\":\"https://www.pochta.ru/\",\"label\":\"РџРѕС‡С‚Р° Р РѕСЃСЃРёРё\",\"baseDomain\":\"pochta.ru\"},{\"url\":\"https://translate.google.ru/?hl=ru&tab=TT\",\"baseDomain\":\"translate.google.ru\"},{\"url\":\"https://ya.ru/\",\"baseDomain\":\"ya.ru\"},{\"url\":\"https://rutube.ru/\",\"baseDomain\":\"rutube.ru\"},{\"url\":\"https://www.kinopoisk.ru/\",\"label\":\"kinopoisk\",\"baseDomain\":\"kinopoisk.ru\"},{\"url\":\"https://dzen.ru/\",\"label\":\"Р”Р·РµРЅ\"}]");
//user_pref("browser.newtabpage.storageVersion", 1);


// 
// Ещё значения, имеющие отношение к ???, но не отображённые в настройках через GUI.
// dom.event.clipboardevents.enabled = false - С помощью данной функции вы запрещаете отправку 
// веб-сайтам уведомлений о том, что вы копируете, вставляете или вырезаете что-либо с их страниц.
// 


// Отключение создания миниатюр страниц сайтов в папке 
// "%UserProfile%\AppData\Local\Mozilla\Firefox\Profiles\????????.default-esr\thumbnails" или
// "%UserProfile%\AppData\Local\Mozilla\Firefox\Profiles\????????.default\thumbnails"
// How to disable/remove thumbnails?
// https://support.mozilla.org/en-US/questions/973320
// 
// Запрет создания эскизов страниц для страницы "новая вкладка".
user_pref("browser.pagethumbnails.capturing_disabled", true);
// ???
// Странно, на одном из сайтов написано browser.pageThumbs.enabled. Так как всё-таки правильно?
// Пока не буду использовать этот параметр.
// user_pref("pageThumbs.enabled", false);
// user_pref("browser.pageThumbs.enabled", false);

// Заинтересовавшие меня настройки.
  // media.hardware-video-decoding.enabled   true
  // media.eme.enabled - проверить!
  // browser.engagement.downloads-button.has-used	true
  // browser.pagethumbnails.capturing_disabled
  // 
  // 
    
  // Вот эту статью стоит просмотреть.
  // about:config (Mozilla Firefox)
  // https://zenway.ru/page/aboutconfig
  
  // https://ru-board.club/computers/soft/41011-268.html
  // в профиле все настройки и расширения хранятся
  // можно хранить и в програмной папке.
  // наконец я нашел как отключить это
  // pref("browser.rights.3.shown", true); 

  // Блокировка настроек.
  // user_pref("pref.privacy.disable_button.cookie_exceptions", false);
  // user_pref("pref.privacy.disable_button.tracking_protection_exceptions", false);
  // user_pref("pref.privacy.disable_button.view_passwords_exceptions", false);
  // 

