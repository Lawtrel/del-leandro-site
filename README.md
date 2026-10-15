# Del & Leandro ♥ — V3

A V3 usa o projeto V2 como base e incorpora **oito fotos reais**, em ordem cronológica, desde o primeiro encontro. Mantém o fundo escuro, os tons rosados, a tipografia, os cartões e a estrutura responsiva da V2.

As fotos estão incluídas no ZIP em `public/photos/timeline/`. Não é preciso importar o WhatsApp para vê-las. A galeria mostra cada foto inteira, com data e legenda; clicar abre o arquivo completo em outra aba. Os oito momentos correspondentes na história incluem links diretos para as fotos.

As datas e legendas abaixo foram fornecidas pelo usuário. A imagem de casal foi recebida cinco vezes, com conteúdo idêntico; o projeto inclui uma única cópia. Os demais textos da V2 foram preservados, exceto o registro do primeiro encontro e a correção do marco fotográfico de outubro para **10/10/2026**. Nenhuma narrativa adicional foi criada para as fotos.

Agora o site registra:

- primeiro contato no WhatsApp em **16/06/2026**;
- primeiro encontro em **04/07/2026**;
- fases de junho, julho, agosto e setembro;
- oficialização do namoro em **04/10/2026**;
- galeria cronológica com oito fotos reais e links na história;
- descobertas sobre Del e Leandro;
- princípios do relacionamento;
- cartinhas;
- músicas;
- planos;
- conquistas pessoais e profissionais;
- importador de fotos/vídeos do backup do WhatsApp.

A V1 foi usada como base: login, senha, identidade visual, cartinhas, contador, planos e estrutura Next.js foram preservados e expandidos.

---

## Cronologia herdada da V2

A cronologia foi montada com base na conversa exportada do WhatsApp e nas informações confirmadas na conversa com o ChatGPT.

| Data | Marco |
| --- | --- |
| 16/06/2026 | primeiro `Olá, Leandro aqui` no WhatsApp |
| 17/06/2026 | primeiro convite para cafeteria |
| 20/06/2026 | primeiras conversas longas sobre música e gostos em comum |
| 04/07/2026 | primeiro encontro presencial no Felicità Café |
| 07/07/2026 | conversa explícita deixando claro que o interesse não era só amizade |
| 06/08/2026 | famílias já aparecendo na história e relação entrando na rotina |
| 21/08/2026 | fase do `Tio Uê` com Benjamin |
| 30/08/2026 | conversa importante sobre maternidade e a realidade de se relacionar com uma mãe |
| 02/09/2026 | respeito aos limites ligados à fé |
| 12/09/2026 | decisão de oficializar o namoro no próximo dia 4 |
| 16–17/09/2026 | vulnerabilidade, carreira e apoio mútuo |
| 29/09/2026 | brincadeira com elogios formais / `dama e cavaleiro` |
| 04/10/2026 | namoro oficial |
| 10/10/2026 | foto de casal, com data corrigida conforme informação do usuário |

Nada que não tivesse base nas informações disponíveis foi inventado como fato.

---

## Rodar localmente

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abra:

```text
http://localhost:3000
```

No PowerShell, use `Copy-Item .env.example .env.local` no lugar de `cp .env.example .env.local`. Requer Node.js 20 ou superior e npm. Para verificar os tipos e compilar, execute `npx tsc --noEmit` e `npm run build` após instalar as dependências.

No `.env.local`:

```env
SITE_PASSWORD=uma-senha-que-so-voces-saibam
APP_SECRET=uma-chave-grande-e-aleatoria
```

Para gerar `APP_SECRET`:

```bash
openssl rand -hex 32
```

---

# Fotos reais incluídas na V3

| Data | Legenda | Arquivo em `public/photos/timeline/` |
| --- | --- | --- |
| 04/07/2026 | Primeiro encontro, na cafeteria | `2026-07-04-primeiro-encontro-cafeteria.png` |
| 22/07/2026 | Primeira vez na casa dela | `2026-07-22-primeira-vez-na-casa-dela.png` |
| 12/08/2026 | Vocês conversando no sofá | `2026-08-12-conversa-no-sofa.png` |
| 29/08/2026 | Aniversário de Benjamin, com a irmã dela e o namorado | `2026-08-29-aniversario-de-benjamin.png` |
| 05/09/2026 | Milkshake no Mr. Shake | `2026-09-05-milkshake-mr-shake.png` |
| 07/09/2026 | Com amigos comendo pastel | `2026-09-07-pastel-com-amigos.png` |
| 13/09/2026 | Hambúrguer artesanal | `2026-09-13-hamburguer-artesanal.png` |
| 10/10/2026 | Foto de casal | `2026-10-10-foto-de-casal.png` |

Os arquivos enviados foram copiados sem edição, corte ou recompressão. As legendas seguem a ordem das oito imagens distintas anexadas pelo usuário. A data de cada foto vem do relato do usuário, não dos metadados do arquivo.

## Adicionar ou editar uma foto da galeria

1. Coloque a imagem em `public/photos/timeline/`.
2. Edite `data/timeline-photos.ts`: `id` único, `date` em `AAAA-MM-DD`, `displayDate` em `DD/MM/AAAA`, `month`, `caption`, `src`, `width` e `height`. Mantenha a lista em ordem de data.
3. Para relacionar um evento da história à imagem, adicione o mesmo `photoId` ao evento em `chapters`, no arquivo `data/content.ts`.

A galeria usa uma única lista de fotos. O importador de WhatsApp mantém uma coleção separada e não sobrescreve as imagens curadas.

## Arquivo adicional do WhatsApp

O arquivo de conversa disponível contém referências a **centenas de mídias**. A V2 inclui:

```text
data/whatsapp-media-manifest.json
```

O manifest guarda os nomes de fotos e vídeos que aparecem como anexos no export de WhatsApp disponível.

**Importante:** o `.txt` não contém os bytes das fotos. Ele contém apenas referências como:

```text
IMG-20260905-WA0035.jpg (arquivo anexado)
```

Por isso eu não inventei imagens nem coloquei screenshots como se fossem as fotos originais.

## Importar automaticamente o backup completo

Quando você tiver a pasta extraída do backup do WhatsApp contendo os arquivos `.jpg`, `.mp4`, etc.:

```bash
npm run import-media -- "/caminho/para/pasta-do-backup"
```

O script:

1. percorre toda a pasta do backup;
2. procura os arquivos listados no manifest;
3. copia as fotos/vídeos encontrados para `public/whatsapp-media`;
4. recria `data/imported-media.ts`;
5. a galeria do site passa a exibir as mídias automaticamente;
6. gera `missing-media.txt` com o que não foi encontrado.

Não precisa cadastrar foto por foto.

### Observação sobre o export atual

O texto da conversa atual expõe nomes de arquivos de mídia somente em parte do período. Em outros trechos aparece apenas `<Mídia oculta>`. Para recuperar **100% das fotos**, é necessário o ZIP completo exportado pelo WhatsApp com a opção de incluir mídia.

---

## Galeria e história

`data/timeline-photos.ts` contém as oito fotos em ordem cronológica. `components/HomeExperience.tsx` apresenta a galeria e resolve os vínculos `photoId` dos capítulos, mantendo os cartões e as cores da V2. Não há mais cartões de exemplo na galeria principal.

---

## Onde editar as informações

Quase toda a história está em:

```text
data/content.ts
```

Lá você encontra:

- `relationship`
- `quickDates`
- `chapters`
- `discoveriesAboutDel`
- `discoveriesAboutLeandro`
- `relationshipFoundations`
- `letters`
- `carinho`
- `plans`
- `songs`
- `achievements`
- os vínculos `photoId` nos eventos de `chapters`

As imagens, datas e legendas ficam em `data/timeline-photos.ts`.

Isso deixa a história fácil de atualizar sem precisar mexer no layout.

---

## Publicar no GitHub + Vercel

Eu recomendo usar **repositório privado**, porque o projeto contém textos pessoais do relacionamento.

```bash
git init
git add .
git commit -m "feat: galeria cronologica com fotos reais v3"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

Na Vercel:

1. importe o repositório;
2. adicione `SITE_PASSWORD`;
3. adicione `APP_SECRET`;
4. faça o deploy.

---

## Privacidade importante

O login da V1 foi preservado, mas arquivos colocados dentro de `public/` no Next.js possuem URL direta. Então:

- não coloque documentos, dados médicos, documentos pessoais ou conteúdo altamente sensível;
- prefira um repositório GitHub privado;
- para proteger também as URLs das mídias, use storage autenticado (por exemplo Vercel Blob privado ou Supabase Storage com regras de acesso).

O site é apropriado como álbum romântico; não deve ser tratado como cofre de dados confidenciais.

---

## Próximas melhorias possíveis

- painel para Del e Leandro adicionarem memórias pelo celular;
- Supabase para timeline e fotos;
- Vercel Blob privado para imagens;
- calendário de dates;
- cartas programadas para datas futuras;
- `neste dia, há X meses`;
- mapa apenas com cidades/lugares públicos importantes, sem endereços residenciais;
- metas de carreira separadas para os dois;
- login individual para cada um;
- backup/export das memórias em JSON.

---

## Verificação desta entrega

A montagem foi verificada localmente quanto às oito imagens, sua integridade, ordem cronológica, legendas e vínculos entre história e galeria. A instalação das dependências não pôde ser concluída porque o acesso ao registro de pacotes foi bloqueado neste ambiente; a compilação Next.js e a conferência visual no navegador não foram confirmadas. Execute os comandos de verificação acima em um ambiente com acesso às dependências.

**V3: do primeiro oi às nossas fotos reais. ♥**
