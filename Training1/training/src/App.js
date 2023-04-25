import './App.css';
import Questions from './Questions';
import Data from './Data';

function App() {
  const Datacomp = Data.map((data, index)=>{
    return (
      <>
        <Questions 
          index={index+1}
          q={data.q}
          a={data.a}
        />
        <div className="mb-24"></div>
      </>
    )
  })  
  return (
    <div className="App">
      <header className="app__title">Training 1</header>
      <div className='app__form'>
        {Datacomp}
      </div>
    </div>
  );
}

export default App;
