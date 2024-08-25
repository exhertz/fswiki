

# <img src="wiki/public/android-chrome-192x192.png" width="22" style="margin:auto;"/> FSWIKI

[Homepage](https://fswiki.ru) · [Discord]()

---

fswiki — Открытый и доступный каждому справочник по игре farming simulator 25.  

## Сделан с использованием
- [Vitepress](https://github.com/vuejs/vitepress);
- Библиотека компонентов [Naive UI](https://www.naiveui.com);
- Система комментирования [Comentario](https://gitlab.com/comentario/comentario);

## Настройка comentario
Система комментариев поддерживает много способов установки (в том числе Docker), в случае fswiki был выбран .deb пакет.  
Ниже представлены ключевые конфигурационные файлы системы и сервера nginx.
```bash
# /comentario.conf
PORT=8000
BASE_URL=https://comments.fswiki.ru
```
```bash
# /etc/nginx/sites-available/fswiki
upstream comentario_backend {
	server 127.0.0.1:8000;
}

server {
	listen 80 backlog=4096;
	server_name comments.fswiki.ru;
	return 301 https://$host$request_uri;
}


server {
    listen 443 ssl backlog=4096;

    server_name comments.fswiki.ru;

	# SSL by Certbot here

	# Comentario default directory
	root /usr/lib/comentario/frontend;

	location / {
		proxy_pass http://comentario_backend;
		proxy_http_version 1.1;
		proxy_set_header Connection 'upgrade';
		proxy_set_header Host $host;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header X-Forwarded-Host $host;
		proxy_set_header X-Forwarded-Proto $scheme;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_cache_bypass $http_upgrade;
	}

	# comentario.js is dynamic
	location = /comentario.js {
		proxy_pass http://comentario_backend;
	}

	# API calls
	location /api/ {
		proxy_pass http://comentario_backend;

		# Handle OPTIONS requests (CORS preflight requests)
		if ($request_method = 'OPTIONS') {
			add_header 'Access-Control-Allow-Origin' 'https://fswiki.ru';
			add_header 'Access-Control-Allow-Credentials' 'true';
			add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,x-user-session';
			add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS';
			return 204;
		}
	}

	# Browser caching for other JS files
	location ~* ^(?!/comentario\.js$).*\.js$ {
		add_header Cache-Control "public, no-transform";
		access_log off;
		expires 30d;
		try_files $uri =404;
	}

}
```