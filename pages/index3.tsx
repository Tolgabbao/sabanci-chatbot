import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Application from '../App';
import reportWebVitals from '../reportWebVitals';
import { Browser } from 'langchain/dist/document_loaders/web/puppeteer';
import { BrowserRouter } from 'react-router-dom';
function Index() {
  useEffect(() => {
    // This code will only be executed in the browser
    const root = document.getElementById('root');
    if (root) {
      ReactDOM.render(
        <React.StrictMode>
          <BrowserRouter>
            <Application />
          </BrowserRouter>
        </React.StrictMode>,
        root
      );
    }

    // Return a cleanup function to remove the rendered component
    return () => {
      if (root) {
        ReactDOM.unmountComponentAtNode(root);
      }
    };
  }, []);

  // Return an empty div to be used as a placeholder for the client-side rendering
  return <div id="root" />;
}
reportWebVitals();

// Export the `Index` component for server-side rendering.

export default Index;
