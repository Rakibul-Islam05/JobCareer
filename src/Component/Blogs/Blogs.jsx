import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='mt-9'>
            <h1>1.when should you use context api?</h1>
            <p>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>

            <h1>2.what is custom hook?</h1>
            <p>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>

            <h1>3.what is useref and work?</h1>
            <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>

            <h1>what is usememo and work in react?</h1>
            <p>The React useMemo Hook returns a memoized value. Think of memoization as caching a value so that it does not need to be recalculated. The useMemo Hook only runs when one of its dependencies update. This can improve performance. The useMemo and useCallback Hooks are similar.</p>
        </div>
    );
};

export default Blogs;