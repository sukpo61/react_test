import React,{useState} from 'react';
import './App.css'; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
import CustomButton from "./components/CustomButton";
//1. 버튼 컴포넌트 생성
//  Button 컴포넌트 부분만


//  User 컴포넌트를 분리해서 구현
function Working(props) {
    if(!props.isDone)
      return (
        <div className="squareSytle">
          <div>{props.user.title}</div>
          <div>{props.user.body}</div>
          <CustomButton color = "red" onClick={() => props.handleDelete(props.user.id)}>
            삭제하기
          </CustomButton>
            <CustomButton onClick={() => props.onChangeHandler(props.user.id)}>
                완료
            </CustomButton>
        </div>
      );
}

function Done(props) {
    if(!props.isDone)
      return (
        <div className="squareSytle">
          <div>{props.user.title}</div>
          <div>{props.user.body}</div>
          <CustomButton color = "red" onClick={() => props.handleDelete(props.user.id)}>
            삭제하기
          </CustomButton>
            <CustomButton onClick={() => props.onChangeHandler(props.user.id)}>
                취소
            </CustomButton>
        </div>
      );
}


const App = () => {
  const [users, setUsers] = useState([
    { id: 1, title: '투두리스트 완료하기', body: '이것저것', isDone: false },
  ]);
  const [body, setName] = useState(''); // <-- 유저의 입력값을 담을 상태
    const [title, setAge] = useState('')

    const empty_input = () => {
    document.querySelector(".input").value = null;
    }

  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      title: title,
      body: body,
        isDone : false
    };

    setUsers([...users, newUser]);
  };

    const onChangeHandler = (id) => {
        let UserList = users.slice();
        UserList.find(e => e.id === id).isDone = !UserList.find(e => e.id === id).isDone;

    setUsers(UserList);

    }


	const deleteUserHandler = (id) => {
    const newUserList = users.filter((user) => user.id !== id);
    setUsers(newUserList);
  };
  return (
      <div className="wrap">
          <div className="app_style">
    <div className="input_style">
            <input value={body} className="input"
        placeholder="제목"
                        // 인풋 이벤트로 들어온 입력 값을 body의 값으로 업데이트
        onChange={(e) => setName(e.target.value)}
      />
                        <input value={title} className="input"
        placeholder="내용"
                        // 인풋 이벤트로 들어온 입력 값을 title의 값으로 업데이트
        onChange={(e) => setAge(e.target.value)}
      />
    <CustomButton color="green" onClick={()=>{
        empty_input()
        addUserHandler()
    }}>추가하기</CustomButton>

    </div>
              <h1>Working</h1>
            <div className="Do_list">
              {users.map((user) => {
        return <Working isDone={user.isDone} user={user} key={user.id} title={title} handleDelete={deleteUserHandler} onChangeHandler={onChangeHandler}/>;
      })}


            </div>
              <h1>Done!!</h1>
              <div className="Done_list">
                   {users.map((user) => {
        return <Done isDone={!user.isDone} user={user} key={user.id} title={title} handleDelete={deleteUserHandler} onChangeHandler={onChangeHandler}/>;
      })}
              </div>


    </div>
      </div>
  );
};

export default App;

