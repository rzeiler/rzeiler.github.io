---
title: Swiftmailer und Gmail
meta: 
- name: description
  content: Swiftmailer und Gmail
- name: keywords 
  content: Swiftmailer Gmail PHP
---

# Swiftmailer und Gmail

## Fehler

::: danger Fehler
stream_socket_enable_crypto(): SSL operation failed with code 1
:::

Um eine E-Mail erfolgreich zu versenden muß sich [Swiftmailer](https://github.com/swiftmailer/swiftmailer) zuerst über den tls ([Transport Layer Security](https://de.wikipedia.org/wiki/Transport_Layer_Security)) verbinden. Mit der Option streamOptions ssl wird dann auch das richtige Zertifikat verwendet.

## Einstellung / Config

```php
[
'class' => 'yii\swiftmailer\Mailer',
'useFileTransport' => false,
'transport' => [
    'class' => 'Swift_SmtpTransport',
    'host' => 'smtp.gmail.com',
    'username' => 'xxx@gmail.com',
    'password' => 'xxx',
    'encryption' => 'tls',
    'port' => '587',
    'streamOptions' => [
        'ssl' => [
            'verify_peer' => false,
            'allow_self_signed' => true
        ],
    ],
],
...
```