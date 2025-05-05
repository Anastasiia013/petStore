import { useDispatch, useSelector } from 'react-redux'
import { selectIsModalOpen } from '../../redux/modal/modal_selectors';
import { toggleModal } from '../../redux/modal/modalSlice';

import Navigation from '../../Navigation'
import Header from '../../layouts/Header/Header'
import Footer from '../../layouts/Footer/Footer'
import SuccessModal from '../SuccessModal/SuccessModal'

function App() {
  const isModalOpen = useSelector(selectIsModalOpen);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Navigation />
      <Footer />

      <SuccessModal isOpen={isModalOpen} onClose={() => dispatch(toggleModal(false))} />
    </>
  )
}

export default App;