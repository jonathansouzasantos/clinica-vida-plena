# Clínica Vida Plena — Portal Front-end

Projeto acadêmico desenvolvido com **HTML5, CSS3 e JavaScript puro**, contextualizado no cenário da **Clínica Vida Plena**.

## Objetivo

Construir um portal com quatro páginas interligadas, semântica HTML5, CSS Grid, Flexbox, formulário validado, tabela, mídia externa, indicadores com `<progress>` e acabamento visual responsivo.

## Estrutura

```text
vida-plena-portal-melhorado/
├── index.html
├── detalhes.html
├── cadastro.html
├── contato.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── clinica.svg
    ├── consulta.svg
    ├── perfil.svg
    ├── radiografia.svg
    ├── tomografia.svg
    └── ultrassom.svg
```

## Mapeamento direto para a atividade

### Página 1 — `index.html`
- `<article>` para cada card.
- Imagens com `src`, `alt`, `width` e `height`.
- CSS Grid em `.card-grid`.
- `border-radius`, `box-shadow` e `:hover` com `transform: scale(...)`.
- Vitrine com consultas, radiografia, ultrassonografia e tomografia.

### Página 2 — `detalhes.html`
- Vídeo externo incorporado com `<iframe>`.
- Tabela semântica com `<table>`, `<caption>`, `<thead>`, `<tbody>`, `<tr>`, `<th>` e `<td>`.
- `border-collapse: collapse` no CSS.
- Linhas zebradas e destaque no `:hover`.
- `<dl>`, `<dt>` e `<dd>` para dados do cenário.
- Indicadores com `<progress>` e `<span>`, alinhados com Flexbox.

### Página 3 — `cadastro.html`
- `<form>` dividido com `<fieldset>` e `<legend>`.
- `type="text"` e `type="email"` com `placeholder` e `required`.
- `<select>` e `<option>`.
- Radios agrupados pelo mesmo `name="turno"`.
- Todos os inputs possuem `<label>` associado ao respectivo `id`.
- Estilização `:focus` e botão `type="submit"`.
- JavaScript intercepta a simulação e fornece feedback ao usuário sem armazenar dados.

### Página 4 — `contato.html`
- Profile card centralizado com Flexbox.
- `min-height: calc(100vh - ...)`.
- Imagem de perfil circular com `border-radius: 50%` e `object-fit: cover`. Foto pública do perfil GitHub do autor, incorporada ao arquivo local assets/perfil.svg.
- Ícones de tecnologias via Devicon.
- Links externos com `target="_blank"` e `rel="noopener noreferrer"`.
- Contato rápido com `mailto:`.

## Coerência com o cenário Vida Plena

A interface utiliza informações do projeto acadêmico:
- funcionamento de 06h às 21h;
- 120 exames/dia no cenário;
- radiografia: 60 exames/dia;
- ultrassonografia: 35 exames/dia;
- tomografia: 25 exames/dia;
- pico operacional de 09h às 11h.

Esses dados são apresentados como **cenário acadêmico**, e não como divulgação de uma clínica real.

## Design Thinking aplicado

A interface foi organizada a partir de uma jornada simples:
1. **Entender** os serviços disponíveis;
2. **Escolher** o atendimento adequado;
3. **Solicitar** o atendimento com poucos campos.

Isso reduz carga cognitiva, melhora a hierarquia visual e mantém as principais ações facilmente identificáveis.

## Executar

Abra `index.html` diretamente no navegador ou utilize a extensão **Live Server** no Visual Studio Code.

## Publicar no GitHub

```bash
git init
git add .
git commit -m "feat: cria portal front-end da Clinica Vida Plena"
git branch -M main
git remote add origin https://github.com/jonathansouzasantos/clinica-vida-plena.git
git push -u origin main
```

O repositório deve permanecer **público** e o arquivo principal deve continuar com o nome `index.html`.

## Observação acadêmica

O formulário é apenas demonstrativo. Nenhum dado é persistido e nenhum agendamento real é efetuado.

## Revisão de 18/10/2026

- Menu móvel com Escape, fechamento ao clicar fora e alternativa sem JavaScript.
- Links da vitrine direcionados às linhas correspondentes da tabela.
- Indicadores com nomes acessíveis e tabela navegável pelo teclado.
- Formulário rejeita nomes compostos apenas por espaços, limpa feedback antigo e respeita movimento reduzido.
- Sem JavaScript, o envio permanece desativado para evitar uma submissão acidental.
- Melhorias de contraste, foco, alinhamento dos cards, telas pequenas e impressão.

## Repositório e autoria

- Repositório público: https://github.com/jonathansouzasantos/clinica-vida-plena
- Autor: Jonathan Souza
- Perfil GitHub: https://github.com/jonathansouzasantos
- Contato: jonathanss001@gmail.com

O repositório já foi criado e recebeu os arquivos. Alterações locais posteriores precisam ser enviadas ao GitHub para atualizar a versão entregue.

## Execução e dependências

Abra a pasta no Visual Studio Code e use Live Server para acessar index.html por HTTP. Isso permite fornecer ao YouTube o cabeçalho Referer necessário à incorporação. Abrir o HTML diretamente pode impedir a reprodução, mesmo que o vídeo exista.

As ilustrações SVG ficam em assets e acompanham o projeto. As fontes do Google, os ícones Devicon e o player do YouTube dependem de acesso à internet. As fontes têm alternativas do sistema; os links de tecnologias também possuem rótulos visíveis.

## Conferência antes da entrega

- Abrir as quatro páginas em computador e em uma janela estreita (360 a 390 px).
- Conferir navegação, indicação da página ativa, imagens e rolagem horizontal da tabela.
- Usar Tab para navegar e Escape para fechar o menu móvel.
- No formulário, tentar enviar campos vazios e um e-mail inválido; depois simular uma solicitação com dados fictícios válidos.
- Reproduzir o vídeo em detalhes.html servido por HTTP/HTTPS.
- Foto do autor: mesma imagem pública do perfil GitHub, incorporada ao projeto com autorização.
- Enviar os arquivos atualizados ao repositório, mantendo index.html e style.css na raiz e as imagens em assets.
- Abrir o link público sem login e colar o link do repositório no comentário da atividade.

## Limites da revisão

A checagem automática de estrutura e referências locais não substitui a inspeção visual ou a avaliação do professor. Não há backend: o formulário é uma simulação local, sem envio de solicitações reais. A foto do autor foi atualizada. O site público foi conferido em desktop e em 390 px, incluindo imagens, menu móvel, tabela e simulação do formulário. A reprodução completa do vídeo não foi confirmada.
