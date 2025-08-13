import './App.css';
import ScrollToTopAndBottom from './components/scroll-to-top-and-bottom';
import ScrollToSection from './components/scroll-to-top-and-bottom/ScrollToSection';
// import QRCodeGenerator from './components/qr-code-generator';
// import Accordion from './components/accordion/Accordion';
// import ImageSlider from './components/image-slider/ImageSlider';
// import LoadMoreData from './components/load-more-data/LoadMoreData';
// import TreeView from './components/tree-view';
// import menus from './components/tree-view/data';
// import RandomColor from './components/random-color/RandomColor';
// import StarRating from './components/star-rating/StarRating';
// import LightDarkMode from './components/light-dark-mode';
// import ScrollIndicator from './components/scroll-indicator';
// import ModalTest from './components/custom-model-popup/modal-test';
// import GitHubProfileFinder from './components/github-resource-finder';
// import SearchAutoComplete from './components/search-auto-complete';
import TicTacToe from './components/tic-tac-toe/TicTacToe';

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      {/* <Accordion /> */}

      {/* Random color component */}
      {/* <RandomColor /> */}

      {/* Star Rating Component */}
      {/* <StarRating  noOfStars={10}/> */}

      {/* Image slider component */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} /> */}

      {/* Load more data component */}
      {/* <LoadMoreData /> */}

      {/* Tree view components / menu UI component / recursive navigation component  */}
      {/* <TreeView menus={menus} /> */}

      {/* QR code generator component */}
      {/* <QRCodeGenerator /> */}

      {/* Light-Dark mode chager component */}
      {/* <LightDarkMode /> */}

      {/* Scroll indicator component */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}

      {/* Custom Modal Popup */}
      {/* <ModalTest /> */}

      {/* Github profile finder */}
      {/* <GitHubProfileFinder /> */}

      {/* Search AutoComplete */}
      {/* <SearchAutoComplete /> */}

      {/* Tic tac toe */}
      {/* <TicTacToe /> */}

      {/* Scroll to Top and Bottom */}
      {/* <ScrollToTopAndBottom /> */}

      {/* Scroll to particular section */}
      <ScrollToSection />
    </div>
  );
}

export default App;
