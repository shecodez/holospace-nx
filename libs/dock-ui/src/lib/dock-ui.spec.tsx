import { render } from '@testing-library/react';

import DockUi from './dock-ui';

describe('DockUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DockUi />);
    expect(baseElement).toBeTruthy();
  });
});
