import { useState, useEffect } from "react";

/* 
useEffect: 
1. 只传回调函数：挂载时和state更新时都会执行
2. 传入一个回调(且回调返回值不为一个函数)和一个空数组：只会在挂载时执行
3. 传入一个回调(且回调返回值不为一个函数)和一个不为空的数组：只会在挂载时和数组内的值变化时执行
4. 传入一个回调，并且该回调返回一个函数，再传入一个空数组：回调会在挂载时执行，组件卸载时执行回调返回的函数
5. 传入一个回调，并且该回调返回一个函数（清除函数）：每一次渲染都触发回调，并且在下一次回调逻辑被触发之前先执行清除函数
*/
const App = () => {
    const [Count, setCount] = useState(1);
    // useEffect(() => {
    //     const list = document.querySelector('#list')
    //     const element = document.createElement('li')
    //     element.textContent = `这是第${Count}条任务`
    //     list.appendChild(element)
    // });
    console.log('组件更新');
    useEffect(() => {
        console.log('挂载时和state更新时都会执行')
        return () => {
            console.log('组件渲染都会执行该清除函数');
        }
    });
    useEffect(() => {
        console.log('mounted')
    }, []);
    useEffect(() => {
        console.log('mounted2')
        return () => {
            console.log('unmounted2');
        }
    }, []);

    return (
        <div>
            <ul id="list"></ul>
            <button onClick={() => setCount(Count + 1)}>添加一条任务</button>
        </div>
    );
}

export default App;