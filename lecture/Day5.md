## 새소식 - 더보기 영역 개발 - div.news

- display 방식 grid
- 새소식: h2.heading
  - CSS gradient border 활용하여 가상요소 선택자로 개발
- 내용: 썸네일 + 소제목 + 상세내용
  - h3.news-headline
  - time.news-date
  - p.news-description
  - figure.news-thumbnail
    - img
    - figuration
  - article태그 적용 시 display: contents
- 더보기: a.span

### class naming을 적용한는 것이 추후 유지보수를 위해 좋음

### tag에 스타일하는것은 안티 패턴

### SVG Sprite 사용

### Sprite 사용하는 경우 currentColor 적용 불가능.

- stroke="currentColor"
- Iconizr
- [SVG](https://a11y.gitbook.io/graphics-aria/svg-graphics)
- [SVG GEN](https://iconizr.com/)
