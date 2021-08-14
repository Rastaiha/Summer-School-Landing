import createStore from './createStore';

const persistedState = localStorage.getItem('rastaState')
  ? JSON.parse(localStorage.getItem('rastaState'))
  : {};

const reduxStore = createStore(persistedState);

reduxStore.subscribe(() => {
  const state = reduxStore.getState();
  localStorage.setItem(
    'rastaState',
    JSON.stringify({
      Intl: state.Intl,
    })
  );
});

export default reduxStore;
