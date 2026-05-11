# React CDN 방식 실습 가이드

## 개요

이 폴더는 **React CDN 방식**으로 React 를 실습하기 위한 템플릿입니다.
이 방식은 별도의 설치 없이 브라우저에서 React 를 직접 사용할 수 있습니다.

---

## 폴더 내 파일

| 파일명 | 설명 |
|--------|------|
| `00-index.html` | 메인 HTML 파일 (React  CDN 링크 포함) |
| `00-style.css` | 기본 스타일 파일 |
| `01-component-template.js` | React 컴포넌트 예제 파일 |
| `00-README.md` | 이 파일 (간역 설명) |

---

## 실습 시작 방법

### 1. 브라우저에서 확인하기

브라우저에서 다음 주소를 열면 React CDN 환경에서 렌더링됩니다.

```
http://localhost:5500/react/01.%20CDN%20방식/00-index.html
```

**VSCode 파일 탐색기 (Live Server) 사용:**
- VSCode 확장 프로그램 `Live Server` 설치
- `00-index.html` 파일을 우클릭하여 `Open with Live Server` 선택

---

## 실습 방법

### 2. 컴포넌트 작성

`01-component-template.js` 파일을 **편집기 (Notepad 등) 에서 열어서 코드를 수정**하세요.

**예제:**
- `SimpleText` : 텍스트 표시 컴포넌트
- `ButtonHandler` : 버튼 클릭 이벤트 처리
- `Counter` : 상태 (useState) 사용 예제
- `Greeting` : Props 전달 예제
- `UserList` : 데이터 리스팅 예제

---

## 기술 스택

| 기술 | 버전 |
|------|------|
| React | v18 (CDN) |
| ReactDOM | v18 (CDN) |
| CSS | (사용자 정의) |

---

## CDN 링크

```html
<!-- React 18 -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"
    integrity="sha384-p21PB4QCm5iI09AoD53KkZ93lJ8/67k8q9y8vJ0X4z3Q1"
    referrerpolicy="no-referrer"></script>

<!-- ReactDOM 18 -->
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
    integrity="sha384-+34n9V246q01J4l6V5x8Lh1j5k8z3Q1"
    referrerpolicy="no-referrer"></script>
```

---

## 주의사항

1. **`type="text/babel"`** 를 반드시 사용하세요.
   - `type="text/javascript"` 는 JSX 를 지원하지 않습니다.
   - 브라우저에서 JSX 코드를 컴파일할 수 있게 해줍니다.

2. **Node.js 설치 없이도 실행 가능합니다.**
   - CDN 에서 React  코드를 가져옵니다.
   - 별도 설치 작업 불필요.

3. **VSCode 파일 탐색기 사용 시**
   - `01-component-template.js` 파일 수정 후 재시작 필요.
   - 또는 브라우저 캐시를 지우고 새로고침.

---

## 다음 단계

- ✅ **React CDN** 실습 완료
- 🔄 **React CRA 방식** 학습으로 넘어가기
  - `02. CRA 방식` 폴더를 확인하세요.

---

## 학습 목표

이 실습을 통해 다음 개념을 익힙니다.

1. React JSX 문법
2. 컴포넌트 작성 및 렌더링
3. Props 전달 방식
4. 상태 (state) 관리
5. 이벤트 처리

---

## 관련 자료

- [React 공식 가이드](https://react.dev/learn)
- [React CDN 다운로드 페이지](https://unpkg.com/)
