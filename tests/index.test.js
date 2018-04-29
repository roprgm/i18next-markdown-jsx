import i18next from 'i18next'
import ReactDOM from 'react-dom'

import markdownJsx from '../src/index'

describe('markdown jsx', () => {

  const root = document.body.appendChild(document.createElement('div'));
  function render (jsx) { return ReactDOM.render(jsx, root); }

  afterEach(() => ReactDOM.unmountComponentAtNode(root));

  const i18n = i18next
    .use(markdownJsx)
    .init({
      lng: 'en',
      defaultNS: 'ns1',
      resources: {
        en: {
          ns1: {
            key1: '**Test 1**'
          }
        }
      }
    });

  it('correctly translates key', () => {
    expect(i18n.t('key1')).toEqual('**Test 1**')
  })

  it('correctly translates key with markdown', () => {
    render(i18n.t('key1', {postProcess:'markdown-jsx'}))
    expect(root.innerHTML).toMatchSnapshot()
  })
});