start:
	cd app1 && npm i && ng build && cd ..
	cd app2 && npm i && ng build && cd ..
	docker-compose build --no-cache
	docker-compose up

remove:
	docker-compose kill
	docker-compose rm -f
