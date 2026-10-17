const ICONS = {
  home: '<path d="m3 10 9-7 9 7"/><path d="M5 9.5V20h14V9.5M9 20v-6h6v6"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
  search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/>',
  library: '<path d="M4 5h12v15H4zM8 3h12v15"/><path d="M7 9h6M7 12h6"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1a1.7 1.7 0 0 1-2.4 2.4l-.1-.1a1.7 1.7 0 0 0-2.9 1.2v.2a1.7 1.7 0 0 1-3.4 0v-.2a1.7 1.7 0 0 0-2.9-1.2l-.1.1a1.7 1.7 0 1 1-2.4-2.4l.1-.1a1.7 1.7 0 0 0-1.2-2.9H4a1.7 1.7 0 0 1 0-3.4h.2a1.7 1.7 0 0 0 1.2-2.9l-.1-.1a1.7 1.7 0 1 1 2.4-2.4l.1.1a1.7 1.7 0 0 0 2.9-1.2V2a1.7 1.7 0 0 1 3.4 0v.2a1.7 1.7 0 0 0 2.9 1.2l.1-.1a1.7 1.7 0 0 1 2.4 2.4l-.1.1a1.7 1.7 0 0 0 1.2 2.9h.2a1.7 1.7 0 0 1 0 3.4h-.2a1.7 1.7 0 0 0-1.2 2.9Z"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  'chevron-left': '<path d="m15 18-6-6 6-6"/>',
  'chevron-right': '<path d="m9 18 6-6-6-6"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  'arrow-up-right': '<path d="M7 17 17 7M8 7h9v9"/>',
  play: '<path d="m8 5 11 7-11 7V5Z" fill="currentColor" stroke="none"/>',
  pause: '<path d="M8 5h3v14H8zM15 5h3v14h-3z" fill="currentColor" stroke="none"/>',
  heart: '<path d="M20.8 8.8c0 4.1-6.9 9-8.8 10.2-1.9-1.2-8.8-6.1-8.8-10.2a4.4 4.4 0 0 1 7.9-2.7L12 7l.9-.9a4.4 4.4 0 0 1 7.9 2.7Z"/>',
  shuffle: '<path d="m18 14 3 3-3 3M18 4l3 3-3 3M3 7h2.5c4.5 0 5.5 10 10 10H21M3 17h2.5c1.7 0 2.8-1.4 3.8-3M13 8c.8-.7 1.5-1 2.5-1H21"/>',
  'skip-back': '<path d="M5 5v14M19 5 8 12l11 7V5Z" fill="currentColor" stroke="none"/>',
  'skip-forward': '<path d="M19 5v14M5 5l11 7-11 7V5Z" fill="currentColor" stroke="none"/>',
  repeat: '<path d="m17 2 4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 0 1-3 3H3"/>',
  volume: '<path d="M11 5 6 9H3v6h3l5 4V5ZM15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>',
  mute: '<path d="M11 5 6 9H3v6h3l5 4V5ZM17 9l5 6m0-6-5 6"/>',
  'list-music': '<path d="M4 6h15M4 10h15M4 14h9M4 18h9M19 14v5a2 2 0 1 1-2-2h2M19 14l4-1"/>',
  expand: '<path d="M8 3H5a2 2 0 0 0-2 2v3m13-5h3a2 2 0 0 1 2 2v3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3"/>',
  close: '<path d="m18 6-12 12M6 6l12 12"/>',
  sparkle: '<path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3ZM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M4 18v3h16v-3"/>',
  more: '<circle cx="5" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="19" cy="12" r="1" fill="currentColor"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
};

document.querySelectorAll('[data-icon]').forEach((node) => {
  const name = node.dataset.icon;
  if (ICONS[name]) node.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;
});

const demoTracks = [
  { id: 't01', title: '미리듣기 01', artist: 'PRIxtender', album: '샘플 음원', duration: '3:42', seconds: 222, art: 1, mood: 'dreamy', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { id: 't02', title: '미리듣기 02', artist: 'PRIxtender', album: '샘플 음원', duration: '4:08', seconds: 248, art: 2, mood: 'slow', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { id: 't03', title: '미리듣기 03', artist: 'PRIxtender', album: '샘플 음원', duration: '3:26', seconds: 206, art: 3, mood: 'focus', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
  { id: 't04', title: '미리듣기 04', artist: 'PRIxtender', album: '샘플 음원', duration: '3:57', seconds: 237, art: 4, mood: 'slow', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },
  { id: 't05', title: '미리듣기 05', artist: 'PRIxtender', album: '샘플 음원', duration: '4:19', seconds: 259, art: 5, mood: 'night', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' },
  { id: 't06', title: '미리듣기 06', artist: 'PRIxtender', album: '샘플 음원', duration: '3:31', seconds: 211, art: 6, mood: 'dreamy', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' },
  { id: 't07', title: '미리듣기 07', artist: 'PRIxtender', album: '샘플 음원', duration: '3:49', seconds: 229, art: 7, mood: 'focus', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3' },
  { id: 't08', title: '미리듣기 08', artist: 'PRIxtender', album: '샘플 음원', duration: '4:02', seconds: 242, art: 8, mood: 'night', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3' },
];
const moodNames = { dreamy: '편안한 곡 잔잔하게 듣기', focus: '집중할 때 작업과 공부', slow: '산책할 때 천천히 걷기', night: '밤에 듣기 조용한 시간' };
const STORAGE = { liked: 'prix-liked-v1', playlists: 'prix-playlists-v1', recent: 'prix-recent-v1' };
const parseStored = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
const state = {
  view: 'home', libraryTab: 'liked', mood: null, query: '', currentId: null, playing: false,
  liked: new Set(parseStored(STORAGE.liked, [])), playlists: parseStored(STORAGE.playlists, []),
  queue: [...demoTracks], queueIndex: 0, shuffle: false, repeat: 0, audio: new Audio(), deferredInstall: null,
  supabase: null, user: null, duration: 0, progressTimer: null,
};
state.audio.preload = 'none';
state.audio.volume = .76;
state.audio.addEventListener('timeupdate', updateProgress);
state.audio.addEventListener('loadedmetadata', updateProgress);
state.audio.addEventListener('ended', onTrackEnded);
state.audio.addEventListener('error', () => toast('미리듣기를 불러오지 못했어요. 잠시 후 다시 시도해 주세요.', 'sparkle'));

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const esc = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const trackById = (id) => demoTracks.find((track) => track.id === id);
const getCurrentTrack = () => trackById(state.currentId);
const isLiked = (id) => state.liked.has(id);

function toast(message, icon = 'check') {
  const element = document.createElement('div');
  element.className = 'toast';
  element.innerHTML = `<span data-icon="${icon}"></span><span>${esc(message)}</span>`;
  const iconElement = $('[data-icon]', element);
  iconElement.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[icon] || ICONS.check}</svg>`;
  $('#toast-region').append(element);
  window.setTimeout(() => element.remove(), 3100);
}

function persist() {
  localStorage.setItem(STORAGE.liked, JSON.stringify([...state.liked]));
  localStorage.setItem(STORAGE.playlists, JSON.stringify(state.playlists));
  localStorage.setItem(STORAGE.recent, JSON.stringify(parseStored(STORAGE.recent, [])));
}

function trackRow(track, index, { showRank = true } = {}) {
  return `<div class="track-row${state.currentId === track.id ? ' is-current' : ''}" data-track-row="${track.id}">
    <span class="track-index">${showRank ? `<span>${String(index + 1).padStart(2, '0')}</span>` : '<span>♫</span>'}</span>
    <button class="row-play" data-action="play" data-id="${track.id}" aria-label="${esc(track.title)} 재생"><span data-icon="${state.currentId === track.id && state.playing ? 'pause' : 'play'}"><svg viewBox="0 0 24 24" aria-hidden="true">${state.currentId === track.id && state.playing ? ICONS.pause : ICONS.play}</svg></span></button>
    <div class="cover-thumb art-${track.art}"><span class="cover-glyph">${track.art % 2 ? '✦' : '◌'}</span></div>
    <div class="track-main"><strong>${esc(track.title)}</strong><span>${esc(track.artist)}</span></div>
    <div class="track-artist">${esc(track.artist)}</div><div class="track-album">${esc(track.album)}</div>
    <span class="track-duration">${track.duration}</span>
    <button class="track-like${isLiked(track.id) ? ' is-liked' : ''}" data-action="like" data-id="${track.id}" aria-label="${isLiked(track.id) ? '좋아요 취소' : '좋아요'}"><span data-icon="heart"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS.heart}</svg></span></button>
    <button class="track-more" data-action="more" data-id="${track.id}" aria-label="더 보기"><span data-icon="more"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS.more}</svg></span></button>
  </div>`;
}

function renderTracks(target, tracks) {
  const container = $(target);
  if (!container) return;
  container.innerHTML = tracks.length ? tracks.map((track, index) => trackRow(track, index)).join('') : '<div class="track-empty">표시할 곡이 아직 없어요.</div>';
}

function renderSidebarPlaylists() {
  $('#sidebar-playlists').innerHTML = state.playlists.map((playlist) => `<button class="nav-link playlist-link" data-playlist="${esc(playlist.id)}"><span class="playlist-dot">♫</span><span>${esc(playlist.name)}</span><span class="playlist-remove" data-remove-playlist="${esc(playlist.id)}" aria-label="플레이리스트 삭제">×</span></button>`).join('');
}

function filteredTracks() {
  const query = state.query.trim().toLocaleLowerCase();
  let tracks = [...demoTracks];
  if (state.mood) tracks = tracks.filter((track) => track.mood === state.mood);
  if (query) tracks = tracks.filter((track) => `${track.title} ${track.artist} ${track.album} ${moodNames[track.mood]}`.toLocaleLowerCase().includes(query));
  return tracks;
}

function renderLibrary() {
  $('#liked-count').textContent = state.liked.size;
  $('#playlist-count').textContent = state.playlists.length;
  const favorites = demoTracks.filter((track) => isLiked(track.id));
  renderTracks('#library-track-list', favorites);
  $('#library-track-list').hidden = state.libraryTab !== 'liked';
  $('#library-playlists').hidden = state.libraryTab !== 'playlists';
  $('#library-empty').hidden = state.libraryTab === 'liked' ? favorites.length > 0 : state.playlists.length > 0;
  $('#library-playlists').innerHTML = state.playlists.map((playlist, index) => `<button class="playlist-card" data-playlist="${esc(playlist.id)}"><span class="playlist-cover art-${(index % 8) + 1}"><span>♫</span></span><strong>${esc(playlist.name)}</strong><small>${playlist.trackIds.length}곡 · PRIxtender 플레이리스트</small></button>`).join('');
  $('#library-kicker').textContent = state.libraryTab === 'liked' ? '좋아요' : '플레이리스트';
  $('#library-subtitle').textContent = state.libraryTab === 'liked' ? '좋아요 표시한 곡' : '내 플레이리스트';
  $$('.library-tab').forEach((button) => button.classList.toggle('active', button.dataset.libraryTab === state.libraryTab));
}

function updateSearch() {
  if (state.query.trim()) {
    state.view = 'search';
    $('#search-section-title').textContent = `“${state.query.trim()}” 검색 결과`;
    $('#search-section-kicker').textContent = '검색 결과';
    $('#search-helper').textContent = '곡 제목, 아티스트, 앨범 검색 결과입니다.';
    const results = filteredTracks();
    renderTracks('#search-track-list', results);
    $('#search-empty').hidden = results.length > 0;
    $('#search-track-list').hidden = results.length === 0;
  } else {
    state.view = 'search';
    $('#search-section-title').textContent = '모든 곡';
    $('#search-section-kicker').textContent = '곡 목록';
    $('#search-helper').textContent = '곡, 아티스트, 앨범이나 무드를 검색해보세요.';
    renderTracks('#search-track-list', demoTracks);
    $('#search-empty').hidden = true;
    $('#search-track-list').hidden = false;
  }
  $('#page-search').value = state.query;
  showView('search');
}

function showView(view, pushHistory = true) {
  state.view = view;
  $$('.view-page').forEach((page) => page.classList.toggle('active', page.id === `view-${view}`));
  $$('[data-view]').forEach((button) => button.classList.toggle('active', button.dataset.view === view));
  if (pushHistory && location.hash !== `#${view}`) history.pushState({ view }, '', `#${view}`);
  if (view === 'library') renderLibrary();
  if (view === 'search') $('#page-search').value = state.query;
  if (view === 'explore') renderTracks('#explore-track-list', demoTracks);
  if (view === 'home') renderTracks('#home-track-list', demoTracks.slice(0, 5));
  $('.page-scroll').scrollTo({ top: 0, behavior: 'smooth' });
}

function setCurrent(track, play = true) {
  if (!track) return;
  state.currentId = track.id;
  state.audio.pause();
  state.audio.src = track.url;
  state.audio.currentTime = 0;
  state.duration = track.seconds;
  $('#now-title').textContent = track.title;
  $('#now-artist').textContent = track.artist;
  $('#now-cover').className = `now-cover art-${track.art}`;
  $('#now-cover').innerHTML = `<span class="cover-glyph">${track.art % 2 ? '✦' : '◌'}</span>`;
  state.queueIndex = state.queue.findIndex((item) => item.id === track.id);
  state.playing = false;
  if (play) togglePlayback(true);
  syncPlayer();
  const recent = parseStored(STORAGE.recent, []).filter((id) => id !== track.id);
  recent.unshift(track.id);
  localStorage.setItem(STORAGE.recent, JSON.stringify(recent.slice(0, 12)));
}

async function togglePlayback(forcePlay) {
  const track = getCurrentTrack();
  if (!track) { setCurrent(demoTracks[0], true); return; }
  const shouldPlay = typeof forcePlay === 'boolean' ? forcePlay : !state.playing;
  if (shouldPlay) {
    try { await state.audio.play(); state.playing = true; }
    catch { state.playing = false; toast('재생을 시작할 수 없어요. 미리듣기 연결을 확인해 주세요.', 'sparkle'); }
  } else { state.audio.pause(); state.playing = false; }
  syncPlayer();
}

function playNext() {
  if (!state.queue.length) return;
  let index = state.queueIndex;
  if (state.shuffle && state.queue.length > 1) {
    let next = index;
    while (next === index) next = Math.floor(Math.random() * state.queue.length);
    index = next;
  } else index = (index + 1) % state.queue.length;
  state.queueIndex = index;
  setCurrent(state.queue[index], true);
}

function playPrevious() {
  if (state.audio.currentTime > 4) { state.audio.currentTime = 0; return; }
  state.queueIndex = (state.queueIndex - 1 + state.queue.length) % state.queue.length;
  setCurrent(state.queue[state.queueIndex], true);
}

function onTrackEnded() {
  if (state.repeat === 2) { state.audio.currentTime = 0; state.audio.play(); return; }
  if (state.repeat === 0 && state.queueIndex >= state.queue.length - 1) { state.playing = false; syncPlayer(); return; }
  if (state.repeat === 1 && state.queueIndex === state.queue.length - 1) { state.queueIndex = -1; }
  playNext();
}

function formatTime(seconds) { if (!Number.isFinite(seconds)) return '0:00'; const mins = Math.floor(seconds / 60); return `${mins}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`; }

function updateProgress() {
  const track = getCurrentTrack();
  const duration = state.audio.duration || track?.seconds || 0;
  if (Number.isFinite(duration) && duration > 0) {
    $('#progress').value = String(Math.min(100, (state.audio.currentTime / duration) * 100));
    $('#current-time').textContent = formatTime(state.audio.currentTime);
    $('#total-time').textContent = formatTime(duration);
  }
}

function syncPlayer() {
  $('#play-toggle').innerHTML = `<span data-icon="${state.playing ? 'pause' : 'play'}"><svg viewBox="0 0 24 24" aria-hidden="true">${state.playing ? ICONS.pause : ICONS.play}</svg></span>`;
  $('#play-toggle').setAttribute('aria-label', state.playing ? '일시 정지' : '재생');
  $('#player-like').classList.toggle('is-liked', Boolean(state.currentId && isLiked(state.currentId)));
  $('#player-like').setAttribute('aria-label', isLiked(state.currentId) ? '좋아요 취소' : '좋아요');
  $('#shuffle-button').classList.toggle('active', state.shuffle);
  $('#repeat-button').classList.toggle('active', state.repeat > 0);
  if (state.repeat === 2) $('#repeat-button').innerHTML = `<span data-icon="repeat"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS.repeat}</svg></span><small class="repeat-one">1</small>`;
  else $('#repeat-button').innerHTML = `<span data-icon="repeat"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS.repeat}</svg></span>`;
  $$('.track-row').forEach((row) => {
    const current = row.dataset.trackRow === state.currentId;
    row.classList.toggle('is-current', current);
    const playIcon = $('.row-play [data-icon]', row);
    if (playIcon) { const name = current && state.playing ? 'pause' : 'play'; playIcon.dataset.icon = name; playIcon.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`; }
  });
}

function toggleLike(id) {
  if (!id) return;
  if (state.liked.has(id)) { state.liked.delete(id); toast('좋아요 목록에서 뺐어요.'); }
  else { state.liked.add(id); toast('좋아하는 곡에 담았어요.'); }
  persist(); renderLibrary(); syncPlayer();
  if (state.view === 'library' && state.libraryTab === 'liked') renderTracks('#library-track-list', demoTracks.filter((track) => isLiked(track.id)));
  else if (state.view === 'home') renderTracks('#home-track-list', demoTracks.slice(0, 5));
  else if (state.view === 'explore') renderTracks('#explore-track-list', filteredTracks());
  else if (state.view === 'search') renderTracks('#search-track-list', filteredTracks());
}

function playList(tracks, start = 0) {
  if (!tracks.length) { toast('먼저 곡을 추가해 주세요.', 'sparkle'); return; }
  state.queue = [...tracks];
  state.queueIndex = Math.max(0, Math.min(start, tracks.length - 1));
  setCurrent(state.queue[state.queueIndex], true);
}

function openDialog(content) {
  $('#dialog-body').innerHTML = content;
  const dialog = $('#app-dialog');
  if (!dialog.open) dialog.showModal();
}

function closeDialog() { const dialog = $('#app-dialog'); if (dialog.open) dialog.close(); }

function createPlaylistDialog() {
  openDialog(`<div class="dialog-logo"><img src="./assets/logo-mark.png" alt="" /></div><p class="section-kicker" style="text-align:center">플레이리스트</p><h2 class="dialog-title" id="dialog-title">새 플레이리스트</h2><p class="dialog-copy">플레이리스트 이름을 입력하세요.</p><label class="email-field"><span>플레이리스트 이름</span><input class="playlist-name-input" id="playlist-name" type="text" maxlength="32" placeholder="예: 자주 듣는 곡" autocomplete="off" /></label><button class="button-primary dialog-submit" id="save-playlist"><span data-icon="plus"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS.plus}</svg></span> 만들기</button><p class="dialog-message" id="dialog-message"></p>`);
  $('#playlist-name').focus();
  $('#save-playlist').addEventListener('click', savePlaylist);
  $('#playlist-name').addEventListener('keydown', (event) => { if (event.key === 'Enter') savePlaylist(); });
}

function savePlaylist() {
  const name = $('#playlist-name').value.trim();
  if (!name) { $('#dialog-message').textContent = '플레이리스트 이름을 적어주세요.'; return; }
  const playlist = { id: `p${Date.now()}`, name, trackIds: [] };
  state.playlists.unshift(playlist);
  persist(); renderSidebarPlaylists(); renderLibrary(); closeDialog();
  toast(`“${name}” 플레이리스트를 만들었어요.`, 'check');
}

function openLoginDialog() {
  if (state.user) { openAccountDialog(); return; }
  openDialog(`<div class="dialog-logo"><img src="./assets/logo-mark.png" alt="" /></div><p class="section-kicker" style="text-align:center">계정</p><h2 class="dialog-title" id="dialog-title">로그인</h2><p class="dialog-copy">로그인하면 좋아요와 플레이리스트를 이용할 수 있습니다.</p><button class="google-button" id="google-signin"><span class="google-g">G</span> Google로 계속하기</button><p class="dialog-note">Google 로그인을 사용하려면 서비스 설정이 필요합니다.</p><div class="dialog-divider">또는 이메일</div><label class="email-field"><span>이메일</span><input id="auth-email" type="email" placeholder="name@example.com" autocomplete="email" /></label><label class="email-field"><span>비밀번호</span><input id="auth-password" type="password" placeholder="8자 이상 입력" autocomplete="current-password" /></label><button class="button-primary dialog-submit" id="email-signin">로그인</button><div class="dialog-row"><span>계정이 없나요?</span><button class="dialog-inline-button" id="email-signup">이메일로 가입</button></div><p class="dialog-message" id="dialog-message"></p>`);
  $('#google-signin').addEventListener('click', signInWithGoogle);
  $('#email-signin').addEventListener('click', signInWithEmail);
  $('#email-signup').addEventListener('click', signUpWithEmail);
}

async function getSupabase() {
  if (state.supabase) return state.supabase;
  const config = window.PRIX_CONFIG || {};
  if (!config.supabaseUrl || !config.supabaseAnonKey) return null;
  const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm');
  state.supabase = createClient(config.supabaseUrl, config.supabaseAnonKey);
  return state.supabase;
}

async function signInWithGoogle() {
  const button = $('#google-signin');
  const message = $('#dialog-message');
  button.disabled = true;
  if (message) message.textContent = 'Google 로그인 연결을 확인하고 있어요…';
  try {
    const client = await getSupabase();
    if (!client) { if (message) message.textContent = '먼저 README의 Google 로그인 설정을 마치고 config.js를 채워주세요.'; button.disabled = false; return; }
    const { error } = await client.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: window.location.href.split('#')[0] } });
    if (error) throw error;
  } catch (error) {
    if (message) message.textContent = error?.message || '로그인 연결에 실패했어요. 설정을 확인해 주세요.';
    button.disabled = false;
  }
}

async function signInWithEmail() {
  const message = $('#dialog-message');
  try {
    const client = await getSupabase();
    if (!client) { message.textContent = '이메일 로그인도 Supabase 연결 후 사용할 수 있어요.'; return; }
    const email = $('#auth-email').value.trim(); const password = $('#auth-password').value;
    const { error } = await client.auth.signInWithPassword({ email, password });
    if (error) message.textContent = error.message; else { await refreshUser(); closeDialog(); toast('다시 와줘서 반가워요!'); }
  } catch (error) { message.textContent = error?.message || '이메일 로그인 연결에 실패했어요.'; }
}

async function signUpWithEmail() {
  const message = $('#dialog-message');
  try {
    const client = await getSupabase();
    if (!client) { message.textContent = '계정 기능은 Supabase 연결 후 사용할 수 있어요.'; return; }
    const email = $('#auth-email').value.trim(); const password = $('#auth-password').value;
    if (password.length < 8) { message.textContent = '비밀번호를 8자 이상 입력해 주세요.'; return; }
    const { error } = await client.auth.signUp({ email, password, options: { emailRedirectTo: window.location.href.split('#')[0] } });
    if (error) message.textContent = error.message; else message.textContent = '확인 메일을 보냈어요. 메일함에서 가입을 마쳐주세요.';
  } catch (error) { message.textContent = error?.message || '가입을 시작할 수 없어요.'; }
}

async function refreshUser() {
  try {
    const client = await getSupabase();
    if (!client) return;
    const { data: { session } } = await client.auth.getSession();
    state.user = session?.user || null;
    renderAccountButton();
    client.auth.onAuthStateChange((_event, sessionState) => { state.user = sessionState?.user || null; renderAccountButton(); });
  } catch { /* The app remains fully usable without an auth project. */ }
}

function renderAccountButton() {
  const button = $('#account-button');
  const label = $('.account-label', button);
  const initial = $('.avatar-initial', button);
  const name = state.user?.user_metadata?.full_name || state.user?.email?.split('@')[0] || '';
  label.textContent = state.user ? name : '로그인';
  button.setAttribute('aria-label', state.user ? '계정 메뉴' : '로그인');
  initial.textContent = state.user ? (name[0] || 'P').toLocaleUpperCase() : 'P';
}

function openAccountDialog() {
  if (!state.user) { openLoginDialog(); return; }
  const name = state.user.user_metadata?.full_name || state.user.email?.split('@')[0] || 'PRIxtender 멤버';
  openDialog(`<div class="dialog-user"><span class="avatar-initial">${esc(name[0]?.toUpperCase() || 'P')}</span><div><strong id="dialog-title">${esc(name)}</strong><span>${esc(state.user.email || '')}</span></div></div><button class="dialog-option" id="account-library">내 보관함 <span data-icon="arrow-up-right"><svg viewBox="0 0 24 24">${ICONS['arrow-up-right']}</svg></span></button><button class="dialog-option" id="signout-button">로그아웃 <span data-icon="chevron-right"><svg viewBox="0 0 24 24">${ICONS['chevron-right']}</svg></span></button>`);
  $('#account-library').addEventListener('click', () => { closeDialog(); showView('library'); });
  $('#signout-button').addEventListener('click', async () => { await state.supabase?.auth.signOut(); state.user = null; renderAccountButton(); closeDialog(); toast('로그아웃했어요.'); });
}

function openSettingsDialog() {
  openDialog(`<div class="dialog-logo"><img src="./assets/logo-mark.png" alt="" /></div><p class="section-kicker" style="text-align:center">설정</p><h2 class="dialog-title" id="dialog-title">설정</h2><p class="dialog-copy">앱과 계정을 관리합니다.</p><div class="dialog-section-title">앱</div><button class="dialog-option" id="settings-install">홈 화면에 앱 설치 <span data-icon="download"><svg viewBox="0 0 24 24">${ICONS.download}</svg></span></button><button class="dialog-option" id="settings-about">PRIxtender 소개 <span data-icon="arrow-up-right"><svg viewBox="0 0 24 24">${ICONS['arrow-up-right']}</svg></span></button><div class="dialog-section-title">계정</div><button class="dialog-option" id="settings-account">${state.user ? '계정 및 로그아웃' : 'Google로 로그인'} <span data-icon="chevron-right"><svg viewBox="0 0 24 24">${ICONS['chevron-right']}</svg></span></button>`);
  $('#settings-install').addEventListener('click', () => { closeDialog(); installApp(); });
  $('#settings-about').addEventListener('click', () => { closeDialog(); openAboutDialog(); });
  $('#settings-account').addEventListener('click', () => { closeDialog(); openAccountDialog(); });
}

function openAboutDialog() {
  openDialog(`<div class="dialog-logo"><img src="./assets/logo-mark.png" alt="" /></div><p class="section-kicker" style="text-align:center">서비스 안내</p><h2 class="dialog-title" id="dialog-title">PRIxtender</h2><p class="dialog-copy">곡 검색, 재생, 좋아요와 플레이리스트를 지원합니다.</p><div class="dialog-help"><ul><li>셔플, 반복, 볼륨, 재생 대기 목록</li><li>좋아요와 기기 내 플레이리스트 저장</li><li>Google / 이메일 로그인 연결</li></ul><p>현재 재생 음원은 기능 확인용 샘플입니다. 실제 공개 전 본인 음원으로 교체하세요.</p></div>`);
}

function openQueueDialog() {
  const rows = state.queue.map((track, index) => `<button class="queue-item" data-queue-index="${index}"><span class="cover-thumb art-${track.art}"><span class="cover-glyph">✦</span></span><span><strong>${esc(track.title)}</strong><small>${esc(track.artist)}</small></span>${track.id === state.currentId ? '<span style="margin-left:auto;color:#c6b6e5;font-size:8px">재생 중</span>' : ''}</button>`).join('');
  openDialog(`<p class="section-kicker">재생 대기 목록</p><h2 class="dialog-heading" id="dialog-title" style="text-align:left">재생 대기 목록</h2><p class="dialog-copy" style="margin:0 0 15px;text-align:left">${state.queue.length}곡</p><div class="queue-list">${rows}</div>`);
  $$('[data-queue-index]', $('#dialog-body')).forEach((button) => button.addEventListener('click', () => { state.queueIndex = Number(button.dataset.queueIndex); setCurrent(state.queue[state.queueIndex], true); closeDialog(); }));
}

function openTrackMenu(id) {
  const track = trackById(id);
  if (!track) return;
  openDialog(`<p class="section-kicker">곡 정보</p><h2 class="dialog-heading" id="dialog-title" style="text-align:left">${esc(track.title)}</h2><p class="dialog-copy" style="margin:0 0 14px;text-align:left">${esc(track.artist)} · ${esc(track.album)}</p><button class="dialog-option" id="menu-play">지금 재생 <span data-icon="play"><svg viewBox="0 0 24 24">${ICONS.play}</svg></span></button><button class="dialog-option" id="menu-queue">다음 곡으로 추가 <span data-icon="list-music"><svg viewBox="0 0 24 24">${ICONS['list-music']}</svg></span></button><button class="dialog-option" id="menu-like">${isLiked(id) ? '좋아요 취소' : '좋아요 표시'} <span data-icon="heart"><svg viewBox="0 0 24 24">${ICONS.heart}</svg></span></button><div class="dialog-section-title">플레이리스트에 추가</div>${state.playlists.length ? state.playlists.map((playlist) => `<button class="dialog-option" data-add-to-playlist="${esc(playlist.id)}">${esc(playlist.name)} <span data-icon="plus"><svg viewBox="0 0 24 24">${ICONS.plus}</svg></span></button>`).join('') : '<p class="dialog-note">아직 플레이리스트가 없어요. 보관함에서 새로 만들어보세요.</p>'}`);
  $('#menu-play').addEventListener('click', () => { setCurrent(track); closeDialog(); });
  $('#menu-queue').addEventListener('click', () => { const remaining = state.queue.filter((item) => item.id !== id); const current = getCurrentTrack(); state.queue = current ? [current, ...remaining, track] : [...remaining, track]; state.queueIndex = current ? 0 : 0; closeDialog(); toast('대기 목록에 추가했어요.', 'list-music'); });
  $('#menu-like').addEventListener('click', () => { toggleLike(id); closeDialog(); });
  $$('[data-add-to-playlist]', $('#dialog-body')).forEach((button) => button.addEventListener('click', () => { const playlist = state.playlists.find((item) => item.id === button.dataset.addToPlaylist); if (playlist && !playlist.trackIds.includes(id)) playlist.trackIds.push(id); persist(); renderLibrary(); closeDialog(); toast(`“${playlist?.name || '플레이리스트'}”에 담았어요.`); }));
}

function openPlaylist(id) {
  const playlist = state.playlists.find((item) => item.id === id);
  if (!playlist) return;
  const tracks = playlist.trackIds.map(trackById).filter(Boolean);
  openDialog(`<p class="section-kicker">플레이리스트</p><h2 class="dialog-heading" id="dialog-title" style="text-align:left">${esc(playlist.name)}</h2><p class="dialog-copy" style="margin:0 0 15px;text-align:left">${tracks.length}곡 · PRIxtender</p><div class="queue-list">${tracks.length ? tracks.map((track, index) => `<button class="queue-item" data-playlist-track="${track.id}"><span class="cover-thumb art-${track.art}"><span class="cover-glyph">♫</span></span><span><strong>${esc(track.title)}</strong><small>${esc(track.artist)}</small></span><span style="margin-left:auto;color:#898591;font-size:8px">${track.duration}</span></button>`).join('') : '<p class="dialog-note">곡 메뉴에서 플레이리스트에 곡을 추가할 수 있어요.</p>'}</div><button class="dialog-option" id="delete-playlist" style="margin-top:12px;color:#d19ca8">플레이리스트 삭제 <span>×</span></button>`);
  $$('[data-playlist-track]', $('#dialog-body')).forEach((button) => button.addEventListener('click', () => { const order = tracks; playList(order, order.findIndex((track) => track.id === button.dataset.playlistTrack)); closeDialog(); }));
  $('#delete-playlist').addEventListener('click', () => deletePlaylist(id));
}

function deletePlaylist(id) {
  const playlist = state.playlists.find((item) => item.id === id);
  if (!playlist || !window.confirm(`“${playlist.name}” 플레이리스트를 삭제할까요?`)) return;
  state.playlists = state.playlists.filter((item) => item.id !== id);
  persist(); renderSidebarPlaylists(); renderLibrary(); closeDialog(); toast(`“${playlist?.name || '플레이리스트'}”를 삭제했어요.`);
}

function installApp() {
  if (state.deferredInstall) { state.deferredInstall.prompt(); state.deferredInstall = null; $('#install-button').hidden = true; return; }
  toast('브라우저 메뉴에서 “홈 화면에 추가”를 선택해 주세요.', 'download');
}

function refreshAll() {
  const today = new Intl.DateTimeFormat('ko-KR', { weekday: 'long', month: 'long', day: 'numeric' }).format(new Date());
  $('#today-date').textContent = today;
  renderSidebarPlaylists();
  renderTracks('#home-track-list', demoTracks.slice(0, 5));
  renderTracks('#explore-track-list', demoTracks);
  renderLibrary();
  if (location.hash.slice(1) && $('#view-' + location.hash.slice(1))) state.view = location.hash.slice(1);
  showView(state.view, false);
}

document.addEventListener('click', (event) => {
  const viewButton = event.target.closest('[data-view]');
  if (viewButton) { state.query = ''; $('#global-search').value = ''; $('#page-search').value = ''; showView(viewButton.dataset.view); return; }
  const openView = event.target.closest('[data-open-view]');
  if (openView) { showView(openView.dataset.openView); return; }
  const rowAction = event.target.closest('[data-action]');
  if (rowAction) {
    const track = trackById(rowAction.dataset.id);
    if (rowAction.dataset.action === 'play') {
      if (track.id === state.currentId) togglePlayback();
      else { const list = state.view === 'library' && state.libraryTab === 'liked' ? demoTracks.filter((item) => isLiked(item.id)) : filteredTracks(); const playable = list.some((item) => item.id === track.id) ? list : demoTracks; playList(playable, Math.max(0, playable.findIndex((item) => item.id === track.id))); }
    }
    if (rowAction.dataset.action === 'like') toggleLike(rowAction.dataset.id);
    if (rowAction.dataset.action === 'more') openTrackMenu(rowAction.dataset.id);
    return;
  }
  const removePlaylist = event.target.closest('[data-remove-playlist]');
  if (removePlaylist) { event.stopPropagation(); deletePlaylist(removePlaylist.dataset.removePlaylist); return; }
  const playlist = event.target.closest('[data-playlist]');
  if (playlist) { openPlaylist(playlist.dataset.playlist); return; }
  if (event.target.closest('[data-close-dialog]')) closeDialog();
});

$$('[data-view-link]').forEach((link) => link.addEventListener('click', (event) => { event.preventDefault(); showView('home'); }));
$('#create-playlist').addEventListener('click', createPlaylistDialog);
$('#create-playlist-bottom').addEventListener('click', createPlaylistDialog);
$('#play-featured').addEventListener('click', () => playList(demoTracks, 0));
$('#play-explore').addEventListener('click', () => playList(demoTracks, 0));
$('#save-featured').addEventListener('click', () => { const playlist = state.playlists.find((item) => item.name === '흐릿한 오후'); if (playlist) { toast('이미 보관함에 있어요.'); return; } state.playlists.unshift({ id: `p${Date.now()}`, name: '흐릿한 오후', trackIds: demoTracks.slice(0, 5).map((track) => track.id) }); persist(); renderSidebarPlaylists(); renderLibrary(); toast('오늘의 믹스를 보관함에 담았어요.'); });
$('#play-toggle').addEventListener('click', () => togglePlayback());
$('#next-button').addEventListener('click', playNext);
$('#previous-button').addEventListener('click', playPrevious);
$('#shuffle-button').addEventListener('click', (event) => { state.shuffle = !state.shuffle; event.currentTarget.classList.toggle('active', state.shuffle); toast(state.shuffle ? '셔플을 켰어요.' : '셔플을 껐어요.'); });
$('#repeat-button').addEventListener('click', () => { state.repeat = (state.repeat + 1) % 3; syncPlayer(); toast(['반복을 껐어요.', '전체 반복을 켰어요.', '한 곡 반복을 켰어요.'][state.repeat]); });
$('#player-like').addEventListener('click', () => { if (state.currentId) toggleLike(state.currentId); else toast('먼저 곡을 재생해 주세요.', 'heart'); });
$('#progress').addEventListener('input', (event) => { const duration = state.audio.duration || getCurrentTrack()?.seconds; if (duration) state.audio.currentTime = (Number(event.target.value) / 100) * duration; });
$('#volume').addEventListener('input', (event) => { state.audio.volume = Number(event.target.value) / 100; $('#mute-button').innerHTML = `<span data-icon="${state.audio.volume ? 'volume' : 'mute'}"><svg viewBox="0 0 24 24">${state.audio.volume ? ICONS.volume : ICONS.mute}</svg></span>`; });
$('#mute-button').addEventListener('click', () => { state.audio.muted = !state.audio.muted; $('#mute-button').innerHTML = `<span data-icon="${state.audio.muted ? 'mute' : 'volume'}"><svg viewBox="0 0 24 24">${state.audio.muted ? ICONS.mute : ICONS.volume}</svg></span>`; });
$('#queue-button').addEventListener('click', openQueueDialog);
$('#expand-player').addEventListener('click', () => { const track = getCurrentTrack(); if (track) openTrackMenu(track.id); else toast('재생 중인 곡이 없어요.'); });
$('#account-button').addEventListener('click', openAccountDialog);
$('#settings-button').addEventListener('click', openSettingsDialog);
$('#about-button').addEventListener('click', openAboutDialog);
$('#about-button-explore').addEventListener('click', openAboutDialog);
$('#about-button-search').addEventListener('click', openAboutDialog);
$('#about-button-library').addEventListener('click', openAboutDialog);
$('#back-button').addEventListener('click', () => history.back());
$('#forward-button').addEventListener('click', () => history.forward());
$('#queue-button').setAttribute('title', '재생 대기 목록');
$('#sort-tracks').addEventListener('change', (event) => { const tracks = [...demoTracks]; if (event.target.value === 'az') tracks.sort((a,b) => a.title.localeCompare(b.title)); renderTracks('#explore-track-list', tracks); });

$('#global-search').addEventListener('focus', () => { if (state.view !== 'search') { state.query = $('#global-search').value; updateSearch(); } });
$('#global-search').addEventListener('input', (event) => { state.mood = null; state.query = event.target.value; updateSearch(); });
$('#page-search').addEventListener('input', (event) => { state.mood = null; state.query = event.target.value; $('#global-search').value = state.query; updateSearch(); });
$('#page-search').addEventListener('keydown', (event) => { if (event.key === 'Enter') $('#page-search').blur(); });
$('#mood-grid').addEventListener('click', (event) => { const card = event.target.closest('[data-mood]'); if (!card) return; state.mood = card.dataset.mood; state.query = moodNames[state.mood]; $('#global-search').value = state.query; updateSearch(); toast(`${moodNames[state.mood]} 무드의 곡을 모았어요.`, 'sparkle'); });
$$('[data-library-tab]').forEach((button) => button.addEventListener('click', () => { state.libraryTab = button.dataset.libraryTab; renderLibrary(); }));
$('#library-play-all').addEventListener('click', () => { const tracks = state.libraryTab === 'liked' ? demoTracks.filter((track) => isLiked(track.id)) : state.playlists.flatMap((list) => list.trackIds.map(trackById)).filter(Boolean); playList(tracks); });

window.addEventListener('popstate', () => { const view = location.hash.slice(1); if ($('#view-' + view)) showView(view, false); });
window.addEventListener('keydown', (event) => {
  const typing = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName);
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); $('#global-search').focus(); return; }
  if (event.code === 'Space' && !typing && !$('#app-dialog').open) { event.preventDefault(); togglePlayback(); }
  if (event.key === 'Escape' && $('#app-dialog').open) closeDialog();
  if (!typing && event.key === 'ArrowRight') playNext();
  if (!typing && event.key === 'ArrowLeft') playPrevious();
});

window.addEventListener('beforeinstallprompt', (event) => { event.preventDefault(); state.deferredInstall = event; $('#install-button').hidden = false; });
$('#install-button').addEventListener('click', installApp);
window.addEventListener('appinstalled', () => { state.deferredInstall = null; $('#install-button').hidden = true; toast('홈 화면에 설치했어요.'); });

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('./service-worker.js').catch(() => {});
refreshAll();
refreshUser();
