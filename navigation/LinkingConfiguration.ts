/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabBenvenuto: {
            screens: {
              TabBenvenutoScreen: 'benvenuto',
            },
          },
          TabLeggi: {
            screens: {
              TabLeggiScreen: 'leggi',
              NotizieScreen: 'notizie'
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
