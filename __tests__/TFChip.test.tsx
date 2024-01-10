import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TFChip from '../../TFChip/TFChip';

describe('TFChip Component', () => {
  test('renders TFChip component with default props', () => {
    render(<TFChip value="Completed" name="status" />);
    const chipElement = screen.getByText('Completed');
    expect(chipElement).toBeInTheDocument();
  });

  test('renders TFChip component with options and opens modal on click', () => {
    const options = ['Option1', 'Option2', 'Option3'];
    render(<TFChip value="Completed" options={options} onChange={jest.fn()} name="status" />);
    const chipElement = screen.getByText('Completed');
    fireEvent.click(chipElement);
    const modalElement = screen.getByText('Option1');
    expect(modalElement).toBeInTheDocument();
  });

  test('calls onChange handler when an option is selected from modal', () => {
    const onChangeMock = jest.fn();
    const options = ['Option1', 'Option2', 'Option3'];
    render(<TFChip value="Completed" options={options} onChange={onChangeMock} name="status" />);
    const chipElement = screen.getByText('Completed');
    fireEvent.click(chipElement);
    const optionElement = screen.getByText('Option1');
    fireEvent.click(optionElement);
    expect(onChangeMock).toHaveBeenCalledWith('status', 'Option1');
  });

  test('closes modal when clicking outside the chip or modal', () => {
    const options = ['Option1', 'Option2', 'Option3'];
    render(<TFChip value="Completed" options={options} onChange={jest.fn()} name="status" />);
    const chipElement = screen.getByText('Completed');
    fireEvent.click(chipElement);
    const modalElement = screen.getByText('Option1');
    fireEvent.mouseDown(document.body);
    expect(modalElement).not.toBeInTheDocument();
  });

  // Add more test cases based on your component's behavior

});
