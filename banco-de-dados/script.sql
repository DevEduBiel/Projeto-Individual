create database projeto_individual;

select * from usuario;

use projeto_individual;

create table usuario (
idUsuario int primary key auto_increment, 
nome varchar(45) not null,
sobrenome varchar(45) not null ,
idade int not null,
favGenero varchar(10) not null,
treinoSemana varchar(45) not null,
email varchar(45) not null,
senha varchar(45) not null
);


create table playlist (
idPlaylist int auto_increment, 
nome varchar(45) not null,
likes int,
deslikes int,
favorita int,
fkCriador int,
constraint fkCriadorPlaylist foreign key (fkCriador) references usuario(idUsuario),
primary key (idPlaylist, fkCriador)
);


create table musica(
idMusica int primary key auto_increment,
nome varchar(45),
genero varchar(45),
artista varchar(45),
album varchar(45),
duracao time,
anoLancamento date
);

create table playlist_musica(
fkCriador int,
fkPlaylist int,
fkMusica int,
constraint fkCriadorPLayMusica foreign key (fkCriador) references playlist(fkCriador),
constraint fkPlaylistPLayMusica foreign key (fkPlaylist) references playlist(idPlaylist),
constraint fkMusicaPLayMusica foreign key (fkMusica) references musica(idMusica),
primary key (fkPlaylist, fkCriador, fkMusica)
);