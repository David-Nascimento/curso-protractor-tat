const helper = require('protractor-helper')
const Home = require('../page_objects/home')

describe("Given I'm at the home page", function () {
  let homePage

  beforeAll(() => {
    homePage = new Home();
    homePage.visit();
  })

  describe('And there are five tags at the home page', function () {
    it('Then they all render as cards', () => {
      helper.waitForElementVisibility(homePage.tags.cards.last());
      expect(homePage.tags.cards.count()).toBe(5);
    });
  });

  describe('When I look to the first card in isolation', function() {
      it('Then I see an image, a header and an anchor', function() {
          helper.waitForElementVisibility(homePage.tags.imageOfirstCard);
          helper.waitForElementVisibility(homePage.tags.headingOfirstCard);
          helper.waitForElementVisibility(homePage.tags.anchorOfirstCard);
      });
  });
})
