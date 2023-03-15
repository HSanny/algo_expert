import './App.css';

// <React.Fragment> </React.Fragment> === <> </>
// <div> </div> or <span> </span> to wrap elements === add extra elements to the dom
// if you do much enough, 
// it will slow down the page, 
// it will also make the job of accessibility tools such as screen readers alot harder as there might be too many elements
// Hence use Fragments or <></> is better, this will be removed when the element is appended to the DOM


export default function App() {
  // const name = evilInput.name;
  // return (
  //   <>
  //     <h1>Hello {name.toUpperCase()}</h1>
  //     <p>Test</p>
  //   </>
  // )
  // const error = false;
  // return error ? <h1>Error</h1> : <h1>Success</h1>;
  // return (
  //   <>
  //   {/* {error ? <h1>Error</h1> : null} */}
  //   {/* short circuit evaluation */}
  //   { error && <h1>Error</h1>}
  //   {!error || <h1>Success</h1>}
  //   </>
  // );

  // return <h1>{error ? 'Error' : 'Success'}</h1>

  // if (error) {
  //   return <h1>Error</h1>
  // }
  // return <h1>Success</h1>

  // const type = 'text';
  // const props = {
  //   id: 'input',
  //   type: 'text',
  //   maxLength: '3'
  // };
  // return (
  //   <>
  //     {/* The for attribute specifies which form element a label is bound to. */}
  //     <label htmlFor="input">Input: </label>
  //     <input {...props} placeholder="user" />
  //   </>
  // )

  return <p style={{
    color: 'red',
    textAlign: 'center',
    fontSize:  '48px'
  }}>Hello World</p>
} 