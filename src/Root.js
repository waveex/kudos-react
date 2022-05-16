import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import { Wrapper } from './Root.styles';
import { theme } from './assets/styles/theme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store';
import Posts from './views/Posts';

function Root() {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Wrapper>
          <Routes>
            <Route exact path="/" element={ <Posts />} />
            </Routes>
          </Wrapper>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default Root;
