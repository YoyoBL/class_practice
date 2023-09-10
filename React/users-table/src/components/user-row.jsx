function UserRow({ user, index }) {
   return (
      <tr>
         <td>{index + 1}</td>
         <td>{user.name}</td>
         <td>{user.username}</td>
         <td>{user.email}</td>
         <td>
            {user.address.city}, {user.address.street}, {user.address.suite}
         </td>
         <td>{user.company.name}</td>
      </tr>
   );
}

export default UserRow;
