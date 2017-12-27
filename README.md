# gulp-webpack boilerplate project
Node.js express Gulp-Webpack project

- Gulp
- Babel
- Webpack

## Gulp, Babel and Webpack 작업사항
  - 사용 플러그인 
    - gulp-uglify (webpack에서 uglifyjs를 사용하므로 webpack 적용과 함께 삭제)
    - gulp-clean-css
    - gulp-htmlmin
    - gulp-imagemin
    - gulp-babel
    - gulp-nodemon
    - webpack-stream (gulp-webpack에서 webpack-stream으로 패키지 이름변경)
    - browser-sync
    - gulp-file-cache
    - del
    
  - 작업 완료 사항
    - [x] Task, Watch 작성
    - [x] 소스/빌드 디렉토리 분리
    - [x] 서버사이드 ES6 적용
    - [x] 서버사이드 코드 변경 탐지시 서버 재시작
    - [x] 클라이언트 코드 ES6 적용
    - [x] 클라이언트 코드 변경 탐지시 브라우저 새로고침
