# 2-4-6問題 実験プログラム

認知心理学で有名な「2-4-6問題」を体験できるWebアプリケーションです。

## 概要

2-4-6問題は、参加者が「2-4-6」という数列が満たすルールを推測し、自分の仮説を検証するために様々な数列を試すことができる心理学実験です。

## 使用方法

1. Webブラウザで `index.html` を開く
2. 3つの入力欄に数値を入力する
3. 「Validate」ボタンをクリックまたはEnterキーを押す
4. 結果を確認し、ルールを推測する
5. 異なる数列で繰り返し検証する

## 技術仕様

### ファイル構成
```
├── index.html     # メインのHTMLファイル（構造とスタイル）
├── script.js      # JavaScript実装ファイル（開発用）
├── script.min.js  # Minify化されたJavaScriptファイル（本番用）
└── README.md      # このファイル
```

## ルールについて

現在の実装では、以下のルールで数列を判定しています：

```javascript
value1 < value2 < value3
```

ルールを変更する場合は、`script.js` の該当箇所を修正した後、minify化して `script.min.js` を更新してください。

### Minify化の手順
```bash
# Terserをローカルインストール（初回のみ）
npm install terser
```

```bash
# minify化を実行
npx terser script.js -o script.min.js -c -m
```

## ライセンス

このプログラムはパブリックドメインとして公開しています。
