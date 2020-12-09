run:
	#Docker
	docker build -t gmahota/node-api-sample .
	docker-compose up
	docker run -it --rm --name my-running-script -v "$PWD":/usr/src/app -w /usr/src/app node:8 node your-daemon-or-script.js