// this is main app jaha se ham start karege
// inside return it is jsx and in curly wr can write js
// for optimized react application use react bootstrap 
// when i have free time then only watch and do something that help and so on don't live fatichar life
// ham todos ke andar todo banayege 

// import logo from './logo.svg';
import './App.css';
import Header from './MYComponents/Header';  // default export and other one is named export 
import { Footer } from './MYComponents/Footer';
import { TodoItem } from './MYComponents/TodoItem';
import { Todos } from './MYComponents/Todos';

function App() {
  let todos = [
    {
      sno: 1,
      title: "this is title",
      desc: "this is desc 1"
    },
    {
      sno: 2,
      title: "this is title",
      desc: "this is desc 1"
    },
    {
      sno: 3,
      title: "this is title",
      desc: "this is desc 1"
    }
  ]
  return (
    <>
      <Header title="MyTodosList" searchBar={false} />
      {/* This is component Header.js that we made */}
      <Todos todos={todos} />
      <Footer />
    </>
  );
}

export default App;









//   <>
/* <h3>My app</h3>
<p>Inside khali boxes opening and closing</p>
// </> */
// to me isi component ko kisi website dikha sakta hu 

