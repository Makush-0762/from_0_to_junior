import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Tutorial from './Tutorial';
import HTML from './HTML';
import CSS from './CSS';
import JavaScript from './JavaScript';
import HtmlIntroduction from './HtmlLessons/HtmlIntroduction'
import HtmlEditors from './HtmlLessons/HtmlEditors'
import HtmlBasicExamples from './HtmlLessons/HtmlBasicExamples'
import HtmlElements from './HtmlLessons/HtmlElements'
import HtmlAttributes from './HtmlLessons/HtmlAttributes'
import CssIntroduction from './CssLessons/CssIntroduction'
import CssSyntax from './CssLessons/CssSyntax'
import CssSelectors from './CssLessons/CssSelectors'
import HowToAddCSS from './CssLessons/HowToAddCSS'
import CssComments from './CssLessons/CssComments'
import JsIntroduction from './JSLessons/JsIntroduction'
import JsWhereTo from './JSLessons/JsWhereTo'
import JsOutput from './JSLessons/JsOutput'
import JsStatements from './JSLessons/JsStatements'
import JsSyntax from './JSLessons/JsSyntax'

    function App() {

      return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/tutorial' element={<Tutorial />} />
              <Route path='/tutorial/html' element={<HTML />} />
              <Route path='/tutorial/css' element={<CSS />} />
              <Route path='/tutorial/javascript' element={<JavaScript />} />
              <Route path='/tutorial/html/introduction' element={<HtmlIntroduction />} />
              <Route path='/tutorial/html/editors' element={<HtmlEditors />} />
              <Route path='/tutorial/html/examples' element={<HtmlBasicExamples />} />
              <Route path='/tutorial/html/elements' element={<HtmlElements />} />
              <Route path='/tutorial/html/attributes' element={<HtmlAttributes />} />
              <Route path='/tutorial/css/introduction' element={<CssIntroduction />} />
              <Route path='/tutorial/css/syntax' element={<CssSyntax />} />
              <Route path='/tutorial/css/selectors' element={<CssSelectors />} />
              <Route path='/tutorial/css/how-to-add-css' element={<HowToAddCSS />} />
              <Route path='/tutorial/css/comments' element={<CssComments />} />
              <Route path='/tutorial/javascript/introduction' element={<JsIntroduction />} />
              <Route path='tutorial/javascript/where-to' element={<JsWhereTo />} />
              <Route path='/tutorial/javascript/output' element={<JsOutput />} />
              <Route path='/tutorial/javascript/statements' element={<JsStatements />} />
              <Route path='/tutorial/javascript/syntax' element={<JsSyntax />} />
            </Routes>
          </BrowserRouter>
        </>
      );
    }
export default App;