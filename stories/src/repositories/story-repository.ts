export default class StoryRepository {
  constructor(private database: any) {}

  stories = this.database.Stories;

  async create(story: Object) {
    return await this.stories.create(story);
  }

  async getAll() {
    return await this.stories.findAll();
  }

  async findOne(storyId: string) {
    return await this.stories.findOne({ where: { id: storyId } });
  }

  async update(storyId: string, data: any) {
    const updatedStory = await this.stories.update(...data, {
      where: { id: storyId },
    });
    return updatedStory;
  }

  async save(account: Object) {
    await this.database.insertOne(account);
    return account;
  }

  async delete(storyId: string) {
    await this.stories.destroy({ where: { id: storyId } });
  }
}
