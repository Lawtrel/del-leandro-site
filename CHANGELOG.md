# Changelog

## V3.0.0

- Usa o ZIP da V2 como base, preservando identidade visual, login e demais seções.
- Inclui oito fotos reais em `public/photos/timeline/`, sem alterar os arquivos enviados.
- Substitui os cartões de exemplo por uma galeria cronológica, com datas e legendas fornecidas pelo usuário.
- Cada foto pode ser aberta inteira; os eventos da história apontam diretamente para a foto correspondente.
- Acrescenta os registros de 22/07, 12/08, 29/08, 05/09, 07/09 e 13/09 e relaciona o primeiro encontro em 04/07 à sua foto.
- Corrige o marco fotográfico de outubro de 11/10 para 10/10/2026.
- Mantém uma única cópia da foto de casal recebida repetidamente.
- Centraliza as fotos em `data/timeline-photos.ts` e mantém o importador de WhatsApp separado.
- Atualiza README e notas da história com o mapeamento das fotos e a limitação de verificação de compilação neste ambiente.

## V2.0.0

- Mantém a identidade visual da V1.
- O contador principal agora começa no primeiro contato no WhatsApp (16/06/2026).
- Adiciona contador separado para primeiro encontro (04/07/2026) e namoro oficial (04/10/2026).
- Expande a história em capítulos de junho, julho, agosto, setembro e outubro.
- Adiciona filtros por mês na timeline.
- Adiciona seções `Coisas que descobri sobre você` e `Coisas que você descobriu sobre mim`.
- Adiciona princípios/acordos importantes do relacionamento.
- Expande as músicas para incluir referências do começo da relação.
- Adiciona galeria dividida por fases.
- Adiciona manifest com referências de fotos/vídeos do export do WhatsApp.
- Adiciona importador automático para o ZIP/pasta do WhatsApp com mídia.
- Adiciona notas de manutenção da história.
- Mantém cartinhas, carinho aleatório, planos, conquistas e tela de senha.
