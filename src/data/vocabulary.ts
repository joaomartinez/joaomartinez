import { Word } from '../types';

export const builtinVocabulary: Word[] = [
  // NOUNS
  {
    id: 'n001', german: 'Arbeit', article: 'die', english: 'work / job', portuguese: 'trabalho',
    category: 'noun', example: 'Die Arbeit macht mir Spaß.', exampleTranslation: 'O trabalho me diverte.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n002', german: 'Familie', article: 'die', english: 'family', portuguese: 'família',
    category: 'noun', example: 'Meine Familie wohnt in Brasilien.', exampleTranslation: 'Minha família mora no Brasil.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n003', german: 'Freund', article: 'der', english: 'friend / boyfriend', portuguese: 'amigo / namorado',
    category: 'noun', example: 'Mein Freund heißt Jonas.', exampleTranslation: 'Meu amigo se chama Jonas.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n004', german: 'Gespräch', article: 'das', english: 'conversation', portuguese: 'conversa',
    category: 'noun', example: 'Das Gespräch war sehr interessant.', exampleTranslation: 'A conversa foi muito interessante.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n005', german: 'Gesundheit', article: 'die', english: 'health', portuguese: 'saúde',
    category: 'noun', example: 'Die Gesundheit ist sehr wichtig.', exampleTranslation: 'A saúde é muito importante.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n006', german: 'Hobby', article: 'das', english: 'hobby', portuguese: 'hobby / passatempo',
    category: 'noun', example: 'Mein Hobby ist Lesen.', exampleTranslation: 'Meu hobby é leitura.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n007', german: 'Reise', article: 'die', english: 'trip / journey', portuguese: 'viagem',
    category: 'noun', example: 'Die Reise nach Deutschland war toll.', exampleTranslation: 'A viagem para a Alemanha foi ótima.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n008', german: 'Urlaub', article: 'der', english: 'vacation / holiday', portuguese: 'férias',
    category: 'noun', example: 'Im Urlaub fahre ich ans Meer.', exampleTranslation: 'Nas férias, vou ao mar.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n009', german: 'Wohnung', article: 'die', english: 'apartment / flat', portuguese: 'apartamento',
    category: 'noun', example: 'Ich suche eine neue Wohnung.', exampleTranslation: 'Estou procurando um novo apartamento.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n010', german: 'Möglichkeit', article: 'die', english: 'possibility / opportunity', portuguese: 'possibilidade',
    category: 'noun', example: 'Das ist eine gute Möglichkeit.', exampleTranslation: 'Essa é uma boa possibilidade.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n011', german: 'Erfahrung', article: 'die', english: 'experience', portuguese: 'experiência',
    category: 'noun', example: 'Ich habe viel Erfahrung in diesem Bereich.', exampleTranslation: 'Tenho muita experiência nessa área.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n012', german: 'Entscheidung', article: 'die', english: 'decision', portuguese: 'decisão',
    category: 'noun', example: 'Das war eine schwierige Entscheidung.', exampleTranslation: 'Foi uma decisão difícil.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n013', german: 'Unterschied', article: 'der', english: 'difference', portuguese: 'diferença',
    category: 'noun', example: 'Was ist der Unterschied?', exampleTranslation: 'Qual é a diferença?',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n014', german: 'Lösung', article: 'die', english: 'solution', portuguese: 'solução',
    category: 'noun', example: 'Wir müssen eine Lösung finden.', exampleTranslation: 'Precisamos encontrar uma solução.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n015', german: 'Problem', article: 'das', english: 'problem', portuguese: 'problema',
    category: 'noun', example: 'Das ist kein Problem.', exampleTranslation: 'Isso não é problema.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n016', german: 'Termin', article: 'der', english: 'appointment', portuguese: 'compromisso / consulta',
    category: 'noun', example: 'Ich habe einen Termin beim Arzt.', exampleTranslation: 'Tenho um compromisso com o médico.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n017', german: 'Ausbildung', article: 'die', english: 'training / education', portuguese: 'formação / treinamento',
    category: 'noun', example: 'Er macht eine Ausbildung als Koch.', exampleTranslation: 'Ele está fazendo formação como cozinheiro.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n018', german: 'Sprache', article: 'die', english: 'language', portuguese: 'língua / idioma',
    category: 'noun', example: 'Deutsch ist eine schöne Sprache.', exampleTranslation: 'O alemão é uma língua bonita.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n019', german: 'Wort', article: 'das', english: 'word', portuguese: 'palavra',
    category: 'noun', example: 'Ich kenne dieses Wort nicht.', exampleTranslation: 'Não conheço essa palavra.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n020', german: 'Satz', article: 'der', english: 'sentence', portuguese: 'frase / sentença',
    category: 'noun', example: 'Kannst du diesen Satz übersetzen?', exampleTranslation: 'Você pode traduzir essa frase?',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n021', german: 'Buch', article: 'das', english: 'book', portuguese: 'livro',
    category: 'noun', example: 'Ich lese jeden Tag ein Buch.', exampleTranslation: 'Leio um livro todo dia.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n022', german: 'Kurs', article: 'der', english: 'course', portuguese: 'curso',
    category: 'noun', example: 'Ich mache einen Deutschkurs.', exampleTranslation: 'Estou fazendo um curso de alemão.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n023', german: 'Prüfung', article: 'die', english: 'exam / test', portuguese: 'prova / exame',
    category: 'noun', example: 'Die Prüfung war sehr schwer.', exampleTranslation: 'A prova foi muito difícil.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n024', german: 'Fehler', article: 'der', english: 'mistake / error', portuguese: 'erro',
    category: 'noun', example: 'Jeder macht Fehler.', exampleTranslation: 'Todo mundo comete erros.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n025', german: 'Antwort', article: 'die', english: 'answer / reply', portuguese: 'resposta',
    category: 'noun', example: 'Ich kenne die Antwort nicht.', exampleTranslation: 'Não sei a resposta.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n026', german: 'Frage', article: 'die', english: 'question', portuguese: 'pergunta',
    category: 'noun', example: 'Ich habe eine Frage.', exampleTranslation: 'Tenho uma pergunta.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n027', german: 'Geschäft', article: 'das', english: 'shop / business', portuguese: 'loja / negócio',
    category: 'noun', example: 'Das Geschäft ist um 8 Uhr geöffnet.', exampleTranslation: 'A loja abre às 8 horas.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n028', german: 'Stadt', article: 'die', english: 'city / town', portuguese: 'cidade',
    category: 'noun', example: 'Berlin ist eine große Stadt.', exampleTranslation: 'Berlim é uma cidade grande.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n029', german: 'Straße', article: 'die', english: 'street / road', portuguese: 'rua',
    category: 'noun', example: 'Die Straße ist sehr laut.', exampleTranslation: 'A rua é muito barulhenta.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n030', german: 'Bahnhof', article: 'der', english: 'train station', portuguese: 'estação de trem',
    category: 'noun', example: 'Der Bahnhof ist in der Stadtmitte.', exampleTranslation: 'A estação de trem fica no centro da cidade.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n031', german: 'Flughafen', article: 'der', english: 'airport', portuguese: 'aeroporto',
    category: 'noun', example: 'Wir fahren zum Flughafen.', exampleTranslation: 'Vamos ao aeroporto.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n032', german: 'Krankenhaus', article: 'das', english: 'hospital', portuguese: 'hospital',
    category: 'noun', example: 'Er liegt im Krankenhaus.', exampleTranslation: 'Ele está internado no hospital.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n033', german: 'Schule', article: 'die', english: 'school', portuguese: 'escola',
    category: 'noun', example: 'Die Kinder gehen zur Schule.', exampleTranslation: 'As crianças vão para a escola.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n034', german: 'Universität', article: 'die', english: 'university', portuguese: 'universidade',
    category: 'noun', example: 'Sie studiert an der Universität München.', exampleTranslation: 'Ela estuda na Universidade de Munique.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n035', german: 'Abend', article: 'der', english: 'evening', portuguese: 'noite / tarde',
    category: 'noun', example: 'Am Abend lerne ich Deutsch.', exampleTranslation: 'À noite estudo alemão.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n036', german: 'Morgen', article: 'der', english: 'morning', portuguese: 'manhã',
    category: 'noun', example: 'Jeden Morgen trinke ich Kaffee.', exampleTranslation: 'Todo manhã bebo café.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n037', german: 'Zeit', article: 'die', english: 'time', portuguese: 'tempo',
    category: 'noun', example: 'Ich habe keine Zeit.', exampleTranslation: 'Não tenho tempo.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n038', german: 'Geld', article: 'das', english: 'money', portuguese: 'dinheiro',
    category: 'noun', example: 'Ich brauche mehr Geld.', exampleTranslation: 'Preciso de mais dinheiro.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n039', german: 'Kind', article: 'das', english: 'child', portuguese: 'criança',
    category: 'noun', example: 'Das Kind spielt im Garten.', exampleTranslation: 'A criança brinca no jardim.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n040', german: 'Mann', article: 'der', english: 'man / husband', portuguese: 'homem / marido',
    category: 'noun', example: 'Der Mann ist sehr groß.', exampleTranslation: 'O homem é muito alto.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'n041', german: 'Frau', article: 'die', english: 'woman / wife', portuguese: 'mulher / esposa',
    category: 'noun', example: 'Die Frau liest ein Buch.', exampleTranslation: 'A mulher está lendo um livro.',
    isCustom: false, level: 0, nextReview: 0,
  },

  // VERBS
  {
    id: 'v001', german: 'arbeiten', english: 'to work', portuguese: 'trabalhar',
    category: 'verb', example: 'Ich arbeite in einem Büro.', exampleTranslation: 'Trabalho em um escritório.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v002', german: 'beginnen', english: 'to begin / to start', portuguese: 'começar',
    category: 'verb', example: 'Der Kurs beginnt um 9 Uhr.', exampleTranslation: 'O curso começa às 9 horas.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v003', german: 'denken', english: 'to think', portuguese: 'pensar',
    category: 'verb', example: 'Was denkst du darüber?', exampleTranslation: 'O que você pensa sobre isso?',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v004', german: 'erklären', english: 'to explain', portuguese: 'explicar',
    category: 'verb', example: 'Kannst du das erklären?', exampleTranslation: 'Você pode explicar isso?',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v005', german: 'fragen', english: 'to ask', portuguese: 'perguntar',
    category: 'verb', example: 'Ich frage den Lehrer.', exampleTranslation: 'Pergunto ao professor.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v006', german: 'geben', english: 'to give', portuguese: 'dar',
    category: 'verb', example: 'Kannst du mir das Buch geben?', exampleTranslation: 'Você pode me dar o livro?',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v007', german: 'helfen', english: 'to help', portuguese: 'ajudar',
    category: 'verb', example: 'Kannst du mir helfen?', exampleTranslation: 'Você pode me ajudar?',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v008', german: 'kaufen', english: 'to buy', portuguese: 'comprar',
    category: 'verb', example: 'Ich kaufe ein neues Handy.', exampleTranslation: 'Vou comprar um celular novo.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v009', german: 'kennen', english: 'to know (someone/something)', portuguese: 'conhecer',
    category: 'verb', example: 'Ich kenne diese Stadt gut.', exampleTranslation: 'Conheço bem essa cidade.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v010', german: 'lernen', english: 'to learn', portuguese: 'aprender / estudar',
    category: 'verb', example: 'Ich lerne jeden Tag Deutsch.', exampleTranslation: 'Estudo alemão todo dia.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v011', german: 'lesen', english: 'to read', portuguese: 'ler',
    category: 'verb', example: 'Sie liest gerne Bücher.', exampleTranslation: 'Ela gosta de ler livros.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v012', german: 'machen', english: 'to do / to make', portuguese: 'fazer',
    category: 'verb', example: 'Was machst du heute?', exampleTranslation: 'O que você está fazendo hoje?',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v013', german: 'nehmen', english: 'to take', portuguese: 'pegar / tomar',
    category: 'verb', example: 'Ich nehme den Bus.', exampleTranslation: 'Vou de ônibus.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v014', german: 'reisen', english: 'to travel', portuguese: 'viajar',
    category: 'verb', example: 'Ich reise gerne.', exampleTranslation: 'Gosto de viajar.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v015', german: 'schreiben', english: 'to write', portuguese: 'escrever',
    category: 'verb', example: 'Ich schreibe einen Brief.', exampleTranslation: 'Estou escrevendo uma carta.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v016', german: 'sehen', english: 'to see', portuguese: 'ver',
    category: 'verb', example: 'Ich sehe einen Film.', exampleTranslation: 'Estou vendo um filme.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v017', german: 'spielen', english: 'to play', portuguese: 'jogar / brincar / tocar',
    category: 'verb', example: 'Die Kinder spielen im Park.', exampleTranslation: 'As crianças brincam no parque.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v018', german: 'sprechen', english: 'to speak / to talk', portuguese: 'falar',
    category: 'verb', example: 'Ich spreche ein bisschen Deutsch.', exampleTranslation: 'Falo um pouco de alemão.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v019', german: 'suchen', english: 'to look for / to search', portuguese: 'procurar / buscar',
    category: 'verb', example: 'Ich suche meinen Schlüssel.', exampleTranslation: 'Estou procurando minha chave.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v020', german: 'treffen', english: 'to meet', portuguese: 'encontrar / se reunir',
    category: 'verb', example: 'Wir treffen uns um 6 Uhr.', exampleTranslation: 'Nos encontramos às 6 horas.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v021', german: 'vergessen', english: 'to forget', portuguese: 'esquecer',
    category: 'verb', example: 'Ich habe mein Buch vergessen.', exampleTranslation: 'Esqueci meu livro.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v022', german: 'verstehen', english: 'to understand', portuguese: 'entender / compreender',
    category: 'verb', example: 'Ich verstehe das nicht.', exampleTranslation: 'Não entendo isso.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v023', german: 'wissen', english: 'to know (a fact)', portuguese: 'saber',
    category: 'verb', example: 'Weißt du die Antwort?', exampleTranslation: 'Você sabe a resposta?',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v024', german: 'wohnen', english: 'to live / to reside', portuguese: 'morar',
    category: 'verb', example: 'Ich wohne in Berlin.', exampleTranslation: 'Moro em Berlim.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v025', german: 'anrufen', english: 'to call (phone)', portuguese: 'ligar / telefonar',
    category: 'verb', example: 'Ich rufe dich später an.', exampleTranslation: 'Te ligo mais tarde.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v026', german: 'brauchen', english: 'to need', portuguese: 'precisar',
    category: 'verb', example: 'Ich brauche deine Hilfe.', exampleTranslation: 'Preciso da sua ajuda.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v027', german: 'einladen', english: 'to invite', portuguese: 'convidar',
    category: 'verb', example: 'Ich lade dich zu meiner Party ein.', exampleTranslation: 'Te convido para a minha festa.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v028', german: 'empfehlen', english: 'to recommend', portuguese: 'recomendar',
    category: 'verb', example: 'Ich empfehle dieses Restaurant.', exampleTranslation: 'Recomendo esse restaurante.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v029', german: 'entscheiden', english: 'to decide', portuguese: 'decidir',
    category: 'verb', example: 'Ich kann mich nicht entscheiden.', exampleTranslation: 'Não consigo me decidir.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'v030', german: 'gewinnen', english: 'to win', portuguese: 'ganhar / vencer',
    category: 'verb', example: 'Wir haben das Spiel gewonnen.', exampleTranslation: 'Ganhamos o jogo.',
    isCustom: false, level: 0, nextReview: 0,
  },

  // ADJECTIVES
  {
    id: 'a001', german: 'ähnlich', english: 'similar', portuguese: 'parecido / semelhante',
    category: 'adjective', example: 'Das ist ähnlich wie in Brasilien.', exampleTranslation: 'É parecido com o Brasil.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'a002', german: 'besonders', english: 'special / particularly', portuguese: 'especial / especialmente',
    category: 'adjective', example: 'Das ist besonders schön.', exampleTranslation: 'Isso é especialmente bonito.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'a003', german: 'billig', english: 'cheap / inexpensive', portuguese: 'barato',
    category: 'adjective', example: 'Das ist sehr billig.', exampleTranslation: 'Isso é muito barato.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'a004', german: 'einfach', english: 'simple / easy', portuguese: 'simples / fácil',
    category: 'adjective', example: 'Das ist ganz einfach.', exampleTranslation: 'É bem simples.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'a005', german: 'fleißig', english: 'hardworking / diligent', portuguese: 'trabalhador / dedicado',
    category: 'adjective', example: 'Sie ist sehr fleißig.', exampleTranslation: 'Ela é muito dedicada.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'a006', german: 'freundlich', english: 'friendly / kind', portuguese: 'simpático / amigável',
    category: 'adjective', example: 'Die Leute hier sind sehr freundlich.', exampleTranslation: 'As pessoas aqui são muito simpáticas.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'a007', german: 'gefährlich', english: 'dangerous', portuguese: 'perigoso',
    category: 'adjective', example: 'Das ist sehr gefährlich.', exampleTranslation: 'Isso é muito perigoso.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'a008', german: 'glücklich', english: 'happy', portuguese: 'feliz',
    category: 'adjective', example: 'Ich bin sehr glücklich.', exampleTranslation: 'Estou muito feliz.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'a009', german: 'interessant', english: 'interesting', portuguese: 'interessante',
    category: 'adjective', example: 'Das Buch ist sehr interessant.', exampleTranslation: 'O livro é muito interessante.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'a010', german: 'langsam', english: 'slow', portuguese: 'devagar / lento',
    category: 'adjective', example: 'Bitte sprich langsam!', exampleTranslation: 'Por favor, fale devagar!',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'a011', german: 'lustig', english: 'funny / amusing', portuguese: 'engraçado / divertido',
    category: 'adjective', example: 'Der Film ist sehr lustig.', exampleTranslation: 'O filme é muito engraçado.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'a012', german: 'müde', english: 'tired', portuguese: 'cansado',
    category: 'adjective', example: 'Ich bin sehr müde.', exampleTranslation: 'Estou muito cansado.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'a013', german: 'nett', english: 'nice / kind', portuguese: 'legal / gentil',
    category: 'adjective', example: 'Das ist sehr nett von dir.', exampleTranslation: 'Isso é muito legal da sua parte.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'a014', german: 'ruhig', english: 'quiet / calm', portuguese: 'quieto / calmo',
    category: 'adjective', example: 'Die Straße ist sehr ruhig.', exampleTranslation: 'A rua é muito tranquila.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'a015', german: 'schwierig', english: 'difficult', portuguese: 'difícil',
    category: 'adjective', example: 'Deutsch ist schwierig aber schön.', exampleTranslation: 'O alemão é difícil mas bonito.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'a016', german: 'teuer', english: 'expensive', portuguese: 'caro',
    category: 'adjective', example: 'Das Haus ist sehr teuer.', exampleTranslation: 'A casa é muito cara.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'a017', german: 'traurig', english: 'sad', portuguese: 'triste',
    category: 'adjective', example: 'Sie ist heute sehr traurig.', exampleTranslation: 'Ela está muito triste hoje.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'a018', german: 'wichtig', english: 'important', portuguese: 'importante',
    category: 'adjective', example: 'Das ist sehr wichtig.', exampleTranslation: 'Isso é muito importante.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'a019', german: 'wunderbar', english: 'wonderful / marvelous', portuguese: 'maravilhoso',
    category: 'adjective', example: 'Der Urlaub war wunderbar.', exampleTranslation: 'As férias foram maravilhosas.',
    isCustom: false, level: 0, nextReview: 0,
  },
  {
    id: 'a020', german: 'zufrieden', english: 'satisfied / content', portuguese: 'satisfeito / contente',
    category: 'adjective', example: 'Ich bin sehr zufrieden.', exampleTranslation: 'Estou muito satisfeito.',
    isCustom: false, level: 0, nextReview: 0,
  },
];
