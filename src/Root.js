import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import { StyledWrapper } from './Root.styles';
import { theme } from './assets/styles/theme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store';
import HomeView from './views/HomeView';

function Root() {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <StyledWrapper>
          <Routes>
            <Route exact path="/" element={ <HomeView />} />
            </Routes>
          </StyledWrapper>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default Root;
