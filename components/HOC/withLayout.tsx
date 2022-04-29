import Head from "next/head";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import BreadCrumb from "../MainComponents/BreadCrumb";

export interface ILayoutOptions {}

export type Props = {
  userAgent: string;
};


// tslint:disable-next-line: no-any
const WithLayout = (ComposedComponent: any, title: string, _hideMeta?: boolean) => {
  const withLayout = (props: Props) => {
  

      return (
        <div>
          <Head>
            <title>{title === 'Home' ? 'Send & Popular' : title }</title>
            <meta property="og:title" content={title} />
          </Head>
          <div >
            <Header />
          { title  !== 'Home' && <BreadCrumb title={title} />}
          </div>
          <ComposedComponent {...props} />
          <Footer/>
          </div>
)
  };

  return withLayout;
};

export default WithLayout;
