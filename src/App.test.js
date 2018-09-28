import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Toolbar from './components/Toolbar'
import MessageList from './containers/MessageList'

describe('App', () => {
  it('renders with all required elements', () => {
    const app = shallow(<App />)

    expect(app.find(Toolbar)).toHaveLength(1);
    expect(app.find(MessageList)).toHaveLength(1);
  });


});


