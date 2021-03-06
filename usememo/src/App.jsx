import { useMemo, useCallback, useState, useEffect } from 'react';
import axios from 'axios';

const filter = (users, query) => {
  console.log('-----FILTER------');
  return users.filter(user => user.name.toLowerCase().includes(query));
}

const UserList = ({ users, query }) => {
  const filtered = useMemo(() => filter(users, query), [users, query]);

  return filtered.map(user => <div key={user.id}>{user.name}</div>);
}

function App() {
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);

  const getUsers = useCallback((async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/'); 
    setUsers(data);
  }), []);

  useEffect(() => {
    getUsers()
  }, [getUsers]);

  return (
    <div className="App">
      <h1>useCallback vs useMemo</h1>

      <input type="text" onChange={(e) => setQuery(e.target.value)} />

      <div>count: {count}</div>
      <button onClick={()  => setCount(prev => prev + 1)}>Increment</button>
     <UserList users={users} query={query} />
    </div>
  );
}

export default App;
