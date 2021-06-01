import { Helmet } from "react-helmet";
import { MainError, Error, ErrorMsg, Link } from "./styles";

export const Page404 = () => {
  return (
    <div class="404">
      <Helmet>
        <title>404</title>
        <meta name="description" content="Page not Found." />
      </Helmet>
      <MainError>
        <Error>404</Error>
        <ErrorMsg>
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place? Let's go <Link to="/">home</Link> and try
          from there.
        </ErrorMsg>
      </MainError>
    </div>
  );
};
