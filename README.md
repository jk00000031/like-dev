# Dev Exchange

本项目不支持他人分支推送合并，如果在使用过程中有问题反馈或觉得需要追加通用功能可在 Issue 中提出。  
定制化功能在自身有能力扩展时请自行开发！

## 部署

本项目是在 nuxt server 上开发，因此在部署时只需完成以下三个步骤即可完成部署并访问。  
在开始部署前，请在命令行工具安装依赖

```base
cd /[Your path]
pnpm install
```

1. 数据库推送
   进入项目根目录 `/` 后执行命令 `pnpm dlx prisma db push`，数据库将推送到 `.env` 文件声明的 `DATABASE_URL` 地址上
2. 项目构建
   步骤 1 已经进入根目录，继续执行命令 `pnpm run build`
3. 部署
   本项目推荐使用 `pm2` 部署，先全局安装 `pm2`: `sudo pnpm add pm2 -g`，之后执行 `pnpm run start` 就完成啦！
