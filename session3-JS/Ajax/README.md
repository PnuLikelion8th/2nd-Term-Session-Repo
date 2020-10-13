#Ajax(Asynchronous Javascript And Xml)

> JavaScript를 사용한 비동기 통신이며, 클라이언트와 서버간의 XML 데이터를 주고받는 기술

### 일단 그전에 inline script 와 external script의 차이점에 대해서 알아보자

- inline
  - 즉시 실행할수 있다. 서버측 동적 랜더링을 사용할때 유용하다
- external
  - 유지보수가 쉽다
    비동기 속성이 적용되므로 해당 속성에 대해 동작의 흐름이 변한다.
    스크리비트가 사용되면 cache에 저장되므로 속도향상에 좋다
    요청시에 client code를 로드할수 있어서 크기와 시간을 줄일 수 있다.

---

# 1부

[] [비동기가 무엇인지](../Ajax/ajaxstudy.html)
[] api사이트를 이용한 AJAX호출(fetch, axios)
[] addlistenerEvent설명
[] Django에서 이해하기

---

# 2부

[]JS를 활용한 DOM조작(발표자의 FE-portpolio활용)

- [리뷰 기능을 통한 DOM조작 예시](../star-score/star.html)
- [Tag생성기를 통한 DOM조작 예시](../tag_maker/tag_maker_inline.html)
- [특정기간 팝업 생성 금지를 통한 cookie이해](../notshowpopup/popup.html) <-얘는 코드를 보고 느낌만 보세요. 완벽하게 구현해놓지 않았습니다 😅 필요하시면 요청하세요!
