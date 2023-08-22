# Ravenoso

Ravenoso é um aplicativo de recomendação de restaurantes, inspirado na funcionalidade principal do Yelp. Este aplicativo foi desenvolvido como um projeto de aprendizado para prática das tecnologias de desenvolvimento web modernas.

## Demonstração ao Vivo

Você pode ver o aplicativo em funcionamento aqui: [Link do Projeto](https://raveneous.netlify.app/)  

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

**Importante**:  O arquivo `.env` é ignorado por padrão pelo arquivo `.gitignore` para evitar que suas chaves sejam adicionadas ao controle de versão.

## Utilizando o CORS Anywhere

CORS Anywhere é um serviço que permite fazer solicitações CORS a partir de qualquer website. Em algumas circunstâncias, você pode precisar utilizar esse serviço para evitar problemas de CORS durante o desenvolvimento ou teste do aplicativo.  

Para utilizar o CORS Anywhere com o aplicativo Ravenoso, siga os seguintes passos:

1. Acesse o [link](https://cors-anywhere.herokuapp.com/corsdemo) do demo do CORS Anywhere.
2. Clique no botão "Request temporary access to the demo server" para ter acesso temporário ao servidor demo.
3. No seu projeto, certifique-se de adicionar `https://cors-anywhere.herokuapp.com/` antes da URL da API que você está tentando acessar. 

**Nota**: Tenha em mente que este é um serviço gratuito e pode haver limitações de uso. Além disso, esse método deve ser usado apenas para fins de desenvolvimento e testes. É fortemente recomendável implementar a sua própria solução de proxy para evitar problemas de CORS em um ambiente de produção.

## Contato

Se você tiver dúvidas ou comentários sobre o Ravenoso, sinta-se à vontade para me contatar:

- Email: [felipetec.sso@gmail.com](mailto:seuemail@exemplo.com)
- GitHub: [github.com/felpsg](https://github.com/seuusername)
