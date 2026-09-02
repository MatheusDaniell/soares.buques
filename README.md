# Soares Buquês — site

Site em página única (single page) para a floricultura **Soares Buquês** (Maceió-AL),
construído com **Vite + React + TypeScript + Tailwind CSS v4**.

## Rodando localmente

Pré-requisitos: Node.js 18+ instalado.

```bash
npm install
npm run dev
```

O terminal vai mostrar um endereço local (algo como `http://localhost:5173`) — abra no navegador.

Outros comandos úteis:

```bash
npm run build     # gera a versão de produção na pasta dist/
npm run preview   # roda um servidor local para conferir o build de produção
```

## O que editar primeiro

Praticamente todos os dados do negócio ficam centralizados em **`src/config/site.ts`**:

- `WHATSAPP_NUMBER` — número de WhatsApp da loja, só dígitos, com DDI+DDD (ex: `5582999998888`). É o único lugar que precisa ser trocado para todos os botões de WhatsApp do site funcionarem.
- `WHATSAPP_DEFAULT_MESSAGE` — mensagem padrão enviada ao clicar em "Fazer pedido".
- `SITE.endereco`, `SITE.horario`, `SITE.instagram`, `SITE.mapsEmbedSrc` — endereço, horário de funcionamento, link do Instagram e o mapa incorporado.

Depois de editar esse arquivo, salve e o site já reflete as mudanças (com `npm run dev` rodando).

### Trocando o mapa

`SITE.mapsEmbedSrc` usa uma busca genérica por "Maceió, AL". Para apontar exatamente para o
endereço da loja:

1. Abra [Google Maps](https://maps.google.com) e busque o endereço real.
2. Clique em **Compartilhar → Incorporar um mapa** e copie a URL de dentro do atributo `src` do `<iframe>` gerado.
3. Cole essa URL em `SITE.mapsEmbedSrc`.

## Trocando as fotos placeholder pelas fotos reais

Todo lugar do site que hoje mostra um retângulo com um ícone de flor e um texto (ex: "Foto —
Buquê Ana") é o componente `PhotoPlaceholder` (`src/components/PhotoPlaceholder.tsx`). Ele existe
só para marcar visualmente onde uma foto real deve entrar.

Para trocar por uma foto real:

1. Coloque o arquivo de imagem dentro de `src/assets/` (crie a pasta se não existir), por exemplo `src/assets/buque-ana.jpg`.
2. No componente onde a foto aparece (`Hero.tsx`, `About.tsx`, `Catalog.tsx`, etc.), importe a imagem no topo do arquivo:
   ```tsx
   import buqueAna from '../assets/buque-ana.jpg'
   ```
3. Troque o `<PhotoPlaceholder ... />` correspondente por uma tag de imagem normal, reaproveitando as mesmas classes de `className` para manter o tamanho e o arredondamento:
   ```tsx
   <img src={buqueAna} alt="Buquê Ana" className="h-48 w-full flex-1 object-cover" />
   ```

O catálogo (`src/components/Catalog.tsx`) tem uma lista `PRODUTOS` no topo do arquivo — é ali que
ficam nome, categoria e preço "a partir de" de cada item. Edite essa lista para refletir o
catálogo real, e adicione mais itens copiando o formato de um já existente.

Os depoimentos (`src/components/Testimonials.tsx`) funcionam do mesmo jeito, numa lista
`DEPOIMENTOS` no topo do arquivo.

## Estrutura de pastas

```
src/
  components/   componentes de cada seção (Navbar, Hero, Catalog, etc.)
  config/       dados centrais do negócio (site.ts)
  assets/       (crie aqui) fotos reais dos produtos
  index.css     tema de cores, fontes e estilos globais
  App.tsx       monta as seções na ordem em que aparecem no site
```

## Sobre o que não foi incluído

Conforme combinado, o site não tem backend, carrinho de compras nem pagamento online — todo
pedido é fechado diretamente pelo WhatsApp, com retirada na loja ou entrega combinada.

## Publicando o site

Depois de rodar `npm run build`, a pasta `dist/` contém o site pronto para publicar em qualquer
serviço de hospedagem estática (Vercel, Netlify, GitHub Pages, etc.).
