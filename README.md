# Clínica Vida Plena — Portal Front-end

Projeto acadêmico desenvolvido com **HTML5, CSS3 e JavaScript puro**, contextualizado no cenário da **Clínica Vida Plena**.

## Objetivo

Construir um portal com quatro páginas interligadas, semântica HTML5, CSS Grid, Flexbox, formulário validado, tabela, mídia externa, indicadores com `<progress>` e acabamento visual responsivo.

## Estrutura

```text
vida-plena-portal-revisado/
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
- Foto circular com `border-radius: 50%` e `object-fit: cover`.
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
git remote add origin https://github.com/SEU-USUARIO/clinica-vida-plena.git
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

### Pendências antes da entrega

1. Contato configurado em contato.html: jonathanss001@gmail.com e perfil https://github.com/jonathansouzasantos.
2. Abrir as quatro páginas no navegador e conferir em desktop e celular. A revisão automatizada foi estática; a inspeção visual foi bloqueada pelo navegador da ferramenta.
3. Conferir se o vídeo externo continua disponível e permite incorporação.
4. Criar um repositório público no GitHub e enviar os arquivos desta pasta, com index.html na raiz. O repositório não foi criado nesta revisão.
5. Abrir o endereço do repositório em uma janela sem login antes de enviar o link ao professor.

### Verificação realizada

69 verificações estáticas sem erros: referências locais, âncoras, indicação de página ativa, IDs únicos, atributos de imagens e vínculo entre labels e inputs. Sintaxe JavaScript conferida com node --check. Quatro cenários de lógica do formulário passaram em ambiente simulado; isso não substitui testes em navegador.


