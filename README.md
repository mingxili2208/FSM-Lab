# FSM Lab — 模块化实验室展示平台

基于 Next.js 14 (App Router) + Tailwind + Lucide + Framer Motion 的全局骨架，支持多语言与静态导出。

## 开发

```bash
npm install
npm run dev
```

## 如何让其他人访问你的网站

本框架可直接挂在 GitHub 上使用，他人可通过链接访问。常用两种方式：

### 方式一：GitHub Pages（仓库在 GitHub 即可）

1. **把代码推到 GitHub**  
   在项目根目录执行：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/<你的用户名>/<仓库名>.git
   git branch -M main
   git push -u origin main
   ```

2. **开启 GitHub Pages**  
   仓库页面 → **Settings** → **Pages** → **Build and deployment** 里：
   - **Source** 选 **GitHub Actions**。

3. **自动发布**  
   每次推送到 `main` 分支时，仓库里的 [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) 会自动构建并部署。

4. **访问地址**  
   他人（和你）的访问链接为：
   ```text
   https://<你的用户名>.github.io/<仓库名>/
   ```
   例如仓库名为 `FSM-Lab`、用户名为 `fsm`，则链接为：`https://fsm.github.io/FSM-Lab/`。

### 方式二：Vercel / Netlify（推荐，链接更短）

1. 将本仓库 **Push 到 GitHub**（若尚未推送，同上）。
2. 打开 [vercel.com](https://vercel.com) 或 [netlify.com](https://netlify.com)，用 GitHub 登录。
3. **Import** 该仓库，保持默认构建命令（Vercel/Netlify 会识别 Next.js）。
4. 部署完成后会得到一个**独立域名**，例如：
   - Vercel：`https://fsm-lab-xxx.vercel.app`
   - Netlify：`https://xxx.netlify.app`  
   把该链接发给他人即可访问，无需像 GitHub Pages 那样带仓库路径。

---

## 静态构建（本地）

```bash
npm run build
```

产物在 `out/`，可自行上传到任意静态托管（如 GitHub Pages、Vercel、Netlify 等）。

## 项目结构概览

- `app/` — 根布局、全局样式、首页占位
- `components/` — Navbar、Footer
- `lib/i18n/` — 语言上下文、翻译字典、类型（联合国六语）
- `lib/data.ts` — 项目数据结构与示例数据

## 设计系统

- 背景 Slate-950，主色 Indigo-500，强调色 Violet-400
- 玻璃拟态 (`.glass-panel`)、细边框、大圆角 (rounded-xl)
- 字体 Inter

## 约束

- 未使用 API Routes 或服务端运行时，数据均在 `lib/data.ts` 或客户端获取
- 图片已配置 `unoptimized: true`，适配静态导出
