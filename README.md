# Ogawa Sota Portfolio

Next.jsとmicroCMSを使用した個人ポートフォリオサイトです。

## 🌟 機能

- **夢（Dreams）** - 将来の夢や目標を紹介
- **自己紹介（Profile）** - プロフィール情報
- **作品（Works）** - 制作した作品の紹介
- **資格（Qualification）** - 取得した資格一覧
- **お問い合わせ（Contact）** - HubSpotフォームによるお問い合わせ

## 🛠 技術スタック

- **フレームワーク**: Next.js 14.1.4
- **言語**: TypeScript
- **CMS**: microCMS
- **スタイリング**: CSS Modules
- **フォーム**: HubSpot Forms

## 📦 インストール

```bash
# 依存関係のインストール
npm install
```

## 🔧 環境変数

`.env.local`ファイルを作成し、以下の環境変数を設定してください：

```env
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
HUBSPOT_PORTAL_ID=your-portal-id
HUBSPOT_FORM_ID=your-form-id
```

## 🚀 開発

```bash
# 開発サーバーの起動
npm run dev
```

http://localhost:3000 でアプリケーションにアクセスできます。

## 📝 ビルド

```bash
# 本番用ビルド
npm run build

# 本番サーバーの起動
npm start
```

## 📁 プロジェクト構成

```
app/
├── _components/     # 共通コンポーネント
├── _constants/      # 定数
├── _libs/           # ユーティリティ・API関連
├── dream/           # 夢ページ
├── profile/         # 自己紹介ページ
├── works/           # 作品ページ
├── qualification/   # 資格ページ
├── contact/         # お問い合わせページ
└── page.tsx         # ホームページ
```

## 📄 ライセンス

© Ogawa Sota. All Rights Reserved 2026
