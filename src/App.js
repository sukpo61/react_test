import React,{useState} from 'react';
import './App.css'; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
import CustomButton from "./components/CustomButton";
//1. 버튼 컴포넌트 생성
//  Button 컴포넌트 부분만


//  User 컴포넌트를 분리해서 구현
function User(props) {
  return (
    <div className="squareSytle">
      <div>{props.user.age}살 - </div>
      <div>{props.user.name}</div>
      <CustomButton color = "red" onClick={() => props.handleDelete(props.user.id)}>
        삭제하기
      </CustomButton>
    </div>
  );
}

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: '송중기' },
    { id: 2, age: 24, name: '송강' },
    { id: 3, age: 21, name: '김유정' },
    { id: 4, age: 29, name: '구교환' },
  ]);
  const [name, setName] = useState(''); // <-- 유저의 입력값을 담을 상태
    const [age, setAge] = useState('')
  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      age: age,
      name: name,
    };

    setUsers([...users, newUser]);
  };
	const deleteUserHandler = (id) => {
    const newUserList = users.filter((user) => user.id !== id);
    setUsers(newUserList);
  };
  return (
    <div className="app_style">
            <input value={name}
        placeholder="이름을 입력해주세요"
                        // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
        onChange={(e) => setName(e.target.value)}
      />
                        <input value={age}
        placeholder="나이를 입력해주세요"
                        // 인풋 이벤트로 들어온 입력 값을 age의 값으로 업데이트
        onChange={(e) => setAge(e.target.value)}
      />
      {users.map((user) => {
        return <User user={user} key={user.id} age={age} handleDelete={deleteUserHandler}/>;
      })}

      <CustomButton color="green" onClick={addUserHandler}>추가하기</CustomButton>
    </div>
  );
};

export default App;

