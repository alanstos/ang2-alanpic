# ang2-alanpic

start server: <br />
/server/
npm start

start client: <br />
client/
npm start

<p>parei na parte2 - finalizado antes de falar do jquery</p>

<p>falando do jquery</p>
<p>npm install jquery@3.1.1 --save</p>
<p>npm run typings search jquery</p>
<p>node ./node_modules/typings/dist/bin install dt~jquery --global --save</p>
<p>"postinstall": "typings install" </p>

<p>npm install jqueryui-browser@1.10.2-1 --save
npm install jquery-migrate@3.0.0 --save </p>

<p>É uma boa prática baixar todos as definições de tipos listadas em nosso projeto quando baixamos suas dependências. Para evitarmos esquecer esse passo, podemos executar o comando typing install que baixará todas as definições listadas em typings.json ao término do comando npm installl. É por isso que adicionaremos em alurapic/client/package.json um script de postinstall:</p>