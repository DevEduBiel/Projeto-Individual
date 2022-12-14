create database projeto_individual;

use projeto_individual;

create table usuario (
idUsuario int primary key auto_increment, 
nome varchar(45) not null,
sobrenome varchar(45) not null ,
idade int not null,
favGenero varchar(10) not null,
treinoSemana varchar(45) not null,
email varchar(45) not null unique,
senha varchar(45) not null
);

insert into usuario value
(null, 'teste','teste', 20,'Rock','7','1','1'),
(null, 'teste2','teste2', 20,'Rock','7','2','2');

create table playlist (
idPlaylist int auto_increment primary key, 
nome varchar(45) not null,
fkCriador int not null,
constraint fkCriadorUsuario foreign key (fkCriador) references usuario(idUsuario)
);

insert playlist value 
(null, 'playlist-1',1),
(null, 'playlist-2',1);

create table playlist_salva(
fkUsuario int ,
fkPlaylist int not null,
constraint fkUsuarioPlay foreign key (fkUsuario) references usuario(idUsuario),
constraint fkPlaylistUsu foreign key (fkPlaylist) references playlist(idPlaylist),
primary key (fkPlaylist, fkUsuario) 
);

insert into playlist_salva value 
(1,1),
(1,2);

create table avaliacao(
fkUsuario int ,
fkPlaylist int not null,
favoritaUsu tinyint(0),
dislikeUsu tinyint(0),
likeUsu tinyint(0),
constraint fkUsuarioAvalia foreign key (fkUsuario) references usuario(idUsuario),
constraint fkPlaylistAvalia foreign key (fkPlaylist) references playlist(idPlaylist),
primary key (fkPlaylist, fkUsuario) 
);

create table musica(
idMusica int primary key auto_increment,
nome varchar(45),
genero varchar(45),
artista varchar(45),
album varchar(45),
duracao time
);

insert into musica value
(null, 'musica-1','rock','Banda','RockBom', '00:03:22'),
(null, 'musica-2','rock','Banda','RockBom', '00:03:22'),
(null, 'musica-3','rock','Banda','RockBom', '00:03:22'),
(null, 'musica-4','rock','Banda','RockBom', '00:03:22');

create table musica_salva(
fkPlaylist int,
fkMusica int,
constraint fkPlaylistPLayMusica foreign key (fkPlaylist) references playlist(idPlaylist),
constraint fkMusicaPLayMusica foreign key (fkMusica) references musica(idMusica),
primary key (fkPlaylist, fkMusica)
);

insert into musica_salva value 
(1,1),
(1,2),
(1,3),
(2,2),
(2,4),
(1,4);

DELIMITER $$
CREATE PROCEDURE CriarPlaylist(in idUsuario int, playnome varchar(45))
BEGIN
	 insert into playlist (nome, fkCriador)value (playnome,idUsuario);
	 insert into playlist_salva value (idUsuario,(select max(idPlaylist) from playlist));
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE MarcarFav(in usuario int, playlist int, marcar tinyint)
BEGIN
	if (select count(*) from avaliacao where fkUsuario = usuario and fkPlaylist = playlist) = 0 then
    insert into avaliacao (fkUsuario,fkPlaylist, favoritaUsu)value(usuario,playlist, marcar);
    else
    update avaliacao set favoritaUsu = marcar where fkUsuario = usuario and fkPlaylist = playlist;
    END IF;
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE MarcarLike(in usuario int, playlist int, marcar tinyint)
BEGIN
	if (select count(*) from avaliacao where fkUsuario = usuario and fkPlaylist = playlist) = 0 then
    insert into avaliacao (fkUsuario,fkPlaylist, likeUsu)value(usuario,playlist, marcar);
    else
    update avaliacao set likeUsu = marcar where fkUsuario = usuario and fkPlaylist = playlist;
    END IF;
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE MarcarDislike(in usuario int, playlist int, marcar tinyint)
BEGIN
	if (select count(*) from avaliacao where fkUsuario = usuario and fkPlaylist = playlist) = 0 then
    insert into avaliacao (fkUsuario,fkPlaylist, dislikeUsu)value(usuario,playlist, marcar);
    else
    update avaliacao set dislikeUsu = marcar where fkUsuario = usuario and fkPlaylist = playlist;
    END IF;
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE AdicionarMusica
(in idPlaylist int, nomeMus varchar(45), generoMus varchar(45), artistaMus varchar(45), albumMus varchar(45), duracaoMus time)
BEGIN
	 insert into musica value (null, nomeMus, generoMus, artistaMus, albumMus, duracaoMus);
	 insert into musica_salva value (idPlaylist,(select max(idMusica) from musica));
END$$
DELIMITER ;


call marcarFav(1,1,true);

call marcarLike(1,1,true);

call marcarDislike(1,1,false);

call AdicionarMusica(1, 'musica-10','rock','Banda','RockBom', '03:22');

select * from musica; 

select 
(select favoritaUsu from avaliacao where fkUsuario =1 and fkPlaylist =1)favoritaUsu,
(select dislikeUsu from avaliacao where fkUsuario =1 and fkPlaylist =1)dislikeUsu,
(select likeUsu from avaliacao where fkUsuario =1 and fkPlaylist =1)likeUsu,
(select count(favoritaUsu) from avaliacao where favoritaUsu= 1 and fkPlaylist = 1 )qtdFav, 
(select count(dislikeUsu) from avaliacao where dislikeUsu= 1 and fkPlaylist = 1)qtdDislike, 
(select count(likeUsu) from avaliacao where likeUsu= 1 and fkPlaylist = 1) qtdLike
from avaliacao where fkPlaylist = 1;
 
select p.idPlaylist, p.nome , count(favoritaUsu)qtdFav from playlist p
join avaliacao a on p.idPlaylist = a.fkPlaylist
where favoritaUsu = 1
group by p.idPlaylist
order by qtdFav desc;

select p.idPlaylist, p.nome , count(likeUsu)qtdLike from playlist p
join avaliacao a on p.idPlaylist = a.fkPlaylist
where likeUsu = 1
group by p.idPlaylist
order by qtdLike desc;

select p.idPlaylist, p.nome , count(dislikeUsu)qtdDislike from playlist p
join avaliacao a on p.idPlaylist = a.fkPlaylist
where dislikeUsu = 1
group by p.idPlaylist
order by qtdDislike desc;

select idPlaylist, nome from playlist 
group by idPlaylist
order by idPlaylist desc;

select * from Playlist;


