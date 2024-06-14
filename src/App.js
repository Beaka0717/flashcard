import './App.css';
import {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [selectedId, setselectedId] = useState(null)
  const handleClick = (id) =>{
    setselectedId(id);
  }
  const questions = [
    {
      id: 3457,
      question: "What language is React based on?",
      answer: "JavaScript"
    },
    {
      id: 7336,
      question: "What are the building blocks of React apps?",
      answer: "Components"
    },
    {
      id: 8832,
      question: "What's the name of the syntax we use to describe a UI in React?",
      answer: "JSX"
    },
    {
      id: 1297,
      question: "How to pass data from parent to child components?",
      answer: "Props"
    },
    {
      id: 9103,
      question: "How to give components memory?",
      answer: "useState hook"
    },
    {
      id: 2002,
      question:
        "What do we call an input element that is completely synchronised with state?",
      answer: "Controlled element"
    },
    {
      id: 1995,
      question:
        "What useEffect use for?",
      answer: "calling API"
    },
    {
      id: 2541,
      question:
        "What blocks reloading page when we use submit btn",
      answer: "handleSubmit()"
    },
    {
      id: 2351,
      question:
        "input 아내 있는 갑을 읽어 오고 싶을때",
      answer: "let keyword = event.target.value"
    },
    {
      id: 5136,
      question:
        "치킨 먹고 싶을때 ",
      answer: "박지환 한테 말하기"
    },
    {
      id: 3597,
      question:
        "싸우고 싶을때는 ",
      answer: "백현이를 건들기"
    }
  ];
  return (
    <div className="">
    <Container>
    <Row>
    {questions.map((question)=> (<Col key={question.id}  lg={3} md={4}>
    <div onClick={() => handleClick(question.id)}
      className= {`flashcards ${question.id === selectedId ? 'selected' : ''}`}>
      <p>{question.id === selectedId ? question.answer : question.question}</p></div></Col> ))}
   </Row>
        </Container>
        
    </div>
  );
}

export default App;
