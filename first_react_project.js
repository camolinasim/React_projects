function Person(props){
    return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Your Age: {props.age}</p>
    </div>
    );
  }
  
  ReactDOM.render(<Person name="cris" age="24"/>,
  document.querySelector('#p1')); 
  
  ReactDOM.render(<Person name="crust" age= "27"/>,
  document.querySelector('#p2')); 