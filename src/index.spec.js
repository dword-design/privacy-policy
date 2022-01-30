import self from '.'

const all = {
  contact: true,
  firebaseAnalytics: true,
  firebaseAuthentication: true,
  firebaseCloudFirestore: true,
  firebaseCloudFunctions: true,
  firebaseCloudStorage: true,
  googleAnalytics: true,
  newsletter: true,
  registration: true,
}

export default {
  de() {
    expect(self('de', all)).toMatchSnapshot(this)
  },
  en() {
    expect(self('en', all)).toMatchSnapshot(this)
  },
}
