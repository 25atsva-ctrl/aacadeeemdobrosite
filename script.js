const questions = [
["Оцінювання","Що допомагає зрозуміти очікуваний результат роботи?","Критерії оцінювання та вимоги до завдання."],
["Оцінювання","Що враховує якісне виконання навчального завдання?","Правильність, повноту, розуміння матеріалу та вміння застосувати знання."],
["Оцінювання","Чому варто ознайомитися з критеріями до початку роботи?","Щоб розуміти, що саме оцінюватиметься і на що звернути увагу."],
["Робота з ПК","Що потрібно робити під час тривалої роботи за ПК?","Робити регулярні короткі перерви та змінювати положення тіла."],
["Робота з ПК","Чи можна працювати з обладнанням мокрими руками?","Ні. Потрібно дотримуватися правил безпеки та не працювати з мокрими руками."],
["Робота з ПК","Що робити після завершення роботи?","Правильно завершити роботу програм, прибрати робоче місце та залишити обладнання у належному стані."],
["Доброчесність","Що таке академічна доброчесність?","Дотримання етичних принципів і правил, які забезпечують довіру до результатів навчання."],
["Доброчесність","Що робити, якщо використав чужу ідею або інформацію?","Зазначити джерело інформації та не видавати чужу роботу за власну."],
["Доброчесність","Що є прикладом академічної недоброчесності?","Плагіат, списування, обман, фабрикація або фальсифікація результатів."]
];
const grid=document.querySelector("#quizGrid");
questions.forEach(([tag,q,a])=>{
  const card=document.createElement("article"); card.className="flip-card";
  card.innerHTML=`<div class="flip-inner"><div class="face front"><span class="tag">${tag}</span><div class="question">${q}</div><div class="hint">Натисни, щоб перевернути ↻</div></div><div class="face back"><span class="tag">Правильна відповідь</span><div class="answer">${a}</div><div class="hint">Натисни ще раз, щоб повернути ↺</div></div></div>`;
  card.addEventListener("click",()=>card.classList.toggle("flipped"));
  grid.appendChild(card);
});

const tabs=[...document.querySelectorAll('.tab')];const panels=[...document.querySelectorAll('.tab-panel')];function showTab(id){tabs.forEach(t=>{const on=t.dataset.tab===id;t.classList.toggle('active',on);t.setAttribute('aria-selected',on?'true':'false')});panels.forEach(p=>p.classList.toggle('active',p.id===id));document.querySelector('.tabs-wrap').scrollIntoView({behavior:'smooth',block:'start'})}tabs.forEach(t=>t.addEventListener('click',()=>showTab(t.dataset.tab)));document.querySelectorAll('[data-tab]').forEach(el=>{if(!el.classList.contains('tab'))el.addEventListener('click',()=>showTab(el.dataset.tab))});showTab('criteria');
