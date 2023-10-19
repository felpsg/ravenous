# Ravenoso

Ravenoso é um aplicativo de recomendação de restaurantes, inspirado na funcionalidade principal do Yelp. Este aplicativo foi desenvolvido como um projeto de aprendizado para prática das tecnologias de desenvolvimento web modernas.

## Demonstração ao Vivo

Você pode ver o aplicativo em funcionamento aqui: [Link do Projeto](https://revenouss.netlify.app/)

## Recursos

- Pesquisa de empresas: os usuários podem pesquisar empresas locais inserindo uma palavra-chave e uma localização. Esta pesquisa é feita utilizando a API do Yelp para buscar os resultados.

- Classificação dos resultados: Os usuários têm a opção de classificar os resultados da pesquisa por "Melhor Correspondência", "Avaliação Mais Alta" e "Mais Comentados". O tipo de classificação selecionada afeta a ordem dos resultados exibidos.

- Exibição dos resultados: Os resultados da pesquisa são exibidos em um layout de grade responsiva, permitindo uma navegação fácil em qualquer tamanho de tela.

- Tema Claro e Escuro: O aplicativo apresenta um tema claro e escuro e um botão para alternar entre eles. Isso permite aos usuários escolher a aparência do aplicativo de acordo com suas preferências.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- React
- API do Yelp

## Começando

Para rodar o projeto localmente, siga estas etapas:

1. Clone o repositório para o seu computador local.
2. Instale as dependências necessárias com `npm install`.
3. Crie um arquivo `.env` na raiz do projeto.
4. Adicione a sua chave da API do Yelp ao arquivo `.env` com o seguinte formato:

    - REACT_APP_API_KEY='sua-chave-api-aqui'
    - Substitua 'sua-chave-api-aqui' pela sua chave de API real. Note que você precisará obter sua própria chave de API do Yelp ao se inscrever para um novo aplicativo no [portal de desenvolvedores do Yelp](https://www.yelp.com/developers/v3/manage_app).

5. Inicie o servidor de desenvolvimento com `npm start`.
6. Acesse o aplicativo em seu navegador em `http://localhost:3000`.

**Importante**: O arquivo `.env` é ignorado por padrão pelo arquivo `.gitignore` para evitar que suas chaves sejam adicionadas ao controle de versão.

## Utilizando o Servidor Express para CORS

Para lidar com as questões de CORS, configuramos um servidor Express conforme detalhado em um tutorial anterior. Este servidor funciona como um intermediário entre o front-end e a API Yelp, permitindo que as solicitações sejam feitas sem problemas de CORS. O código e as instruções para configurar o servidor Express podem ser encontrados [aqui](https://discuss.codecademy.com/t/ravenous-part-3-setting-the-search-bars-state/745278/3).

**Nota**: Este setup é mais robusto e recomendado em vez de depender de serviços externos como o CORS Anywhere.

## Contato

- Email: [felipetec.sso@gmail.com](mailto:seuemail@exemplo.com)
- GitHub: [github.com/felpsg](https://github.com/seuusername)
