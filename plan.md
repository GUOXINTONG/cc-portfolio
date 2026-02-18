# 个人网站建设计划文档

## 项目概述

为一名大模型算法工程师构建极简主义风格的个人网站，展示专业作品、博客文章和个人经历。采用低饱和度色调设计，支持暗色/亮色主题切换，完全适配移动端。

---

## 一、技术栈选择与理由

### 1.1 核心框架：Astro

**选择理由：**

- **性能优势**：Astro 采用 Islands 架构，默认零 JavaScript，页面加载速度极快，对 SEO 友好
- **内容驱动**：原生支持 Markdown/MDX，非常适合博客和内容型网站
- **SEO 友好**：静态站点生成，搜索引擎可完美抓取
- **框架无关**：组件可以使用 React/Vue/Svelte 编写，但当前项目纯 Astro 足够简洁
- **部署便利**：与 Vercel 完美集成，一键部署

### 1.2 样式方案：Tailwind CSS

**选择理由：**

- **原子化 CSS**：无需编写自定义 CSS 文件，通过类名快速构建界面
- **主题系统**：内置 `dark:` 前缀，主题切换实现简单
- **设计系统**：提供一套完整的设计 token（间距、颜色、字体等），保证设计一致性
- **体积优化**：生产环境自动 purge 未使用的样式，最终 CSS 体积极小

### 1.3 其他技术选型

| 技术/服务 | 用途 | 理由 |
|-----------|------|------|
| TypeScript | 类型安全 | Astro 原生支持，减少运行时错误 |
| MDX | 博客写作 | 支持在 Markdown 中使用组件，更灵活 |
| @astrojs/rss | RSS 生成 | 官方插件，一键生成 RSS 订阅 |
| @astrojs/sitemap | 站点地图 | 官方 SEO 插件，自动生成 sitemap.xml |
| @astrojs/partytown | Google Analytics | 将第三方脚本移至 web worker，提升性能 |
| giscus | 评论系统 | 基于 GitHub Discussions，免费、无广告、支持 Markdown |
| Vercel | 部署托管 | 原生支持 Astro，自动 CI/CD，全球 CDN |

---

## 二、文件结构规划

```
cc-portfolio/
├── .github/
│   └── workflows/           # GitHub Actions（可选，自动化任务）
├── public/
│   ├── favicon.svg          # 网站图标
│   ├── og-image.png         # 默认 Open Graph 图片（1200x630）
│   └── fonts/               # 自定义字体文件（如需要）
├── src/
│   ├── assets/
│   │   └── images/          # 项目图片、头像等静态资源
│   ├── components/
│   │   ├── ui/              # 通用 UI 组件
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   ├── Tag.astro
│   │   │   └── ThemeToggle.astro    # 主题切换按钮
│   │   ├── layout/          # 布局相关组件
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── MobileNav.astro      # 移动端导航
│   │   │   └── BaseHead.astro       # 基础 head 标签（SEO）
│   │   └── content/         # 内容展示组件
│   │       ├── ProjectCard.astro
│   │       ├── BlogCard.astro
│   │       ├── GiscusComments.astro # 评论组件
│   │       └── Analytics.astro      # Google Analytics
│   ├── content/
│   │   ├── blog/            # 博客文章（Markdown/MDX）
│   │   │   ├── hello-world.mdx
│   │   │   └── ...
│   │   ├── projects/        # 项目数据（JSON/YAML）
│   │   │   └── data.json
│   │   └── config/          # 站点配置
│   │       └── site.json    # 站点元信息、社交链接等
│   ├── layouts/
│   │   ├── BaseLayout.astro     # 基础布局（所有页面继承）
│   │   ├── BlogLayout.astro     # 博客文章布局
│   │   └── PageLayout.astro     # 普通页面布局
│   ├── pages/
│   │   ├── index.astro          # 首页
│   │   ├── about.astro          # 关于我
│   │   ├── projects.astro       # 作品集
│   │   ├── blog/
│   │   │   ├── index.astro      # 博客列表页
│   │   │   └── [slug].astro     # 博客详情页（动态路由）
│   │   └── rss.xml.js           # RSS 订阅源
│   ├── styles/
│   │   └── global.css           # 全局样式、Tailwind 导入
│   ├── types/
│   │   └── index.ts             # TypeScript 类型定义
│   └── utils/
│       ├── formatDate.ts        # 日期格式化
│       ├── seo.ts               # SEO 辅助函数
│       └── slugify.ts           # URL slug 处理
├── astro.config.mjs         # Astro 配置文件
├── tailwind.config.mjs      # Tailwind 配置文件（含主题）
├── tsconfig.json            # TypeScript 配置
├── package.json
└── README.md
```

---

## 三、页面设计规划

### 3.1 首页 (Home)

**结构：**
- Hero 区域：姓名、头衔（大模型算法工程师）、一句话简介
- 精选项目：展示 3-4 个 GitHub 仓库（code_rag_gen、MLE 相关）
- 最新博客：展示 3 篇最新文章
- 联系方式：邮箱 terryguo0616@gmail.com + 社交链接

**设计要点：**
- 极简留白，大量空白空间
- 低饱和度主色调（灰色系、深蓝灰、暖米色）
- 项目卡片使用 subtle hover 效果

### 3.2 博客列表页 (Blog)

**结构：**
- 页面标题 + 简介
- 文章列表（卡片式或列表式）
- 标签筛选（可选）
- 分页或无限滚动

**每篇文章展示：**
- 标题
- 发布日期
- 阅读时长估算
- 标签
- 摘要（前 100 字）

### 3.3 博客详情页 (Blog Post)

**结构：**
- 文章标题 + 元信息（日期、标签、阅读时长）
- Markdown 正文
- 分享按钮（Twitter、LinkedIn）
- 相关文章推荐
- giscus 评论区

**Markdown 支持：**
- 代码高亮
- 图片懒加载
- 锚点标题
- 脚注

### 3.4 作品集页面 (Projects)

**结构：**
- 页面标题 + 简介
- 项目网格/列表展示

**每个项目展示：**
- 项目名称
- 简短描述
- 技术标签
- GitHub 链接
- 演示链接（如有）
- 项目截图（可选）

**初始项目列表（基于现有 GitHub 仓库）：**
1. code_rag_gen - RAG 代码生成相关
2. MLE/MLE23-24 - 机器学习工程实践

### 3.5 关于我页面 (About)

**结构：**
- 个人照片（可选）
- 详细介绍：教育背景、工作经历、专业技能
- 技术栈展示
- 职业时间线（可选）
- 联系方式和社交链接

---

## 四、功能实现细节

### 4.1 SEO 优化

**每个页面需包含：**
- `<title>` 和 `<meta name="description">`
- Open Graph 标签（og:title, og:description, og:image, og:type, og:url）
- Twitter Card 标签
- 规范链接 `canonical`
- 结构化数据（JSON-LD）- Person 和 BlogPosting 类型

**站点级 SEO：**
- `robots.txt` 配置
- `sitemap.xml` 自动生成
- RSS 订阅源 `/rss.xml`

### 4.2 主题切换

**实现方案：**
- 使用 Tailwind CSS `dark:` 前缀
- 主题状态存储在 localStorage
- 系统偏好检测 `prefers-color-scheme`
- 切换按钮放置在 Header 右侧
- 无闪烁（FOUC）处理

### 4.3 评论系统 (giscus)

**配置步骤：**
1. 确保仓库是公开的
2. 安装 giscus GitHub App：https://github.com/apps/giscus
3. 在仓库 Settings -> Features 中开启 Discussions
4. 在 giscus.app 生成配置代码
5. 嵌入到博客详情页底部

**主题适配：**
- 评论框主题跟随网站主题切换
- 支持 light、dark、preferred_color_scheme

### 4.4 Google Analytics

**实施：**
- 使用 `@astrojs/partytown` 将 GA 脚本移至 web worker
- 仅生产环境加载
- 遵守 GDPR（如有必要，添加 cookie 同意横幅）

### 4.5 移动端适配

**要点：**
- 响应式断点：sm(640px), md(768px), lg(1024px), xl(1280px)
- 移动端汉堡菜单导航
- 触摸友好的按钮尺寸（最小 44x44px）
- 字体大小适配
- 图片响应式加载

---

## 五、设计系统

### 5.1 色彩方案（低饱和度）

```css
/* 亮色主题 */
--background: #fafaf9;      /* stone-50 */
--foreground: #1c1917;      /* stone-900 */
--primary: #57534e;         /* stone-600 */
--secondary: #a8a29e;       /* stone-400 */
--muted: #f5f5f4;           /* stone-100 */
--border: #e7e5e4;          /* stone-200 */

/* 暗色主题 */
--background: #0c0a09;      /* stone-950 */
--foreground: #fafaf9;      /* stone-50 */
--primary: #a8a29e;         /* stone-400 */
--secondary: #78716c;       /* stone-500 */
--muted: #1c1917;           /* stone-900 */
--border: #292524;          /* stone-800 */
```

### 5.2 字体

- **标题**：系统无衬线字体栈（Inter、system-ui、-apple-system）
- **正文**：同上，保持简洁
- **代码**：JetBrains Mono 或 Fira Code（等宽）

### 5.3 间距

- 页面最大宽度：max-w-3xl（768px）用于阅读页面，max-w-6xl（1152px）用于展示页面
- 段落间距：1.5rem - 2rem
- 组件间距：gap-6 到 gap-12

---

## 六、实施步骤

### 阶段一：项目初始化（预计 1-2 小时）

1. **创建 Astro 项目**
   ```bash
   npm create astro@latest . -- --template minimal --typescript strict
   ```

2. **安装依赖**
   ```bash
   npm install @astrojs/tailwind @astrojs/mdx @astrojs/rss @astrojs/sitemap @astrojs/partytown
   npm install -D @tailwindcss/typography
   ```

3. **初始化配置**
   - `astro.config.mjs` - 配置站点 URL、集成插件
   - `tailwind.config.mjs` - 配置暗色模式、自定义颜色
   - `tsconfig.json` - TypeScript 路径别名

4. **搭建基础布局**
   - 创建 `BaseLayout.astro`
   - 配置全局样式
   - 实现主题切换基础逻辑

### 阶段二：核心页面开发（预计 4-6 小时）

1. **公共组件**
   - Header + 导航 + 移动端菜单
   - Footer
   - BaseHead（SEO 元标签）
   - ThemeToggle

2. **首页**
   - Hero 区域
   - 精选项目展示
   - 最新博客预览
   - 联系方式区域

3. **关于我页面**
   - 个人介绍内容
   - 技能展示
   - 时间线（可选）

4. **作品集页面**
   - 项目数据配置文件
   - 项目卡片组件
   - 网格布局展示

### 阶段三：博客系统（预计 3-4 小时）

1. **内容集合配置**
   - 配置 `src/content/blog/` 集合
   - 定义文章 frontmatter schema

2. **博客列表页**
   - 获取所有文章
   - 列表展示
   - 排序和筛选

3. **博客详情页**
   - 动态路由 `[slug].astro`
   - MDX 渲染
   - 代码高亮
   - 文章导航（上一篇/下一篇）

4. **示例文章**
   - 创建 2-3 篇示例博客用于测试

### 阶段四：功能集成（预计 2-3 小时）

1. **SEO 完善**
   - sitemap.xml 自动生成
   - RSS 订阅源
   - Open Graph 图片
   - 结构化数据

2. **评论系统**
   - 配置 giscus
   - 嵌入评论组件
   - 主题联动

3. **Analytics**
   - Google Analytics 配置
   - Partytown 集成

4. **性能优化**
   - 图片优化
   - 字体加载优化
   - 预加载关键资源

### 阶段五：部署上线（预计 1 小时）

1. **Vercel 配置**
   - 连接 GitHub 仓库
   - 配置构建命令
   - 设置环境变量（如需要）

2. **域名配置（可选）**
   - 自定义域名
   - HTTPS 证书

3. **最终测试**
   - 多端测试
   - 性能测试（Lighthouse）
   - SEO 验证

---

## 七、第三方服务清单

| 服务 | 用途 | 费用 | 配置复杂度 |
|------|------|------|-----------|
| **GitHub** | 代码托管、Discussions（评论） | 免费 | 低 |
| **Vercel** | 网站部署、CDN | 免费版足够 | 低 |
| **giscus** | 评论系统 | 免费 | 中 |
| **Google Analytics** | 访问统计 | 免费 | 低 |
| **Unsplash（可选）** | 免费图片素材 | 免费 | 低 |

### 配置清单

1. **GitHub Repository**
   - 已有：`GUOXINTONG/cc-portfolio`
   - 操作：开启 Discussions 功能

2. **giscus 配置**
   - 访问：https://giscus.app
   - 填写仓库名：`GUOXINTONG/cc-portfolio`
   - 选择 Discussion 分类：General
   - 复制生成的配置代码

3. **Google Analytics**
   - 访问：https://analytics.google.com
   - 创建新的数据流
   - 获取 Measurement ID（G-XXXXXXXXXX）

4. **Vercel 部署**
   - 访问：https://vercel.com
   - 导入 GitHub 仓库
   - 框架预设：Astro

---

## 八、内容填充指南

### 8.1 首页内容

**自我介绍示例：**
> 我是 Terry，一名专注于大模型应用的算法工程师。我热衷于探索 LLM 在代码生成、知识检索等领域的创新应用，致力于将前沿 AI 技术转化为实际产品价值。

**精选项目：**
- code_rag_gen：基于 RAG 的代码生成系统
- MLE 系列：机器学习工程实践项目

### 8.2 博客文章规划

建议初期撰写以下主题：
1. 大模型应用开发最佳实践
2. RAG 系统设计与优化
3. 机器学习工程化经验分享
4. 技术学习笔记与总结

### 8.3 关于我内容结构

- **当前职位**：AI Engineer @ HKRC
- **专业领域**：大语言模型、RAG、代码生成、机器学习工程
- **教育背景**：（待补充）
- **工作经历**：（待补充）
- **联系方式**：terryguo0616@gmail.com

---

## 九、后续迭代计划

### V1.1（内容完善）
- 完善关于我页面内容
- 撰写 5-10 篇博客文章
- 补充更多项目展示

### V1.2（功能增强）
- 文章搜索功能
- 标签云
- 文章系列/专题功能

### V1.3（性能优化）
- 图片 CDN（Cloudinary/Imgix）
- Edge Functions
- 增量静态再生成（ISR）

---

## 十、注意事项

1. **内容优先**：框架搭建完成后，内容是核心，定期更新博客
2. **SEO 长期主义**：新站点需要 1-3 个月才能看到 SEO 效果
3. **图片优化**：所有图片应压缩，使用 WebP 格式，添加 alt 文本
4. **代码规范**：使用 ESLint + Prettier 保持代码整洁
5. **可访问性**：确保 WCAG 2.1 AA 级别可访问性

---

**文档版本**：v1.0
**制定日期**：2026-02-18
**作者**：Claude Code Assistant
