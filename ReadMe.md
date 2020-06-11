# Imgur Downloader

Scans text files for images hosted on imgur and downloads them locally

## Installation

```bash
npm i -g imgur-downloader
```

## Usage

```bash
downloader
imgur-downloader
```

or

```bash
npx imgur-downloader
```

or

```bash
npx imgur-downloader --path ./my-dir --output ./results --fileTypes *.md
```

### Options

| flag                   | description    | default       |
|------------------------|----------------|---------------|
| `--path`, `-p`         | Input Path     | `./`          |
| `--output`, `-o`       | Output Path    | `./images`    |
| `--fileTypes`, `-f`    | File Types     | `*.*`         |
| `--useGitIgnore`, `-g` | Use Git Ignore | `true`        |
| `--verbose`, `-v`      | Log extra info | `false`       |
