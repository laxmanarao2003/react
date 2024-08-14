/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// import ClassFormHandling from './Components/ClassFormHandling';
// import FunctionalFormHandling from './Components/FunctionalFormHandling';
// import FetchApis_Axios from './Components/FetchApis_Axios';
// import FileterListItems from './Components/FilterListItems';
// import FilterTableItems from './Components/FilterTableItems';
// import SortListElements from './Components/SortListElements';
// import SortTableItems from './Components/SortTableItems';
// import ToDoList from './Components/ToDoList';

import StateOperations from './ClassComponentsPractise/StateOperations';
import LifeCycleOfClassComponent from './ClassComponentsPractise/LifeCycleOfClassComponent'
import PureClassComponent from './ClassComponentsPractise/PureClassComponent';
import RefsClassComponent from './ClassComponentsPractise/RefsClassComponent';
import HocC from './ClassComponentsPractise/HocC';
import HocB from './ClassComponentsPractise/HocB';
import ErrorBoundaryComponent from './ClassComponentsPractise/ErrorBoundaryComponent';

import UseStateHook from './Practise_Hooks/UseStateHook';
import UseEffectHook from './Practise_Hooks/UseEffectHookOne';
import UseContextA from './Practise_Hooks/UseContextA';
import UseRefHook from './Practise_Hooks/UseRefHook';
import UseMemoHook from './Practise_Hooks/UseMemoHook';
import UseReducerHook from './Practise_Hooks/UseReducerHook';
import UseCustomHookA from './Practise_Hooks/UseCustomHookA';
import UseCallbackHook from './Practise_Hooks/UseCallbackHook';
import FilterListItems from './Practise_things/FilterListItems';
import FilterTableItems from './Practise_things/FilterTableItems';
import ToDoList from './Practise_things/ToDoList';
import FormHandling from './Practise_things/FormHandling';
import PromisesFunc from './Practise_things/PromisesFunc';
import FetchApi from './Practise_things/FetchApi';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

// ClassComponentsPractise

    // <StateOperations/>
    // <LifeCycleOfClassComponent/>
    // <PureClassComponent/>
    // <RefsClassComponent/>
    // <ErrorBoundaryComponent/>

// Practise_Hooks

    // <UseStateHook/>
    // <UseEffectHook/>
    // <UseContextA/>
    // <UseRefHook/>
    // <UseMemoHook/>
    // <UseReducerHook/>
    // <React.StrictMode>
    //   <HocB val="Rohit"/>
    //   <HocC/>
    // </React.StrictMode>
    // <UseCustomHookA/>
    // <UseCallbackHook/>
    
// Practise_things

    // <FilterListItems/>
    // <FilterTableItems/>
    // <ToDoList/>
    // <FormHandling/>
    // <PromisesFunc/>
    <FetchApi/>
);

reportWebVitals();