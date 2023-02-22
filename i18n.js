import I18n from 'react-native-i18n'
import en from 'locale/en.js'
import ru from 'locale/ru.js'

I18n.fallbacks = true;

I18n.translation = {
  en,
  ru
};

export default I18n;