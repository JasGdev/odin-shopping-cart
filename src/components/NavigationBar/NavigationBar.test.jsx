import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import NavigationBar from './NavigationBar';


describe('NavigationBar Componenet', () => {
  it('renders headline', () => {
    render(<NavigationBar/>);

    screen.debug();

    // check if App components renders headline
  });
});