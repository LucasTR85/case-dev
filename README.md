Projeto CRUD Cursos

1. Sobre o projeto

Este projeto foi utilizado como parte do processo seletivo para estágio
O sistema consiste de uma API que controla as requisições feitas pelo front-end, 
ele acessa e faz alreração, inclusão e exclusão de itens no banco de dados.
O front-end é representado por uma dashboard de administrador utilizando um interface simples e intuitiva, nela é listado todas as informações dos cursos cadastrados,
é possivel fazer alterações dos dados de um curso, adicionar e remover cursos.
O sistema permite que novos módulos e funções possam ser adicionados no futuro

2. Tecnologias

- Mysql
- Node.JS
- React

2.1. Banco de Dados

Foi criado um banco de dados relacional utilizando o MySql, o banco consiste uma tabela única de cursos utilizando o id do curso como chave primaria.

2.2. Back-End (API)

Foi utilizado o Node.JS para desenvolvimento da API que será responsável pelas requisições e respostas do sistema. Para auxiliar o desenvolvimento foi utilizado bibliotecas como express, cors e nodemon.

2.3. Front-End

Foi criado utilizando o framework React na liguagem Javascript com as bibliotecas react-toastify para utilização de toasts de respostas para o usuário,
axios para fazer a comunicação com o back-end, styled-components para estilização dos componentes e o react-icons para utilização de icones. 
