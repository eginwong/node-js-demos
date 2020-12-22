# Security

- dependency vulnerabilities
  - npm does that automatically now with --audit and --fix
  - `synk` if you want to
- hardening headers

pre
```sh
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 170
ETag: W/"aa-z+ebXSEdArbZ+EXlN/WQjf6HV8c"
Date: Sat, 19 Dec 2020 23:37:46 GMT
Connection: close
```

post
```sh
HTTP/1.1 200 OK
Content-Security-Policy: default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests
X-DNS-Prefetch-Control: off
Expect-CT: max-age=0
X-Frame-Options: SAMEORIGIN
Strict-Transport-Security: max-age=15552000; includeSubDomains
X-Download-Options: noopen
X-Content-Type-Options: nosniff
X-Permitted-Cross-Domain-Policies: none
Referrer-Policy: no-referrer
X-XSS-Protection: 0
Content-Type: text/html; charset=utf-8
Content-Length: 170
ETag: W/"aa-z+ebXSEdArbZ+EXlN/WQjf6HV8c"
Date: Sat, 19 Dec 2020 23:56:00 GMT
Connection: close
```
  - `helmet` or `lusca`
    - X-Powered-By
      - can avoid letting attackers know what web server framework
        - avoid exposing potential security exploits
    - `X-Frame-Options: SAMEORIGIN` prevents iframe-based Click Jacking
    - `X-DNS-Prefetch-Control: off` to disallow for privacy issues
    - `X-Download-Options: noopen` to protect IE8
    - `X-Content-Type-Options: nosniff` disallows browser from guessing MIME types, stopping MIME attacks
    - `X-XSS-Protection` to filter malicious URL pieces, only protects against Reflected XSS