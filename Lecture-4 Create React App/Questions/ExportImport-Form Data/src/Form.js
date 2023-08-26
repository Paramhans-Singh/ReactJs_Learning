// Complete the Form Component and export it

import {name,email} from "./HomePage";

function handlesubmit(e){
  e.preventDefault();
}

const Form = () => (
  <>
    <div>
      <form onSubmit={handlesubmit}>
      
     <h3>Login Page</h3>
     
     <br/>
     <input text="name" placeholder="name" value={name}></input>
     <br/>
     <br/>
     <input text="email" placeholder="email" value={email}/>
     <br/>
     <br/>
     <button>Login</button>

      </form>
    </div>
  </>
);

export default Form;