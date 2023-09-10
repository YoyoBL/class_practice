function UserInfo({ name, age, mail }) {
   return (
      <div>
         <h1>Hi</h1>
         <p>
            My name is {name} and im {age}
         </p>
         <p>You can find me at {mail}</p>
      </div>
   );
}

export default UserInfo;
