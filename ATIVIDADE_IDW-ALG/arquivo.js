var escrita = document.getElementById("escrita");
var tituloEscrita = document.getElementById("tituloEscrita");
var imagemInformacao = document.getElementById("imagemInformacao");
var america = document.getElementById("americaMineiro");
var atleticoPR = document.getElementById("atleticoPR");
var atleticoMineiro = document.getElementById("atleticoMineiro");
var bahia = document.getElementById("bahia");
var bragantino = document.getElementById("bragantino");
var ceara = document.getElementById("ceara");
var chapecoense = document.getElementById("chapecoense");
var cortinas = document.getElementById("cortinas");
var cuiaba = document.getElementById("cuiaba");
var framengo = document.getElementById("framengo");
var fluminense = document.getElementById("fluminense");
var fortaleza = document.getElementById("fortaleza");
var arere = document.getElementById("arere");
var inter = document.getElementById("inter");
var juventude = document.getElementById("juventude");
var palmeiras = document.getElementById("palmeiras");
var SAOPAULO = document.getElementById("SAOPAULO");
var santos = document.getElementById("santos");
var sport = document.getElementById("sport");
var goianiense = document.getElementById("atleticoGoianiense");


america.addEventListener("mouseover", americaM);
goianiense.addEventListener("mouseover", goianienseF);
atleticoPR.addEventListener("mouseover", atleticoPRF);
atleticoMineiro.addEventListener("mouseover", atleticoMineiroF);
bahia.addEventListener("mouseover", bahiaF);
bragantino.addEventListener("mouseover", bragantinoF);
ceara.addEventListener("mouseover", cearaF);
chapecoense.addEventListener("mouseover", chapecoenseF);
cortinas.addEventListener("mouseover", cortinasF);
cuiaba.addEventListener("mouseover", cuiabaF);
framengo.addEventListener("mouseover", framengoF);
fluminense.addEventListener("mouseover", fluminenseF);
fortaleza.addEventListener("mouseover", fortalezaF);
arere.addEventListener("mouseover", arereF);
inter.addEventListener("mouseover", interF);
juventude.addEventListener("mouseover", juventudeF);
palmeiras.addEventListener("mouseover", palmeirasF);
SAOPAULO.addEventListener("mouseover", SAOPAULOF);
santos.addEventListener("mouseover", santosF);
sport.addEventListener("mouseover", sportF);




function americaM(){
	
	imagemInformacao.src = ('midias/ribamarPorra.jpg');
	nomeDoBrabo.innerHTML = ('R I B A M A R');
	nomeDoBrabo.style.color = "#287233";
	tituloEscrita.innerHTML = ('America Mineiro');
	tituloEscrita.style.color = "#287233";
	escrita.innerHTML = ('<br> O América foi fundado por um grupo de jovens da elite mineira em 30 de abril de 1912. ' +
		'\n Também conhecido como América Mineiro ou Coelho, é um clube desportivo brasileiro da cidade de Belo Horizonte.'+
		' \n Foi o primeiro time a ser fundado por um negro: Geraldino de Carvalho estava entre os jovens que fundadores.');
}
function goianienseF(){
	imagemInformacao.src = ('midias/toróAG.jpg');
	nomeDoBrabo.innerHTML = ('T O R Ó');
	nomeDoBrabo.style.color = "red";
	tituloEscrita.innerHTML = ('Atlético Goianiense');
	tituloEscrita.style.color = "red";
	escrita.innerHTML = ('<br> Atlético Clube Goianiense é uma agremiação esportiva brasileira da cidade de Goiânia, no estado de Goiás, fundada em 2 de abril de 1937. ' +
		'\n O Dragão, alcunha do clube, manda os seus jogos habitualmente no Estádio Antônio Accioly.'+
		' \n O rubro-negro goiano tem como clássicos os confrontos contra Goiás, Vila Nova e Goiânia.');
}
function atleticoMineiroF(){
	imagemInformacao.src = ('midias/hulk.jpg');
	nomeDoBrabo.innerHTML = ('H U L K');
	nomeDoBrabo.style.color = "white";
	tituloEscrita.innerHTML = ('Atlético Mineiro');
	tituloEscrita.style.color = "white";
	escrita.innerHTML = ('<br> O Clube Atlético Mineiro (conhecido apenas por Atlético e cujo acrônimo é CAM) é um clube brasileiro de futebol sediado na cidade de Belo Horizonte, Minas Gerais. ' +
		'\n Foi fundado em 25 de março de 1908 por um grupo de estudantes, tem como suas cores tradicionais o preto e o branco.'+
		' \n Seu símbolo e alcunha mais popular é o Galo, mascote oficial no final da década de 1930.');
}
function atleticoPRF(){
	imagemInformacao.src = ('midias/santosAPR.png');
	nomeDoBrabo.innerHTML = ('S A N T O S');
	nomeDoBrabo.style.color = "red";
	tituloEscrita.innerHTML = ('Athlético Paranaense');
	tituloEscrita.style.color = "red";
	escrita.innerHTML = ('<br> Club Athletico Paranaense, conhecido também como Athletico-PR ou Athletico, cujo acrônimo é CAP, é um clube de futebol brasileiro, da cidade de Curitiba, capital do estado do Paraná.' +
		'\n Foi fundado em 26 de março de 1924 e manda seus jogos no Estádio Joaquim Américo Guimarães, mais conhecido como Arena da Baixada.');
}
function bahiaF(){
	imagemInformacao.src = ('midias/gilberto.png');
	nomeDoBrabo.innerHTML = ('G I L B E R T O');
	nomeDoBrabo.style.color = "blue";
	tituloEscrita.innerHTML = ('Bahia');
	tituloEscrita.style.color = "blue";
	escrita.innerHTML = ('<br> O Esporte Clube Bahia é um clube desportivo brasileiro de futebol da cidade de Salvador, na Bahia.' +
		'\n Conhecido simplesmente como Bahia ou pela sigla ECB, foi fundado em 1º de janeiro de 1931 por ex-jogadores do Clube Bahiano de Tênis e a Associação Atlética da Bahia, agremiações que tinham encerrado suas atividades futebolísticas no final da década de 1920.');
}
function bragantinoF(){
	imagemInformacao.src = ('midias/helinho.jpg');
	nomeDoBrabo.innerHTML = ('H E L I N H O');
	nomeDoBrabo.style.color = "red";
	tituloEscrita.innerHTML = ('RB Bragantino');
	tituloEscrita.style.color = "red";
	escrita.innerHTML = ('<br> Red Bull Bragantino, também conhecido como RB Bragantino ou simplesmente Bragantino, é um clube esportivo brasileiro da cidade de Bragança Paulista, interior do estado de São Paulo.' +
		'\n O clube foi fundado originalmente como Clube Atlético Bragantino em 8 de janeiro de 1928. ' +
		'\n a partir da parceria com a empresa Red Bull em 2019, passou a aderir o vermelho junto ao seu tradicional alvinegro.');
}
function cearaF(){
	imagemInformacao.src = ('midias/vina.jpg');
	nomeDoBrabo.innerHTML = ('V I N A');
	nomeDoBrabo.style.color = "white";
	tituloEscrita.innerHTML = ('Ceará');
	tituloEscrita.style.color = "white";
	escrita.innerHTML = ('<br> Ceará Sporting Club é um clube poliesportivo brasileiro. Sua sede situa-se em Fortaleza, na Região Nordeste do Brasil. O clube foi fundado na noite do dia 2 de junho de 1914.' +
		'\n Seu mascote é o vovô, não por ser o time mais velho da capital cearense. ' +
		'\n Mas por Meton de Alencar Pinto, então presidente do clube, por ao receber os atletas juvenis do América Futebol Club, os tratou como seus "netinhos".');
}
function chapecoenseF(){
	imagemInformacao.src = ('midias/anselmo.jpg');
	nomeDoBrabo.innerHTML = ('A N S E L M O');
	nomeDoBrabo.style.color = "yellowGreen";
	tituloEscrita.innerHTML = ('chapecoense');
	tituloEscrita.style.color = "yellowGreen";
	escrita.innerHTML = ('<br> Associação Chapecoense de Futebol, conhecida apenas como Chapecoense, é um clube de futebol brasileiro, sediado na cidade de Chapecó, Santa Catarina.' +
		'\n Foi fundado em 10 de maio de 1973. De maneira geral, pode-se dizer que a Chapecoense, posteriormente um dos mais bem-sucedidos do futebol catarinense');

}
function cortinasF(){
	imagemInformacao.src = ('midias/drogbaCortinas.jpg');
	nomeDoBrabo.innerHTML = ('D R O G B A');
	nomeDoBrabo.style.color = "white";
	tituloEscrita.innerHTML = ('Corinthians');
	tituloEscrita.style.color = "white";
	escrita.innerHTML = ('<br> Sport Club Corinthians Paulista é um clube poliesportivo brasileiro da cidade cidade de São Paulo, capital do estado homônimo.' +
		'\n Foi fundado como uma equipe de futebol no dia 1 de setembro de 1910 por um grupo de operários do bairro Bom Retiro.' +
		'\n  Embora o mascote do clube seja um gavião é também popularmente conhecido como gambás ou mulambos.');
}
function cuiabaF(){
	imagemInformacao.src = ('midias/clayson.jpg');
	nomeDoBrabo.innerHTML = ('C L A Y S O N');
	nomeDoBrabo.style.color = "greenYellow";
	tituloEscrita.innerHTML = ('Cuiabá');
	tituloEscrita.style.color = "greenYellow";
	escrita.innerHTML = ('<br> Cuiabá Esporte Clube (cujo acrônimo é CEC) é uma agremiação de futebol brasileiro sediado na cidade de Cuiabá. Fundado em 12 de dezembro de 2001 pelo ex-jogador Luís Carlos Tóffoli, mais conhecido como Gaúcho.' +
		'\n  O Dourado é seu maior símbolo; Suas cores tradicionais são o amarelo e o verde. Costuma mandar suas partidas na Arena Pantanal.');
}
function framengoF(){
	imagemInformacao.src = ('midias/gabigordo.jpg');
	nomeDoBrabo.innerHTML = ('G A B I G O L');
	nomeDoBrabo.style.color = "red";
	tituloEscrita.innerHTML = ('Flamengo');
	tituloEscrita.style.color = "red";
	escrita.innerHTML = ('<br> O Clube de Regatas do Flamengo (mais conhecido simplesmente como Flamengo, e popularmente pelos apelidos de Mengo, Mengão e Fla) é uma agremiação poliesportiva brasileira com sede na cidade do Rio de Janeiro.' +
		'\n  Tem como suas cores tradicionais o vermelho e o preto e como seus maiores rivais esportivos o Vasco da Gama, o Fluminense e o Botafogo.');
}
function fluminenseF(){
	imagemInformacao.src = ('midias/fred.jpg');
	nomeDoBrabo.innerHTML = ('F R E D');
	nomeDoBrabo.style.color = "#800000";
	tituloEscrita.innerHTML = ('Fluminense');
	tituloEscrita.style.color = "#800000";
	escrita.innerHTML = ('<br> Fluminense Football Club é uma agremiação poliesportiva e cultural sediada no bairro de Laranjeiras, zona sul da cidade do Rio de Janeiro, no Brasil, fundada em 21 de julho de 1902.' +
		'\n  Um dos quatro grandes clubes do Rio de Janeiro, primeiro entre os doze grandes do futebol brasileiro a entrar em campo, o Fluminense é o clube que mais disputou campeonatos estaduais no Brasil, sendo a de 2021 a sua 117ª.');
}
function fortalezaF(){
	imagemInformacao.src = ('midias/wpaulista.png');
	nomeDoBrabo.innerHTML = ('W. PAULISTA');
	nomeDoBrabo.style.color = "blue";
	tituloEscrita.innerHTML = ('Fortaleza');
	tituloEscrita.style.color = "blue";
	escrita.innerHTML = ('<br> Fortaleza Esporte Clube é um clube que está sediado na cidade de Fortaleza, no Nordeste do Brasil.' +
		'\n   Foi fundado em 18 de outubro de 1918, Em 15 de abril de 2013, foi sancionada pelo prefeito Roberto Cláudio Rodrigues Bezerra, a Lei Municipal 10.020, que cria o dia da Nação Tricolor em Fortaleza, a ser comemorado no dia 18 de outubro.');
}
function arereF(){
	imagemInformacao.src = ('midias/dornasCosta.jpg');
	nomeDoBrabo.innerHTML = ('dornasCosta');
	nomeDoBrabo.style.color = "skyBlue";
	tituloEscrita.innerHTML = ('Grêmio');
	tituloEscrita.style.color = "skyBlue";
	escrita.innerHTML = ('<br> O Grêmio Foot-Ball Porto Alegrense é um clube de futebol brasileiro da cidade de Porto Alegre, no Rio Grande do Sul, fundado em 15 de setembro de 1903 por Candido Dias da Silva.' +
		'\n  Se autodenomina "imortal" porém ja morreu várias vezes. Na data que estamos escrevendo esse código o super grêmio ja caiu pra série B pela 3º vez.'+
		'\n AREREEEEEEEEEEEEEEEE');
}
function interF(){
	imagemInformacao.src = ('midias/edenilso.jpg');
	nomeDoBrabo.innerHTML = ('E D E N I L S O');
	nomeDoBrabo.style.color = "red";
	tituloEscrita.innerHTML = ('Internacional');
	tituloEscrita.style.color = "red";
	escrita.innerHTML = ('<br> O Sport Club Internacional é um clube multiesportivo brasileiro com sede na cidade de Porto Alegre, capital do Rio Grande do Sul. ' +
		'\n  Foi fundado em 4 de abril de 1909, pelos irmãos Poppe, com o objetivo de ser uma instituição democrática e sem preconceitos.' +
		'\n O mascote do Inter é o Saci, aquele que gosta de armar ciladas contra as pessoas, como uma analogia ao que o Internacional faria nos campos de futebol.');
}
function juventudeF(){
	imagemInformacao.src = ('midias/chico.png');
	nomeDoBrabo.innerHTML = ('C H I C O');
	nomeDoBrabo.style.color = "greenYellow";
	tituloEscrita.innerHTML = ('Juventude');
	tituloEscrita.style.color = "greenYellow";
	escrita.innerHTML = ('<br> Esporte Clube Juventude é um clube de futebol brasileiro da cidade de Caxias do Sul, localizada no Rio Grande do Sul.' +
		'\n  Fundado em 29 de junho de 1913, é o mais antigo clube de Caxias do Sul ainda em atividade, conquistando a devoção de uma grande torcida. ' +
		'\n No momento tem em seu elenco o maior jogador do mundo chamado Chico matador de Imortais AREREEEEEE. ');
}
function palmeirasF(){
	imagemInformacao.src = ('midias/felipeMelo.jpg');
	nomeDoBrabo.innerHTML = ('FELIPE MELO');
	nomeDoBrabo.style.color = "green";
	tituloEscrita.innerHTML = ('Palmeiras');
	tituloEscrita.style.color = "green";
	escrita.innerHTML = ('<br> Sociedade Esportiva Palmeiras é o menor clube poliesportivo brasileiro da cidade de São Paulo.' +
		'\n  Foi fundado em 26 de agosto de 1914 e suas cores, presentes no escudo e bandeira oficial, são o verde e branco. \n O vermelho, presente desde sua fundação em 1914, foi excluído durante a Segunda Guerra Mundial, por pressão do governo nacional, na mesma reunião que formalizou a mudança de nome de Palestra Itália para Palmeiras.');
}
function SAOPAULOF(){
	imagemInformacao.src = ('midias/luciano.jpg');
	nomeDoBrabo.innerHTML = ('L U C I A N O');
	nomeDoBrabo.style.color = "red";
	tituloEscrita.innerHTML = ('São Paulo');
	tituloEscrita.style.color = "red";
	escrita.innerHTML = ('<br> São Paulo Futebol Clube é um clube poliesportivo brasileiro da cidade de São Paulo e foi fundado em 25 de janeiro de 1930.' +
		'\n  Dentre seus principais títulos, destacam-se três Mundiais (recorde absoluto a nível nacional). \n\n Salve o tricolor paulista, \n amado clube brasileiro, \ntu és forte, tu és grande, \n entre os grandes és o primeiro.');
}
function santosF(){
	imagemInformacao.src = ('midias/marinho.jpg');
	nomeDoBrabo.innerHTML = ('M A R I N H O');
	nomeDoBrabo.style.color = "white";
	tituloEscrita.innerHTML = ('Santos');
	tituloEscrita.style.color = "white";
	escrita.innerHTML = ('<br> Santos Futebol Clube é um clube poliesportivo brasileiro da cidade de Santos, São Paulo e foi fundado em 14 de abril de 1912' +
		'\n  Manda as suas partidas no Estádio Urbano Caldeira, mais conhecido como Vila Belmiro. Seus maiores rivais no futebol são o Corinthians, com quem disputa o Clássico Alvinegro; o Palmeiras, com quem disputa o Clássico da Saudade; e o São Paulo, com quem disputa o San-São.');
}
function sportF(){
	imagemInformacao.src = ('midias/hernanes.jpg');
	nomeDoBrabo.innerHTML = ('H E R N A N E S');
	nomeDoBrabo.style.color = "darkRed";
	tituloEscrita.innerHTML = ('Sport');
	tituloEscrita.style.color = "darkRed";
	escrita.innerHTML = ('<br> O Sport Club do Recife situado no bairro da Ilha do Retiro, cidade do Recife, estado de Pernambuco. Foi fundado em 13 de maio de 1905' +
		'\n  É conhecido pelo seu símbolo maior: o leão; suas cores oficiais são o preto e o encarnado e, desde o ano de 1937. E 87 é do sport.');
}