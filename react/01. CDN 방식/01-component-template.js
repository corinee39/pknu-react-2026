// React 컴포넌트 템플릿 파일
// 이 파일을 수정하면 00-index.html 의 화면이 변경됩니다.
// type="text/babel" 는 JSX 를 브라우저에서 컴파일할 수 있게 해줍니다.

// --- 컴포넌트 작성하기 (예제) ---

// 1. 간단한 텍스트 컴포넌트
const SimpleText = () => {
  return (
    <div className="card">
      <h2>SimpleText</h2>
      <p>이 컴포넌트는 텍스트만 표시합니다.</p>
    </div>
  );
};

// 2. 버튼을 클릭할 때 처리하는 컴포넌트
const ButtonHandler = (onButtonClick) => {
  return (
    <button onClick={() => onButtonClick("클릭되었습니다!")}>
      클릭 버튼
    </button>
  );
};

// 3. 상태 (state) 를 사용하는 컴포넌트
const Counter = () => {
  // React 18 에서는 useState 를 사용합니다.
  const [count, setCount] = React.useState(0);

  return (
    <div className="card">
      <h2>Counter (count = {count})</h2>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

// 4. Props 를 받아오는 컴포넌트
const Greeting = ({ name, message }) => {
  return (
    <div className="card">
      <h2>Greeting</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Message:</strong> {message}</p>
    </div>
  );
};

// 5. 데이터 리스트를 표시하는 컴포넌트
const UserList = ({ users }) => {
  return (
    <div className="card">
      <h2>UserList ({users.length} 명)</h2>
      {users.map((user, index) => (
        <div key={index} className="list-item">
          <span>{index + 1}.</span>
          <span>{user.name}</span>
        </div>
      ))}
    </div>
  );
};

// --- Root 컴포넌트 ---

// Root 는 모든 컴포넌트를 모아서 렌더링합니다.
const Root = () => {
  // 예제 데이터
  const users = [
    { name: "홍길동" },
    { name: "이순신" },
    { name: "김유정" },
  ];

  return (
    <div className="container">
      <h1>React 컴포넌트 예제</h1>
      <p>이전부터 작성한 코드를 수정하세요.</p>

      <div className="grid">
        <SimpleText />
        <ButtonHandler onButtonClick={(msg) => alert(msg)} />
        <Counter />
      </div>

      <Greeting name="사용자" message="안녕하세요! React CDN 환경에서 실습을 하세요." />

      <h2>UserList 예제</h2>
      <UserList users={users} />
    </div>
  );
};

// --- React 앱 렌더링 ---

// Root 를 React app 元素로 설정
const rootElement = document.getElementById("root");

// React 18 에서는 ReactDOM.createRoot() 를 사용합니다.
// (React 17 까지면 ReactDOM.render() 를 사용했습니다.)
const root = ReactDOM.createRoot(rootElement);

// 루트 컴포넌트를 렌더링
root.render(<Root />);

// 컴포넌트 렌더링이 완료되었음을 알림
console.log("React 컴포넌트 예제가 렌더링되었습니다.");
