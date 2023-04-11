import React from 'react';

const Blog = () => {
  return (
    <div>
      <header className='py-32 banner'>
        <h1 className='text-center text-6xl font-bold'>Blog</h1>
      </header>
      <section className='max-w my-16 flex flex-col gap-16'>
        <div>
          <h1 className='text-4xl font-semibold'>When should you use context API?</h1>
          <p className='mt-4'>Context API in React can be used to manage state and provide a way to pass data down the component tree without the need to manually pass props through every level of the tree. Here are some scenarios where using Context API can be useful:</p>
          <ol className='list-decimal ml-8 my-4'>
            <li>Global State Management: If you have data that needs to be shared across multiple components, you can use the Context API to provide a centralized state management system.</li>
            <li>Theme Management: If you want to provide your application with the ability to switch between light and dark themes, you can use the Context API to manage the current theme state and pass it down to the child components.</li>
            <li>User Authentication: If you need to manage the user authentication state throughout your application, you can use the Context API to store the current user information and pass it down to the components that need it.</li>
            <li>Language Localization: If you want to provide multi-lingual support for your application, you can use the Context API to store the current language and pass it down to the child components.</li>
          </ol>
          <p>In general, the Context API can be useful when you have data that needs to be shared across multiple components and you want to avoid "prop drilling" (passing data down through several levels of components). However, it's important to note that using the Context API can add complexity to your application and should be used judiciously.</p>
        </div>
        <div>
          <h1 className='text-4xl font-semibold'>What is a custom hook?</h1>
          <p className='mt-4'>A custom hook is a function in React that allows you to extract and reuse logic that would otherwise be duplicated across multiple components. Custom hooks are a powerful feature of React, as they allow you to encapsulate and abstract away complex logic and functionality, making it easier to share and maintain code.</p>
          <p className='mt-4'>A custom hook is created by defining a function that uses existing React hooks, such as useState or useEffect, to create a new hook that can be used in your application. The naming convention for custom hooks is to prefix the function name with the word "use", as all hooks must start with "use".</p>
        </div>
        <div>
          <h1 className='text-4xl font-semibold'>What is useRef?</h1>
          <p className='my-4'>"useRef" is a hook in React that allows you to create a mutable reference to a DOM element or any other value that persists across re-renders of a component. The "useRef" hook returns a mutable ref object with a current property that can be set and updated, without causing a re-render of the component.</p>
          <p>Here are some common use cases for useRef:</p>
          <ol className='list-decimal ml-8 my-4'>
            <li>Accessing DOM Elements: You can use useRef to create a reference to a DOM element and then access its properties and methods.</li>
            <li>Storing Previous Values: You can use useRef to store a value that persists across re-renders of a component.</li>
          </ol>
          <p>In summary, "useRef" is a hook that allows you to create a mutable reference that persists across re-renders of a component. It can be used to access DOM elements, store previous values, and perform other tasks that require persisting state across re-renders.</p>
        </div>
        <div>
          <h1 className='text-4xl font-semibold'>What is useMemo?</h1>
          <p className='my-4'>"useMemo" is a hook in React that allows you to memoize the result of a computation, so that the computation is only executed when necessary. The "useMemo" hook takes two arguments: a function that performs the computation, and an array of dependencies that the computation depends on. The hook returns the memoized result of the computation.</p>
          <p>It's important to note that "useMemo" should only be used for expensive computations that have a high cost in terms of CPU usage or memory allocation. For simple computations, it's often better to just compute the value directly in the component's render function, as the overhead of "useMemo" may actually decrease performance.</p>
        </div>

      </section>
    </div>
  );
};

export default Blog;
