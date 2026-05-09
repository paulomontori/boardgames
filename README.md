# Boardgames — Gian e Paulo

GitHub Pages estático para consultar o acervo descrito em `Boardgames - Gian e Paulo - mai 2026.pdf`.

## O que tem na página

- Catálogo com 52 jogos extraídos do PDF original.
- Busca por nome, estilo e descrição.
- Filtros por modo de jogo, complexidade e perfil de party game.
- Cards responsivos com jogadores, tempo, estilo, como funciona, sensação jogando e ponto forte.

## Publicação no GitHub Pages

A branch criada para a página é `feature/pages`. Para publicar, configure o GitHub Pages do repositório para usar esta branch e a pasta raiz (`/`).

## Desenvolvimento local

Como é uma página estática, basta abrir `index.html` no navegador ou servir a pasta com qualquer servidor HTTP simples, por exemplo:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.
