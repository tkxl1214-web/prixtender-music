# PRIxtender

사용자가 제공한 로고를 적용한 한국어 음악 플레이어입니다. HTML, CSS, JavaScript로 구성되어 GitHub Pages에서 빌드 단계 없이 호스팅할 수 있습니다.

## 포함된 기능

- 반응형 음악 플레이어: 재생, 일시 정지, 이전/다음 곡, 탐색, 볼륨, 셔플, 반복, 재생 대기 목록
- 곡 검색, 분위기별 분류, 좋아요, 플레이리스트
- 현재 브라우저에 좋아요와 플레이리스트 저장
- 설정 후 사용할 수 있는 Google 및 이메일 로그인(Supabase Auth)
- Android 브라우저에서 홈 화면에 추가할 수 있는 PWA
- GitHub Actions를 통한 GitHub Pages 배포

## 음원 안내

목록의 미리듣기는 SoundHelix의 샘플 오디오를 사용합니다. 화면의 아티스트 표기는 요청에 따라 `PRIxtender`로 통일했지만, 샘플 오디오 자체가 PRIxtender의 음원이라는 뜻은 아닙니다. 실제 공개 전 본인 음원과 정확한 곡 정보를 등록하세요. 상업용 음악 카탈로그, 계정 간 보관함 동기화, 구독 기능은 아직 연결되어 있지 않습니다.
 
## 내 컴퓨터에서 보기

프로젝트 폴더에서 다음 명령을 실행한 다음 `http://localhost:8000`을 여세요.

```powershell
python -m http.server 8000
```

Google 로그인과 PWA 설치 기능은 `file://` 주소에서 동작하지 않으므로 localhost 또는 HTTPS가 필요합니다.

## GitHub Pages에 무료로 올리기

먼저 GitHub에서 `prixtender-music` 같은 **공개 저장소**를 만듭니다. 저장소를 만든 다음 이 폴더에서 아래 명령을 실행하고, GitHub 사용자 이름 부분을 바꿔 주세요.

```powershell
git init
git add .
git commit -m "Create PRIxtender music app"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-NAME/prixtender-music.git
git push -u origin main
```

저장소의 **Settings → Pages**에서 배포 원본을 **GitHub Actions**로 선택합니다. `.github/workflows/pages.yml`이 `main`에 올라간 변경 사항을 게시합니다. Actions 탭의 `Deploy to GitHub Pages` 작업이 끝나면 저장소의 Pages 설정에 표시된 주소를 엽니다. 주소는 `https://YOUR-GITHUB-NAME.github.io/prixtender-music/` 형태입니다.

공개 저장소의 정적 GitHub Pages 호스팅은 무료입니다. 저장소의 코드는 공개되므로 비밀 키나 개인정보를 올리지 마세요. 기본 주소만 쓰면 도메인 구매도 필요하지 않습니다.

### prixtender.com 연결하기

GitHub Pages는 도메인을 판매하지 않습니다. `prixtender.com`을 이미 소유하고 도메인 DNS를 관리할 수 있어야 연결할 수 있습니다. GitHub 저장소의 **Settings → Pages → Custom domain**에 원하는 주소를 등록한 뒤, 도메인 업체의 DNS에서 GitHub Pages가 안내하는 레코드를 설정합니다. `www` 주소는 일반적으로 `YOUR-GITHUB-NAME.github.io`를 향하는 CNAME을 사용합니다. 루트 도메인(`prixtender.com`)은 GitHub 공식 문서의 현재 A/AAAA 레코드를 확인해 설정하세요. DNS가 반영되기까지 시간이 걸릴 수 있습니다.

## Google 로그인 설정

로그인 코드는 Supabase Auth 연동 방식으로 준비되어 있습니다. 아래 계정을 직접 만들고 키를 입력해야 켜집니다.

1. Supabase 프로젝트를 만들고 **Authentication → Providers → Google**에서 Google 로그인을 활성화합니다. Supabase가 표시하는 callback URL을 복사합니다.
2. Google Cloud에서 웹 애플리케이션 OAuth 클라이언트를 만듭니다. GitHub Pages 주소와 localhost 주소를 승인된 JavaScript 출처에 추가하고, Supabase callback URL을 승인된 리디렉션 URI에 추가합니다.
3. Google OAuth Client ID와 Client Secret은 Supabase의 Google provider 설정에 입력합니다. Client Secret은 이 저장소에 넣지 않습니다.
4. Supabase의 URL 설정에서 Pages 주소를 Site URL로 지정하고, 실제 Pages 주소와 localhost 주소를 허용 목록에 추가합니다.
5. Supabase 프로젝트 URL과 `anon` 또는 `publishable` 키를 `config.js`의 `supabaseUrl`, `supabaseAnonKey`에 입력합니다. `service_role` 키는 브라우저 코드에 넣지 않습니다.

현재 로그인은 계정 인증만 처리합니다. 좋아요와 플레이리스트는 브라우저 로컬 저장소에 남으며, 계정 간 동기화는 별도 데이터베이스와 접근 정책을 추가해야 합니다.

## Android 앱으로 확장

현재 사이트는 지원하는 Android 브라우저에서 홈 화면에 설치하는 PWA로 사용할 수 있습니다. Play 스토어용 패키지가 필요하면 웹 클라이언트를 Capacitor로 감싸고 Android OAuth, 앱 링크, 백그라운드 재생 등 네이티브 기능을 추가할 수 있습니다.

## 로고 파일

- `assets/logo-black-original.png`: 제공된 검은 로고 원본
- `assets/logo-white-original.png`: 제공된 흰 로고 원본
- `assets/logo-mark.png`: 화면에 사용한 흰 로고 마크
