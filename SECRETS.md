# comentario.conf:
```bash
# The port to listen on. Defaults to a random port, so you'll most likely want to use some fixed value
PORT=8000

# Server ^`^ys own base URL. Defaults to "http://localhost:8080"
BASE_URL=https://comments.fswiki.ru
```

# nginx conf coments:
```bash
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

	ssl_certificate /etc/letsencrypt/live/comments.fswiki.ru/fullchain.pem; # managed by Certbot
	ssl_certificate_key /etc/letsencrypt/live/comments.fswiki.ru/privkey.pem; # managed by Certbot
	include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
	ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

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

	# snipped out code here

	# Browser caching for other JS files
	location ~* ^(?!/comentario\.js$).*\.js$ {
		add_header Cache-Control "public, no-transform";
		access_log off;
		expires 30d;
		try_files $uri =404;
	}

}
```