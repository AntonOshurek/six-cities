import Catalog from '../../catalog/catalog';
import PageFooter from '../../default-components/page-footer/page-footer';

function MainPageContent(): JSX.Element {
  return (
    <div className="page-content">
      <Catalog />
      <PageFooter/>
    </div>
  );
}

export default MainPageContent;
