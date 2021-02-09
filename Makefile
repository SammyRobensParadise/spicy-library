# makefile

.PHONY: help

help:
	@echo "Makefile commands:"
	@echo "all      - One-stop-shop builds and starts everything"
	@echo "builds   - builds library container"
	@echo "fresh    - use if this is a fresh install"
	@echo "install  - Sets version of Yarn to Yarn 2 and installs dependencies"
	@echo "stop     - stops library docker container"
	@echo "styles   - bundles the latest tailwind css for use"
	@echo "up       - builds and starts library container"

builds:
	@echo "Building Docker Images... 🐳"
	docker-compose build
	@echo "Done! ✨"
up: builds
	@echo "Starting library... ⚡️ "
	docker-compose up --build -d
	@docker-compose ps
	@echo "Done! ✨"
	@echo "Storybook Library is running on http://localhost:6006 🌐"
	open http://localhost:6006
	@docker-compose logs --follow
stop:
	@echo "Stopping Library 🛑"
	docker-compose down
	@echo "Done! ✨"
	@echo "Sucessfully stopped Library"
all: builds up
	@echo "Success 🎉"
styles:
	@echo "Bulding tailwindCSS... 💨"
	yarn build:tailwind
	@echo "Done! ✨ Made src/styles/theme.css"
install:
	@echo "Updating to Yarn 2️⃣ 🧶..."
	npm install -g yarn
	yarn set version berry
	@echo "Installing dependencies... ⬇️"
	yarn install
	@echo "Done! ✨"
fresh: install styles builds up
	@echo "Success 🎉"




