// UTF-8 Unix (LF).
// 
// Справка.
// 
// Расположение данного файла.
// Для Windows: 
// "C:\Program Files\Mozilla Firefox\defaults\pref".
// Работает в паре с файлом "firefox.cfg" (имя можно менять), который должен быть расположен в
// директории "C:\Program Files\Mozilla Firefox". 
// 
// 
// 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
// 
// 
// О кодировке файла и последовательности конца строки.
// 
// В этом файле можно использовать кодировку UTF-8, но обязательно с последовательностью 
// конца строки "Unix (LF)", что я и делаю. Про последовательность конца строки написано в офиц. 
// справке "Customizing Firefox Using AutoConfig" ( 
// https://support.mozilla.org/en-US/kb/customizing-firefox-using-autoconfig ) 
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
// 
// В Win при использовании UTF-8-BOM Unix (LF) браузер игнорирует этот файл и при этом, почему-то
// не сообщая о каких либо ошибках. Но, это пол беды. При определённой конфигурации из используемых 
// файлов "autoconfig.js", "firefox.cfg" (прописан в "autoconfig.js") и "user.js" настройки и вовсе 
// могут слететь (как минимум какая-то их часть). Я так и не смог выявить точной закономерности. 
// Получается, что браузер почему-то не может гарантированно корректно работать с файлом у которого
// используется "BOM" ("Byte Order Mark"). "Для указания, что файл или поток содержит символы Юникода, 
// в начале файла или потока может быть вставлен маркер последовательности байтов (англ. Byte order mark, 
// BOM), который в случае кодирования в UTF-8 принимает форму трёх байтов: EF BB BF." ( 
// https://ru.wikipedia.org/wiki/UTF-8 ).
// Данная ситуация с BOM очень плохая, ведь BOM позволяет программе-редактору гарантированно 
// открывать файл в правильной кодировке.
// 
pref("general.config.filename", "firefox.cfg");
pref("general.config.obscure_value", 0);

