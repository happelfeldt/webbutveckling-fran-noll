// This workshop runs entirely in the browser. No account or server is needed.
(() => {
  'use strict';
  const lessons = window.ANTON_LESSONS || [];
  if (!lessons.length) return;

  const $ = (selector) => document.querySelector(selector);
  const els = {
    list: $('#lesson-list'), count: $('#lesson-count'), topic: $('#lesson-topic'),
    title: $('#lesson-title'), goal: $('#lesson-goal'), steps: $('#steps'),
    task: $('#try-this'), expected: $('#expected'), editor: $('#code-editor'),
    preview: $('#preview'), feedback: $('#feedback'), progressText: $('#progress-text'),
    progressBar: $('#progress-track'), progressFill: $('#progress-fill'),
    hintText: $('#hint-text'), hintBtn: $('#hint-toggle'),
    explainText: $('#explain-text'), explainBtn: $('#explain-toggle'),
    solutionBox: $('#solution-box'), solutionCode: $('#solution-code'),
    solutionBtn: $('#solution-toggle'), prev: $('#prev'), next: $('#next'),
    size: $('#text-size')
  };
  let index = 0;
  let tab = 'html';
  const drafts = load('webbverkstad_drafts_v1', {});
  const done = load('webbverkstad_done_v1', {});

  function load(key, fallback) {
    try {
      const data = JSON.parse(localStorage.getItem(key));
      return data && typeof data === 'object' ? data : fallback;
    } catch (_) { return fallback; }
  }
  function store(key, data) {
    try { localStorage.setItem(key, JSON.stringify(data)); } catch (_) { /* Offline app still works without storage. */ }
  }
  function lesson() { return lessons[index]; }
  function draft() {
    const key = String(lesson().id);
    if (!drafts[key]) drafts[key] = { ...lesson().starter };
    return drafts[key];
  }
  function saveEditor() {
    draft()[tab] = els.editor.value;
    store('webbverkstad_drafts_v1', drafts);
  }
  function selectTab(next) {
    saveEditor();
    tab = next;
    els.editor.value = draft()[tab] || '';
    document.querySelectorAll('[data-tab]').forEach((button) => {
      const active = button.dataset.tab === tab;
      button.setAttribute('aria-selected', active ? 'true' : 'false');
      button.tabIndex = active ? 0 : -1;
    });
    closePanel('solution');
  }
  function renderList() {
    els.list.replaceChildren();
    lessons.forEach((entry, i) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'lesson-link' + (i === index ? ' active' : '');
      button.setAttribute('aria-current', i === index ? 'step' : 'false');
      const number = document.createElement('span');
      number.className = 'number';
      number.textContent = entry.id === 11 ? '+' : String(entry.id);
      const name = document.createElement('span');
      name.className = 'lesson-name';
      name.textContent = entry.title;
      const check = document.createElement('span');
      check.className = 'done';
      check.textContent = done[entry.id] ? '✓' : '';
      check.setAttribute('aria-label', done[entry.id] ? 'Klar' : '');
      button.append(number, name, check);
      button.addEventListener('click', () => showLesson(i));
      els.list.append(button);
    });
    const complete = lessons.filter((entry) => done[entry.id]).length;
    els.progressText.textContent = `${complete} av ${lessons.length} klara`;
    els.progressFill.style.width = `${Math.round(100 * complete / lessons.length)}%`;
    els.progressBar.setAttribute('aria-valuenow', String(complete));
  }
  function setFeedback(text, kind = '') {
    els.feedback.replaceChildren();
    els.feedback.textContent = text;
    els.feedback.className = 'feedback' + (kind ? ' ' + kind : '');
  }
  function closePanel(which) {
    const map = {
      hint: [els.hintText, els.hintBtn],
      explain: [els.explainText, els.explainBtn],
      solution: [els.solutionBox, els.solutionBtn]
    };
    const [box, button] = map[which];
    box.classList.add('hidden');
    button.setAttribute('aria-expanded', 'false');
  }
  function showLesson(nextIndex) {
    if (nextIndex < 0 || nextIndex >= lessons.length) return;
    if (els.editor.value !== undefined) saveEditor();
    index = nextIndex;
    const entry = lesson();
    tab = entry.tab;
    els.count.textContent = entry.id === 11 ? 'BONUSPASS' : `PASS ${entry.id} AV 10`;
    els.topic.textContent = entry.topic;
    els.title.textContent = entry.title;
    els.goal.textContent = entry.goal;
    els.steps.replaceChildren();
    entry.steps.forEach((step) => {
      const li = document.createElement('li');
      li.textContent = step;
      els.steps.append(li);
    });
    els.task.textContent = entry.tryThis;
    els.expected.textContent = entry.expected;
    els.editor.value = draft()[tab] || '';
    document.querySelectorAll('[data-tab]').forEach((button) => {
      const active = button.dataset.tab === tab;
      button.setAttribute('aria-selected', active ? 'true' : 'false');
      button.tabIndex = active ? 0 : -1;
    });
    els.hintText.textContent = entry.hint;
    els.explainText.textContent = entry.why;
    ['hint','explain','solution'].forEach(closePanel);
    els.prev.disabled = index === 0;
    els.next.disabled = index === lessons.length - 1;
    els.next.textContent = index === lessons.length - 2 ? 'Bonuspass →' : 'Nästa pass →';
    setFeedback(done[entry.id] ? 'Du har redan klarat det här passet. Du kan göra det igen.' : 'Ändra koden och klicka på Visa resultat.');
    renderList();
    runPreview();
  }
  function makePage() {
    const code = draft();
    let html = code.html || '<!DOCTYPE html><html><head></head><body></body></html>';
    // Ensure the bundled image also works in sandboxed previews and standalone downloads.
    html = html.replace(/\bsrc\s*=\s*(["'])bild\.jpg\1/gi, `src="${window.ANTON_IMAGE_DATA || 'bild.jpg'}"`);
    const css = code.css || '';
    const js = code.js || '';
    const style = `<style>\n${css.replace(/<\/style/gi, '<\\/style')}\n</style>`;
    const script = `<script>\n${js.replace(/<\/script/gi, '<\\/script')}\n<\/script>`;
    if (/<\/head>/i.test(html)) html = html.replace(/<\/head>/i, `${style}\n</head>`);
    else html = style + '\n' + html;
    if (/<\/body>/i.test(html)) html = html.replace(/<\/body>/i, `${script}\n</body>`);
    else html += script;
    return html;
  }
  function runPreview() {
    saveEditor();
    els.preview.srcdoc = makePage();
  }
  function checkLesson() {
    saveEditor();
    const entry = lesson();
    const missing = entry.checks.filter((check) =>
      !(draft()[check.tab] || '').toLowerCase().includes(check.pattern.toLowerCase())
    );
    if (missing.length) {
      setFeedback('Nästan! Snabbkontrollen hittar inte: ' + missing.map((check) => check.label.toLowerCase()).join(', ') + '. Se uppgiften eller välj Visa ett tips.', 'warning');
      return;
    }
    done[entry.id] = true;
    store('webbverkstad_done_v1', done);
    renderList();
    runPreview();
    setFeedback('Bra jobbat! Snabbkontrollen hittar delarna i din kod. Titta också i förhandsvisningen och kontrollera att det ser rätt ut.', 'success');
  }
  function toggle(which) {
    const map = {
      hint: [els.hintText, els.hintBtn],
      explain: [els.explainText, els.explainBtn],
      solution: [els.solutionBox, els.solutionBtn]
    };
    const [box, button] = map[which];
    const isOpening = box.classList.contains('hidden');
    box.classList.toggle('hidden', !isOpening);
    button.setAttribute('aria-expanded', isOpening ? 'true' : 'false');
    if (which === 'solution') els.solutionCode.textContent = lesson().solution[tab] || '(Inget behöver skrivas i den här fliken.)';
  }
  function downloadPage() {
    saveEditor();
    const blob = new Blob([makePage()], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `min-webbsida-pass-${lesson().id}.html`;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 30000);
    setFeedback('Din webbsida har sparats som en HTML-fil. Den kan öppnas genom att dubbelklicka på den.');
  }
  document.querySelectorAll('[data-tab]').forEach((button) => button.addEventListener('click', () => selectTab(button.dataset.tab)));
  els.editor.addEventListener('input', saveEditor);
  els.editor.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      const start = els.editor.selectionStart;
      els.editor.setRangeText('  ', start, els.editor.selectionEnd, 'end');
      saveEditor();
    }
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      event.preventDefault();
      runPreview();
    }
  });
  $('#run').addEventListener('click', () => { runPreview(); setFeedback('Resultatet har uppdaterats. Jämför med målet i uppgiften.'); });
  $('#check').addEventListener('click', checkLesson);
  els.hintBtn.addEventListener('click', () => toggle('hint'));
  els.explainBtn.addEventListener('click', () => toggle('explain'));
  els.solutionBtn.addEventListener('click', () => toggle('solution'));
  $('#use-solution').addEventListener('click', () => {
    els.editor.value = lesson().solution[tab] || '';
    saveEditor();
    runPreview();
    setFeedback('Facit har kopierats till den här fliken. Läs koden och prova att ändra en sak.');
  });
  els.prev.addEventListener('click', () => showLesson(index - 1));
  els.next.addEventListener('click', () => showLesson(index + 1));
  $('#download').addEventListener('click', downloadPage);
  $('#reset').addEventListener('click', () => {
    if (!confirm('Börja om? Koden du har skrivit i det här passet ersätts med startkoden.')) return;
    drafts[String(lesson().id)] = { ...lesson().starter };
    delete done[lesson().id];
    store('webbverkstad_drafts_v1', drafts);
    store('webbverkstad_done_v1', done);
    els.editor.value = draft()[tab] || '';
    renderList();
    runPreview();
    setFeedback('Passet är återställt. Börja med det första steget.');
  });
  const savedSize = load('webbverkstad_text_size_v1', {value:'1'}).value;
  els.size.value = ['1','1.15','1.3'].includes(savedSize) ? savedSize : '1';
  document.documentElement.style.fontSize = `${16 * Number(els.size.value)}px`;
  els.size.addEventListener('change', () => {
    document.documentElement.style.fontSize = `${16 * Number(els.size.value)}px`;
    store('webbverkstad_text_size_v1', {value:els.size.value});
  });
  // Initialize the first lesson before any code editor changes are saved.
  els.editor.value = lesson().starter.html;
  showLesson(0);
})();
