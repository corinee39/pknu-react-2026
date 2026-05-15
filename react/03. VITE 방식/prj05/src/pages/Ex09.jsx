import { useState } from "react";
import passStyle from "./Ex09.module.css";

const students = [
  { id: 1, name: "김한솔", score: 88 },
  { id: 2, name: "이서준", score: 92 },
  { id: 3, name: "박민지", score: 76 },
  { id: 4, name: "최지훈", score: 85 },
  { id: 5, name: "정다은", score: 90 },
  { id: 6, name: "강유진", score: 68 },
  { id: 7, name: "윤태호", score: 95 },
  { id: 8, name: "장서연", score: 81 },
  { id: 9, name: "오민석", score: 73 },
  { id: 10, name: "한지우", score: 89 },
];
const Inp = () => <h2>축하드려요!!!</h2>;

function Ex09() {
  const [onlyPassed, setOnlyPassed] = useState(false);
  const passStudent = onlyPassed
    ? students.filter((s) => s.score >= 80)
    : students;

  return (
    <>
      <h1>조건부 렌더링과 리스트</h1>
      <input
        type="checkbox"
        checked={onlyPassed}
        onChange={(e) => setOnlyPassed(e.target.checked)}
      />
      <label htmlFor="" className="toggle">
        합격자만 보기
      </label>
      {/* 표로 만들어본 방식 */}
      {/* {onlyPassed && (
        <table
          border="1"
          style={{ marginTop: "20px", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th>번호</th>
              <th>이름</th>
              <th>점수</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )} */}

      {/* 수업때 사용한 방식 */}
      <div>{onlyPassed && <Inp />}</div>
      <ul className="list">
        {passStudent.map((student) => {
          return (
            <li key={student.id}>
              <span>{student.name}</span>{" "}
              <strong
                className={
                  student.score >= 80 ? passStyle.pass : passStyle.fail
                }
              >
                {student.score}점
              </strong>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Ex09;
