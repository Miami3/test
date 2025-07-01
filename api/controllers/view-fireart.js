const { faker } = require('@faker-js/faker');
// Factory added to simulate DB call
class StoryFactory {
  constructor() {
    faker.locale = 'en';
  }

  generateStory(index) {
    return {
      title: faker.lorem.words(faker.number.int({min: 3, max: 5})),
      preview: faker.internet.url(),
      publish_date: faker.date.between({ from: '2023-01-01T00:00:00.000Z', to: '2025-01-01T00:00:00.000Z' }).toISOString().split('T')[0],
      author: {
        username: faker.internet.username().toLowerCase(),
        avatar: faker.image.avatar()
      }
    };
  }

  generateStories(count) {
    const stories = [];
    for (let i = 0; i < count; i++) {
      stories.push(this.generateStory(i));
    }
    return stories;
  }
}
module.exports = {


  friendlyName: 'View fireart',


  description: 'Display "Fireart" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/fireart'
    }

  },


  fn: async function () {
    // Simulating DB request and fake response data instead
    const storyFactory = new StoryFactory();
    const stories = storyFactory.generateStories(29);
    return {
      stories,
    };

  }


};


