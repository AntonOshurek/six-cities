import Catalog from '../catalog/catalog';
import PageFooter from '../page-footer/page-footer';

function PageContent(): JSX.Element {
  return (
    <div className="page-content">
      <Catalog/>
      <PageFooter/>
    </div>
  );
}

export default PageContent;
