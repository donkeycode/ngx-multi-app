start:
	cd app1 && npm i && ng build && cd ..
	cd app2 && npm i && ng build && cd ..
	docker-compose up
