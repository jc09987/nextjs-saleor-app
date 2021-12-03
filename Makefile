.PHONY: up down stop prune ps shell logs

default: build

up:
	@echo "Starting up containers..."
	docker-compose pull
	docker-compose up -d --remove-orphans

down:
	@echo "Stopping containers..."
	@docker-compose stop

prune:
	@echo "Removing containers..."
	@docker-compose down -v --remove-orphans

# https://stackoverflow.com/a/6273809/1826109
%:
	@: