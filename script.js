//function myfunc(){
//    alert(document.getElementById("language").value);
//}

var countQues = 0;
var lang;
var score = 0;


var Acredquestions = [
    {
        question: `Які основні джерела інформації про освітню програму ви використовували?`,
        choices: ['Сайт університету, вкладка «Університет» - «Нормативні документи» - «Освітні програми»', 'Сайт кафедри 2022-2023 н.р. за посиланням http://snd.kntu.kr.ua/', 'Вкладка «Абітурієнту» на сайті університету', 'Всі вище вказані варіанти'],
        answer: 4
    },
    {
        question: "Яка освітньо-професійна програма зацікавила вас для магістрів?",
        choices: [
            "Інформаційна, бібліотечна та архівна справа",
            "Інженерія та технології",
            "Медицина та біологія",
            "Економіка та фінанси"
        ],
        answer: 1
    },
    {
        question: "Де можна знайти інформацію щодо документів для вступу, строків їх подання та правил прийому на навчання?",
        choices: [
            "Вкладка «Університет» - «Нормативні документи» - «Освітні програми»",
            "Вкладка «Абітурієнту» на сайті університету",
            "Сайт кафедри 2022-2023 н.р. за посиланням http://snd.kntu.kr.ua/",
            "Вкладка «Абітурієнту» на сайті кафедри"
        ],
        answer: 2
    },
    {
        question: "З ким ви консультувалися щодо питань вступу?",
        choices: [
            "Представники приймальної комісії від кафедри історії, археології, інформаційної та архівної справи",
            "Директор університету",
            "Родичі та друзі",
            "Викладачі іноземної мови"
        ],
        answer: 1
    },
    {
        question: "Які іспити вам довелося складати під час вступу?",
        choices: [
            "ЄВІ (єдиний вступний іспит з іноземної мови) та іспит з фаху",
            "Тільки іспит з фаху",
            "Тільки іспит з математики",
            "ЄВІ та іспит з літератури"
        ],
        answer: 1
    },
    {
        question: "З ким ви познайомилися під час початку навчання?",
        choices: [
            "Гарантом освітньої програми та куратором групи",
            "Директором бібліотеки університету",
            "Головою приймальної комісії",
            "Викладачами іноземної мови"
        ],
        answer: 1
    },
    {
        question: "Що розповідали викладачі на перших заняттях про навчальні дисципліни?",
        choices: [
            "Про дати іспитів",
            "Про форми контрольних заходів та оцінювання",
            "Про розклад занять",
            "Про вимоги до студентів"
        ],
        answer: 2
    },
    {
        question: "Де можна знайти короткий опис дисциплін (силабуси)?",
        choices: [
            "На сайті університету",
            "На сайті кафедри",
            "В груповому чаті",
            "В бібліотеці"
        ],
        answer: 2
    },
    {
        question: "Які види порушень академічної доброчесності були пояснені викладачами?",
        choices: [
            "Тільки плагіат",
            "Тільки списування",
            "Плагіат, списування, хабарництво, фальсифікація, фабрикація, самоплагіат",
            "Тільки фабрикація"
        ],
        answer: 3
    },
    {
        question: "Який інформаційний захід проводили щодо академічної доброчесності?",
        choices: [
            "Лекції в аудиторії",
            "Опитування з питань академічної доброчесності",
            "Завдання для самостійного вивчення",
            "Відвідування бібліотеки"
        ],
        answer: 2
    },
    {
        question: "Як могли студенти обирати вибіркові дисципліни?",
        choices: [
            "Завідувач факультету вибирав дисципліни за них.",
            "Студенти мали можливість обирати 25% від обсягу кредитів за освітньою програмою.",
            "Декан факультету обирав дисципліни за студентів.",
            "Студенти не мали можливості обирати вибіркові дисципліни."
        ],
        answer: 2
    },
    {
        question: "Де розміщений каталог вибіркових дисциплін?",
        choices: [
            "На сайті університету",
            "В груповому чаті",
            "В бібліотеці",
            "На сайті кафедри за посиланням http://snd.kntu.kr.ua/"
        ],
        answer: 4
    },
    {
        question: "Яким чином студенти обирали вибіркові дисципліни?",
        choices: [
            "Вони обирали дисципліни вручну.",
            "Декан факультету обирав дисципліни за студентами.",
            "Вони робили вибір під час опитування.",
            "Студенти складали заяви і здавали їх куратору."
        ],
        answer: 4
    },
    {
        question: "Коли студенти починали вивчати обрані вибіркові дисципліни?",
        choices: [
            "З першого семестру",
            "З другого семестру",
            "З третього семестру",
            "З осіннього семестру"
        ],
        answer: 2
    },
    {
        question: "Які вибіркові дисципліни обрали студентки Шаповалова Юлія Станіславівна, Данилишин Олена Романівна та Пупченко Ганна Сергіївна?",
        choices: [
            "Всі вибрали однакові дисципліни.",
            "Вони обирали різні дисципліни.",
            "Вони не обирали жодної вибіркової дисципліни.",
            "Вони обирали вибіркові дисципліни тільки на осінній семестр."
        ],
        answer: 2
    },
    {
        question: "Які обов'язкові дисципліни вивчали студенти?",
        choices: [
            "Філософія культури, Стежко Зоя Василівна",
            "Цивільний захист, Осін Руслан Анатолійович",
            "Менеджмент та маркетинг в інформаційній сфері, Зайченко Володимир Васильович",
            "Всі вищенаведені дисципліни"
        ],
        answer: 4
    },
    {
        question: "Які методи викладання застосовувалися в освітньому процесі?",
        choices: [
            "Тільки словесні методи",
            "Тільки наочні методи",
            "Різні методи викладання, такі як словесні, наочні, практичні, інтерактивні, інноваційні, інтегровані та інші",
            "Тільки методи дистанційного навчання"
        ],
        answer: 3
    },
    {
        question: "Які інструменти застосовувалися для навчання?",
        choices: [
            "Тільки програмне забезпечення Microsoft",
            "Тільки інструменти Google",
            "Програмне забезпечення для проведення опитувань, такі як Kahoot і Mentimeter",
            "Різні інструменти, включаючи Google, Microsoft та інші"
        ],
        answer: 4
    },
    {
        question: "Яка форма навчання використовувалася для самостійного вивчення матеріалу?",
        choices: [
            "Лекції",
            "Практичні заняття",
            "Самостійна робота, включаючи репродуктивну, проблемну та інші види",
            "Заліки і іспити"
        ],
        answer: 3
    },
    {
        question: "Які платформи використовувалися для дистанційного навчання?",
        choices: [
            "Тільки Moodle",
            "Тільки Google Meet і Zoom",
            "Різні платформи, включаючи Moodle, Google Meet, Zoom та інші",
            "Книги та навчально-методична література"
        ],
        answer: 3
    },
    {
        question: "Які завдання виконують студенти на практичних заняттях та під час переддипломної практики?",
        choices: [
            "Виконують теоретичні завдання на комп'ютері.",
            "Виконують різні практичні завдання на підприємствах і в установах.",
            "Проводять дослідження в бібліотеці.",
            "Виконують практичні завдання на комп'ютері"
        ],
        answer: 2
    },
    {
        question: "Якими інструментами можна користуватися для пошуку бази практики?",
        choices: [
            "Звертатися до гаранта або свого наукового керівника.",
            "Проводити дослідження в бібліотеці.",
            "Використовувати інтернет для пошуку підприємств.",
            "Звертатися до завідувача кафедри або декана"
        ],
        answer: 1
    },
    {
        question: "Коли розпочинається переддипломна практика?",
        choices: [
            "З 30 листопада по 29 грудня.",
            "З 30 жовтня по 29 листопада.",
            "З 29 листопада по 30 грудня.",
            "З 29 жовтня по 30 листопада.",
        ],
        answer: 2
    },
    {
        question: "Які можливі шляхи обрання теми для кваліфікаційної роботи?",
        choices: [
            "Обов'язкове обрання теми з переліку, наданого кафедрою.",
            "Обов'язкове обрання власної теми без варіантів.",
            "Можливість обрати тему з переліку або запропонувати власну.",
            "Тема сама тебе обере, якщо ти не обереш тему"
        ],
        answer: 3
    },
    {
        question: "Коли відбувається узгодження теми та наукового керівника кваліфікаційної роботи?",
        choices: [
            "Після захисту кваліфікаційної роботи.",
            "Під час переддипломної практики.",
            "До початку переддипломної практики.",
            "Під час захисту кваліфікаційної роботи."
        ],
        answer: 3
    },
    {
        question: "Як проводиться перевірка на плагіат під час виконання кваліфікаційної роботи?",
        choices: [
            "Використовуються спеціалізовані програми для виявлення плагіату.",
            "Плагіат не перевіряється.",
            "Перевірка відбувається на відмову від копіювання.",
            "Використовуються антиплагіатна інтуіція."
        ],
        answer: 1
    },
    {
        question: "Які можливості для участі в наукових заходах були надані студентам?",
        choices: [
            "Без можливостей для участі в наукових заходах.",
            "Участь у конференціях та подача наукових статей і тез.",
            "Тільки участь у Дні науки-2023.",
            "Участь у спеціалізованих лекціях."
        ],
        answer: 2
    },
    {
        question: "Де проходив День науки-2023 і які можливості він надавав студентам?",
        choices: [
            "Проходив в університеті, але студенти не брали участі.",
            "Проходив у бібліотеці ім. Д.Чижевського, де студенти мали змогу виступити з доповідями та обговорити проблемні питання.",
            "Не відомо, де він проходив.",
            "Він відбувся в онлайн-форматі через військову агресію росії."
        ],
        answer: 2
    },
    {
        question: "До яких видань мали можливість подавати свої наукові публікації студенти?",
        choices: [
            "Тільки до збірника студентських наукових праць ЦНТУ.",
            "До електронного збірника наукових публікацій «КАТЕДРА Universum», до збірника тез конференції і до збірника тез Міжнародної конференції «Історія, археологія, інформаційна, бібліотечна та архівна справа: актуальні проблеми науки та освіти».",
            "Тільки до Міжнародної конференції «Історія, археологія, інформаційна, бібліотечна та архівна справа».",
            "До різних наукових видань та журналів."
        ],
        answer: 2
    },
    {
        question: "Яка кафедра ініціювала та співорганізувала проведення наукового форуму?",
        choices: [
            "Кафедра інформаційних технологій.",
            "Кафедра історії, археології, інформаційної, бібліотечної та архівної справи.",
            "Кафедра прикладної механіки",
            "Кафедра ремонту та експлуатації машин"
        ],
        answer: 2
    },
    {
        question: "Які можливості для академічної мобільності надавали студентам, аспірантам і викладачам університету?",
        choices: [
            "Немає можливостей для академічної мобільності.",
            "Університет мав Положення про академічну мобільність, і студенти, аспіранти і викладачі мали доступ до міжнародних співпраці.",
            "Можливості були, але через карантин та воєнний стан ніхто не мав можливості взяти участь у програмах академічної мобільності.",
            "Інший варіант."
        ],
        answer: 2
    },
    {
        question: "Якими науковими базами даних користувалися студенти, аспіранти і викладачі для своїх досліджень?",
        choices: [
            "Тільки внутрішні бази даних університету.",
            "SCOPUS, Springer Nature та інші наукометричні бази даних.",
            "Не було доступу до наукових баз даних.",
            "Інший варіант."
        ],
        answer: 2
    },
    {
        question: "Чи брали студенти, аспіранти та викладачі участь у програмах академічної мобільності та закордонних стажуваннях?",
        choices: [
            "Так, брали участь у програмах академічної мобільності та закордонних стажуваннях.",
            "Ні, ніхто не брав участь через особисті обставини та карантин.",
            "Не відомо, чи брали участь.",
            "Інший варіант."
        ],
        answer: 2
    },
    {
        question: "Чи проходив хтось із вас додаткові навчальні курси з неформальної освіти?",
        choices: [
            "Так, багато з нас проходили додаткові навчальні курси з неформальної освіти.",
            "Ні, ніхто з нас не проходив додаткові навчальні курси з неформальної освіти.",
            "Частина з нас проходила додаткові курси, але не багато.",
            "Не відомо."
        ],
        answer: 2
    },
    {
        question: "Чи звертались ви з пропозицією про перезарахування результатів отриманої неформальної освіти?",
        choices: [
            "Так, ми звертались з пропозицією про перезарахування результатів неформальної освіти.",
            "Ні, ніхто з нас не звертався з такою пропозицією.",
            "Так, ми звертались з пропозицією, але її було проігноровано",
            "Не відомо."
        ],
        answer: 2
    },
    {
        question: "Що потрібно зробити для перезарахування результатів отриманої неформальної освіти у вашому університеті?",
        choices: [
            "Подати заяву і завірені копії документів, які підтверджують участь у заході неформальної освіти.",
            "Підготувати опис заходу, зміст та результат отриманої неформальної освіти.",
            "Звернутися до гаранта Освітньо-професійної програми.",
            "Всі вищенаведені відповіді є вірними."
        ],
        answer: 4
    },
       


]


var HTMLquestions = [

    {
        question: "HTML is what type of language ?",
        choices: ["Scripting Language", "Markup Language", "Programming Language", "Network Protocol"],
        answer: 2

    },

    {
        question: "HTML uses :",
        choices: ["User defined tags", "Pre-specified tags", "Fixed tags defined by the language", "Tags only for linking"],
        answer: 3

    },
    {
        question: "The year in which HTML was first proposed _______.",
        choices: ["1990", "1980", "2000", "1995"],
        answer: 1

    },
    {
        question: "Apart from <b> tag, what other tag makes text bold ?",
        choices: ["fat", "strong", "black", "emp"],
        answer: 2

    },
    {/*5*/
        question: "How can you make a bulleted list with numbers? ",
        choices: ["dl", "ol", "list", "ul"],
        answer: 2

    },
    {
        question: "What tag is used to display a picture in a HTML page?",
        choices: ["picture", "image", "pic", "img"],
        answer: 4

    },
    {
        question: "HTML web pages can be read and rendered by _________.",
        choices: ["Compiler", "Server", "Web Browser", "Interpreter"],
        answer: 3

    },
    {
        question: "Which of the following is not a browser ?",
        choices: ["Microsofts Bing", "Netscape Navigator", "Mozilla Firefox", "Opera"],
        answer: 1

    },
    {
        question: "HTML tags are surrounded by which type of brackets.",
        choices: ["Curly", "Round", "Squart", "Angle"],
        answer: 4

    },
    {/*10*/
        question: "Tags and test that are not directly displayed on the page are written in _____ section.",
        choices: ["head", "title", "body", "html"],
        answer: 1

    }

];

var CSSquestions = [

    {
        question: "If we want define style for an unique element, then which css selector will we use ?",
        choices: ["Id", "text", "class", "name"],
        answer: 1

    },
    {
        question: "If we don't want to allow a floating div to the left side of an element, which css property will we use ?",
        choices: ["margin", "clear", "float", "padding"],
        answer: 2

    },
    {
        question: "Suppose we want to arragnge five nos. of DIVs so that DIV4 is placed above DIV1. Now, which css property will we use to control the order of stack ?",
        choices: ["d-inex", "s-index", "x-index", "z-index"],
        answer: 4

    },
    {/*4*/
        question: "Can we align a Block element by setting the left and right margins ?",
        choices: ["Yes, we can", "Not Possible", "Depends on browser", "Depends upon operating System"],
        answer: 2

    },
    {
        question: "If we want to wrap a block of text around an image, which css property will we use ?",
        choices: ["wrap", "push", "float", "align"],
        answer: 3

    },
    {/*6*/
        question: "If we want to show an Arrow as cursor, then which value we will use ?",
        choices: ["pointer", "default", "arrow", "arr"],
        answer: 2

    },
    {
        question: "If we want to use a nice looking green dotted border around an image, which css property will we use?",
        choices: ["border-color", "border-decoration", "border-style", "border-line"],
        answer: 3

    },
    {/*8*/
        question: "Which of the following properties will we use to display border around a cell without any content ?",
        choices: ["empty-cell", "blank-cell", "noncontent-cell", "void-cell"],
        answer: 1

    },
    {
        question: "What should be the table width, so that the width of a table adjust to the current width of the browser window?",
        choices: ["640 pixels", "100%", "full-screen", "1024px"],
        answer: 2

    },
    {
        question: "How can we write comment along with CSS code ?",
        choices: ["/* a comment */", "// a comment //", "/ a comment /", "<' a comment'>"],
        answer: 1

    }

];
var JSquestions = [

    {
        question: "Which of the following is true about variable naming conventions in JavaScript?",
        choices: ["JavaScript variable names must begin with a letter or the underscore character.", "JavaScript variable names are case sensitive.", "Both of the above.", " None of the above."],
        answer: 3

    },
    {/*wscubetech*/
        question: " Which of the following is a server-side Java Script object?",
        choices: ["Function", "File", "FilleUpload", "Data"],
        answer: 2

    },
    {
        question: "Java script can be used for Storing the form's contents to a database file on the server",
        choices: ["False", "True"],
        answer: 1

    },
    {
        question: "How does Java Script store dates in objects of Date type?",
        choices: ["The number of days since January 1st, 1900", "The number of seconds since January 1st, 1970", "The number of milliseconds since January 1st, 1970", "The number of picoseconds since January 1st, 1970"],
        answer: 3

    },
    {
        question: "C-style block-level scoping is not supported in Java script",
        choices: ["False", "True"],
        answer: 2

    },
    {
        question: "JavaScript ignores extra spaces in Syntax",
        choices: ["True", "False"],
        answer: 2

    },
    {
        question: "Which of the following is the tainted property of a window object in Java Script?",
        choices: ["Pathname", "Protocol", "Defaultststus", "Host"],
        answer: 3

    },
    {
        question: "Which attribute needs to be changed to make elements invisible?",
        choices: ["visibilty", "visible", "invisible", "None of the above"],
        answer: 1

    },
    {
        question: " Javascript is an object oriented language?",
        choices: ["False", "True"],
        answer: 2

    },
    {
        question: "What is the alternate name for Java script?",
        choices: ["LimeScript", "ECMScript", "Both of the above", "ECMAScript"],
        answer: 4

    }

];
var PYquestions = [

    {
        question: "What is the output of the following program : print(Hello World'[::-1])",
        choices: ["dlroW olleH", "Hello Worl", "d", "Error"],
        answer: 1

    },
    {
        question: "Given a function that does not return any value, what value is shown when executed at the shell?",
        choices: ["int", "bool", "void", "None"],
        answer: 4

    },
    {
        question: "Which module in Python supports regular expressions?",
        choices: ["re", "regex", "pyregex", "None of the above"],
        answer: 1

    },
    {
        question: "What is the output of the following program : (tricky ques.)  print (0.1 + 0.2 == 0.3) ",
        choices: ["True", "False", "Machine Dependent", "Error"],
        answer: 2

    },
    {
        question: "Which of the following is not a complex number?",
        choices: ["k = 2 + 3j", "k = complex(2, 3)", "k = 2 + 3l", "k = 2 + 3J"],
        answer: 3

    },
    {
        question: "What does ~~~~~~5 evaluate to?",
        choices: ["+5", "-11", "+11", "-5"],
        answer: 1

    },
    {
        question: "Given a string s = “Welcome”, which of the following code is incorrect?",
        choices: ["print s[0]", "print s.lower()", "s[1] = ‘r’", "print s.strip()"],
        answer: 3

    },
    {
        question: "________ is a simple but incomplete version of a function.",
        choices: ["Stub", "Function", "A function developed using bottom-up approach", "A function developed using top-down approach"],
        answer: 1

    },
    {
        question: "To start Python from the command prompt, use the command ______",
        choices: ["execute python", "go python", "python", "run python"],
        answer: 3

    },
    {
        question: "Which of the following is correct about Python?",
        choices: ["It supports automatic garbage collection.", "It can be easily integrated with C, C++, COM, ActiveX, CORBA, and Java", "Both of the above", "None of the above"],
        answer: 3

    }

];
var Cquestions = [

    {
        question: "C Language was developed in the year ____",
        choices: ["1970", "1975", "1980", "1985"],
        answer: 1

    },
    {
        question: "Which one is not a reserve keyword in C Language?",
        choices: ["auto", "main", "case", "register"],
        answer: 2

    },
    {
        question: "A C variable name can start with a ____",
        choices: ["Number", "Plus Sign", "Underscore", "Asterisk"],
        answer: 3

    },
    {
        question: "Prototype of a function means _____",
        choices: ["Name of Function", "Output of Function", "Declaration of Function", "Input of a Function"],
        answer: 3

    },
    {
        question: "Name the loop that executes at least once.",
        choices: ["for", "If", "do-while", "while"],
        answer: 3

    },
    {
        question: "Far pointer can access _____",
        choices: ["Single memory location", "No memory location", "All memory location", "First and Last Memory Address"],
        answer: 3

    },
    {
        question: "A pointer pointing to a memory location of the variable even after deletion of the variavle is known as _____",
        choices: ["far pointer", "dangling pointer", "null pointer", "void pointer"],
        answer: 2

    },
    {
        question: "An uninitialized pointer in C is called ___",
        choices: ["Constructor", "dangling pointer", "Wild Pointer", "Destructor"],
        answer: 3

    },
    {
        question: "A pointer that is pointing to NOTHING is called ____",
        choices: ["VOID Pointer", "DANGLING Pointer", "NULL Pointer", "WILD Pointer"],
        answer: 3

    },
    {
        question: "Who is known as the father of C Language ?",
        choices: ["Digvijay", "James A. Sosling", "Dr. E. F. Codd", "Dennis Ritchie"],
        answer: 4

    }

];





//alert(questions.length);
document.getElementById("score").textContent = "Бали: " + 0;
document.querySelector(".view-results").style.display = "none";
document.querySelector(".quiz").style.display = "none";
document.querySelector(".final-result").style.display = "none";








document.querySelector(".choose-lang").addEventListener("click", function () {

    lang = document.getElementById("language").value + "questions";
    document.getElementById("ques-left").textContent = "Запитання : " + (countQues + 1) + "/" + window[lang].length;

    //    alert(window[lang].length);
    //window["anything"] will convert "anything" string to object because window is also an object
    document.querySelector(".quiz").style.display = "block";

    document.querySelector(".question").innerHTML = "<h1>" + window[lang][countQues].question + "</h1>";
    for (i = 0; i <= 3; i++) {
        document.getElementById("opt" + i).value = window[lang][countQues].choices[i];
        document.getElementById("lb" + i).innerHTML = window[lang][countQues].choices[i];

    };/*For loop Closed*/

    //    window.location.href="#score";

});





document.querySelector(".submit-answer").addEventListener("click", function () {
    //     alert(window[lang][countQues].choices[window[lang][countQues].answer-1]);
    //     alert(document.querySelector('input[name="options"]:checked').value);

    if (document.querySelector('input[name="options"]:checked').value === window[lang][countQues].choices[window[lang][countQues].answer - 1]) {

        score += 10;
        document.getElementById("score").textContent = "Бали : " + score;
        document.getElementById("ques-view").innerHTML += "<div class='ques-circle correct'>" + (countQues + 1) + "</div>";

    } else {

        score -= 5;
        document.getElementById("score").textContent = "Бали : " + score;
        document.getElementById("ques-view").innerHTML += "<div class='ques-circle incorrect'>" + (countQues + 1) + "</div>";
    };

    if (countQues < window[lang].length - 1) {
        countQues++;
    } else {
        document.querySelector(".submit-answer").style.display = "none";
        document.querySelector(".view-results").style.display = "unset";

    }

    document.getElementById("ques-left").textContent = "Запитання : " + (countQues + 1) + "/" + window[lang].length;
    document.querySelector(".question").innerHTML = "<h1>" + window[lang][countQues].question + "</h1>";
    for (i = 0; i <= 3; i++) {
        document.getElementById("opt" + i).value = window[lang][countQues].choices[i];
        document.getElementById("lb" + i).innerHTML = window[lang][countQues].choices[i];

    };/*For loop Closed*/

});

document.querySelector(".view-results").addEventListener("click", function () {

    document.querySelector(".final-result").style.display = "block";

    document.querySelector(".solved-ques-no").innerHTML = "Ви відповіли на " + (countQues + 1) + "  запитань ";

    var correct = document.getElementById("ques-view").getElementsByClassName("correct").length;

    document.querySelector(".right-wrong").innerHTML = correct + " були надані вірно, а у " + ((countQues + 1) - correct) + " була допущена помилка";

    document.getElementById("display-final-score").innerHTML = "Ваш фактичний результат складає: " + score;

    // if (correct / (countQues + 1) > 0.8) {
    //     document.querySelector(".remark").innerHTML = "Remark: OutStanding ! :)";
    // } else if (correct / (countQues + 1) > 0.6) {
    //     document.querySelector(".remark").innerHTML = "Remark: Good, Keep Improving.";

    // } else if (correct / (countQues + 1)) {
    //     document.querySelector(".remark").innerHTML = "Remark: Satisfactory, Learn More.";
    // } else {
    //     document.querySelector(".remark").innerHTML = "Remark: Unsatisfactory, Try Again.";
    // }

    // //    window.location.href="#display-final-score";

});

document.getElementById("restart").addEventListener("click", function () {
    location.reload();

});

document.getElementById("about").addEventListener("click", function () {
    alert("Створений Левченко Аліною");

});


/*Smooth Scroll*/


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});



/*Smooth Scroll End*/
