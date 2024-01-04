# 共享演进 (Shared Evolution)

本项目不支持他人分支推送合并，如果在使用过程中有问题反馈或觉得需要追加通用功能可在 Issue 中提出。  
定制化功能在自身有能力扩展时请自行开发！

## 部署

> 前言：本项目使用 mysql 数据库存储数据，在部署项目前请安装 mysql 并修改根目录下 `.env` 文件的 `DATABASE_URL` 地址，否则项目将不可用！

接下来，请跟随下方命令一起构建并实现最终访问

##### — 安装项目依赖

Shared 使用 `pnpm` 工具管理包，请先安装该包：[pnpm 传送门](https://pnpm.io/zh/installation)
安装好后执行该命令安装依赖

```base
pnpm install
```

##### — 数据库迁移

如若已完成前言提示，那么这些命令不会有任何报错，当然你也可以前往 `prisma` 官网自行查询指令使用：[prisma 传送门](https://www.prisma.io/)

```base
# 推送数据库

pnpm dlx prisma db push
```

在后续的更新中，数据表模型可能会有更新，代码更新或你本地有表模型改动，那么你需要执行这条命令

```base
# 表迁移
# your_migration_name: 这里通常是写你本次对数据库迁移做了什么操作
# 命令中 dev 是指在开发环境的迁移，请注意 dev 和 prod 的配置文件可能有点不同，如果有问题请通过传送门到官网查找解决方法

pnpm dlx prisma migrate dev --name your_migration_name
pnpm dlx prisma migrate dev
```

##### 项目打包

```base
pnpm run build
```

##### 运行

`Nuxt` 的运行非常简单，你可以直接在当前目录运行开始指令，或复制构建后的产物到其它地方运行，不利用工具管理的话，可以直接运行 `pnpm run start` 或 `node ./.output/server/index.mjs`。

当然，正常情况下并不推荐这样使用，我这里推荐 `pm2` 进行管理，如果你喜好其它工具，接下来的可以不看了。

[PM2 传送门](https://pm2.keymetrics.io/)

该工具需要全局安装：

```base
npm install pm2@latest -g
# or
yarn global add pm2
```

通常在服务器上需要运行的是构建后的产物 `.output`，复制产物到服务器后可以运行该命令

```base
cd [You path]/.output
pm2 start server/index.mjs SharedApp

# SharedApp 是显示在 pm2 列表中的名字，方便管理，你可以换成自己喜欢的
```

此时，本项目已经运行在你的服务器上，但仅限于本地访问，我们还需要做代理，让项目可以在局域网或外网访问。

##### 代理

这里的示例使用的是 `nginx`，如果你并不使用它，需要你自己去查找所有工具的文档了：[开源版 nginx 传送门](https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/)

> 由于服务器系统之间包管理工具的不同，相关的安装步骤请通过文档查看！

当然，`nginx` 的文件还是不变的，在 `conf.d` 文件夹内新增自定义网站配置文件，我这里命名为 `shared-evolution.conf`。
------ 请确保在 `nginx.conf` 文件中存在 `include /[你的安装地址]/conf.d/*.conf` 代码 ------

```conf
# shared-evolution.conf
server {
   listen 80;
   server_name example.com;
   # error_log /data/error/nginx_log.log;
   location / {
      proxy_pass http://127.0.0.1:3000/;
   }
}
```

`.conf` 文件保存后重启 `nginx` 即可完成代理，此时你可以通过 `ip` 或者域名在局域网、外网中对该项目进行访问。

示例只是一个简单的 `http` 代理，如果你需要更多配置或代理 `https`，请通过传送门到官网文档查找。
