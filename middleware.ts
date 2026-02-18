/**
 * Bakım modu: Tüm istekleri yakalar, siteye erişimi engeller.
 * Devre dışı bırakmak için bu dosyayı silin veya yeniden adlandırın.
 */
const MAINTENANCE_HTML = `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
      background: linear-gradient(135deg, #f8f6f4 0%, #fff 40%, #f8f6f4 100%);
      color: #2C1810;
      padding: 24px;
      overflow: hidden;
      position: relative;
    }
    body::before, body::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.08;
      pointer-events: none;
    }
    body::before {
      width: 500px; height: 500px;
      top: -100px; left: -100px;
      background: #2C1810;
    }
    body::after {
      width: 400px; height: 400px;
      bottom: -80px; right: -80px;
      background: #1A0F0A;
    }
    .card {
      position: relative;
      z-index: 1;
      max-width: 560px;
      width: 100%;
      text-align: center;
      background: rgba(255,255,255,0.85);
      backdrop-filter: blur(16px);
      border-radius: 24px;
      padding: 48px 36px;
      box-shadow: 0 20px 60px rgba(44,24,16,0.08);
      border: 1px solid rgba(255,255,255,0.5);
    }
    .icon-wrapper {
      width: 72px; height: 72px;
      margin: 0 auto 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: linear-gradient(135deg, #2C1810, #1A0F0A);
    }
    .icon-wrapper svg { width: 32px; height: 32px; }
    h1 {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 16px;
      background: linear-gradient(to right, #2C1810, #1A0F0A);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .divider {
      width: 48px; height: 3px;
      margin: 0 auto 24px;
      border-radius: 4px;
      background: linear-gradient(to right, #2C1810, #1A0F0A);
    }
    p {
      font-size: 17px;
      line-height: 1.7;
      color: #5C4D44;
      margin-bottom: 32px;
    }
    .social {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 12px 24px;
      border-radius: 16px;
      background: rgba(255,255,255,0.8);
      border: 1px solid rgba(44,24,16,0.1);
      text-decoration: none;
      color: #2C1810;
      font-weight: 600;
      font-size: 15px;
      transition: all 0.3s;
      box-shadow: 0 4px 16px rgba(44,24,16,0.06);
    }
    .social:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(44,24,16,0.12);
    }
    .social .ig-icon {
      width: 36px; height: 36px;
      border-radius: 50%;
      background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .social .ig-icon svg { width: 18px; height: 18px; }
    .player-wrap {
      background: rgba(255,255,255,0.6);
      backdrop-filter: blur(8px);
      border-radius: 16px;
      padding: 20px;
      margin: 24px 0;
      text-align: left;
      border: 1px solid rgba(44,24,16,0.08);
    }
    .player-wrap h3 {
      font-size: 14px;
      color: #5C4D44;
      margin-bottom: 12px;
      font-weight: 600;
    }
    .track {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 0;
      border-bottom: 1px solid rgba(44,24,16,0.06);
    }
    .track:last-child { border-bottom: none; }
    .track-btn {
      width: 36px; height: 36px;
      flex-shrink: 0;
      border: none;
      border-radius: 50%;
      background: linear-gradient(135deg, #2C1810, #1A0F0A);
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 0.2s;
    }
    .track-btn:hover { opacity: 0.9; }
    .track-btn.playing { background: #5C4D44; }
    .track-btn svg { width: 14px; height: 14px; }
    .track-info { flex: 1; }
    .track-name { font-weight: 600; color: #2C1810; }
    .track-singer { font-size: 13px; color: #5C4D44; }
    @media (max-width: 480px) {
      .card { padding: 36px 24px; }
      h1 { font-size: 22px; }
      p { font-size: 15px; }
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Yatagun Dombra</h1>
    <div class="divider"></div>
    <p>Ezgiler sustu sanma; yalnızca güç topluyoruz, çünkü bozkırın sesi susmaz ve rüzgâr dombırayı çaldığında aynı kadim tınılarda yeniden buluşacağız.</p>
    <div class="player-wrap">
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
    <a href="https://www.instagram.com/yatagundombra/" target="_blank" rel="noopener noreferrer" class="social">
      <span class="ig-icon">
        <svg fill="white" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      </span>
      yatagundombra
    </a>
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
  matcher: ['/((?!musics/).*)'],
};

export default function middleware() {
  return new Response(MAINTENANCE_HTML, {
    status: 503,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Retry-After': '86400',
    },
  });
}
