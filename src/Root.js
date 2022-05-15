import PostList from './components/PostsList/PostList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import { Wrapper } from './Root.styles';
import { theme } from './assets/styles/theme';

function Root() {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
    <div className="Root">
      <PostList />
    </div>
    </Wrapper>
    </ThemeProvider>
  );
}

export default Root;
