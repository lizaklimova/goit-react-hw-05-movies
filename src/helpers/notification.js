import { Notify } from 'notiflix';

const notification = message => {
  Notify.init({
    backOverlay: true,
    info: {
      background: '#1cb114',
    },
  });

  return Notify.info(message);
};

export default notification;
