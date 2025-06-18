# Component 개발

## Login Component

- 제목
- 아이디
- 비밀번호
- 버튼

- 스타일

  - 그라디언트, 쉐도우 효과
  - 상하좌우 padding 12 픽셀
  - 인풋컴포넌트\*2 + 버튼들을 하나로 div로 적용하여 스타일
  - 로그인 하단 버튼 2개
    - 불릿제거, 플렉스, 좌측 여백 제거

- focus visible
  [링크](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)

- 컨텐츠 블록에는 적절한 제목이 필요함
  - 적절한 제목이 없는경우 숨김처리
- aria label은 interactive element만 사용 가능

  - [링크](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)

- 카드 컴포넌트 생성
  - 카드 섬네일 이미지 성능 고려 필수
  - 이미지 최적화 필수
  - 이미지 최적화 방법
    - NPM module 활용
  - 이미지 관리는 x 배율을 이용하여 적용하는게 초기 버전
  - 요즘은 svg를 이용함.
  - 이미지는 성능영향을 많이 받기 때문에, svg사용하길 권장
  - 썸네일과 텍스트는 라인하이트때문에 높낮이가 안 맞기 마련 추가 작업 필요
    -

## Form Component 생성 시 마크업 주의 사항

- 테이블 태그 사용 금지
  - 이유는 테이블은 행,열 순으로 탭이 이동 함.
- ***

## TIP

- Forms Free
- [fontawesome](https://fontawesome.com/)
- [CSS Pattern](https://css-pattern.com/)
- my device.io
