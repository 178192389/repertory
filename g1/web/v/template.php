<!DOCTYPE html>
<html>
<head>
<title><?php ECHO_V($page_title) ?></title>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<meta name="keywords" content="<?php ECHO_V($meta_keywords) ?>"/>
<meta name="description" content="<?php ECHO_V($meta_description) ?>"/>

<?php ECHO_CSS($page_css) ?>
</head>
<body>
<?php ECHO_V($al_content) ?>
<?php if(App::isDebug()) App::log()->js_console_log(); ?>
</body>
</html>