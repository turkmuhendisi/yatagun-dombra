/**
 * Bakım modu: Tüm istekleri yakalar, siteye erişimi engeller.
 * Devre dışı bırakmak için bu dosyayı silin veya yeniden adlandırın.
 */
const MAINTENANCE_HTML = `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex, nofollow">
  <link rel="icon" type="image/png" href="/favicon.png">
  <title>Yatagun Dombra | Bakım Modu</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
      padding: 24px;
      overflow-x: hidden;
      position: relative;
      background: url('/altaihorse.png') center center / cover no-repeat fixed;
    }
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background: rgba(30,20,15,0.4);
      pointer-events: none;
      z-index: 0;
    }
    .glass-card {
      position: relative;
      z-index: 1;
      max-width: 480px;
      width: 100%;
      background: rgba(255,255,255,0.15);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-radius: 20px;
      padding: 36px 32px;
      border: 1px solid rgba(255,255,255,0.35);
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    .glass-card h1 {
      font-size: 22px;
      font-weight: 700;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .glass-card h1::after {
      content: '';
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #f5d042;
    }
    .glass-divider {
      height: 1px;
      background: rgba(255,255,255,0.5);
      margin: 20px 0;
    }
    .glass-card .message {
      font-size: 15px;
      line-height: 1.65;
      color: rgba(255,255,255,0.95);
      margin-bottom: 24px;
    }
    .player-inner {
      background: rgba(255,255,255,0.12);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-radius: 14px;
      padding: 18px 16px;
      border: 1px solid rgba(255,255,255,0.2);
    }
    .player-inner h3 {
      font-size: 11px;
      font-weight: 600;
      color: rgba(255,255,255,0.9);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 14px;
    }
    .track {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 0;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    .track:last-child { border-bottom: none; }
    .track-btn {
      width: 34px; height: 34px;
      flex-shrink: 0;
      border: none;
      border-radius: 50%;
      background: rgba(255,255,255,0.35);
      color: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
    }
    .track-btn:hover { background: rgba(255,255,255,0.5); }
    .track-btn.playing { background: rgba(245,208,66,0.9); color: #1a140e; }
    .track-btn svg { width: 14px; height: 14px; }
    .track-info { flex: 1; }
    .track-name { font-weight: 600; color: #fff; font-size: 14px; }
    .track-singer { font-size: 12px; color: rgba(255,255,255,0.75); }
    .social-row {
      margin-top: 24px;
      display: flex;
      justify-content: center;
    }
    .social {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 10px 20px;
      border-radius: 14px;
      background: rgba(255,255,255,0.18);
      border: 1px solid rgba(255,255,255,0.25);
      text-decoration: none;
      color: #fff;
      font-weight: 600;
      font-size: 14px;
      transition: all 0.3s;
    }
    .social:hover {
      background: rgba(255,255,255,0.28);
      transform: translateY(-1px);
    }
    .social .ig-icon {
      width: 28px; height: 28px;
      border-radius: 50%;
      background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .social .ig-icon svg { width: 14px; height: 14px; }
    @media (max-width: 480px) {
      .glass-card { padding: 28px 24px; }
      .glass-card h1 { font-size: 18px; }
      .message { font-size: 14px; }
    }
  </style>
</head>
<body>
  <div class="glass-card">
    <h1>Yatagun Dombra</h1>
    <div class="glass-divider"></div>
    <p class="message">Ezgiler sustu sanma; yalnızca güç topluyoruz, çünkü bozkırın sesi susmaz ve rüzgâr dombırayı çaldığında aynı kadim tınılarda yeniden buluşacağız.</p>
    <div class="player-inner">
      <h3>Bozkırın sesini dinleyin</h3>
      <div class="tracks">
        <div class="track" data-src="/musics/bulutlar%C4%B1n-aras%C4%B1nda.mp3" data-name="Bulutların Arasında">
          <button class="track-btn" type="button" aria-label="Çal"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
          <div class="track-info"><div class="track-name">Bulutların Arasında</div><div class="track-singer">Yatagun Küğ</div></div>
        </div>
        <div class="track" data-src="/musics/bozk%C4%B1r-ruhu.mp3" data-name="Bozkır Ruhu">
          <button class="track-btn" type="button" aria-label="Çal"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
          <div class="track-info"><div class="track-name">Bozkır Ruhu</div><div class="track-singer">Yatagun Küğ</div></div>
        </div>
        <div class="track" data-src="/musics/bozk%C4%B1r-ruhu-dombra.mp3" data-name="Bozkır Ruhu (Dombra)">
          <button class="track-btn" type="button" aria-label="Çal"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
          <div class="track-info"><div class="track-name">Bozkır Ruhu (Dombra)</div><div class="track-singer">Yatagun Küğ</div></div>
        </div>
        <div class="track" data-src="/musics/kizil-yemin.mp3" data-name="Kızıl Yemin">
          <button class="track-btn" type="button" aria-label="Çal"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
          <div class="track-info"><div class="track-name">Kızıl Yemin</div><div class="track-singer">Yatagun Küğ</div></div>
        </div>
        <div class="track" data-src="/musics/kongul-sadasi.mp3" data-name="Köngül Sadası">
          <button class="track-btn" type="button" aria-label="Çal"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
          <div class="track-info"><div class="track-name">Köngül Sadası</div><div class="track-singer">Yatagun Küğ</div></div>
        </div>
      </div>
    </div>
    <audio id="m-audio" style="display:none"></audio>
    <div class="social-row">
    <a href="https://www.instagram.com/yatagundombra/" target="_blank" rel="noopener noreferrer" class="social">
      <span class="ig-icon">
        <svg fill="white" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      </span>
      yatagundombra
    </a>
    </div>
  </div>
  <script>
    (function(){
      var audio = document.getElementById('m-audio');
      var tracks = document.querySelectorAll('.track');
      var currentTrack = null;
      function resetBtns(){
        tracks.forEach(function(t){ t.querySelector('.track-btn').classList.remove('playing'); t.querySelector('.track-btn').innerHTML = '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>'; });
      }
      function setPauseBtn(t){ t.querySelector('.track-btn').classList.add('playing'); t.querySelector('.track-btn').innerHTML = '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>'; }
      function setPlayBtn(t){ t.querySelector('.track-btn').classList.remove('playing'); t.querySelector('.track-btn').innerHTML = '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>'; }
      audio.addEventListener('ended', function(){ resetBtns(); });
      tracks.forEach(function(tr){
        tr.querySelector('.track-btn').addEventListener('click', function(){
          var src = tr.getAttribute('data-src');
          if(currentTrack === tr && !audio.paused){ audio.pause(); setPlayBtn(tr); return; }
          resetBtns();
          audio.src = src;
          audio.play();
          currentTrack = tr;
          setPauseBtn(tr);
        });
      });
    })();
  </script>
</body>
</html>`;

export const config = {
  matcher: ['/((?!musics/|favicon\\.png|favicon\\.ico|altaihorse\\.png).*)'],
};

export default function middleware() {
  return new Response(MAINTENANCE_HTML, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}
