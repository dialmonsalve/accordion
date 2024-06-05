import { useState } from "react";
import "./App.css";

function App() {

  const [selected, setSelected] = useState<number | null>(null)


  const toggle = (i:number)=>{
    if(selected === i){
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, index) => (
          <div key={index} className="item">
            <div className="title" onClick={()=>toggle(index)} >
              <h2>{item.question}</h2>
              <span>{selected === index ? "-" : "+"}</span>
            </div>
            <div className={selected === index ? "content show" : "content"}>{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    question: "Question 1",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ut aperiam similique, libero modi delectus aliquid consequuntur cupiditate quo ipsam eum molestiae amet nulla ea deserunt possimus aut excepturi neque!",
  },
  {
    question: "Question 2",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ut aperiam similique, libero modi delectus aliquid consequuntur cupiditate quo ipsam eum molestiae amet nulla ea deserunt possimus aut excepturi neque!",
  },
  {
    question: "Question 3",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ut aperiam similique, libero modi delectus aliquid consequuntur cupiditate quo ipsam eum molestiae amet nulla ea deserunt possimus aut excepturi neque!",
  },
  {
    question: "Question 4",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ut aperiam similique, libero modi delectus aliquid consequuntur cupiditate quo ipsam eum molestiae amet nulla ea deserunt possimus aut excepturi neque!",
  },
];

export default App;
