import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos';

interface todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data;

  const ID = todo.ID;
  const title = todo.Title;
  const finished = todo.Finished;

  console.log(`
  
  The Todo with ID: ${ID}
  Has a title of: ${title}
  Is it finished? ${finished}

  
  `);
});
