DOCKER_COMPOSE = docker compose
APP = $(DOCKER_COMPOSE) exec app

.PHONY: help setup dev storybook test test-watch build clean

help: ## ヘルプを表示する
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
	  awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

setup: ## Docker コンテナを起動して npm install を実行する
	$(DOCKER_COMPOSE) up -d
	$(APP) npm install

dev: ## Vite dev server を起動する (http://localhost:5173)
	$(APP) npm run dev

storybook: ## Storybook を起動する (http://localhost:6006)
	$(APP) npm run storybook

test: ## Vitest を実行する
	$(APP) npm run test

test-watch: ## Vitest をウォッチモードで実行する
	$(APP) npm run test:watch

build: ## プロダクションビルドを実行する
	$(APP) npm run build

clean: ## Docker ボリュームと node_modules を削除する
	$(DOCKER_COMPOSE) down -v
	rm -rf node_modules
