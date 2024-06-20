function update_captions(){
  if(window.innerWidth < 520){
    captions = ["Astesiano", "Piso 4",
      "Heber", "Bustillo",
      "<span style='display:inline-block;line-height:11px;vertical-align:middle'>Pasaporte</span>",
      "<span style='font-size:11px;display:inline-block;line-height:11px;vertical-align:middle'>Marset</span>",
      "<span style='font-size:11px'>Falopa</span>", "Lacalle",
      "<span style='font-size:11px'>Fingir demencia</span>", "Campechano", "Chamuyo",
      "<span style='font-size:smaller'>Turbiedad</span>",
      "<span style='font-size:smaller'>Pedofilia</span>", "Penades", "Encubrimiento"];
    captions_rel = ["<span style='font-size:9px;'>Sin frazada</span>",
      "<span style='font-size:11px;'>Fiscalía</span>"];
  }
  else{
    captions = ["Astesiano", "Piso 4",
      "Heber", "Bustillo",
      "<span style='font-size:24px;display:inline-block;line-height:24px;vertical-align:middle'>Pasaporte</span>",
      "<span style='font-size:20px;display:inline-block;line-height:20px;vertical-align:middle'>Marset</span>",
      "<span style='font-size:20px'>Falopa</span>", "Lacalle",
      "<span style='font-size:20px'>Fingir demencia</span>", "Campechano", "Chamuyo",
      "<span style='font-size:smaller'>Turbiedad</span>",
      "<span style='font-size:smaller'>Pedofilia</span>", "Penades", "Encubrimiento"];
    captions_rel = ["<span style='font-size:15px;'>Sin frazada</span>",
      "<span style='font-size:20px;'>Fiscalía</span>"];
  }
}

var span_en;

function create_switch_en(){
  span_en = document.createElement('div');
  span_en.style.position = "absolute";
  span_en.style.top = "0";
  if(window.innerWidth < 520)
    span_en.style.fontSize = "10px";
  else
    span_en.style.fontSize = "small";
  span_en.style.backgroundColor = "#8f7a66";
  span_en.style.borderRadius = "0 0 3px 3px";
  span_en.style.padding = "3px 10px";
  span_en.style.color = "white";
  span_en.style.cursor = "pointer";
  span_en.onclick = play_in_english;
  span_en.textContent = "🇬🇧 Switch to English";
  var container = document.querySelector('.container');
  container.insertBefore(span_en, container.firstChild);
}

var span_zh;

function create_switch_zh(){
  span_zh = document.createElement('div');
  span_zh.style.position = "absolute";
  span_zh.style.top = "0";
  if(window.innerWidth < 520)
    span_zh.style.fontSize = "10px";
  else
    span_zh.style.fontSize = "small";
  span_zh.style.backgroundColor = "#8f7a66";
  span_zh.style.borderRadius = "0 0 3px 3px";
  span_zh.style.padding = "3px 10px";
  span_zh.style.color = "white";
  span_zh.style.cursor = "pointer";
  span_zh.onclick = play_in_chinese;
  span_zh.textContent = "中文版";
  var container = document.querySelector('.container');
  container.insertBefore(span_zh, container.firstChild);
}

function play_in_english(){
  update_captions();
  window.addEventListener('resize', update_captions, true);

  caption_garbage = "<span style='font-size:smaller'>Chats</span>";
  window.game.actuate();

  game_title = "Chamuyeyfalopa";
  game_alt_title = "Corrupción";
  result_msg = "Obtuviste un ";
  var titleElem = document.getElementById('title');
  if(titleElem.textContent != "Corrupción") titleElem.textContent = game_title;
  document.querySelector('.restart-button').textContent = "Voy de nuevo";
  document.querySelector('.retry-button').textContent = "Intenta de nuevo";
  document.querySelector('.game-explanation').innerHTML = "<strong class='important'>Cómo jugar?:</strong> Utiliza las <strong>flechas</strong> para mover los bloques. Cuando dos bloques del mismo tipo se tocan <strong>se convierten en uno solo!</strong><br>Sin embargo, tus habilidades para corromper el estdo y la vida pueden no funcionar siempre; pueden aparecer  <strong>chats</strong>, que son resistentes a la corrupción. Dos bloques de chats desaparecen cuando se tocan. Vas a dejar de sufrir los chats luego de conseguir un <strong>Lacalle</strong> <br>Un <strong>sin frazada</strong> sube el nivel de cualquier bloque que toca. El bloque muestra el número de veces que te has beneficiado de él. Cuando termine la sin frazada de 10 segundos, se convertirá en una <strong>Fiscalía</strong> (o chats si no lo has usado), que baja de nivel los bloques hasta que has pagado los beneficios.";

  if(span_en) span_en.parentNode.removeChild(span_en);
  create_switch_zh();
  window.game.storageManager.storage.setItem('lang', 'en');
}

var zh_var = null;

function determine_zh_var(){
  if(zh_var) return zh_var;
  var hant_locales = ['zh-hant', 'zh-tw', 'zh-hk', 'zh-mo'];
  var nav_langs = navigator.languages;
  var hant_fallback = false;
  if(nav_langs){
    for(var i=0; i<nav_langs.length; i++){
      var nav_lang = nav_langs[i].toLowerCase();
      if(nav_lang.startsWith('zh-')){
        zh_var = hant_locales.indexOf(nav_lang) >= 0 ? "hant" : "hans";
        break;
      }
      else if(nav_lang.startsWith('ja-') || nav_lang.startsWith('ko-')) hant_fallback = true;
    }
  }
  else{
    var nav_lang = navigator.language || navigator.userLanguage;
    if(nav_lang){
      nav_lang = nav_lang.toLowerCase();
      if(nav_lang.startsWith('zh-'))
        zh_var = hant_locales.indexOf(nav_lang) >= 0 ? "hant" : "hans";
      else if(nav_lang.startsWith('ja-') || nav_lang.startsWith('ko-')) hant_fallback = true;
    }
  }
  if(!zh_var) zh_var = hant_fallback ? "hant" : "hans";
  return zh_var;
}

function use_simplified(){
  captions = ["Coffee", "Panini",
    "想法", "代码", "<span style='display:inline-block;line-height:30px;vertical-align:middle'>深度<br>学習</span>", "见导师",
    "实验", "Paper", "会议", "答辩", "PhD",
    "薄厚", "僵尸", "Reader", "叫兽"];
  captions_rel = ["恋爱", "分手"];
  caption_garbage = "垃圾";
  game_alt_title = "爱";
  window.game.actuate();

  document.querySelector('.restart-button').textContent = "退学";
  document.querySelector('.retry-button').textContent = "善";
  document.querySelector('.game-explanation').innerHTML = "<strong class='important'>玩法:</strong> 使用方向键搬砖. 当两块相同的砖碰在一起时, <strong>它们会组成一块更好的砖</strong>! <br>但是, 你的想法和实验也可能只是产生<strong>垃圾</strong>. 黏着的垃圾会阻碍砖块的移动, 直到被别的垃圾击中而消失. 你得到 <strong>paper</strong> 以后便不会再产生垃圾, 最多再来一块帮你清除别的垃圾.<br><strong>恋爱</strong>砖触碰任何砖都能使其升级, 但一块砖只可享受一次. 恋爱砖上会显示你使用它的次数; 10 秒后它会变成<strong>分手</strong>砖, 触碰任何砖都能使其降级, 以此来偿还之前使用的次数.";
}

function use_traditional(){
  captions = ["Coffee", "Panini",
    "想法", "原始碼", "<span style='display:inline-block;line-height:30px;vertical-align:middle'>深度<br>學習</span>", "見導師",
    "實驗", "Paper", "會議", "答辯", "PhD",
    "薄厚", "老屍", "Reader", "叫獸"];
  captions_rel = ["戀愛", "分手"];
  caption_garbage = "垃圾";
  game_alt_title = "愛";
  window.game.actuate();

  document.querySelector('.restart-button').textContent = "退學";
  document.querySelector('.retry-button').textContent = "善";
  document.querySelector('.game-explanation').innerHTML = "<strong class='important'>玩法：</strong>用方向鍵搬磚。當兩塊相同的磚碰在一起時，<strong>它們會併成一塊更好的磚</strong>！<br>但是，你的想法和實驗可能只是產生<strong>垃圾</strong>而已。黏在地上的垃圾會阻礙磚塊移動，直到被別的垃圾擊中而消失。你得到 <strong>paper</strong> 以後便不會再產生垃圾，最多再出一塊幫你清除場上剩下的垃圾。<br><strong>戀愛</strong>磚觸碰任何磚都能使其升級，但一塊磚只得升級一次。戀愛磚上會顯示你用它的次數。10 秒後它會變成<strong>分手</strong>磚，觸碰任何磚都能使其降級，以此來償還之前使用的次數。";

  document.body.style.fontFamily = '"Clear Sans", "Helvetica Neue", Arial, "Hiragino Sans CNS", "PingFang TC", "Microsoft JhengHei", "Source Han Sans TC", "Noto Sans CJK TC", sans-serif';
}

function play_in_chinese(){
  window.removeEventListener('resize', update_captions, true);
  game_title = "磗士";
  result_msg = "你得到了";
  var titleElem = document.getElementById('title');
  if(titleElem.textContent != "Love") titleElem.textContent = game_title;

  if(determine_zh_var() == 'hant') use_traditional();
  else use_simplified();

  if(span_zh) span_zh.parentNode.removeChild(span_zh);
  create_switch_en();
  window.game.storageManager.storage.setItem('lang', 'zh');
}
