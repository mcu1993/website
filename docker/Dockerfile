FROM harbor.dev56.cn/base/node:20 AS builder

WORKDIR /app/project

# install packages
COPY package.json yarn.lock ./
RUN yarn
# build project
COPY . ./
RUN yarn generate

FROM harbor.dev56.cn/base/nginx:1
COPY --from=builder /app/project/dist ./public





