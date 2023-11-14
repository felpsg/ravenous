# Ravenoso: Seu Guia de Restaurantes 🍽️

Ravenoso é um aplicativo dinâmico de recomendação de restaurantes, oferecendo uma experiência semelhante ao Yelp, mas com um toque pessoal. Explore as opções gastronômicas locais com facilidade e estilo.

🔗 **Demonstração ao Vivo**: Confira o Ravenoso em ação [aqui](https://revenouss.netlify.app/).

## 🌟 Recursos

- **Pesquisa de Empresas**: Encontre restaurantes usando palavras-chave e localizações, com dados fornecidos pela API do Yelp.
- **Classificação dos Resultados**: Organize os resultados por "Melhor Correspondência", "Avaliação Mais Alta" ou "Mais Comentados".
- **Layout Responsivo**: Navegue facilmente em qualquer dispositivo graças ao layout de grade responsiva.
- **Tema Claro e Escuro**: Escolha entre temas claro e escuro para uma experiência personalizada.

## 🛠️ Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- React
- API do Yelp

## 🚀 Começando

Para executar o Ravenoso localmente:

1. Clone o repositório: `git clone [URL do Repositório]`.
2. Instale as dependências: `npm install`.
3. Configure o arquivo `.env` na raiz do projeto com sua chave da API do Yelp:

   ```
   REACT_APP_API_KEY='sua-chave-api-aqui'
   ```

   Obtenha sua chave da API do Yelp [aqui](https://www.yelp.com/developers/v3/manage_app).

4. Inicie o servidor de desenvolvimento: `npm start`.
5. Acesse `http://localhost:3000` no navegador.

⚠️ **Nota**: Mantenha suas chaves de API seguras e fora do controle de versão.

## 🌐 CORS e Servidor Express

Utilizamos um servidor Express para resolver questões de CORS. Confira as instruções para configuração [aqui](https://discuss.codecademy.com/t/ravenous-part-3-setting-the-search-bars-state/745278/3).

## ⚙️ Solução de Problemas

Caso encontre problemas com conflitos de dependências, especialmente relacionados ao `react-scripts` e `@material-ui/core`, utilize o seguinte comando:

```bash
npm install react-scripts --save --legacy-peer-deps
```

Esse comando instala `react-scripts` com a opção `--legacy-peer-deps`, ajudando a resolver incompatibilidades entre versões de pacotes.

## 📬 Contato

- ✉️ Email: [felipetec.sso@gmail.com](mailto:felipetec.sso@gmail.com)
- 🐱 GitHub: [github.com/felpsg](https://github.com/felpsg)
