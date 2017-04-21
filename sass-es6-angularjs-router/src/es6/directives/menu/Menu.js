import htmlTemplate from './Menu.html';

const Menu = () => {
  return {
    restrict: 'E',
    replace: true,
    link: (scope, el, attrs) => {
      // do stuff...
    },
    template: htmlTemplate,
  };
}

export default Menu;
