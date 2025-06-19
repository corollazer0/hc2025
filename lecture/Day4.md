## CSS Cascading

- @layer를 이용하여, 스타일 우선순위를 줄 수 있음.
- @layer module, state;
  =>state, module 순서로 적용 됨.

```CSS
@layer module, state;

@layer state {
  .alert {
    background-color: brown;
  }
  p {
    border: medium solid limegreen;
  }
}

@layer module {
  .alert {
    border: medium solid violet;
    background-color: yellow;
    color: white;
  }
}
```

## 서브 목록인 경우 마크업

```HTML
<!-- 전통적인 Legacy 마크업 -->
<ul>
  <li>
    대메뉴
    <ul>
      <li><a href="/">서브메뉴 1</a></li>
      <li><a href="/">서브메뉴 2</a></li>
      <li><a href="/">서브메뉴 3</a></li>
    </ul>
  </li>
</ul>
```

- 이 경우 tab을 이용하여 이동하기가 상당히 어려움

## W3 WAI-ARIA 기준 Auto 방식

- tablist : div
- tab: button
- panel : div

```

```

---

## TIP

- [W3 WAI-ARIA TAB](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
- [responsivelogos](https://www.responsivelogos.co.uk/)
- [텍스트쉐도우 활용](https://codepen.io/tag/text-shadow)
- [마스크 활용](https://bennettfeely.com/clippy/)
