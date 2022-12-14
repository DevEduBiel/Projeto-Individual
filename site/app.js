process.env.AMBIENTE_PROCESSO = "desenvolvimento";
//process.env.AMBIENTE_PROCESSO = "producao";

var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");
var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;


var indexRouter = require("./src/routes/index");
var registroRouter = require("./src/routes/registro");
var playlistRouter = require("./src/routes/playlist");
var musicaRouter = require("./src/routes/musica");
var comunidadeRouter = require("./src/routes/comunidade");

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

var app = express();

app.use(connectLiveReload());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/registro", registroRouter);
app.use("/playlist", playlistRouter);
app.use("/musica", musicaRouter);
app.use("/comunidade", comunidadeRouter);


app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n`);
});
