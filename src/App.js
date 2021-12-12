// import Form from './components/Form'
// import './App.css'
// import { useState, useEffect } from 'react'
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
// import Filters from './components/Filters';
// import Todo from './components/Todo';
// import Footer from './components/Footer'

// function App() {
//   const [data, setData] = useState([]);
//   const [filters, setFiletrs] = useState('All');
//   const [updatedText, setUpdateText] = useState('');
//   const [itemId, setItemId] = useState();
//   const [hideme, setHide] = useState(true);

//   const updateFunction = (e) => {
//     e.preventDefault()
//     console.log(updatedText);
// setData(data.map(element => {
//   if (element.id === itemId) {
//     return {
//       ...element, text: updatedText
//     }
//   }
//   return element
// }))
//     setHide(false)
//   }

//   useEffect(() => {
//     console.log(hideme);
//   }, [data, filters]);

//   return (
//     <div className="app">
//       <h1>NetLink's ToDo App</h1>
//       <section className="middle">
//         <Form data={data} setData={setData} />
//         <Filters setFiletrs={setFiletrs} filters={filters} />
//       </section>
//       <section className='todo_list_box'>
//         {data.map(item => (
//           <Todo setHide={setHide} setItemId={setItemId} filters={filters} data={data} setData={setData} item={item} key={item.id} />
//         ))}
//       </section>
//       <Footer hideme={hideme} setUpdateText={setUpdateText} updateFunction={updateFunction} updatedText={updatedText} />
//     </div>
//   );
// }

// export default App;

////////////////////////// here ////////////////////////////////

import { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./BetterApp.css";
import Head from "./betterUI/Head";
import Todo from "./betterUI/Todo";
import Form from "./betterUI/Form";

import Lottie from "react-lottie";
import emptyfile from "./animations/empty.json";
import welcomeAnimation from './animations/landingPage.json'

const App = () => {
  const [showAllToDos, setShowAllTODOS] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [filterMode, setFilterMode] = useState("all");
  const [update, setUpdate] = useState(false);
  const [updateData, setUpdateData] = useState();
  const [welcome, setWelcome] = useState(true)



  useEffect(() => {
    console.log("Here is Actuall data ", data);
    console.log("Here is filter data ", filterData);
  }, [data, filterMode, update]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: emptyfile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const welcomeOptions = {
    loop: true,
    autoplay: true,
    animationData: welcomeAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="app">
      <Head
        setShowAllTODOS={setShowAllTODOS}
        setShowForm={setShowForm}
        setFilterMode={setFilterMode}
      />
      <section className="main__section">
        <div className={`section__div ${showAllToDos && !update ? " " : "unseen"} `}>
          {data.length <= 0 ? (
            <Lottie options={defaultOptions} height={300} width={300} />
          ) : (
            <>
              {data.map((item) => {
                console.log("work fine by here");
                if (filterMode === "all") {
                  return (
                    <Todo setUpdate={setUpdate} setUpdateData={setUpdateData} filterMode={filterMode} item={item} data={data} setData={setData} key={item.id} />
                  )
                } else if (filterMode === "completed" && item.completed) {
                  return (
                    <Todo setUpdate={setUpdate} setUpdateData={setUpdateData} filterMode={filterMode} item={item} data={data} setData={setData} key={item.id} />
                  )
                } else if (filterMode === "incomplete" && !item.completed) {
                  return (
                    <Todo setUpdate={setUpdate} setUpdateData={setUpdateData} filterMode={filterMode} item={item} data={data} setData={setData} key={item.id} />
                  )
                } else {
                  return (<Lottie options={defaultOptions} height={300} width={300} />)
                }
              })}
            </>
          )}
        </div>
        <div className={`section__update ${(!showAllToDos && !update) && !showForm ? " " : " unseen"} `}>
          <Lottie options={welcomeOptions} height={300} width={300} />
        </div>
        <div className={`section__update unseen `}>
          {/* For search data  */}
          <Lottie options={welcomeOptions} height={300} width={300} />
        </div>
        <div className={`section__update ${showForm || update ? " " : "unseen"} `}>
          <Form update={update} setUpdate={setUpdate} updateData={updateData} setData={setData} data={data} />
        </div>
      </section>
    </div>
  );
};

export default App;
