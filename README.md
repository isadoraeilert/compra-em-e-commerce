# Projeto de Automação: Fluxo de Compra em E-commerce

Automação de testes end-to-end de uma loja virtual de roupas, utilizando **CodeceptJS** com **WebDriver**, simulando o fluxo completo de compra — do login à finalização do pedido, incluindo validações de login e criação de conta.

---

## Objetivo

Automatizar fluxos essenciais de uma aplicação e-commerce, com foco em:

- Simular o comportamento real do usuário
- Validar fluxos positivos e negativos
- Otimizar tempo de execução dos testes com boas práticas

---

## Cenários Automatizados

## Fluxos Positivos:
- Criação de conta do zero
- Login com `autoLogin` (CodeceptJS)
- Adição de dois produtos ao carrinho
- Inclusão de mais um item diretamente no carrinho
- Remoção e exclusão de itens (mantendo apenas um produto)
- Cadastro de endereço de entrega
- Escolha da forma de envio
- Seleção do método de pagamento
- Finalização da compra

## Fluxos Negativos:
- Tentativa de login sem senha
- Tentativa de login sem e-mail
- Tentativa de login com ambos os campos vazios

---

## Estrutura do Projeto

- Estruturado com o padrão **Page Object Model (POM)**
- Framework: **CodeceptJS**
- Driver: **WebDriver**
- Login otimizado com o plugin `autoLogin` do CodeceptJS
- Relatórios automáticos gerados com **Mochawesome**

---

## Tecnologias Utilizadas

- [CodeceptJS](https://codecept.io/)
- [WebDriver](https://webdriver.io/)
- [Mochawesome](https://github.com/adamgruber/mochawesome)
- JavaScript
- Padrão Page Object Model (POM)

---

##  Como Executar

1. Instale as dependências:
```bash
npm install

2. Execute os testes:
npx codeceptjs run --plugins mochawesome

3. Relatório gerado:
output/mochawesome.html


## Relatórios
Relatórios são gerados automaticamente com o Mochawesome após cada execução de teste. Eles podem ser encontrados na pasta output/.

## Autor
Projeto desenvolvido por Isadora Eilert
🔗 linkedin.com/in/isadoraeilert
