var list_of_words = [["сосредотОчение", "сосредоточЕние"],["вероисповЕдание", "вероисповедАние"],["апострОф", "апОстроф"],
["жалюзИ", "жАлюзи"], ["танцОвщица", "танцовщИца"], ["опОшлить", "опошлИть"],["квартАл", "квАртал"],["корЫсть", "кОрысть"],
["кУхонный", "кухОнный"],["прозорлИвый", "прозОрливый"],["слИвовый", "сливОвый"],["бралА", "брАла"],["кровоточИть", "кровотОчить"],
["диспансЕр", "диспАнсер"],["Иксы", "иксЫ"],["лОктя", "локтЯ"],["намЕрение", "намерЕние"],["тУфля", "туфлЯ"],
["красИвее", "красивЕе"],["оптОвый", "Оптовый"],["мозаИчный", "мозАичный"],["взялА", "взяЯа"],
["понЯвший", "пОнявший"],["началА", "нАчала"],["снятА", "снЯта"],["окружИт", "окрУжит"],
["плЕсневеть", "плесневЕть"],["откУпорить", "откупОрить"],["чЕрпать", "черпАть"],["премировАть", "премИровать"]];



function round() {

  has_game_ended = 0;

  pare = Math.floor(Math.random() * list_of_words.length);
  word = Math.round(Math.random());

  $(".right_word").off("click");
  $(".wrong_word").off("click");

  $(".l_btn").removeClass("right_word");
  $(".r_btn").removeClass("right_word");
  $(".l_btn").removeClass("wrong_word");
  $(".r_btn").removeClass("wrong_word");

  $(".l_btn").html(list_of_words[pare][word]);
  $(".r_btn").html(list_of_words[pare][1-word]);

  if (word == 0) {
    $(".l_btn").addClass("right_word");
    $(".r_btn").addClass("wrong_word");
  } else {
    $(".r_btn").addClass("right_word");
    $(".l_btn").addClass("wrong_word");
  };

  $(".right_word").click( function() {
    score++;
    round();
  });

  $(".wrong_word").click( function() {
    score = 0;
    $("h1").html("You lose!");
    has_game_ended = 1;
    $(".right_word").off("click");
    $(".wrong_word").off("click");
    $(".l_btn").removeClass("right_word");
    $(".r_btn").removeClass("right_word");
    $(".l_btn").removeClass("wrong_word");
    $(".r_btn").removeClass("wrong_word");

    setTimeout(function() {
      $("h1").html("Press R to restart!");
    })
  });

  $("h1").html("Your score: " + score);

};

var pare = 0;
var word = 0;
var score = 0;
var has_game_started = 0;
var has_game_ended = 0;


document.addEventListener("keypress", function(event) {
  if (event.key == "a" && has_game_started == 0 ) {
    has_game_started = 1;
    round();
  };
});

document.addEventListener("keypress", function(event) {
  if (event.key == "r" && has_game_ended == 1) {
    round();
  };
});
