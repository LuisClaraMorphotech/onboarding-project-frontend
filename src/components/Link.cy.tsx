import { Link } from './Link';

describe('<Link />', () => {

  it('renders', () => {
    // Mount the component and render it using the stubbed context
    cy.mount(
    <Link href="" className="flex justify-center items-center w-full">
      <button className="bg-[#CF3BE6] hover:bg-[#B97EC9]">
        <span className="text-base flex justify-center items-center">Click me</span>
      </button>
    </Link>);
    // Your assertions here
  });
});
